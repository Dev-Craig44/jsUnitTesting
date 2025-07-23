import { describe, expect, it, vi } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const sendText = vi.fn();
    // 1.) Program this to return a particular result
    sendText.mockReturnValue("ok");
    // 2.) Call this function
    const result = sendText("message");

    // 3.) Assert that the function is called w/ the message
    expect(sendText).toHaveBeenCalledWith("message");

    // 4.) Assert that the result is 'ok'
    expect(result).toBe("ok");
  });
});
