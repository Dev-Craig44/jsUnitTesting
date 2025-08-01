import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";
import {
  calculateDiscount,
  canDrive,
  fetchData,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  Stack,
  validateUserInput,
} from "../src/core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

describe("calculateDiscount", () => {
  it("should return dicounted price if given valid code", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(10, "SAVE20")).toBe(8);
  });

  it("should handle non-numeric price", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle negative price", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calculateDiscount(10, "INVALID")).toBe(10);
  });
});

describe("validateUserInput", () => {
  it("should return success when valid input entered", () => {
    expect(validateUserInput(`Craig`, 37)).toMatch(/success/i);
  });

  it("should return error if username is not a string", () => {
    expect(validateUserInput(12, 37)).toMatch(/invalid/i);
  });

  it("should return error age is less than 18", () => {
    expect(validateUserInput("Craig", 12)).toMatch(/invalid/i);
  });

  it("should return error if username is less than 3 characters", () => {
    expect(validateUserInput("ca", 18)).toMatch(/invalid/i);
  });

  it("should return error if username is less than 3 characters", () => {
    expect(validateUserInput("c".repeat(251), 18)).toMatch(/invalid/i);
  });

  it("should return an error if age is not a number", () => {
    expect(validateUserInput("Craig", "")).toMatch(/invalid/i);
  });

  it("should return error if age is over 100", () => {
    expect(validateUserInput("Craig", 101)).toMatch(/invalid/i);
  });

  it("should return an error if both username and age are invalid", () => {
    expect(validateUserInput("", 0)).toMatch(/invalid username/i);
    expect(validateUserInput("", 0)).toMatch(/invalid age/i);
  });
});

describe("isPriceInRange", () => {
  it.each([
    { scenario: "price < min", price: -10, result: false },
    { scenario: "price = min", price: 0, result: true },
    { scenario: "price between min and max", price: 50, result: true },
    { scenario: "price = max", price: 0, result: true },
    { scenario: "price > min", price: 200, result: false },
  ])("should return $result when $scenario", ({ price, result }) => {
    expect(isPriceInRange(price, 0, 100)).toBe(result);
  });
});

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;

  it("should return false if username is too short", () => {
    expect(isValidUsername("a".repeat(minLength - 1))).toBe(false);
  });
  it("should return false if username is too long", () => {
    expect(isValidUsername("a".repeat(maxLength + 1))).toBe(false);
  });

  it("should return true if username is at the min and max length", () => {
    expect(isValidUsername("a".repeat(minLength))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength))).toBe(true);
  });

  it("should return true if username is within the range", () => {
    expect(isValidUsername("a".repeat(minLength + 1))).toBe(true);
    expect(isValidUsername("a".repeat(maxLength - 1))).toBe(true);
  });

  it("should return false for invalid input types", () => {
    expect(isValidUsername(null)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
    expect(isValidUsername(1)).toBe(false);
  });
});

describe("canDrive", () => {
  it.each([
    { age: 15, country: "US", result: false },
    { age: 16, country: "US", result: true },
    { age: 17, country: "US", result: true },
    { age: 16, country: "UK", result: false },
    { age: 17, country: "UK", result: true },
    { age: 18, country: "UK", result: true },
  ])("Should return $result for $age, $country", ({ age, country, result }) => {
    expect(canDrive(age, country)).toBe(result);
  });
});

describe("fetchData", () => {
  it("should return a promise that will resolve to an array of numbers", async () => {
    // 2.) Label the function async
    // 4.) wrap the results logic in a try/catch block
    try {
      // 1.) Store the results from fetchData() using await
      const result = await fetchData();
    } catch (error) {
      // 5.) Check to see if the error message has a `reason` property
      expect(error).toHaveProperty("reason");
      //  6.) Check if `reason` has an error message
      expect(error.reason).toMatch(/fail/i);
      // 7.) Make assertion for the error message inside of `reason`
    }
  });
});

describe("test suite", () => {
  // 2.) Write a test that executes before all the tests
  beforeAll(() => {
    console.log("beforeAll called");
  });
  // 1.) Write a test that executes before each test
  beforeEach(() => {
    console.log("beforeEach called");
  });

  afterEach(() => {
    console.log("afterEach called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });
  it("test case 1", () => {});

  it("test case 2", () => {});
});

// 1.) Create test suite for the Stack class
describe("Stack", () => {
  // 14.) Create the stack variable outside of the setup function so all the test can have access
  let stack;
  // 13.) Add the Stack before each test
  beforeEach(() => {
    stack = new Stack();
  });
  // 2.) Add test case for push()
  it("push should add an item to the stack", () => {
    // 4.) Act by pushing 1 to the stack
    stack.push(1);

    // 5.) Assert that the stack should be 1
    expect(stack.size()).toBe(1);
  });

  // 6.) Write test case for pop()
  it("pop should remove and return the top item from the stack", () => {
    // 7.) Arrange by pushing some items to it
    stack.push(1);
    stack.push(2);

    // 8.) Act by popping the top item and store the result in [poppedItem]
    const poppedItem = stack.pop();

    // 9.) Assert that the popped item is 2
    expect(poppedItem).toBe(2);

    // 10.) Assert against the size of the stack
    expect(stack.size()).toBe(1);
  });

  // 11.) Write test case for if the stack is empty
  it("pop should throw an error if stack is empty", () => {
    // This line will always fail because it will throw an error
    // stack.pop();

    // 12.) Make the test pass using expect() and give it a function that will throw an error
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  // 15.) Write test case for peek()
  it("peek should return the item from the stack without removing it", () => {
    // 16.) Arrange stack with some items
    stack.push(1);
    stack.push(2);

    // 17.) Act by calling peek() and storing the result in [peekedItem]
    const peekedItem = stack.peek();

    // 18.) Assert that the peekd item is 2 and the size of the stack should be 2
    expect(peekedItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  // 19.) Write testr case for if you call peek() on an empty stack
  it("peek should throw an error is the stack is empty", () => {
    // 20.) Act by calling the peek() method
    expect(() => {
      stack.peek();
    }).toThrow(/empty/i);
  });

  // 21.) Write a test case for isEmpty() when stack is empty
  it("isEmpty should return true if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  // 22.) Write a test case for isEmpty when stack is not empty
  it("isEmpty should return false if stack is not empty", () => {
    // 23.) Arrange and item in the stack
    stack.push(1);

    //  24.) Assert by calling isEmpty() and checking if it's false
    expect(stack.isEmpty()).toBe(false);
  });
  // 25.) Write a test case for size()

  it("size should return the number of items in the stack", () => {
    // 26.) Arrange some items in the stack
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // 27.) Assert that the size of the stack is 3
    expect(stack.size()).toBe(3);
  });

  // 28.) Write a test case for the clear() method
  it("clear should remove all items from the array", () => {
    // 29.) Arrange some items in the stack
    stack.push(1);
    stack.push(2);
    stack.push(3);

    //  30.) Act by calling clear()
    stack.clear();

    //  31.) Assert that the size is empty
    expect(stack.size()).toBe(0);
  });
});
