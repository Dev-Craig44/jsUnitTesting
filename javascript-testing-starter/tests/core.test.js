import { describe, expect, it } from "vitest";

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
