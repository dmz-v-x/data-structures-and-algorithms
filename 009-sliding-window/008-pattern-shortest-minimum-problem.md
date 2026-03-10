## Sliding Window Algorithm — Pattern 2: Shortest / Minimum Problems

Another important sliding window pattern focuses on **minimum or shortest window problems**.

In these problems, the goal is not to maximize the window size, but instead to **find the smallest possible window that satisfies a condition**.

These problems typically involve finding:

- the **minimum length substring**
- the **smallest subarray**
- the **shortest window that satisfies a constraint**

Unlike longest problems, where we expand greedily, shortest problems require a different mindset.

The goal becomes:

    find a valid window
    then shrink it as much as possible

---

### 1. How to Recognize Shortest Window Problems

Shortest sliding window problems usually contain phrases like:

    minimum window
    smallest substring
    shortest subarray
    minimum length

Examples of typical problems:

    minimum window substring
    smallest subarray with sum ≥ target
    shortest substring containing all characters
    minimum size subarray sum

The common idea in all these problems is:

    find the smallest valid window

---

### 2. Core Strategy for Shortest Problems

The strategy for shortest problems follows two main steps.

    Expand until valid
    Shrink to optimize

Explanation:

First we expand the window until the constraint becomes **valid**.

Once the window becomes valid, we try to **shrink it from the left** to make it as small as possible.

This process helps us discover the **minimum window that satisfies the condition**.

---

### 3. Why We Expand First

At the beginning, the window usually does **not satisfy the condition**.

Example constraint:

    sum ≥ 7

Example array:

    [2,1,5,2,3]

Expansion:

    [2] → sum = 2
    [2,1] → sum = 3
    [2,1,5] → sum = 8

Now the window becomes **valid**.

We finally have a window satisfying the constraint.

But it might not be the smallest one.

So we try to shrink it.

---

### 4. Shrinking to Optimize

Once the window becomes valid, we attempt to **reduce its size** while keeping it valid.

Example:

Current window:

    [2,1,5] → sum = 8

Window length:

    3

Shrink:

    remove 2

New window:

    [1,5] → sum = 6

Now the window becomes **invalid again**.

So the smallest valid window discovered so far is:

    length = 3

We continue expanding again.

---

### 5. Updating the Result

In shortest problems, we track the **minimum window length**.

Window length formula:

    length = right - left + 1

Whenever the window becomes valid, we update the result.

Example:

    minLength = Math.min(minLength, right - left + 1)

This ensures we keep track of the **smallest valid window found so far**.

---

### 6. General Template for Shortest Problems

Most shortest sliding window problems follow this structure.

    function shortestWindow(arr) {

        let left = 0
        let result = Infinity

        for (let right = 0; right < arr.length; right++) {

            // expand window
            add(arr[right])

            while (windowIsValid) {

                result = Math.min(result, right - left + 1)

                remove(arr[left])
                left++
            }
        }

        return result === Infinity ? 0 : result
    }

Important observations:

    expand until the window becomes valid
    shrink while the window remains valid

---

### 7. Example — Minimum Size Subarray Sum

Problem:

> Find the smallest subarray with sum ≥ target.

Example:

    arr = [2,3,1,2,4,3]
    target = 7

Window expansion:

    [2] → sum = 2
    [2,3] → sum = 5
    [2,3,1] → sum = 6
    [2,3,1,2] → sum = 8

Now the window becomes valid.

Window length:

    4

Shrink:

    remove 2

New window:

    [3,1,2] → sum = 6

Invalid again.

Continue expanding:

    [3,1,2,4] → sum = 10

Shrink repeatedly to find smaller valid windows.

Final result:

    minimum length = 2

Window:

    [4,3]

---

### 8. Visual Mental Model

Imagine expanding the window until the constraint becomes valid.

Example:

    arr = [2,3,1,2,4,3]

Expansion:

    [2]
    [2,3]
    [2,3,1]
    [2,3,1,2]

Now valid.

Then shrink:

    [3,1,2]

Invalid again.

Then expand again:

    [3,1,2,4]

Repeat this process.

The window constantly **expands to find validity and shrinks to minimize size**.

---

### 9. Key Insight for Shortest Problems

The most important insight is:

    shrink as much as possible once the window becomes valid

This is the opposite of longest problems.

Longest problems:

    keep window large

Shortest problems:

    reduce window aggressively

Correct strategy:

    expand until valid
    shrink to optimize

---

### 10. Common Problems Using This Pattern

Many classic interview questions follow the shortest window pattern.

Examples:

Minimum Window Substring

    smallest substring containing all characters of another string

Minimum Size Subarray Sum

    smallest subarray with sum ≥ target

Smallest Substring Containing All Characters

    track required characters using frequency maps

Shortest Subarray With Sum ≥ K

    maintain running sum

All of these problems involve **finding the smallest valid window**.

---

### 11. Identification Trick

When reading a problem, check if it asks for:

    smallest
    minimum
    shortest
    minimum length

If yes, the sliding window approach is usually:

    expand until valid
    shrink to optimize

---

### 12. Final Summary

Shortest sliding window problems aim to:

    minimize the window size

Strategy:

    expand window until it becomes valid

Then:

    shrink the window to make it as small as possible

Core logic:

    Expand → right++
    If valid → Shrink → left++

Always update the result using:

    minLength = Math.min(minLength, right - left + 1)

This pattern efficiently solves minimum window problems in:

    O(N)
