## Sliding Window Algorithm — Pattern 3: At Most K Problems

One of the most important sliding window patterns is solving **“At Most K” problems**.

These problems place a **limit on something inside the window**.

Examples include limits on:

- number of distinct elements
- number of replacements
- number of zeros
- number of operations

Instead of fixing the window size, the problem allows the window to grow **as long as the constraint remains within K**.

The moment the constraint exceeds `K`, the window becomes **invalid**, and we must shrink it.

This pattern appears in many well-known sliding window problems and is considered a **core interview pattern**.

---

### 1. How to Recognize “At Most K” Problems

These problems usually contain phrases like:

    at most K distinct characters
    at most K replacements
    at most K zeros
    at most K operations
    at most K changes

Examples of typical problems:

    longest substring with at most K distinct characters
    longest repeating character replacement
    max consecutive ones with at most K zeros
    subarrays with at most K distinct integers

All these problems have a **constraint that must stay ≤ K**.

---

### 2. Core Strategy for At Most K Problems

The strategy for these problems is very straightforward.

    Expand normally
    Shrink when constraint breaks

Explanation:

We allow the window to expand freely while the constraint is satisfied.

If the constraint becomes larger than `K`, the window becomes **invalid**.

Then we shrink the window until the constraint becomes valid again.

---

### 3. Understanding the Constraint

The constraint usually tracks something inside the window.

Examples:

Distinct characters constraint:

    distinctCount ≤ K

Replacement constraint:

    replacements ≤ K

Zero constraint:

    zeroCount ≤ K

If the value exceeds `K`, the window must shrink.

Example:

    distinctCount > K

Now the window becomes invalid.

So we shrink until:

    distinctCount ≤ K

---

### 4. Example — At Most K Distinct Characters

Problem:

> Find the longest substring with at most `K` distinct characters.

Example:

    s = "eceba"
    K = 2

Window progression:

    [e]
    distinct = 1

    [e c]
    distinct = 2

    [e c e]
    distinct = 2

Next expansion:

    [e c e b]

Distinct characters:

    {e,c,b} → 3

Now the window becomes **invalid**.

Shrink the window.

Remove `e`.

Continue shrinking until:

    distinct ≤ 2

Then continue expanding.

---

### 5. Example — Max Consecutive Ones With K Zeros

Problem:

> Find the longest subarray containing at most `K` zeros.

Example:

    arr = [1,1,1,0,0,1,1]
    K = 1

Window expansion:

    [1]
    zeroCount = 0

    [1,1]
    zeroCount = 0

    [1,1,1]
    zeroCount = 0

    [1,1,1,0]
    zeroCount = 1

Next expansion:

    [1,1,1,0,0]

Now:

    zeroCount = 2

Constraint violated:

    zeroCount > K

Shrink window until:

    zeroCount ≤ K

---

### 6. Window State Management

To enforce the constraint, we maintain a **window state**.

Examples:

Distinct character problems:

    frequency map
    distinct count

Replacement problems:

    frequency map
    max frequency

Zero constraint problems:

    zero counter

These values allow us to determine if the window is **valid or invalid**.

---

### 7. General Template for At Most K Problems

Most “At Most K” sliding window problems follow this template.

    function atMostK(arr, k) {

        let left = 0

        for (let right = 0; right < arr.length; right++) {

            // expand window
            add(arr[right])

            while (constraint > k) {

                remove(arr[left])
                left++
            }

            // update answer
        }
    }

Key observations:

    expand window normally
    shrink when constraint exceeds K

---

### 8. Visual Mental Model

Example array:

    [1,2,1,3,4]

Constraint:

    distinct ≤ 2

Expansion:

    [1]
    [1,2]
    [1,2,1]

Still valid.

Next expansion:

    [1,2,1,3]

Now distinct = 3 → invalid.

Shrink window:

    remove 1

Window becomes:

    [2,1,3]

Continue shrinking until:

    distinct ≤ 2

Then continue expanding.

---

### 9. Why This Pattern Is Powerful

The “At Most K” pattern simplifies many complex problems.

Without sliding window, we might generate all subarrays.

Total subarrays:

    N²

Checking each window becomes expensive.

But with sliding window:

- `right` pointer moves forward once
- `left` pointer moves forward once

Total pointer movements:

    ≤ 2N

So the time complexity becomes:

    O(N)

---

### 10. Common Problems Using This Pattern

Many famous sliding window problems use the **At Most K pattern**.

Examples:

Longest Substring With At Most K Distinct Characters

    track number of distinct characters

Longest Repeating Character Replacement

    track frequency of characters

Max Consecutive Ones III

    track number of zeros

Subarrays With At Most K Distinct Integers

    track distinct integers using frequency map

All these problems enforce a **limit constraint**.

---

### 11. Advanced Insight — Exact K Problems

Many problems ask for:

    exactly K distinct elements

These are usually solved using the formula:

    exactly(K) = atMost(K) - atMost(K-1)

Example:

    subarrays with exactly K distinct integers

We compute:

    subarrays with at most K
    subarrays with at most K-1

Then subtract.

This trick converts a complex problem into two simpler ones.

---

### 12. Identification Trick

When reading a problem, look for phrases like:

    at most K
    K replacements
    K changes
    K zeros
    K distinct

If you see these signals, the sliding window approach is usually:

    expand normally
    shrink when constraint breaks

---

### 13. Final Summary

“At Most K” problems enforce a **limit constraint inside the window**.

Examples:

    at most K distinct elements
    at most K replacements
    at most K zeros

Core strategy:

    expand window normally

If constraint exceeds `K`:

    shrink window

Universal logic:

    Expand → right++
    If constraint > K → Shrink → left++

This pattern solves many substring and subarray problems efficiently in:

    O(N)
