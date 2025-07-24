import { describe, expect, it, vi } from "vitest";
import { getExchangeRate } from "../src/libs/currency";
import { getPriceInCurrency } from "../src/mocking";

// This line is executed first, to repace the origina exported functions, then the imported functions are used (Hoisting)
// 4.) because we need to mock the getExchangeRate(), we should mock the module using vi.mock
vi.mock("../src/libs/currency");

describe("test suite", () => {
  it("test case", () => {
    const sendText = vi.fn();
    sendText.mockReturnValue("ok");
    const result = sendText("message");

    expect(sendText).toHaveBeenCalledWith("message");

    expect(result).toBe("ok");
  });
});

// 1.) create a test suite for getPriceInCurrency
describe("getPriceInCurrency", () => {
  // 2.) create a testr case for the price to be return in the target currency
  it("should return price in target currency", () => {
    // if we call this function, and use `.` we wouldn't see the methods like {mock}, we would need to call vi.mocked and pass it a reference to the function we want to mock
    // 5.) here we need to call the getExchangeRage()
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    // 3.) call the function with a price and a currency and put it into [price]
    const price = getPriceInCurrency(10, "AUD");

    // 6.) make an assertion that the price is correct
    expect(price).toBe(15);
  });
});
