import { describe, expect, it, vi } from "vitest";

describe("test suite", () => {
  it("test case", () => {
    const sendMessage = vi.fn();

    sendMessage.getMockImplementation((message) => console.log(message));

    const result = sendMessage("Yo wass good?");

    expect(sendMessage).toHaveBeenCalled();
    expect(sendMessage).toHaveBeenCalledWith("Yo wass good?");
  });
});
