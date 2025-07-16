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

# Characteristics of Good Unit

No test > Bad Test

- Good tests are maintainable, robust and trustworthy.
- test should be maintainable, have clear names, and test a single behavior.

Robust Test - a test that is resilient to changes in code.

- Test the behavior, not impolementation.
- Avoid tight assertions.

Trustworthy Test - A test that can be trusted.

- When it passes we should be confident that the code worked
- When they fail we should know that something is wrong with the code, not the test.
- No false positives/negatives.
- Validate the correct behavior.
- Test boundary conditions.
  - Empty Arrays
  - Null Inputs
  - Etreme Values
- Deterministic - Consistent results
  - No random data
  - No current date/time
  - No global state.

Tests should be fully **isolated**, completely independent of other tests.

# Using Matchers

const result = { name: 'Mosh' };
expect(result).toBe({name: 'Mosh'});

    - These are two different objects in memory, even though they have the same content.
    - Don't compare their references, compare their **Content** with toBeEqual()

# Writing Good Assertions

- Write assertions that are not too specific and not too general.

  **TypeError: actual value must be number or bigint, received "undefined"**

  - This is not clear.

In the case of the type error, when using TypeScript, we won't run into the error.

- Make sure that when you are making these assertions, when dealing with a object that you are using the prop and not the actual object for comparing.

- Our tests should test a single behavior

# Positive & Negative Testing

- Positive Testing: Ensures that our application works correctly under normal conditions.
- Negative Testing: Checks how well our applications handles unexpected or incorrect input.

- When testing functions with multiply execution paths, it's always good to use a coverage tool to see what paths have been tested.

`npm run coverage`

- Plug the index.html file that's found in the coverage folder and drag and drop into the browser.

# Boudary Testing

- Testing that focuses on the edges or boundaries of the inputs.
- See how our functions behave under extreme conditions.
- Data we get from the UI or another system, the boundary is where we need to validate that information

# Parameterized Tests

- A way to run the same test multiple times with different set of input data
- This technique is more useful when our testing logic is a little more complicated

# Testing Asynchronous Code

# Setup and Teardown

Sometimes we need to create a consistent environment before running our tests to clean up any resources or state after the tests have executed

Example: Before running our tests, we may want to set up a database connection, create necessary tables with data and so on, and after our test we want to do clean up.

# Exercise: Testing a Stack

Stack - A data structure that follows the Last-In-First-Out (LIFO) principle.

## ✅ Core Unit Testing Techniques

The following techniques form the foundation of effective, maintainable, and trustworthy unit tests:

---

### 🧪 Fundamental Testing Concepts

- **Positive Testing**  
  Ensure your application works as expected under normal conditions.

- **Negative Testing**  
  Verify how your app handles **unexpected or invalid input**.

- **Boundary Testing**  
  Test your code at **the edges of acceptable input** — minimums, maximums, limits.

- **Parameterized Testing**  
  Also called **data-driven testing** — run the same test with **multiple input values** to reduce redundancy.

---

### 🔧 Assertion Practices

- **Tight Assertions**  
  May cause tests to be **fragile** and break unnecessarily when minor details change.

- **Loose Assertions**  
  Can produce **false positives** — tests that pass even when functionality is broken.

> 🧠 **Balance is key**: Tests should be specific enough to catch issues, but not so rigid that they break when implementation details change.

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

```ts
beforeEach(() => { ... })
beforeAll(() => { ... })
afterEach(() => { ... })
afterAll(() => { ... })
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

# Breaking Dependencies with Mocks

## Creating Mock Functions

Mock Function - A function that imitates the behavior of a real function.

- We use these to test a unit in isolation.
