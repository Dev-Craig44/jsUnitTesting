import { describe, expect, it } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    // 1.) Capture the results from the functions we want to test
    const result = "The requested file was not found";

    // 2.) Make a loose assertion - No matter what the result is this test will pass.
    expect(result).toBeDefined();
    // 3.) Make a tight assertion - One little change to production code can break this.
    expect(result).toBe("The requested file was not found");
    // 4.) Make better assertion - In this case you would use a keyword or phase
    expect(result).toMatch(/not found/i);
  });
});
