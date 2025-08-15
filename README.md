# jsUnitTesting

> **Note:**  
> This project was reset after removing a submodule.

To remove the submodule, I ran:

```bash
git submodule deinit -f javascript-testing-starter
git rm -f javascript-testing-starter
rm -rf .git/modules/javascript-testing-starter
```

---

# 🧪 Introduction to Unit Testing

Unit testing is the practice of writing **automated tests** to verify the correctness of individual functions or components—without launching the full application or interacting with the UI.

---

## 🧠 Why Unit Testing?

- **Catch bugs early:** Fixing bugs during development is much cheaper than in production.
- **Refactor with confidence:** Tests act as safety nets when changing code.
- **Think through edge cases:** Writing tests forces you to consider error states and input variations.
- **Living documentation:** Tests show how code is expected to behave.

---

## ⚖️ Manual vs. Automated Testing

**Manual testing** is slow and fragile (launch app, log in, navigate, etc.).  
**Automated unit testing** is fast and reliable:

- Call functions directly in code
- Pass in different inputs
- Use a test runner for instant feedback (✅/❌)

---

## 🏗️ Types of Automated Tests

| Type            | What it Tests                             | Speed   | Example                                       |
| --------------- | ----------------------------------------- | ------- | --------------------------------------------- |
| **Unit**        | Individual functions/classes in isolation | Fast    | Verifying a discount calculation function     |
| **Integration** | How multiple components work together     | Medium  | Form component + validation + API response    |
| **End-to-End**  | The entire app (UI to backend/database)   | Slowest | Complete sign-up flow with confirmation email |

---

## 📐 The Testing Pyramid

- **Base:** More unit tests
- **Middle:** Fewer integration tests
- **Tip:** Fewest end-to-end tests

> ⚠️ This is a guideline, not a rule. Adapt to your project’s needs.

As you move up the pyramid:

- **Speed decreases**
- **Confidence increases**

---

## 🧭 How Much Testing Is Enough?

- No tests = fragile, slow manual testing.
- 100% coverage = costly, often unrealistic.
- **Be pragmatic:** Find a balanced strategy for your project.

| Project Type                            | Test Coverage Strategy            |
| --------------------------------------- | --------------------------------- |
| 🚧 New Project w/ Evolving Requirements | Be light on tests — expect change |
| 🏗️ Stable, Mature Codebase              | Cover critical modules            |
| 💼 Business-Critical Features           | Prioritize robust, trusted tests  |

> Unit testing is an investment. Make it wisely.

---

## ⚠️ Poor Tests Are Worse Than No Tests

Bad tests can:

- Produce false positives/negatives
- Waste maintenance time
- Block progress

**Good tests are:**

- Maintainable
- Robust
- Trustworthy

---

## 🅰️🅰️🅰️ The AAA Pattern

Most tests follow the **AAA** pattern:

1. **Arrange:** Set up data/configuration
2. **Act:** Perform the action
3. **Assert:** Check the outcome

**Example:**

- Arrange: TV is on
- Act: Press power button
- Assert: TV is off

---

## 🧑‍🔬 Code-First vs Test-First (TDD)

| Approach       | Sequence                                             | Nickname                          |
| -------------- | ---------------------------------------------------- | --------------------------------- |
| **Code First** | 1. Write code → 2. Add tests afterward               | “What we’ve done so far”          |
| **Test First** | 1. Write tests → 2. Write code to pass → 3. Refactor | **TDD = Test-Driven Development** |

**TDD Cycle:**

1. **Red:** Write a failing test
2. **Green:** Write code to pass
3. **Refactor:** Improve design, keep tests green

**Benefits:**

- 100% test coverage for execution paths
- Prevents over-engineering
- Continuous safety net

**Caveats:**

- Learning curve
- Hard to start in complex domains
- Hybrid approaches are common

> TDD is a philosophy, not a religion. Use it when it helps.

---

## ⚙️ Setting Up Vitest

### 1. Install Vitest

```bash
npm i -D vitest
```

### 2. Add a Test Script

In `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

### 3. Run Your Tests

```bash
npm test
# or
npm t
```

---

## 🧑‍🔬 Your First Test

Create `test/intro.test.js` in your project root.

> Vitest auto-detects files with `test` in their name.

**Example:**

```js
import { describe, expect, it } from "vitest";

describe("max", () => {
  it("returns the greater of two numbers", () => {
    expect(Math.max(1, 2)).toBe(2);
  });
});
```

---

## 🚦 Running Tests

Vitest offers interactive shortcuts:

| Shortcut      | Action                               |
| ------------- | ------------------------------------ |
| `a` + `Enter` | Rerun **all** tests                  |
| `r`           | Rerun tests matching current pattern |
| `f`           | Rerun **only failed** tests          |
| `u`           | Update **snapshots**                 |
| `p`           | Filter by **filename**               |
| `t`           | Filter by **test name** (regex)      |
| `w`           | Filter by **project name**           |
| `b`           | Start **browser server** (if needed) |
| `q`           | **Quit** test runner                 |

---

### 🖥️ Vitest UI

Add to `package.json`:

```json
"scripts": {
  "test:ui": "vitest --ui"
}
```

Run:

```bash
npm run test:ui
```

This opens a visual dashboard for running and inspecting tests.

---

## 🧭 Navigating Tests in VSCode

- **Test Explorer:** Click the ellipsis (`...`) next to the filename tab to view all test suites and cases.
- **Quick Open:** <kbd>Cmd</kbd> + <kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>P</kbd> (Win/Linux)
  - `:42` jumps to line 42
  - `@` lists symbols (functions, tests)
- **Cursor History:**
  - <kbd>Ctrl</kbd> + <kbd>-</kbd>: Go back
  - <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>-</kbd>: Go forward

---

## 📊 Code Coverage

### 1. Add a Coverage Script

In `package.json`:

```json
"scripts": {
  "coverage": "vitest run --coverage"
}
```

### 2. Run Coverage

```bash
npm run coverage
```

### 3. Ignore Coverage Output

Add to `.gitignore`:

```
coverage/
```

### 4. View the Coverage Report

- Open `coverage/index.html` in your browser for a detailed report.

---

## 📚 Key Terms & Concepts

- **Automated testing:** Writing code to verify software behavior.
- **Unit tests:** Validate small, isolated units.
- **Integration tests:** Examine interactions between units.
- **End-to-end tests:** Simulate user interactions across the whole app.
- **Test framework:** Tools for writing/executing tests (e.g., Vitest, Jest).
- **AAA pattern:** Arrange, Act, Assert.
- **TDD:** Write tests before code.
- **Code coverage:** Measures how much code is tested.

---

> Automated testing reduces manual effort and cost, but cannot replace all manual testing (e.g., for UI aesthetics).  
> Strive for meaningful coverage, not just high numbers.

---

# 🏆 Characteristics of Good Unit Tests

> **No test is better than a bad test.**

- Good tests are **maintainable**, **robust**, and **trustworthy**.
- Tests should have clear names and test a single behavior.

**Robust Test:**  
A test that is resilient to changes in code.

- Test the **behavior**, not the implementation.
- Avoid tight assertions.

**Trustworthy Test:**  
A test that can be trusted.

- When it passes, we should be confident the code works.
- When it fails, we should know something is wrong with the code, not the test.
- No false positives/negatives.
- Validate correct behavior.
- Test boundary conditions:
  - Empty arrays
  - Null inputs
  - Extreme values
- Deterministic: Consistent results
  - No random data
  - No current date/time
  - No global state

Tests should be fully **isolated**, completely independent of other tests.

---

## 🧩 Using Matchers

```js
const result = { name: "Mosh" };
expect(result).toBe({ name: "Mosh" }); // Fails: different objects in memory
expect(result).toEqual({ name: "Mosh" }); // Passes: compares content
```

- Don't compare object references, compare their **content** with `toEqual()`.

---

## 📝 Writing Good Assertions

- Write assertions that are not too specific and not too general.

  ```js
  // Example of unclear error:
  // TypeError: actual value must be number or bigint, received "undefined"
  ```

- Make sure to use the correct property when comparing objects.
- Tests should test a single behavior.

---

## ➕➖ Positive & Negative Testing

- **Positive Testing:** Ensures the application works correctly under normal conditions.
- **Negative Testing:** Checks how well the application handles unexpected or incorrect input.

- For functions with multiple execution paths, use a coverage tool to see what paths have been tested.

```bash
npm run coverage
```

- Open the `index.html` file in the `coverage` folder in your browser.

---

## 🏁 Boundary Testing

- Focuses on the edges or boundaries of the inputs.
- See how functions behave under extreme conditions.
- Validate data from the UI or other systems at the boundaries.

---

## 🔄 Parameterized Tests

- Run the same test multiple times with different sets of input data.
- Useful when testing logic is more complex.

---

## ⏳ Testing Asynchronous Code

- Use async/await or return promises in your tests to handle asynchronous code.

---

## 🧹 Setup and Teardown

Sometimes we need to create a consistent environment before running our tests and clean up any resources or state after the tests have executed.

**Example:**  
Before running tests, set up a database connection and create necessary tables with data. After tests, clean up.

---

## 🏋️‍♂️ Exercise: Testing a Stack

**Stack:** A data structure that follows the Last-In-First-Out (LIFO) principle.

---

## ✅ Core Unit Testing Techniques

The following techniques form the foundation of effective, maintainable, and trustworthy unit tests:

---

### 🧪 Fundamental Testing Concepts

- **Positive Testing:**  
  Ensure your application works as expected under normal conditions.

- **Negative Testing:**  
  Verify how your app handles **unexpected or invalid input**.

- **Boundary Testing:**  
  Test your code at **the edges of acceptable input** — minimums, maximums, limits.

- **Parameterized Testing:**  
  Also called **data-driven testing** — run the same test with **multiple input values** to reduce redundancy.

---

### 🔧 Assertion Practices

- **Tight Assertions:**  
  May cause tests to be **fragile** and break unnecessarily when minor details change.

- **Loose Assertions:**  
  Can produce **false positives** — tests that pass even when functionality is broken.

> 🧠 **Balance is key:** Tests should be specific enough to catch issues, but not so rigid that they break when implementation details change.

---

### 🔍 Matchers

A **matcher** is a method used to assert expected outcomes.

Common examples include:

```js
expect(value).toBe(expected);
expect(obj).toEqual(expectedObj);
expect(result).toBeNull();
```

---

### 🔁 Setup and Teardown

Used to prepare and clean up your test environment.

Vitest (and Jest) provide lifecycle hooks:

```js
beforeEach(() => { ... });
beforeAll(() => { ... });
afterEach(() => { ... });
afterAll(() => { ... });
```

- **Setup** initializes the test environment.
- **Teardown** ensures no leftover state interferes with future tests.

---

## 📌 Summary

- ✅ Good tests are **maintainable**, **robust**, and **trustworthy**.
- ❌ It’s better to **write no tests** than to write bad ones.
- 🧹 Keep tests **short, focused**, and **well-named**.
- 💡 Test the **behavior**, not the implementation — focus on _what_ the code should do, not _how_ it does it.
- ⚖️ Avoid randomness, global state, or current time in tests — these cause **inconsistent results**.
- 🔐 A solid suite of unit tests boosts confidence and accelerates refactoring.

---

# 🧩 Breaking Dependencies with Mocks

## 🛠️ Creating Mock Functions

A **mock function** imitates the behavior of a real function.

- Use mocks to test a unit in isolation.

**Example:**

```js
const greet = vi.fn();
greet.mockReturnValue("hello");
greet.mockResolvedValue("hello");
greet.mockRejectedValue("error");
greet.mockImplementation((name) => "hello " + name);
```

**Assertions:**

```js
expect(greet).toHaveBeenCalled();
expect(greet).toHaveBeenCalledOnce();
expect(greet).toHaveBeenCalledWith("mosh");
```

---

### 🏋️ Exercise: Working With Mock Functions

- Create a mock for the following function:
  ```js
  function sendText(message) {}
  ```
- Call the mock function.
- Assert that the mock function is called.
- Assert that the result is `'ok'`.

---

## 🔄 Interaction Testing

- Sometimes we need to test the interactions between different units or functions.

**Two reasons to use mocks:**

1. To get values.
2. To test the interaction between units.

---

### 🏋️ Exercise: Testing `submitOrder()`

- When reviewing the `submitOrder()` function, TypeScript helps make available properties explicit.

**Test Cases:**

1. Verify that `submitOrder()` calls `charge()` with the correct parameters.
2. Handle a failed payment scenario.
3. Handle a successful payment scenario.

---

## 🧩 Partial Mocking

- By default, calling `vi.mock()` replaces **all** functions in a module.
- To replace only specific functions, pass a factory function as the second argument to `vi.mock()` that returns a custom version of the module.

---

## 🕵️ Spying on Functions

- Spying lets us observe how a function behaves during test execution.
- A spy records details such as how many times the function was called, the arguments it received, and the values it returned.

---

## 🧹 Clearing, Resetting, and Restoring Mocks

- **Clearing Mocks**
  - `mockClear()` — Removes all call history and recorded information for the mock.
  - `mockReset()` — Does everything `mockClear()` does, but also resets the mock’s implementation to an empty function.
  - `mockRestore()` — Restores the _original_ implementation (only meaningful for spies).

**Examples:**

```js
vi.mocked(mockedFunc).mockClear();
vi.clearAllMocks();
```

---

## ❓ To Mock or Not to Mock

- Tests that rely heavily on mocks can become tied to the internal implementation of your functions — something you generally want to avoid.

> **Test what a function does, not how it does it.**

- If a test depends on the exact implementation, it’s more likely to fail when the implementation changes, even if the function’s behavior remains correct.

---

## 🕒 Mocking Dates

- Tests should not be dependent on the current date and time as this can lead to different results during different test runs.
- Mocking dates and times is useful when testing time-sensitive logic to maintain result consistency.

**Example:**

```js
vi.setSystemTime("2024-01-01 10:00");
```

---

## 📝 Mocking Modules

```js
vi.mock("../src/currency");
vi.mocked(mockedFunc).mockReturnValue(0);
```

---

## 📖 Summary

- Mock functions simulate the behavior of real functions, allowing you to control their output and behavior during testing.
- They are useful for isolating specific code paths and testing functions in isolation.
- Mock functions can be created using `vi.fn()`.
- You can mock an entire module and replace all exported functions with mocks using `vi.mock()`.
- Partial mocking is valuable for mocking parts of a module while retaining some of its original behavior.
- Function spying allows you to monitor and record calls to functions during testing.
- Mocks should be cleared before or after each test to ensure a clean slate for subsequent tests.
- Use mocks primarily to replace external dependencies that may be unavailable or slow during test execution (e.g., databases, file system, APIs).
- Tests should not be dependent on the current date and time; mock dates/times for consistency.

---
