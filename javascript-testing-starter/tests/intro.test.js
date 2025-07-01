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

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  //   Write new test case for averaging three elements
  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
