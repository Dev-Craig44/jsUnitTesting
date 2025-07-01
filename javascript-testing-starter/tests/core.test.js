import { describe, expect, it } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const result = [1, 2, 3];
    // 1.) Make loose assertion - This would pass even with a `[]`
    expect(result).toBeDefined();
    // 2.) Make tight assertion - One single change in the order would break this.
    expect(result).toEqual([1, 2, 3]);
    // 3.) Make better assertion - This one doesn't depend on the order of things [3, 2, 1]
    expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
    // 4.) Optional assertion - Instead of checking for the presence of certain elements you can check for the amount. Sometimes this could be too specific in the case of somebody adding to the array.
    expect(result).toHaveLength(3);
    // 5.) Refactor optional assertion
    expect(result.length).toBeGreaterThan(0);
  });
});
