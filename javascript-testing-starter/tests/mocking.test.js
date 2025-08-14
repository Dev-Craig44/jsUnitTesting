import { describe, expect, it, vi } from "vitest";
import { trackPageView } from "../src/libs/analytics";
import { getExchangeRate } from "../src/libs/currency";
import { charge } from "../src/libs/payment";
import { getShippingQuote } from "../src/libs/shipping";
import {
  getPriceInCurrency,
  getShippingInfo,
  renderPage,
  submitOrder,
} from "../src/mocking";

vi.mock("../src/libs/currency");
vi.mock("../src/libs/shipping");
vi.mock("../src/libs/analytics");
// 3.) Mock payment module
vi.mock("../src/libs/payment.js");

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

// 1.) Make test suite for submitOrder
describe("submitOrder", () => {
  // 2.) Make test case for customer to be charged
  // 4.) Create 1st parameter [order]
  const order = { totalAmount: 10 };
  // 5.) Create 2nd parameter [creditCard]
  const creditCard = { creditCardNumber: "1234" };
  //  I moved these variables to the top of the suite so I can use them in multiple tests

  it("should charge the customer", async () => {
    // 8.) Mock charge and return success status
    vi.mocked(charge).mockResolvedValue({ status: "success" });
    // 6.) Call sumbitOrder w/ params and await it
    await submitOrder(order, creditCard);

    // 7.) assert the charge was called w/ creditCArd and order.totalAmount
    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  // 9.) Make test case for successful payment
  it("should return success when payment is sucessful", async () => {
    // 10.) Mock charge and return success status
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    // 11.) call submitOrder w/ dummy params and await it
    const result = await submitOrder(order, creditCard);

    // 12.) assert result to equal (because we are using two objects)
    expect(result).toEqual({ success: true });
  });

  // 13.) Make test case for failed payment
  it("should return failed when payment is NOT sucessful", async () => {
    // 14.) Mock charge and return failed status
    vi.mocked(charge).mockResolvedValue({ status: "failed" });

    // 15.) call submitOrder w/ dummy params and await it
    const result = await submitOrder(order, creditCard);

    // 16.) assert result to equal (because we are using two objects)
    expect(result).toEqual({ success: false, error: "payment_error" });
  });
});
