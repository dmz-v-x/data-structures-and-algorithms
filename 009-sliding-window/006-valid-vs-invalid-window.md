## Sliding Window Algorithm — Valid vs Invalid Window

One of the **most important mental models** in sliding window problems is understanding the concept of a **valid window** and an **invalid window**.

Many sliding window problems become easy once you clearly define:

    What makes the window valid?
    What makes the window invalid?

This thinking pattern allows you to design the **expand and shrink logic correctly**.

Instead of randomly moving pointers, you follow a simple rule:

    Expand while window is valid
    Shrink when window becomes invalid

This is one of the key insights that separates beginners from strong problem solvers.

---

### 1. What Is a Valid Window

A **valid window** is a window that satisfies the **problem's constraint**.

Example window representation:

    [ left ........ right ]

The elements inside this window must satisfy the condition given in the problem.

Examples of valid window conditions:

    sum ≤ K
    distinct characters ≤ K
    no repeating characters
    product < K
    contains required characters

If the window satisfies the condition, it is considered **valid**.

Example:

    arr = [2,1,3]

Constraint:

    sum ≤ 6

Window:

    [2,1,3]

Sum:

    6

Since `6 ≤ 6`, the window is **valid**.

---

### 2. What Is an Invalid Window

An **invalid window** is a window that **violates the constraint**.

Example:

    arr = [2,1,5]

Constraint:

    sum ≤ 6

Window:

    [2,1,5]

Sum:

    8

Since `8 > 6`, the window becomes **invalid**.

When the window becomes invalid, we must **fix it by shrinking**.

---

### 3. The Core Sliding Window Rule

Sliding window algorithms follow one universal rule.

    Expand while the window is valid
    Shrink when the window becomes invalid

This rule ensures that the window always eventually returns to a **valid state**.

Basic logic:

    Expand → right++
    Check validity

If invalid:

    Shrink → left++

We shrink until the window becomes valid again.

---

### 4. Example — Longest Substring Without Repeating Characters

Problem:

> Find the longest substring without repeating characters.

Constraint:

    window must contain unique characters

Example:

    s = "abca"

Window expansion:

    [a]
    valid

    [a b]
    valid

    [a b c]
    valid

Next expansion:

    [a b c a]

Now the window contains two `a`.

So the window becomes **invalid**.

To fix it, we shrink.

Remove left element:

    [b c a]

Now the window becomes **valid again**.

---

### 5. Example — At Most K Distinct Characters

Problem:

> Longest substring with at most `K` distinct characters.

Constraint:

    distinct characters ≤ K

Example:

    s = "eceba"
    K = 2

Window progression:

    [e]
    distinct = 1 → valid

    [e c]
    distinct = 2 → valid

    [e c e]
    distinct = 2 → valid

Next expansion:

    [e c e b]

Distinct characters:

    {e,c,b} → 3

Constraint violated.

Now the window becomes **invalid**.

We shrink until:

    distinct ≤ 2

---

### 6. How This Controls Window Movement

Valid vs invalid thinking controls **when to move each pointer**.

Right pointer:

    always expands the window

Left pointer:

    moves only when the window becomes invalid

Typical structure:

    for right in array:

        add element to window

        while window is invalid:
            remove left element
            left++

        update result

The window is always restored to a **valid state before continuing**.

---

### 7. Why This Thinking Is Powerful

Without this thinking, beginners often try random pointer movements.

That leads to:

    complicated logic
    bugs
    incorrect results

But when you clearly define **valid vs invalid window**, the algorithm becomes structured.

You always know:

    when to expand
    when to shrink

---

### 8. Common Valid Window Conditions

Different problems define validity differently.

Examples:

Sum based constraint

    windowSum ≤ K

Distinct characters constraint

    distinctCount ≤ K

Unique characters constraint

    frequency[char] ≤ 1

Product constraint

    product < K

Required characters constraint

    window contains all required characters

These rules determine whether the window is valid or invalid.

---

### 9. Mental Checklist When Solving Problems

Whenever you see a sliding window problem, ask these questions.

Question 1:

    What condition defines a valid window?

Question 2:

    When does the window become invalid?

Question 3:

    How do I restore validity?

The answer to question 3 is almost always:

    shrink the window

---

### 10. Common Beginner Mistake

A frequent mistake is shrinking the window **too early**.

Incorrect thinking:

    shrink before checking validity

Correct thinking:

    expand first
    check validity
    shrink only if invalid

Correct order:

    expand
    check
    shrink if needed

---

### 11. Visual Mental Model

Imagine the window stretching across an array.

Example:

    [1,2,3,4,5]

Expansion:

    [1]
    [1,2]
    [1,2,3]

If constraint breaks:

    shrink

Example:

    remove 1

Window becomes:

    [2,3]

The window continuously expands and shrinks but always returns to a **valid state**.

---

### 12. Final Summary

The **valid vs invalid window mindset** is a critical sliding window insight.

Before solving a problem, clearly define:

    What makes the window valid?
    What makes the window invalid?

Then follow this rule:

    Expand the window
    If window becomes invalid → shrink it

Universal pattern:

    Expand → right++
    If invalid → Shrink → left++

This thinking pattern helps design sliding window solutions that run efficiently in:

    O(N)
