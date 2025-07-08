import { describe, expect, it } from "vitest";
import { calculateDiscount, getCoupons } from "../src/core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

// 1.) Create test suite
describe("calculateDiscount", () => {
  // 2.) Create Positive Test case
  it("should return dicounted price if given valid code", () => {
    // 4.) Make assertion to check dicounted price
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  // 5.) Write negative test
  it("should handle non-numeric price", () => {
    // When checking a `string` you should use the {toMatch} method with a reg exp
    // 6.) Make assertion to match the error message
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i);
  });

  // 7.) Write negative test
  it("should handle negative price", () => {
    // 8.) Make assertion to match the error message
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });

  // 9.) Write negative test
  it("should handle non-string discount code", () => {
    // 10.) Make assertion to match the error message
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  // 11.) Write negative test
  it("should handle invalid discount code", () => {
    // 12.) Make assertion to match the error message
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});
