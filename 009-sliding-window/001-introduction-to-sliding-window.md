## Sliding Window Algorithm

Before learning the sliding window algorithm, we must first understand **why this technique exists** and **what problem it solves**.

Many array and string problems require us to work with **subarrays** or **substrings**.

Examples:

- Find the **maximum sum of a subarray**
- Find the **longest substring without repeating characters**
- Find the **number of subarrays with sum ≤ K**
- Find the **maximum number of vowels in a substring**

A beginner's first instinct is usually to **generate every possible subarray**.

That approach works, but it is often **very inefficient**.

---

### 1. The Naive Thinking

Suppose we have:

    arr = [2, 1, 5, 1, 3, 2]
    k = 3

Question:

> Find the maximum sum of any subarray of size `k`.

A beginner solution is:

1. Start at index `0`
2. Calculate sum of `[0..k-1]`
3. Move start to `1`
4. Recalculate sum of `[1..k]`
5. Continue

Example windows:

    [2,1,5] → sum = 8
    [1,5,1] → sum = 7
    [5,1,3] → sum = 9
    [1,3,2] → sum = 6

But notice something important.

Every time we move the window, we **recalculate everything again**.

That means we repeatedly compute values we **already computed before**.

This leads to unnecessary work.

Time complexity becomes:

    O(N * K)

Or in many problems:

    O(N²)

---

### 2. The Sliding Window Insight

Instead of recomputing everything, we ask a powerful question:

> Can we reuse the previous computation?

If we already know the sum of:

    [2,1,5]

And we move one step forward to:

    [1,5,1]

Look closely at what changed.

    Old window : [2,1,5]
    New window : [1,5,1]

Only two things changed:

1. `2` left the window
2. `1` entered the window

So instead of recomputing the whole sum:

    1 + 5 + 1

We can do:

    newSum = oldSum - elementLeaving + elementEntering

Example:

    oldSum = 8

    newSum = 8 - 2 + 1
           = 7

This idea is the **core insight of sliding window**.

We **reuse previous computation**.

---

### 3. Core Idea (Mental Model)

Sliding Window means:

    Maintain a continuous range of elements
    Expand the window
    Shrink the window
    Reuse previous computation
    Avoid recomputing subarrays

Instead of brute force.

Think of a window like this:

    [ i ........ j ]

Where:

- `i` = window start
- `j` = window end

The window represents a **subarray or substring**.

---

### 4. Expanding the Window

Sometimes we **grow the window**.

Example:

    [i .... j]

Expanding:

    [i ...... j+1]

This is called **window expansion**.

We include a new element.

---

### 5. Shrinking the Window

Sometimes the window becomes **invalid** (too big, too many characters, sum exceeded, etc.).

So we shrink it.

    [i .... j]

Becomes:

    [i+1 .. j]

We remove the left element.

---

### 6. Why It Is Called "Sliding Window"

Imagine a window sliding across the array.

    Array = [1,2,3,4,5]
    Window size = 3

Step 1

    [1 2 3] 4 5

Step 2

    1 [2 3 4] 5

Step 3

    1 2 [3 4 5]

The window **slides forward**.

---

### 7. Complexity Advantage

Without sliding window:

    Generate all subarrays
    Recalculate values repeatedly

Time complexity:

    O(N²)

With sliding window:

    Adjust boundaries
    Reuse computation

Time complexity often becomes:

    O(N)

Because each element is usually processed **at most twice**:

- once when **entering the window**
- once when **leaving the window**

---

### 8. The Golden Mindset

Whenever you see a problem involving:

- subarrays
- substrings
- continuous segments
- range conditions

Ask this question:

    How can I reuse previous window computation?

Instead of recomputing everything.

That single mindset unlocks many optimal solutions.

---

### 9. Visual Mental Model

Think of sliding window like this:

    Array
    --------------------------------
    | 1 | 3 | 2 | 5 | 7 | 2 | 6 | 4 |
    --------------------------------

    Window
            [ 2 | 5 | 7 ]

The window moves while adjusting boundaries.

    Expand → include element
    Shrink → remove element
    Update answer

---

### 10. When Sliding Window Is Used

Sliding window is commonly used when a problem involves:

#### Continuous segments

Examples:

- subarray
- substring
- contiguous range

#### Constraints on the segment

Examples:

- sum ≤ K
- at most K distinct characters
- exactly K distinct characters
- window size = K
- no duplicates

#### Optimization problems

Examples:

- longest substring
- smallest window
- maximum sum
- minimum length

---

### 11. Key Signals That Sliding Window Is Needed

When you read a problem and see phrases like:

    subarray
    substring
    contiguous
    longest
    shortest
    maximum
    minimum
    window

Your brain should immediately think:

    Can sliding window solve this?

---

### 12. Final Summary

Sliding Window is based on a powerful optimization idea.

Instead of recomputing subarrays repeatedly:

    Brute force → recomputation → O(N²)

We maintain a **dynamic window**.

    Expand window
    Shrink window
    Reuse previous work

Which often reduces complexity to:

    O(N)

Golden mindset:

    "How can I reuse previous window computation?"
