## Sliding Window Algorithm — Pattern 1: Longest Problems

One of the most common sliding window patterns is solving **longest** problems.

These problems ask us to find the **maximum length subarray or substring** that satisfies some condition.

The key goal is always:

    maximize the window length

Instead of trying every possible subarray, sliding window allows us to **expand the window greedily** and only shrink when necessary.

This makes the solution efficient and usually reduces time complexity to:

    O(N)

---

### 1. How to Recognize Longest Window Problems

Longest sliding window problems usually contain phrases like:

    longest subarray
    longest substring
    maximum length
    maximum window size

Examples of typical problems:

    longest substring without repeating characters
    longest substring with at most K distinct characters
    longest subarray with sum ≤ K
    longest repeating character replacement

The common idea in all these problems is:

    find the largest window that remains valid

---

### 2. Core Strategy for Longest Problems

The strategy for longest problems is very consistent.

    Expand greedily
    Shrink only when invalid

Explanation:

Expand the window as much as possible to increase its size.

When the constraint breaks, shrink the window until it becomes valid again.

This ensures the window remains **as large as possible**.

---

### 3. Why Greedy Expansion Works

When solving longest problems, we want the window to grow as large as possible.

So we always try to:

    expand first

Example array:

    [1,2,3,4,5]

Window growth:

    [1]
    [1,2]
    [1,2,3]

The window keeps growing while the constraint remains valid.

This greedy expansion helps explore the **largest possible window quickly**.

---

### 4. When Do We Shrink the Window

Shrinking happens **only when the window becomes invalid**.

Example constraint:

    sum ≤ 6

Example array:

    [2,1,3,4]

Expansion:

    [2] → sum = 2
    [2,1] → sum = 3
    [2,1,3] → sum = 6

Still valid.

Next expansion:

    [2,1,3,4] → sum = 10

Now the window becomes invalid.

We shrink:

    remove 2

Window becomes:

    [1,3,4]

Now the constraint may become valid again.

---

### 5. Updating the Result

In longest problems, we track the **maximum window length**.

Window length formula:

    length = right - left + 1

After confirming the window is valid, we update the result.

Example:

    maxLength = Math.max(maxLength, right - left + 1)

This keeps track of the **largest valid window encountered**.

---

### 6. General Template for Longest Problems

Most longest sliding window problems follow this structure.

    function longestWindow(arr) {

        let left = 0
        let result = 0

        for (let right = 0; right < arr.length; right++) {

            // expand window
            add(arr[right])

            while (windowIsInvalid) {

                remove(arr[left])
                left++
            }

            result = Math.max(result, right - left + 1)
        }

        return result
    }

Important observations:

    right pointer expands window
    left pointer shrinks window only when needed

---

### 7. Example — Longest Substring Without Repeating Characters

Problem:

> Find the longest substring without repeating characters.

Example:

    s = "abcabcbb"

Window progression:

    [a]
    [a b]
    [a b c]

Next step:

    [a b c a]

Now the window becomes invalid because `a` repeats.

Shrink:

    remove first 'a'

Window becomes:

    [b c a]

Continue expanding and shrinking as needed.

Final result:

    longest length = 3

Substring:

    "abc"

---

### 8. Visual Mental Model

Imagine a window stretching across the array.

Example:

    arr = [1,2,3,4,5]

Window expansion:

    [1]
    [1 2]
    [1 2 3]
    [1 2 3 4]

If the constraint breaks:

    shrink window

Example:

    remove 1

Window becomes:

    [2 3 4]

Then expansion continues.

The window continuously adjusts while trying to remain **as large as possible**.

---

### 9. Key Insight for Longest Problems

The most important insight is:

    never shrink a valid window

Shrinking reduces the window size.

Since our goal is to **maximize window length**, shrinking should happen **only when absolutely necessary**.

Correct approach:

    expand greedily
    shrink only when invalid

---

### 10. Common Problems Using This Pattern

Many well-known sliding window problems follow the longest pattern.

Examples:

Longest Substring Without Repeating Characters

    maintain unique characters in window

Longest Substring With At Most K Distinct Characters

    maintain distinct count ≤ K

Longest Repeating Character Replacement

    replace at most K characters

Longest Subarray With Sum ≤ K

    maintain running sum constraint

These problems all try to **maximize window length while respecting constraints**.

---

### 11. Identification Trick

When reading a problem, check if it asks for:

    longest
    maximum length
    largest window

If the answer is yes, the sliding window approach is usually:

    expand greedily
    shrink only when invalid

---

### 12. Final Summary

Longest sliding window problems aim to:

    maximize the window size

Key strategy:

    expand window greedily

Shrink the window **only when the constraint is violated**.

Core logic:

    Expand → right++
    If invalid → Shrink → left++

Always update the result using:

    maxLength = Math.max(maxLength, right - left + 1)

This pattern solves many substring and subarray problems efficiently in:

    O(N)
