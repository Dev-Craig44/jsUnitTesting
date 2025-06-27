# jsUnitTesting

> **Note:**  
> I accidentally deleted everything in this project.

To remove the submodule, I ran:

```bash
git submodule deinit -f javascript-testing-starter
git rm -f javascript-testing-starter
rm -rf .git/modules/javascript-testing-starter
```

So, here we go again...

## 🧪 What is Unit Testing?

Unit testing is the practice of writing **automated tests** that verify the correctness of individual functions or components in your codebase — without launching the full application or interacting with the UI.

---

### 🔄 Manual vs. Automated Testing

Traditionally, testing a function might involve:

1. Launching the app
2. Logging in
3. Navigating through the UI
4. Filling out a form
5. Submitting it
6. Verifying the result

That process is time-consuming and fragile. With **unit testing**, you skip all that and instead:

- Call the function **directly** in code
- Pass in different inputs
- Use a **test runner** to verify the expected output

This provides instant feedback via the terminal — ✅ green if it passes, ❌ red if it fails — and allows you to run **hundreds of tests in seconds**.

---

### 🧠 Why Unit Testing Matters

Once you build a suite of tests, you can run them **every time you make changes**. The benefits compound as your app grows.

#### ✅ 1. Catch Bugs Early

- Bugs found in the development phase are much cheaper to fix than bugs found in production.
- Studies show that post-deployment fixes can cost **5x more** than fixes caught during coding.

#### ✅ 2. Refactor with Confidence

- Refactoring = changing code structure without changing behavior.
- Tests act as safety nets: if something breaks, you'll know immediately.
- Example: Extracting repeated logic into a helper function.

#### ✅ 3. Think Through Edge Cases

- Writing tests forces you to think critically about error states, edge cases, and input variations.
- Result: more robust, reliable code.

#### ✅ 4. Living Documentation

- Unit tests show how a function is expected to behave.
- Other developers (or your future self) can understand the purpose of the code just by reading the tests.

---

### ⚖️ The Debate: How Much Testing Is Too Much?

You’ll meet people with extreme opinions:

- 🧔‍♂️ _John Smith_: _"I’ve written bug-free code for 20 years without a single unit test."_
- 🧑‍💻 _Test Smith_: _"Every line of code must be tested."_

Both are wrong.

#### 🧭 Be Pragmatic:

- No tests = fragile, slow manual testing.
- Testing every single line = costly, often unrealistic.
- Find a **balanced strategy** that fits the nature of your project.

---

### 🧠 When to Invest in Unit Testing

| Project Type                            | Test Coverage Strategy              |
| --------------------------------------- | ----------------------------------- |
| 🚧 New Project w/ Evolving Requirements | Be light on tests — expect change   |
| 🏗️ Stable, Mature Codebase              | Invest in covering critical modules |
| 💼 Business-Critical Features           | Prioritize robust, trusted tests    |

> Unit testing is an investment. Like all investments, it can be wise or wasteful depending on how you do it.

---

### ⚠️ Poor Tests Are Worse Than No Tests

Bad tests can:

- Produce false positives or negatives
- Waste time during maintenance
- Block progress instead of guiding it

#### ✅ Good Tests Should Be:

- **Maintainable** – easy to update
- **Robust** – not fragile or overly specific
- **Trustworthy** – accurately reflect the intended behavior

If your tests don’t meet these criteria, they’ll slow you down instead of speeding you up.

---
