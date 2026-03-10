## Sliding Window Algorithm — Window State Management

In every sliding window problem, the algorithm maintains a **window** that moves across the array or string.

However, simply moving the window is not enough.

We must also **track information about the current window**.

This information is called the **window state**.

Window state tells us:

- whether the current window is **valid**
- whether we should **expand**
- whether we should **shrink**
- whether we should **update the answer**

Without properly managing this state, sliding window algorithms will not work.

---

### 1. What Is Window State

Window state is the **information that describes the current window**.

Example window:

    [ i ........ j ]

The window contains elements between index `i` and `j`.

But we usually need to know something about those elements.

Examples:

- What is the **sum of elements**?
- How many **distinct characters** exist?
- What is the **frequency of characters**?
- What is the **product of numbers**?
- What is the **maximum or minimum value**?

These values form the **state of the window**.

As the window **expands or shrinks**, this state must be **updated correctly**.

---

### 2. Why Window State Is Necessary

Consider a problem:

> Find the longest substring without repeating characters.

To check whether the window is valid, we must know:

    Does the window contain duplicate characters?

To answer that question, we need to track:

    frequency of characters

Without maintaining that state, we cannot determine whether the window is valid.

Another example:

> Find smallest subarray with sum ≥ target.

To check validity, we must know:

    current window sum

So we maintain a **running sum**.

This running sum becomes the **window state**.

---

### 3. Window State Changes During Window Movement

Whenever the window moves, the state must change.

Two types of movements exist.

Window expansion:

    right pointer moves forward

Window shrinking:

    left pointer moves forward

Each movement must update the state.

Example:

    arr = [2,1,5,1,3]

Window:

    [2,1,5]

Current state:

    sum = 8

Expand window:

    add element 1

New state:

    sum = 9

Shrink window:

    remove element 2

New state:

    sum = 7

The state must always reflect the **current window contents**.

---

### 4. Types of Window State Trackers

Different problems require different state trackers.

Common trackers include:

    Sum
    Frequency map
    Distinct count
    Product
    Maximum / Minimum

Each one solves a different category of sliding window problems.

---

### 5. Sum as a Window State

Many problems require tracking the **sum of elements inside the window**.

Example problem:

> Maximum sum subarray of size K

Example:

    arr = [2,1,5,1,3]
    K = 3

Window:

    [2,1,5]

State:

    sum = 8

When window slides:

    remove 2
    add 1

New state:

    sum = 7

Implementation example:

    windowSum = windowSum - arr[left] + arr[right]

This avoids recomputing the sum from scratch.

---

### 6. Frequency Map as a Window State

String problems often require tracking **character frequencies**.

Example problem:

> Longest substring without repeating characters

Example:

    s = "abca"

Window progression:

    [a]
    freq = {a:1}

    [a b]
    freq = {a:1, b:1}

    [a b c]
    freq = {a:1, b:1, c:1}

Next step:

    [a b c a]

Frequency becomes:

    {a:2, b:1, c:1}

Now the window is **invalid** because a character repeats.

So we shrink the window.

Typical structure:

    freq[char] = (freq[char] || 0) + 1

Shrinking:

    freq[s[left]]--
    left++

---

### 7. Distinct Count as a Window State

Some problems require knowing how many **unique elements** exist.

Example problem:

> Longest substring with at most K distinct characters

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

    [e c e b]

Now distinct = 3 → invalid

So we shrink the window until distinct ≤ K.

Tracking distinct values helps enforce the constraint.

---

### 8. Product as a Window State

Sometimes we track the **product of elements**.

Example problem:

> Count subarrays where product < K

Example:

    arr = [10,5,2,6]
    K = 100

Window expansion:

    [10]
    product = 10

    [10,5]
    product = 50

    [10,5,2]
    product = 100

Now product ≥ 100 → invalid

Shrink window:

    remove 10

New window:

    [5,2]

Product:

    10

Product is used to enforce the constraint.

---

### 9. Maximum or Minimum as Window State

Some problems require tracking the **maximum or minimum value** in the window.

Example problem:

> Sliding Window Maximum

Example:

    arr = [1,3,-1,-3,5,3,6,7]
    K = 3

Windows:

    [1,3,-1] → max = 3
    [3,-1,-3] → max = 3
    [-1,-3,5] → max = 5
    [-3,5,3] → max = 5

To maintain max efficiently, special structures such as **monotonic queues** are often used.

The maximum becomes part of the **window state**.

---

### 10. General Sliding Window Template with State

Most sliding window problems follow this structure.

    function slidingWindow(arr) {

        let left = 0

        for (let right = 0; right < arr.length; right++) {

            // update window state
            add(arr[right])

            while (windowIsInvalid) {

                remove(arr[left])
                left++
            }

            // update result
        }
    }

The critical idea is:

    maintain window state correctly

---

### 11. Common Mistakes in Window State Management

Many sliding window bugs occur because the state is not updated properly.

Typical mistakes include:

Forgetting to update state when shrinking window

Example:

    left++

But forgetting:

    sum -= arr[left]

Another mistake:

Incorrect frequency updates.

Example:

    decrement frequency but forgetting to remove zero entries.

These mistakes lead to incorrect window validity checks.

---

### 12. Key Mental Model

Sliding window has two main components:

1. Window movement
2. Window state

Window movement:

    expand
    shrink

Window state:

    sum
    frequency
    counts
    product
    max/min

The algorithm works by constantly keeping the **state consistent with the current window**.

---

### 13. Final Summary

Every sliding window problem requires **state management**.

The state represents **information about the current window**.

Common state trackers include:

    Sum
    Frequency map
    Distinct count
    Product
    Maximum / Minimum

Whenever the window changes:

    update the state

When state violates the constraint:

    shrink the window

Correctly managing this state is the key to implementing sliding window algorithms successfully.
