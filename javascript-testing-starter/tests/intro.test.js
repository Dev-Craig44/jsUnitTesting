import { describe, expect, it } from "vitest";
import { fizzBuzz, max } from "../src/intro";

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

// 1.) duplicate that max function test suite and modify it for the fizzBuzz()
describe("fizzBuzz", () => {
  it("should return fizzBuzz if n is divisable by 3, and  5", () => {
    const n = 15;

    const result = fizzBuzz(n);

    expect(result).toBe("FizzBuzz");
  });

  // 2.) duplicate last test case and modify for 2nd execution path
  it("should return Buzz if n is divisable by 5", () => {
    const n = 10;

    const result = fizzBuzz(n);

    expect(result).toBe("Buzz");
  });

  // 3.) duplicate last test case and modify for 3rd execution path
  it("should return Fizz if n is divisable by 3", () => {
    const n = 6;

    const result = fizzBuzz(n);

    expect(result).toBe("Fizz");
  });

  // 4.) duplicate last test case and modify for 4th execution path
  it("should return n if n is not divisable 3, or 5", () => {
    const n = 7;

    const result = fizzBuzz(n);

    expect(result).toBe(n.toString());
  });
});
