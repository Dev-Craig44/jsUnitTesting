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
  // 1.) Create parameterized test
  it.each([
    // We don't need min and max params because they are the same for all the tests
    // 2.) Create data set using the $scenario variable
    { scenario: "price < min", price: -10, result: false },
    { scenario: "price = min", price: 0, result: true },
    { scenario: "price between min and max", price: 50, result: true },
    { scenario: "price = max", price: 0, result: true },
    { scenario: "price > min", price: 200, result: false },
  ])("should return $result when $scenario", ({ price, result }) => {
    expect(isPriceInRange(price, 0, 100)).toBe(result);
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
  // 1.) Create Parameterized Test
  it.each([
    // This function takes an array of objects
    // 2.) Create a data set
    { age: 15, country: "US", result: false },
    // 3.) Create more data sets
    { age: 16, country: "US", result: true },
    { age: 17, country: "US", result: true },
    // 4.) Create data set for the UK
    { age: 16, country: "UK", result: false },
    { age: 17, country: "UK", result: true },
    { age: 18, country: "UK", result: true },
    // 5.) Pass in the name of the test and the test function that gives you a object you can destructure into age, country, and result
  ])("Should return $result for $age, $country", ({ age, country, result }) => {
    expect(canDrive(age, country)).toBe(result);
  });
});
