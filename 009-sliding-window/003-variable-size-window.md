## Sliding Window Algorithm — Dynamic Window (Variable Size Window)

The **Dynamic Window** (also called **Variable Size Sliding Window**) is the **most important sliding window pattern**.

Unlike the fixed window pattern, the window size **does not stay constant**.

Instead, the window **expands and shrinks depending on constraints**.

This pattern is used in many classic interview problems involving **longest**, **shortest**, or **constraint-based** substrings/subarrays.

---

### 1. What Is a Dynamic Window

A **Dynamic Window** means the window size **changes during execution**.

Sometimes the window:

    expands

Sometimes the window:

    shrinks

The window boundaries move depending on whether the current window is **valid or invalid**.

Example representation:

    [ i ........ j ]

Where:

- `i` = start of window
- `j` = end of window

The window grows when `j` moves forward.

The window shrinks when `i` moves forward.

---

### 2. When Dynamic Window Is Used

Dynamic windows are used when the problem contains **constraints instead of fixed sizes**.

Common problem signals:

    "longest substring"
    "shortest subarray"
    "at most K distinct characters"
    "at most K operations"
    "window must satisfy condition"

Instead of specifying the window size, the problem specifies a **rule the window must follow**.

Examples:

    longest substring without repeating characters
    longest substring with at most K distinct characters
    smallest subarray with sum ≥ K
    minimum window substring
    longest repeating character replacement

In all these problems, the **window size is not fixed**.

---

### 3. Core Mental Model

The dynamic window algorithm works using **two pointers**.

    left pointer  → start of window
    right pointer → end of window

The algorithm usually follows this process:

1. Expand the window
2. Check if window is valid
3. If invalid → shrink the window
4. Update the answer

The key idea is:

    expand to explore
    shrink to fix invalid windows

---

### 4. Window Expansion

The window expands by moving the right pointer.

Example:

    [i .... j]

Expanding:

    [i ...... j+1]

This adds a new element to the window.

When expanding, we update our data structures such as:

- character frequency
- running sum
- counts
- maps

Example:

    string = "abc"

    [a]
    [a b]
    [a b c]

The window keeps growing until the constraint breaks.

---

### 5. Window Shrinking

If the window violates the problem constraint, we must shrink it.

Example:

    [i .... j]

Becomes:

    [i+1 .. j]

Shrinking removes elements from the left side.

Example scenario:

    substring = "abca"

Constraint:

    no repeating characters

Window process:

    [a]
    [a b]
    [a b c]
    [a b c a]  ← invalid

Now we shrink:

    remove 'a'

Window becomes:

    [b c a]

Now the window becomes valid again.

---

### 6. Dynamic Window Algorithm Template

Most dynamic sliding window problems follow this template.

    function dynamicWindow(arr) {

        let left = 0

        for (let right = 0; right < arr.length; right++) {

            // expand window
            // update data structures

            while (windowIsInvalid) {

                // shrink window
                left++
            }

            // update answer
        }
    }

Key observation:

- `right` always moves forward
- `left` only moves forward

Neither pointer moves backward.

---

### 7. Example Problem — Longest Substring Without Repeating Characters

Problem:

> Find the length of the longest substring without repeating characters.

Example:

    s = "abcabcbb"

Step-by-step windows:

    [a]
    [a b]
    [a b c]

Next character:

    [a b c a]

Now the window is invalid because `a` repeats.

Shrink window:

    remove 'a'

Window becomes:

    [b c a]

Continue expanding:

    [b c a b]

Shrink again:

    remove 'b'

Continue this process until the string ends.

Final longest substring length:

    3

---

### 8. JavaScript Implementation Example

Longest substring without repeating characters.

    function longestSubstring(s) {

        let set = new Set()
        let left = 0
        let maxLength = 0

        for (let right = 0; right < s.length; right++) {

            while (set.has(s[right])) {

                set.delete(s[left])
                left++
            }

            set.add(s[right])

            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength
    }

Example:

    s = "abcabcbb"

Output:

    3

Because the longest substring is:

    "abc"

---

### 9. Why Dynamic Window Is Efficient

Without sliding window, many problems require generating all substrings.

Total substrings:

    N²

Checking each substring often takes additional time.

Total complexity can become:

    O(N²) or O(N³)

Dynamic sliding window avoids this.

Because:

- `right` pointer moves forward once
- `left` pointer moves forward once

Total pointer movements:

    ≤ 2N

So the overall complexity becomes:

    O(N)

---

### 10. Common Dynamic Window Problems

Many well-known problems use the dynamic window technique.

Longest Substring Without Repeating Characters

    Find the longest substring with unique characters.

Longest Substring With At Most K Distinct Characters

    Window must contain at most K unique characters.

Minimum Size Subarray Sum

    Find the smallest subarray with sum ≥ target.

Minimum Window Substring

    Find the smallest substring containing all required characters.

Longest Repeating Character Replacement

    Replace at most K characters to get longest repeating substring.

These problems rely on **expanding and shrinking the window dynamically**.

---

### 11. Key Identification Signals

When reading a problem, watch for these phrases:

    longest
    shortest
    smallest
    at most K
    at least K
    valid window
    invalid window
    substring with condition

These signals usually indicate:

    Dynamic Sliding Window

---

### 12. Visual Mental Model

Example array:

    [1, 2, 3, 4, 5]

Window expansion:

    [1]
    [1 2]
    [1 2 3]

If constraint breaks:

    shrink window

Example:

    remove 1

Window becomes:

    [2 3]

Continue expanding:

    [2 3 4]
    [2 3 4 5]

The window continuously **expands and shrinks** depending on constraints.

---

### 13. Fixed Window vs Dynamic Window

Fixed Window:

    window size = constant

Example:

    subarray of size K

Dynamic Window:

    window size = variable

Example:

    longest substring without repeating characters

In fixed window problems, we only **slide the window**.

In dynamic window problems, we **expand and shrink the window**.

---

### 14. Final Summary

Dynamic Sliding Window is the **most powerful sliding window pattern**.

Key idea:

    window size changes based on constraints

Typical use cases:

    longest substring
    shortest subarray
    at most K elements
    valid / invalid window conditions

Core process:

    expand window
    check condition
    shrink if invalid
    update answer

Time complexity for most dynamic window problems:

    O(N)

Because each element enters and leaves the window **at most once**.

This pattern solves many important array and string problems efficiently.
