import { describe, expect, it, vi } from "vitest";
import { getExchangeRate } from "../src/libs/currency";
import { getShippingQuote } from "../src/libs/shipping";
import { getPriceInCurrency, getShippingInfo } from "../src/mocking";

vi.mock("../src/libs/currency");
// 4.) Mock the shippingQuote module
vi.mock("../src/libs/shipping");

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

// 1.) Create a test for getShippingInfo()
describe("getShippingInfo", () => {
  // 2.) Create a test case for it to return the shipping cost and ETA
  it("should return the shipping cost and the ETA", () => {
    // 5.) Call the mocked getShippingQuote function
    vi.mocked(getShippingQuote).mockReturnValue({
      cost: 40,
      estimatedDays: 5,
    });

    // 3.) Call the functions and store result in [quote]
    const quote = getShippingInfo("New Jersey");

    // 6.) make assertion that the quote is correct
    expect(quote).toMatch("/shipping cost 40 days 5/i");
  });
});
