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
vi.mock("../src/libs/email", async (importOriginal) => {
  const originalModule = await importOriginal();
  return {
    ...originalModule,
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

describe("signUp", () => {
  const email = "bullshit@gmail.com";
  it("should return false if email is not valid", async () => {
    const invalidEmail = "bullshit";

    const result = await signUp(invalidEmail);

    expect(result).toBeFalsy();
  });

  it("should return true if email is valid", async () => {
    const result = await signUp(email);

    expect(result).toBe(true);
  });

  it("should send the welcome email if email is valid", async () => {
    const result = await signUp(email);

    expect(sendEmail).toHaveBeenCalled();
    const args = vi.mocked(sendEmail).mock.calls[0];
    expect(args[0]).toBe(email);
    expect(args[1]).toMatch(/welcome/i);
  });
});
