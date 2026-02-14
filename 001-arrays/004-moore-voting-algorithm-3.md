## Moore Voting Algorithm - Part 3

### 1. Introduction

This blog explains the next logical extension of Moore’s Voting Algorithm:

Finding all elements that appear more than ⌊ n/4 ⌋ times.

Problem:

Given an integer array of size n, return all elements whose frequency is greater than n/4.

This variation is part of the generalized majority element family.

Time Complexity: O(n)  
Space Complexity: O(1)

---

### 2. Problem Statement

Given an array of integers, return all elements that appear more than ⌊ n/4 ⌋ times.

Example:

    Input:  [1, 2, 3, 1, 2, 1, 1]
    Output: [1]

Array length = 7  
n/4 = 1.75 → floor = 1  

We look for elements appearing more than 1 time.

Element 1 appears 4 times.

---

### 3. Key Observation (Critical Insight)

There can be at most THREE elements that appear more than n/4 times.

Reason:

Assume four elements each appear more than n/4 times:

    freq(A) > n/4
    freq(B) > n/4
    freq(C) > n/4
    freq(D) > n/4

Then:

    freq(A) + freq(B) + freq(C) + freq(D) > n

Impossible.

Therefore:

Maximum majority elements = 3

General rule:

For threshold n/k → track at most k−1 candidates.

---

### 4. Core Intuition

The cancellation idea still applies.

But now we track THREE dominant candidates.

We maintain:

    candidate1, count1
    candidate2, count2
    candidate3, count3

Non-matching elements reduce counts through cancellation.

---

### 5. Algorithm Idea

Maintain three candidates and their counters.

Rules while traversing:

1. If element matches any candidate  
   → Increment its count

2. Else if any count is 0  
   → Replace that candidate

3. Else  
   → Decrement all counts

This models multi-way cancellation.

---

### 6. Step-by-Step Example

Array:

    [1, 2, 3, 4, 1, 2, 1, 1]

Length = 8  
n/4 = 2  

We look for elements appearing more than 2 times.

---

Start:

    candidate1 = None, count1 = 0
    candidate2 = None, count2 = 0
    candidate3 = None, count3 = 0

---

Step → 1

    count1 == 0 → candidate1 = 1, count1 = 1

Step → 2

    count2 == 0 → candidate2 = 2, count2 = 1

Step → 3

    count3 == 0 → candidate3 = 3, count3 = 1

Step → 4

    matches none → decrement all
    count1 = 0, count2 = 0, count3 = 0

Step → 1

    count1 == 0 → candidate1 = 1, count1 = 1

Step → 2

    count2 == 0 → candidate2 = 2, count2 = 1

Step → 1

    matches candidate1 → count1 = 2

Step → 1

    matches candidate1 → count1 = 3

Final candidates:

    candidate1 = 1
    candidate2 = 2
    candidate3 = 3 (or previous residual)

---

### 7. Verification Step

We must count frequencies.

Threshold = 2

    freq(1) = 4 → valid
    freq(2) = 2 → not valid
    freq(3) = 1 → not valid

Result:

    [1]

---

### 8. Why the Algorithm Works

Whenever we encounter a new distinct element:

It cancels votes from all tracked candidates.

Only elements with sufficiently high frequency survive.

Tracking k−1 candidates guarantees capturing all elements greater than n/k.

---

### 9. Pseudocode

    candidate1, count1 = None, 0
    candidate2, count2 = None, 0
    candidate3, count3 = None, 0

    for element in array:

        if element == candidate1:
            count1 += 1

        else if element == candidate2:
            count2 += 1

        else if element == candidate3:
            count3 += 1

        else if count1 == 0:
            candidate1 = element
            count1 = 1

        else if count2 == 0:
            candidate2 = element
            count2 = 1

        else if count3 == 0:
            candidate3 = element
            count3 = 1

        else:
            count1 -= 1
            count2 -= 1
            count3 -= 1

---

### 10. Verification Pseudocode

    result = []

    if freq(candidate1) > n/4:
        add candidate1

    if freq(candidate2) > n/4:
        add candidate2

    if freq(candidate3) > n/4:
        add candidate3

---

### 11. JavaScript Implementation

    function majorityElementNby4(nums) {
        let candidate1 = null, count1 = 0;
        let candidate2 = null, count2 = 0;
        let candidate3 = null, count3 = 0;

        for (let num of nums) {

            if (num === candidate1) {
                count1++;
            } 
            else if (num === candidate2) {
                count2++;
            } 
            else if (num === candidate3) {
                count3++;
            } 
            else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } 
            else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } 
            else if (count3 === 0) {
                candidate3 = num;
                count3 = 1;
            } 
            else {
                count1--;
                count2--;
                count3--;
            }
        }

        let threshold = Math.floor(nums.length / 4);
        let result = [];

        let freq1 = 0, freq2 = 0, freq3 = 0;

        for (let num of nums) {
            if (num === candidate1) freq1++;
            if (num === candidate2) freq2++;
            if (num === candidate3) freq3++;
        }

        if (freq1 > threshold) result.push(candidate1);
        if (freq2 > threshold) result.push(candidate2);
        if (freq3 > threshold) result.push(candidate3);

        return result;
    }

---

### 12. Important Takeaways

For threshold n/k → track k−1 candidates.

For n/4 → track 3 candidates.

Cancellation logic generalizes naturally.

Verification pass remains mandatory.

Space usage remains constant.
