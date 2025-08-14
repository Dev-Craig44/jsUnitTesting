import { describe, expect, it, vi } from "vitest";
import { trackPageView } from "../src/libs/analytics";
import { getExchangeRate } from "../src/libs/currency";
import { sendEmail } from "../src/libs/email";
import { charge } from "../src/libs/payment";
import { getShippingQuote } from "../src/libs/shipping";
import {
  getPriceInCurrency,
  getShippingInfo,
  renderPage,
  signUp,
  submitOrder,
} from "../src/mocking";

vi.mock("../src/libs/currency");
vi.mock("../src/libs/shipping");
vi.mock("../src/libs/analytics");
vi.mock("../src/libs/payment");
// 1.) Give the mock method a second arugment which is a factory function (If we don't provide this, vitest will replace every function with vi.fn())
vi.mock("../src/libs/email", async (importOriginal) => {
  // 2.) Use the importOrginal function to import the original module
  const originalModule = await importOriginal();
  // 3.) Return a module that has all the orginal functions, but we want to replace on of them.
  return {
    // 4.) Use the spread operator to make a copy of all the original functions
    ...originalModule,
    // 5.) Replace the sendEmail() with a mock function
    sendEmail: vi.fn(),
  };
});

describe("test suite", () => {
  it("test case", () => {
    const sendText = vi.fn();
    sendText.mockReturnValue("ok");
    const result = sendText("message");

    expect(sendText).toHaveBeenCalledWith("message");

    expect(result).toBe("ok");
  });
});

describe("getPriceInCurrency", () => {
  it("should return price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, "AUD");

    expect(price).toBe(15);
  });
});

describe("getShippingInfo", () => {
  it("should return the shipping info if quote can be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue({
      cost: 40,
      estimatedDays: 5,
    });

    const quote = getShippingInfo("New Jersey");

    expect(quote).toMatch("$40");
    expect(quote).toMatch(/5 Days/i);
    expect(quote).toMatch(/shipping cost: \$40 \(5 days\)/i);
  });
  it("should return shipping unavailble if quote cannot be fetched", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null);
    const result = getShippingInfo();
    expect(result).toMatch(/unavailable/i);
  });
});

describe("renderPage", () => {
  it("should return correct content", async () => {
    const result = await renderPage();

    expect(result).toMatch(/content/i);
  });

  it("should call analytics", async () => {
    await renderPage();

    expect(trackPageView).toHaveBeenLastCalledWith("/home");
  });
});

describe("submitOrder", () => {
  const order = { totalAmount: 10 };
  const creditCard = { creditCardNumber: "1234" };

  it("should charge the customer", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });
    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it("should return success when payment is sucessful", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: true });
  });

  it("should return failed when payment is NOT sucessful", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "failed" });

    const result = await submitOrder(order, creditCard);

    expect(result).toEqual({ success: false, error: "payment_error" });
  });
});

// 6.) Create a new test suite for signUp()
describe("signUp", () => {
  // 14.) Move email variable to the top of the suite so all test cases can use it
  const email = "bullshit@gmail.com";
  // 7.) Create test case for non-valid email
  it("should return false if email is not valid", async () => {
    // 8.) Create invalid email
    const invalidEmail = "bullshit";

    // 9.) Call signUp w/ invalid email
    const result = await signUp(invalidEmail);

    // 10.) Assert that the result is false
    expect(result).toBeFalsy();
  });

  // 11.) Duplicate last test case but w/ a valid email
  it("should return true if email is valid", async () => {
    const result = await signUp(email);

    expect(result).toBe(true);
  });

  // 12.) Duplicate the last test case but now we want to assert that the welcome email was sent
  it("should send the welcome email if email is valid", async () => {
    const result = await signUp(email);
    // 13.) Change result to sendEmail (interaction testing) and assert that it was called. We can't use to haveBeenCalledWith() because the 2nd arugment (the subject line) can change.
    // Note: Go back to the mocking.js file and look at the arugments for sendEmail(). 1st is email, 2nd is the subject line
    expect(sendEmail).toHaveBeenCalled();
    // 15.) Use the calls method on the mockedfunction to get the arguments of the 1st call and store it in a [args] variable
    const args = vi.mocked(sendEmail).mock.calls[0];
    // 16.) Assert that the 1st element in the args array to be the [email] variable because the email isn't going to change.
    expect(args[0]).toBe(email);
    // 17.) For the 2nd element in the args array we're going to use a regex to assert that it contains "welcome"
    expect(args[1]).toMatch(/welcome/i);
  });
});
