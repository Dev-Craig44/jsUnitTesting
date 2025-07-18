// 1.) download essential function with `iv`
// 2.) also download the `vi` object from vitest
import { describe, it, vi } from "vitest";

// 3.) Create a test suite
describe("test suite", () => {
  // 4.) Create a test case
  it("test case", () => {
    // 5.) Return a mock function
    const greet = vi.fn();
    // Off rip, this is an empty function, but if we program it, before we call it, and make it return a value
    // 6.) give greet() a return value using the {mockReturnValue} method
    greet.mockResolvedValue("Hello");

    // 7.) Call the function, which returns a promise, use the {then} method to handle the resolved value
    greet().then((result) => {
      // 8.) Log the result to the console
      console.log(result);
    });
  });
});
