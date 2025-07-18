// 1.) download essential function with `iv`
// 2.) also download the `vi` object from vitest
import { describe, expect, it, vi } from "vitest";

// 3.) Create a test suite
describe("test suite", () => {
  // 4.) Create a test case
  it("test case", () => {
    // 5.) Return a mock function
    const greet = vi.fn();
    // 6.) Add a body to our mock function using the {mockImplementation} method
    greet.mockImplementation((name) => "Hello " + name);

    // 7.) Call the function, and pass it a name, store it in [result]
    const result = greet("Craig");
    // 8.) Make assertion for this function to be called with `Craig`
    expect(greet).toHaveBeenCalledWith("Craig");
  });
});
