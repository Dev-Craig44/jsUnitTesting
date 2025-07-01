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
