## Sliding Window Algorithm — Expand & Shrink Mechanism

At the heart of every sliding window algorithm lies a very simple but powerful idea:

A window moves across the array using **two pointers**.

One pointer controls **expansion**, and the other controls **shrinking**.

This mechanism allows us to explore all possible valid windows **without recomputing everything from scratch**.

The core rule behind sliding window movement is extremely simple.

Universal logic:

    Expand → right++
    Shrink → left++

However, shrinking does **not happen all the time**.

Shrinking only happens when the **window violates a constraint**.

---

### 1. Understanding the Window Boundaries

Every sliding window uses two indices:

    left  → start of the window
    right → end of the window

The current window always represents:

    [ left .... right ]

Example array:

    arr = [1,2,3,4,5]

If:

    left = 1
    right = 3

Then the window contains:

    [2,3,4]

The goal of the sliding window algorithm is to **move these boundaries efficiently**.

---

### 2. Expand Operation

Expanding the window means moving the **right pointer forward**.

Operation:

    right++

This adds a new element into the window.

Example:

    arr = [1,2,3,4,5]

Initial window:

    [1]

Expansion:

    [1,2]

Another expansion:

    [1,2,3]

Each expansion introduces a **new element into the window state**.

During expansion we typically update things like:

- sum
- frequency
- counts
- product

Example with sum:

    windowSum += arr[right]

---

### 3. Shrink Operation

Shrinking the window means moving the **left pointer forward**.

Operation:

    left++

This removes the leftmost element from the window.

Example:

Initial window:

    [1,2,3,4]

Shrink:

    [2,3,4]

Shrink again:

    [3,4]

During shrinking we must **remove the element from the window state**.

Example:

    windowSum -= arr[left]

Then move the pointer.

---

### 4. When Should We Shrink the Window

The most important rule in sliding window is:

    shrink only when the constraint is violated

The window expands normally until a rule breaks.

When the rule breaks, we **shrink the window until the rule becomes valid again**.

Example constraint:

    sum ≤ K

Example array:

    arr = [2,1,5,1,3]

Target:

    sum ≤ 6

Process:

Window expands:

    [2]       sum = 2
    [2,1]     sum = 3
    [2,1,5]   sum = 8  ← constraint violated

Now we must shrink.

Remove 2:

    [1,5]     sum = 6

Now the window becomes valid again.

---

### 5. Expand First, Shrink If Needed

Most sliding window algorithms follow this exact pattern.

Step 1 — Expand the window

    right++

Step 2 — Update the window state

Step 3 — Check constraint

If constraint is violated:

    shrink window

Example structure:

    while (windowIsInvalid) {
        remove(arr[left])
        left++
    }

Step 4 — Update result

This pattern appears in **most dynamic sliding window problems**.

---

### 6. Visual Example

Array:

    [1,2,3,4,5]

Constraint:

    sum ≤ 7

Process:

Start:

    [1]

Expand:

    [1,2]

Expand:

    [1,2,3]

Expand:

    [1,2,3,4]  ← sum = 10 (invalid)

Shrink:

    remove 1

New window:

    [2,3,4]  ← sum = 9 (still invalid)

Shrink again:

    remove 2

New window:

    [3,4]  ← valid

Then expansion continues.

---

### 7. General Sliding Window Template

Almost every sliding window problem follows this structure.

    function slidingWindow(arr) {

        let left = 0

        for (let right = 0; right < arr.length; right++) {

            // expand window
            add(arr[right])

            while (windowIsInvalid) {

                // shrink window
                remove(arr[left])
                left++
            }

            // update result
        }
    }

Key observations:

- `right` moves forward every iteration
- `left` moves forward only when needed

Neither pointer ever moves backward.

---

### 8. Why This Mechanism Is Efficient

Without sliding window, we might generate all subarrays.

Total subarrays:

    N²

Checking each window might take additional time.

Total complexity:

    O(N²) or worse

With expand and shrink mechanism:

- `right` pointer moves at most `N` times
- `left` pointer moves at most `N` times

Total operations:

    ≤ 2N

So the time complexity becomes:

    O(N)

---

### 9. Key Mental Model

Think of the window as a **rubber band**.

It stretches when expanding.

    expand → right++

It tightens when constraints break.

    shrink → left++

The window constantly adjusts its size while scanning the array.

---

### 10. Identification Trick

Whenever you see problems involving:

    longest substring
    shortest subarray
    at most K
    valid window condition
    constraint based window

You should think about the **expand and shrink mechanism**.

The solution almost always follows this rule:

    Expand → right++
    Shrink → left++ (only when constraint is violated)

---

### 11. Final Summary

Sliding window movement is controlled by two operations.

Expand operation:

    right++

This adds a new element to the window.

Shrink operation:

    left++

This removes an element from the window.

But shrinking happens **only when the window violates the constraint**.

Universal logic:

    Expand → right++
    Shrink → left++ (only when invalid)

This simple mechanism allows sliding window algorithms to solve many problems efficiently in:

    O(N)
