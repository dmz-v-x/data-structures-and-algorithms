## Sliding Window Algorithm — Critical Tricks & Insights

Sliding window problems often look different on the surface, but many of them rely on a **small set of core tricks and insights**.

These insights help you:

- identify sliding window problems quickly
- implement the logic correctly
- avoid common beginner mistakes

Mastering these tricks significantly improves problem-solving speed and accuracy.

---

### 1. Trick 1 — Default Window = Dynamic

Unless the problem **explicitly says the window size is fixed**, assume the window is **dynamic**.

Many beginners incorrectly assume a fixed window when the window should actually **expand and shrink dynamically**.

Example phrases indicating fixed window:

    subarray of size K
    substring of length K

If these phrases do not appear, the window is usually **dynamic**.

Dynamic window means:

    expand → right++
    shrink → left++

based on a constraint.

Common beginner mistake:

Trying to maintain a constant window when the problem actually requires a **variable window size**.

---

### 2. Trick 2 — Expand First, Shrink Later

One of the most important sliding window rules is:

    never shrink prematurely

Correct process:

1. Expand the window
2. Check validity
3. Shrink only if the constraint breaks

Incorrect logic:

    shrink before expansion

Correct logic:

    expand first
    shrink later if needed

Example pattern:

    add(arr[right])

    while (window invalid) {
        remove(arr[left])
        left++
    }

This ensures the window always grows **as much as possible** before shrinking.

---

### 3. Trick 3 — Each Element Should Enter & Exit Once

In an optimal sliding window solution:

    each element enters the window once
    each element leaves the window once

That means total pointer movements are limited.

Right pointer:

    moves N times

Left pointer:

    moves at most N times

Total pointer movements:

    ≤ 2N

So the algorithm runs in:

    O(N)

If an element enters or exits **multiple times unnecessarily**, the logic may be inefficient.

Common mistake:

Resetting pointers repeatedly instead of moving them forward.

---

### 4. Trick 4 — Validity Drives Movement

Sliding window pointer movement should **always be driven by window validity**.

Never move pointers randomly.

Always ask:

    Why expand?
    Why shrink?

Typical reasoning:

Expand when:

    we want to explore larger windows

Shrink when:

    the constraint becomes invalid

Example:

Constraint:

    distinct ≤ K

If:

    distinct > K

Then the window becomes invalid.

So we shrink until:

    distinct ≤ K

Pointer movement should always follow **clear logical rules**.

---

### 5. Trick 5 — Frequency Map Mastery

Most **string sliding window problems** require tracking character frequencies.

Common structures used:

    Map
    Object
    Array (size 26 or 128)

Example frequency map:

    freq[char]++

Shrinking window:

    freq[char]--

Common problems requiring frequency maps:

Longest substring without repeating characters

Longest substring with at most K distinct characters

Minimum window substring

Longest repeating character replacement

Mastering frequency maps is critical for solving **string window problems**.

---

### 6. Trick 6 — Exact K Shortcut

Exact K problems often look complicated at first.

Instead of writing complex logic, use this trick:

    Exact(K) = AtMost(K) - AtMost(K-1)

Example problems:

Subarrays with exactly K distinct integers

Substrings with exactly K distinct characters

Nice subarrays (exactly K odd numbers)

The idea is:

1. Count windows with **at most K**
2. Count windows with **at most K-1**
3. Subtract

This is a very common **interview trick**.

---

### 7. Trick 7 — Window Length Formula

Window size is always calculated using:

    window_size = right - left + 1

Example:

    left = 2
    right = 5

Window:

    [2,3,4,5]

Length:

    5 - 2 + 1 = 4

A common bug is forgetting the `+1`.

Incorrect:

    right - left

Correct:

    right - left + 1

This formula is used in many problems such as:

Longest substring

Shortest subarray

Maximum window size

---

### 8. Trick 8 — Shrink While Invalid

This is one of the most critical patterns in sliding window algorithms.

Whenever the window becomes invalid, we do not shrink just once.

We shrink **until the window becomes valid again**.

Correct pattern:

    while (window invalid) {
        remove(arr[left])
        left++
    }

Example:

Constraint:

    distinct ≤ 2

Window:

    [a,b,c]

Distinct = 3 → invalid

Shrink:

    remove a

Now:

    [b,c]

Distinct = 2 → valid

The `while` loop ensures the window returns to a **valid state before continuing**.

---

### 9. Putting Everything Together

Most sliding window solutions follow this overall structure.

    let left = 0

    for (let right = 0; right < n; right++) {

        add(arr[right])

        while (window invalid) {
            remove(arr[left])
            left++
        }

        update result
    }

Key ideas:

    expand window
    check validity
    shrink if invalid
    update result

---

### 10. Final Summary

Important sliding window tricks include:

Default window type:

    dynamic unless fixed size is specified

Pointer movement rule:

    expand first
    shrink later

Efficiency rule:

    each element enters and exits window once

Movement rule:

    window validity determines pointer movement

String problems:

    use frequency maps

Exact K trick:

    Exact(K) = AtMost(K) - AtMost(K-1)

Window length formula:

    right - left + 1

Critical shrinking pattern:

    while (window invalid):
        left++

Mastering these tricks makes sliding window problems significantly easier to recognize and solve efficiently.
