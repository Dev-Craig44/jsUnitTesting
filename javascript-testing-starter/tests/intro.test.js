import { describe, expect, it } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    const a = 2;
    const b = 1;
    const result = max(a, b);
    expect(result).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    const a = 1;
    const b = 2;
    const result = max(a, b);
    expect(result).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    const a = 1;
    const b = 1;
    const result = max(a, b);
    expect(result).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return fizzBuzz if n is divisable by 3, and  5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Buzz if n is divisable by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return Fizz if n is divisable by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  it("should return n if n is not divisable 3, or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

// 1.) create new test suite
describe("calculateAverage", () => {
  // 2.) create failing test case for recieveing an empty array
  it("should return NaN if given an empty array", () => {
    // 4.) give `NaN` to toBe(), call the function, make assertions
    expect(calculateAverage([])).toBe(NaN);
  });

  //   6.) duplicate previous failing test case and modify for calculating a single element in a array
  it("should calculate the average of an array with a single element", () => {
    // 7.) give `1` to toBe(), call the function, make assertions for it to `1`
    expect(calculateAverage(1)).toBe(1);
  });
});
