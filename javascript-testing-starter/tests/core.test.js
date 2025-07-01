import { describe, expect, it } from "vitest";
import { getCoupons } from "../src/core";

// getCoupons(): objects[]
// assert that the array is not empty
// assert the objects in this array has two props {code: string, discount: number(>0 <1)}

// 1.) create test suite
describe("getCoupons", () => {
  // 2.) create test case for array to have coupons
  it("should return an array of coupons", () => {
    // 3.) capture coupons
    const coupons = getCoupons();
    // 5.) Use Array.isArray to check if result is an array.
    expect(Array.isArray(coupons)).toBe(true);
    // 4.) Make assertion for array with coupons
    expect(coupons.length).toBeGreaterThan(0);
  });

  //   6.) Make test case for each coupon in the array having a [code]
  it("should return an array with valid coupon codes", () => {
    // 7.) capture the coupons
    const coupons = getCoupons();
    // 8.) Make sure each coupon has a code prop
    coupons.forEach((coupon) => {
      // 9.) Make assertion on current coupon to have a code prop
      expect(coupon).toHaveProperty("code");
      //   10.) Make assertion that the type is a `string`
      expect(typeof coupon.code).toBe("string");
      //   11.) Make assertion that this isn't an empty string
      expect(coupon.code).toBeTruthy();
    });
  });
  //   12.) Make test case for valid discounts
  it("should return an array with valid discounts", () => {
    // 13.) capture coupons
    const coupons = getCoupons();
    // 14.) iterate over the coupons
    coupons.forEach((coupon) => {
      // 15.) Make assertion for coupon to have the discount prop
      expect(coupon).toHaveProperty("discount");
      //   16.) Make assertion for the discount to be a number
      expect(typeof coupon.discount).toBe("number");
      // 17.) Make assertion for the discount to be > 0 and < 1
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});
