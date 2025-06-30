import { describe, expect, it } from "vitest";
import { max } from "../src/intro";

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
