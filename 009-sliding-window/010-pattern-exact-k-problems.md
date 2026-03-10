## Sliding Window Algorithm — Pattern 4: Exact K Problems

Another very important sliding window pattern involves problems that require **exactly K elements satisfying a condition**.

These problems are slightly tricky because sliding window naturally handles **“at most” constraints**, but **“exactly K” constraints are harder to maintain directly**.

Because of this, a powerful mathematical trick is commonly used.

Instead of solving the problem directly, we compute:

    AtMost(K) - AtMost(K-1)

This converts an **exactly K problem** into two **at most K problems**, which are much easier to solve using sliding window.

---

### 1. How to Recognize Exact K Problems

Exact K problems usually contain phrases like:

    exactly K distinct elements
    exactly K distinct characters
    exactly K odd numbers
    exactly K replacements
    exactly K elements satisfying a property

Examples of typical problems:

    subarrays with exactly K distinct integers
    count substrings with exactly K distinct characters
    number of subarrays with exactly K odd numbers
    binary subarrays with sum = K

These problems require counting windows where the constraint equals **exactly K**.

---

### 2. Why Exact K Is Difficult Directly

Sliding window works naturally when we enforce a **limit** like:

    constraint ≤ K

But enforcing:

    constraint = K

is more complicated.

Example:

    distinct characters = K

As the window moves, maintaining **exact equality** becomes difficult.

Sometimes the window will contain:

    less than K
    exactly K
    more than K

Handling all three cases directly leads to complex logic.

So we use a smarter trick.

---

### 3. The Key Mathematical Insight

Instead of counting windows with **exactly K**, we count two things.

First:

    number of windows with at most K

Second:

    number of windows with at most K-1

Then subtract them.

Formula:

    Exactly(K) = AtMost(K) - AtMost(K-1)

Why this works:

Windows with at most K include:

    windows with 0,1,2,...,K

Windows with at most K-1 include:

    windows with 0,1,2,...,K-1

Subtracting removes everything except:

    windows with exactly K

---

### 4. Visual Explanation

Suppose we count windows based on number of distinct elements.

Windows with:

    ≤ 2 distinct elements
    ≤ 1 distinct element

Subtracting them leaves only windows with:

    exactly 2 distinct elements

Example:

    AtMost(2) = 10 windows
    AtMost(1) = 4 windows

So:

    Exactly(2) = 10 - 4 = 6

Those 6 windows have exactly 2 distinct elements.

---

### 5. Example — Subarrays With Exactly K Distinct Integers

Problem:

> Count the number of subarrays with exactly `K` distinct integers.

Example:

    arr = [1,2,1,2,3]
    K = 2

Instead of solving directly, we compute:

    AtMost(2) - AtMost(1)

Step 1:

Count subarrays with **at most 2 distinct integers**.

Step 2:

Count subarrays with **at most 1 distinct integer**.

Step 3:

Subtract the two results.

This gives the number of subarrays with **exactly 2 distinct integers**.

---

### 6. Implementing AtMost(K)

The helper function usually counts windows with **at most K distinct elements**.

Template:

    function atMostK(nums, k) {

        let left = 0
        let count = 0
        let freq = new Map()

        for (let right = 0; right < nums.length; right++) {

            freq.set(nums[right], (freq.get(nums[right]) || 0) + 1)

            while (freq.size > k) {

                freq.set(nums[left], freq.get(nums[left]) - 1)

                if (freq.get(nums[left]) === 0) {
                    freq.delete(nums[left])
                }

                left++
            }

            count += right - left + 1
        }

        return count
    }

The key line:

    count += right - left + 1

This counts all valid subarrays ending at `right`.

---

### 7. Using the Exact K Formula

Once we have the `atMostK` function, solving the exact K problem becomes easy.

Example:

    function subarraysWithKDistinct(nums, k) {

        return atMostK(nums, k) - atMostK(nums, k - 1)
    }

This converts a complex problem into two simpler sliding window calculations.

---

### 8. Why This Works Efficiently

Without sliding window, counting subarrays usually requires generating all subarrays.

Total subarrays:

    N²

Checking each one becomes expensive.

But with the sliding window approach:

- `right` pointer moves forward once
- `left` pointer moves forward once

So each `atMost` computation takes:

    O(N)

Since we run it twice:

    O(2N)

Which simplifies to:

    O(N)

---

### 9. Common Problems Using This Pattern

Many interview problems rely on the **Exact K pattern**.

Examples:

Subarrays With Exactly K Distinct Integers

    use frequency map to track distinct elements

Count Substrings With Exactly K Distinct Characters

    similar logic applied to strings

Binary Subarrays With Sum = K

    treat sum constraint using sliding window

Number of Nice Subarrays

    count subarrays with exactly K odd numbers

All these problems can be solved using:

    AtMost(K) - AtMost(K-1)

---

### 10. Key Identification Trick

When reading a problem, look for phrases like:

    exactly K distinct
    exactly K elements
    exactly K odd numbers
    exactly K operations

These problems are usually solved using:

    Exactly(K) = AtMost(K) - AtMost(K-1)

This trick simplifies the logic significantly.

---

### 11. Mental Model

Think of all windows grouped by how many elements satisfy the condition.

Example:

    windows with ≤ K
    windows with ≤ K-1

Subtracting removes the smaller group and leaves only:

    windows with exactly K

This mathematical idea is the foundation behind the **Exact K sliding window pattern**.

---

### 12. Final Summary

Exact K problems require windows containing **exactly K elements satisfying a condition**.

Direct sliding window solutions can become complex.

Instead, we use a powerful trick:

    Exactly(K) = AtMost(K) - AtMost(K-1)

Steps:

1. Compute windows with **at most K**
2. Compute windows with **at most K-1**
3. Subtract the results

This transforms the problem into two standard sliding window computations.

Time complexity:

    O(N)

This pattern is widely used in substring and subarray counting problems.
