import { describe, expect, it } from "vitest";
import {
  calculateDiscount,
  canDrive,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  validateUserInput,
} from "../src/core";

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

describe("calculateDiscount", () => {
  it("should return dicounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  // 2.) make positive test case
  it("should return success when valid input entered", () => {
    // 3.) Make assertion for result to match content
    expect(validateUserInput(`Craig`, 37)).toMatch(/success/i);
  });

  // 4.) Write negative test case
  it("should return error if username is not a string", () => {
    // 5.) Make assertion to match invalid
    expect(validateUserInput(12, 37)).toMatch(/invalid/i);
  });

  // 6.) add test case for invalid age
  it("should return error age is less than 18", () => {
    // 7.) add assertion to match invalid
    expect(validateUserInput("Craig", 12)).toMatch(/invalid/i);
  });

  // 8.) It should return error if username is less than 3 characters
  it("should return error if username is less than 3 characters", () => {
    expect(validateUserInput("ca", 18)).toMatch(/invalid/i);
  });

  // 9.) It should return error if username is longer than 250 characters
  it("should return error if username is less than 3 characters", () => {
    expect(validateUserInput("c".repeat(251), 18)).toMatch(/invalid/i);
  });

  // 11.) make test case for age validity
  it("should return an error if age is not a number", () => {
    expect(validateUserInput("Craig", "")).toMatch(/invalid/i);
  });

  // 12.) Make test case for age over 100
  it("should return error if age is over 100", () => {
    expect(validateUserInput("Craig", 101)).toMatch(/invalid/i);
  });

  // 14.) Write test case for is username and age are invalid
  it("should return an error if both username and age are invalid", () => {
    // 15.) Make assertion for two errors expected
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isPriceInRange", () => {
  it("should return false when the price is outside the range", () => {
    expect(isPriceInRange(-10, 0, 100)).toBe(false);
    expect(isPriceInRange(-200, 0, 100)).toBe(false);
  });

  it("should return true when the price is equal to the min or the max", () => {
    expect(isPriceInRange(0, 0, 100)).toBe(true);
    expect(isPriceInRange(100, 0, 100)).toBe(true);
  });

  it("should return true when the price is within the min or max limits", () => {
    expect(isPriceInRange(1, 0, 100)).toBe(true);
    expect(isPriceInRange(99, 0, 100)).toBe(true);
  });
});

describe("isValidUsername", () => {
  // We should use variables just incase the company wants to change the limits you can easily make an adjustment here that will carry out through out the test suite
  const minLength = 5;
  const maxLength = 15;

  it("should return false if username is too short", () => {
    expect(isValidUsername("a".repeat(minLength - 1))).toBe(false);
  });
  it("should return false if username is too long", () => {
    expect(isValidUsername("a".repeat(maxLength + 1))).toBe(false);
  });

  it("should return true if username is at the min and max length", () => {
    expect(isValidUsername("a".repeat(minLength))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength))).toBe(true);
  });

  it("should return true if username is within the range", () => {
    expect(isValidUsername("a".repeat(minLength + 1))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength - 1))).toBe(true);
  });

  it("should return false for invalid input types", () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(1)).toBe(false);
  });
});

describe("canDrive", () => {
  // 1.) Make test case for invalid country code
  it("should return false for invalid country code", () => {
    expect(canDrive(20, "FR")).toMatch(/invalid/i);
  });

  // 2.) Make test case for underage in US
  it("should return false for under age in US", () => {
    expect(canDrive(15, "US")).toBe(false);
  });
  // 3.) Make test for eligible age in US
  it("should return true for age eligible in US", () => {
    expect(canDrive(16, "US")).toBe(true);
  });
  // 4.) Make test for underage in UK
  it("should return false for under age in UK", () => {
    expect(canDrive(16, "UK")).toBe(false);
  });
  // 5.) Make test for eligible age in UK
  it("should return true for age eligible in UK", () => {
    expect(canDrive(17, "UK")).toBe(true);
  });

  // We wouldn't need to validate the input type cause it should be handled at the boundary
});
