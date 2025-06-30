// 1.) use "iv" to bring in your vitest tools
import { describe, expect, it } from "vitest";
import { max } from "../src/intro";

// 2.) use "d" to create a test suite
describe("max", () => {
  // 3.) define our test cases. use `i`.
  it("should return the first argument if it is greater", () => {
    // 4.) arrange
    const a = 2;
    const b = 1;

    // make sure to import the function you're testing
    // 5.) act
    const result = max(a, b);

    // we have a bunch of 'to' methods called `matchers`
    // 6.) assert
    expect(result).toBe(2);
  });

  // 7.) duplicate test cases and modify
  it("should return the second argument if it is greater", () => {
    // 8.) arrange
    const a = 1;
    const b = 2;

    // make sure to import the function you're testing
    // 9.) act
    const result = max(a, b);

    // we have a bunch of 'to' methods called `matchers`
    // 10.) assert
    expect(result).toBe(2);
  });

  // 11.) duplicate test cases and modify
  it("should return the first argument if arguments are equal", () => {
    // 12.) arrange
    const a = 1;
    const b = 1;

    // make sure to import the function you're testing
    // 13.) act
    const result = max(a, b);

    // we have a bunch of 'to' methods called `matchers`
    // 14.) assert
    expect(result).toBe(1);
  });
});
