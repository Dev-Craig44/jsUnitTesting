import { describe, expect, it } from "vitest";
import { getCoupons } from "../src/core";

describe("test suite", () => {
  it("test case", () => {
    const result = { name: "Craig" };
    // Make a tight assertion - If you add a prop this will break
    expect(result).toEqual({ name: "Craig" });
    // Make more general assertion - Check for the presence of a subset of properties in this object
    expect(result).toMatchObject({ name: "Craig" });
    // Optional assertion - Check for the presence of the name prop. Who cares about the actual name.
    expect(result).toHaveProperty("name");
    // Make assertion for it to be a string
    expect(typeof result.name).toBe("string");
  });
});

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
});
