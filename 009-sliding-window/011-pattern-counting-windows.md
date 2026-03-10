## Sliding Window Algorithm — Pattern 5: Counting Windows

Another important sliding window pattern involves **counting the number of valid windows**.

Instead of asking for the **longest** or **shortest** window, these problems ask:

    how many subarrays satisfy a condition?
    how many substrings satisfy a rule?

So the goal becomes **counting all valid windows efficiently**.

A key insight in these problems is that when a window is valid, **multiple subarrays ending at the current position are automatically valid**.

This allows us to count many windows at once instead of checking them individually.

---

### 1. How to Recognize Counting Window Problems

These problems usually contain phrases like:

    count subarrays
    number of substrings
    how many subarrays
    total number of valid windows

Examples:

    number of subarrays with sum ≤ K
    number of substrings with at most K distinct characters
    count subarrays with product < K
    count binary subarrays with sum = K
    number of nice subarrays

These problems ask for a **count of windows**, not just one window.

---

### 2. The Core Insight

The key idea behind counting windows is this.

If a window:

    [ left .... right ]

is valid, then **all subarrays ending at `right` and starting between `left` and `right` are also valid**.

Example:

    arr = [1,2,3]

Window:

    [1,2,3]

If this window is valid, then the following subarrays are valid:

    [1,2,3]
    [2,3]
    [3]

That means:

    right - left + 1

valid windows end at position `right`.

Instead of counting one by one, we add them together.

---

### 3. Counting Formula

Whenever the window is valid, we add:

    right - left + 1

to the result.

Why?

Because there are exactly:

    right - left + 1

subarrays that end at `right`.

These represent all possible starting points between:

    left → right

---

### 4. Example — Count Subarrays With Sum ≤ K

Example:

    arr = [1,2,1]
    K = 3

Process:

Start:

    right = 0

Window:

    [1]

Valid.

Count:

    1

Subarrays:

    [1]

---

Next:

    right = 1

Window:

    [1,2]

Valid.

Subarrays ending at index 1:

    [1,2]
    [2]

Count added:

    2

---

Next:

    right = 2

Window:

    [1,2,1]

Sum = 4 → invalid.

Shrink:

    remove 1

Window:

    [2,1]

Valid.

Subarrays ending at index 2:

    [2,1]
    [1]

Count added:

    2

---

### 5. Example — Count Subarrays With Product < K

Problem:

> Count the number of subarrays where product < K.

Example:

    arr = [10,5,2,6]
    K = 100

Process:

Window expansion:

    [10] → valid

Count added:

    1

Subarrays:

    [10]

---

Next:

    [10,5]

Product = 50

Count added:

    2

Subarrays:

    [10,5]
    [5]

---

Next:

    [10,5,2]

Product = 100 → invalid.

Shrink window.

Window becomes:

    [5,2]

Product = 10

Count added:

    2

Subarrays:

    [5,2]
    [2]

This counting trick avoids generating all subarrays.

---

### 6. General Template for Counting Windows

Most counting problems follow this structure.

    function countWindows(arr) {

        let left = 0
        let count = 0

        for (let right = 0; right < arr.length; right++) {

            add(arr[right])

            while (windowIsInvalid) {

                remove(arr[left])
                left++
            }

            count += right - left + 1
        }

        return count
    }

Important idea:

    every valid window contributes multiple subarrays

---

### 7. Why the Formula Works

Consider a window:

    [ left .... right ]

Possible subarrays ending at `right`:

    arr[right]
    arr[right-1 .. right]
    arr[right-2 .. right]
    ...
    arr[left .. right]

Total:

    right - left + 1

This formula efficiently counts them all at once.

---

### 8. Visual Example

Array:

    [1,2,3]

If the window is:

    [1,2,3]

Valid subarrays ending at index 2:

    [3]
    [2,3]
    [1,2,3]

Total:

    3

Which equals:

    right - left + 1

---

### 9. Common Problems Using This Pattern

Many well-known problems rely on counting valid windows.

Examples:

Subarrays With At Most K Distinct Integers

    maintain frequency map

Count Substrings With At Most K Distinct Characters

    similar logic applied to strings

Subarray Product Less Than K

    maintain running product

Binary Subarrays With Sum ≤ K

    maintain running sum

Nice Subarrays

    use odd number counting

Many of these problems combine this pattern with the **At Most K technique**.

---

### 10. Relationship With Exact K Problems

Some counting problems require:

    exactly K

These are often solved using:

    AtMost(K) - AtMost(K-1)

Each `AtMost` calculation uses the **counting window formula**:

    count += right - left + 1

So this pattern becomes the **foundation for many advanced sliding window problems**.

---

### 11. Identification Trick

When reading a problem, look for phrases like:

    count subarrays
    number of substrings
    total windows
    how many substrings

If the problem asks for **a count instead of a specific window**, the sliding window strategy often uses:

    count += right - left + 1

---

### 12. Final Summary

Counting window problems ask us to determine:

    how many subarrays or substrings satisfy a condition

Key insight:

If the current window is valid:

    all subarrays ending at right are also valid

So we add:

    right - left + 1

to the total count.

General approach:

    expand window
    shrink if invalid
    count valid windows

This pattern allows counting valid windows efficiently in:

    O(N)

instead of generating all subarrays, which would take:

    O(N²)
