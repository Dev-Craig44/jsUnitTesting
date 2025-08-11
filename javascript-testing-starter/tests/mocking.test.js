import { describe, expect, it, vi } from "vitest";
import { trackPageView } from "../src/libs/analytics";
import { getExchangeRate } from "../src/libs/currency";
import { getShippingQuote } from "../src/libs/shipping";
import {
  getPriceInCurrency,
  getShippingInfo,
  renderPage,
} from "../src/mocking";

vi.mock("../src/libs/currency");
vi.mock("../src/libs/shipping");
// 8.) Mock the anylytics functions
vi.mock("../src/libs/analytics");

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

// 1.) Create a test suite for renderPage()
describe("renderPage", () => {
  // 2.) Make 1st test case to return the right content
  it("should return correct content", async () => {
    // 3.) Call the function and make sure you await it because it returns a promise.
    const result = await renderPage();

    // 4.) Make assertion that the content. We don't want to match the full markup, because the markup can change in the future. So look for special key words.
    expect(result).toMatch(/content/i);
  });

  // 5.) Make 2nd test case that it should call the analytics
  it("should call analytics", async () => {
    // 6.) call the function
    await renderPage();

    // 7.) Make assertion that the analytics function was called. Note where the function that we want to mock is located.
    expect(trackPageView).toHaveBeenLastCalledWith("/home");
    // 9.) Need the exact argument becasue we want to make sure the correct path is sent
  });
});
