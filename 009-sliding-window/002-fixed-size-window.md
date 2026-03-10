## Sliding Window Algorithm — Fixed Size Window

Before learning more advanced sliding window patterns, we start with the **simplest and most foundational version** of sliding window.

This is called the **Fixed Size Window**.

In this pattern, the window size **never changes**.

The window simply **slides forward across the array** while maintaining the same length.

This pattern is one of the **most common starting points** for learning sliding window problems.

---

### 1. What Is a Fixed Size Window

A **Fixed Size Window** means the window length is constant.

If the window size is `K`, the window will always contain **exactly K elements**.

Example:

    K = 3
    arr = [2, 1, 5, 1, 3, 2]

Possible windows:

    [2,1,5]
    [1,5,1]
    [5,1,3]
    [1,3,2]

Notice something important.

Each window contains **exactly 3 elements**.

The window size **never increases or decreases**.

It only **slides forward**.

---

### 2. When Fixed Size Window Is Used

This pattern is used when the problem clearly specifies:

- exactly `K` elements
- exactly `K` length
- fixed window size

Typical signals in problems:

    "subarray of size K"
    "substring of length K"
    "average of K elements"
    "maximum sum of K elements"

These phrases strongly indicate a **Fixed Size Sliding Window** solution.

---

### 3. Naive Approach (Brute Force)

Suppose the problem is:

> Find the maximum sum of any subarray of size `K`.

Example:

    arr = [2,1,5,1,3,2]
    K = 3

Brute force approach:

1. Generate every subarray of size `K`
2. Calculate the sum each time

Windows:

    [2,1,5] → sum = 8
    [1,5,1] → sum = 7
    [5,1,3] → sum = 9
    [1,3,2] → sum = 6

But how do we compute the sum?

For each window we calculate:

    sum = arr[i] + arr[i+1] + ... + arr[i+k-1]

So for every window we do **K operations**.

Time complexity:

    O(N * K)

Because:

- There are roughly `N` windows
- Each window takes `K` work

This is inefficient.

---

### 4. Fixed Size Window Optimization

Instead of recomputing the entire window sum every time, we observe something important.

When the window moves one step forward:

Old window:

    [2,1,5]

New window:

    [1,5,1]

Only two elements changed.

    2 → left the window
    1 → entered the window

So instead of recalculating the entire sum:

    1 + 5 + 1

We update the previous sum.

Formula:

    newSum = oldSum - elementLeaving + elementEntering

Example:

    oldSum = 8

    newSum = 8 - 2 + 1
           = 7

This is the key idea behind **Fixed Size Sliding Window**.

---

### 5. Fixed Size Window Algorithm

Steps:

1. Compute the sum of the **first K elements**
2. Store it as the initial window
3. Slide the window forward
4. Subtract the element leaving
5. Add the element entering
6. Update the answer

Visualization:

    arr = [2,1,5,1,3,2]
    K = 3

Step 1

    window = [2,1,5]
    sum = 8

Step 2

    remove 2
    add 1

    window = [1,5,1]
    sum = 7

Step 3

    remove 1
    add 3

    window = [5,1,3]
    sum = 9

Step 4

    remove 5
    add 2

    window = [1,3,2]
    sum = 6

---

### 6. JavaScript Implementation

Example: Maximum sum of subarray of size `K`.

    function maxSumSubarray(arr, k) {

        let windowSum = 0
        let maxSum = 0

        for (let i = 0; i < k; i++) {
            windowSum += arr[i]
        }

        maxSum = windowSum

        for (let i = k; i < arr.length; i++) {

            windowSum = windowSum - arr[i - k] + arr[i]

            maxSum = Math.max(maxSum, windowSum)
        }

        return maxSum
    }

Example run:

    arr = [2,1,5,1,3,2]
    k = 3

Output:

    9

Because the window `[5,1,3]` has the maximum sum.

---

### 7. Time Complexity

Brute force:

    O(N * K)

Sliding window:

    O(N)

Why?

Each element is processed a constant number of times.

Operations per step:

- remove element
- add element

Both take constant time.

---

### 8. Space Complexity

Space complexity is:

    O(1)

Because we only store:

- windowSum
- maxSum
- loop variables

No extra data structures are required.

---

### 9. Common Fixed Window Problems

This pattern appears frequently in many interview problems.

Typical examples include:

Maximum Sum Subarray of Size K

    Find the largest sum of any contiguous subarray of size K.

Average of Subarray of Size K

    Compute the average of each subarray of length K.

Maximum Number of Vowels in Substring of Length K

    Given a string, find the maximum number of vowels in any substring of size K.

First Negative Number in Every Window of Size K

    For each window of size K, find the first negative element.

Count Distinct Elements in Every Window of Size K

    Determine how many distinct numbers appear in each window.

These problems all share the same idea:

    window length is fixed

---

### 10. Visual Mental Model

Think of a window sliding across the array.

    arr = [2,1,5,1,3,2]
    K = 3

Step 1

    [2 1 5] 1 3 2

Step 2

    2 [1 5 1] 3 2

Step 3

    2 1 [5 1 3] 2

Step 4

    2 1 5 [1 3 2]

The window size **never changes**.

Only the **position changes**.

---

### 11. Key Identification Trick

When reading a problem, ask this question:

    Does the window size stay constant?

If the answer is **yes**, then the problem likely uses:

    Fixed Size Sliding Window

Common keywords:

    "size K"
    "length K"
    "exactly K elements"
    "substring of length K"

---

### 12. Final Summary

Fixed Size Sliding Window is the **simplest sliding window pattern**.

Key characteristics:

    Window size = constant
    Window only slides forward
    Remove one element
    Add one element

Instead of recomputing the window repeatedly:

    O(N * K)

We reuse previous computation:

    newSum = oldSum - elementLeaving + elementEntering

Which reduces complexity to:

    O(N)

This pattern is the **foundation for understanding more advanced sliding window problems**.
