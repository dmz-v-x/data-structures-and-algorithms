## Moore Voting Algorithm - Part 2

### 1. Introduction

This blog explains the extended version of Moore’s Voting Algorithm used to solve:

Majority Element II

Problem:

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Unlike the classic majority problem (n/2), this variation may return multiple answers.

Time Complexity: O(n)  
Space Complexity: O(1)

---

### 2. Problem Statement

Given an array of integers, return all elements that appear more than ⌊ n/3 ⌋ times.

Example:

    Input:  [3, 2, 3]
    Output: [3]

Array length = 3  
n/3 = 1  

Element 3 appears 2 times, which is greater than 1.

---

### 3. Key Observation (Most Important Insight)

There can be at most TWO elements that appear more than n/3 times.

Reason:

Assume three elements each appear more than n/3 times:

    freq(A) > n/3
    freq(B) > n/3
    freq(C) > n/3

Then total frequency:

    freq(A) + freq(B) + freq(C) > n

Which is impossible.

Therefore:

Maximum possible majority elements = 2

---

### 4. Core Intuition

The cancellation idea still applies.

But now:

We must track TWO dominant candidates.

Instead of one candidate and one counter, we use:

    candidate1, count1
    candidate2, count2

Non-matching elements reduce counts via cancellation.

---

### 5. Algorithm Idea

We maintain:

    candidate1, count1
    candidate2, count2

Rules while traversing the array:

1. If element matches candidate1  
   → Increment count1

2. Else if element matches candidate2  
   → Increment count2

3. Else if count1 == 0  
   → candidate1 = element, count1 = 1

4. Else if count2 == 0  
   → candidate2 = element, count2 = 1

5. Else  
   → Decrement both count1 and count2

This simulates cancellation.

---

### 6. Step-by-Step Example

Array:

    [1, 2, 3, 1, 2, 1, 1]

Length = 7  
n/3 = 2  

We look for elements appearing more than 2 times.

---

Start:

    candidate1 = None, count1 = 0
    candidate2 = None, count2 = 0

---

Step → 1

    count1 == 0 → candidate1 = 1, count1 = 1

Step → 2

    count2 == 0 → candidate2 = 2, count2 = 1

Step → 3

    matches neither → decrement both
    count1 = 0, count2 = 0

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

---

### 7. Why Verification is Necessary

The algorithm only finds potential candidates.

We must verify actual frequencies.

Count occurrences:

    freq(1) = 4
    freq(2) = 2

Threshold = 2

Valid result:

    [1]

---

### 8. Why the Algorithm Works

Each time we encounter a third distinct element:

It cancels one vote from both candidates.

Since an element appearing more than n/3 times cannot be fully cancelled, it survives.

Tracking two candidates is sufficient due to the key observation.

---

### 9. Pseudocode

    candidate1 = None, count1 = 0
    candidate2 = None, count2 = 0

    for element in array:

        if element == candidate1:
            count1 += 1

        else if element == candidate2:
            count2 += 1

        else if count1 == 0:
            candidate1 = element
            count1 = 1

        else if count2 == 0:
            candidate2 = element
            count2 = 1

        else:
            count1 -= 1
            count2 -= 1

---

### 10. Verification Pseudocode

    result = []

    if freq(candidate1) > n/3:
        add candidate1

    if freq(candidate2) > n/3:
        add candidate2

---

### 11. JavaScript Implementation

    function majorityElement(nums) {
        let candidate1 = null, count1 = 0;
        let candidate2 = null, count2 = 0;

        for (let num of nums) {

            if (num === candidate1) {
                count1++;
            } 
            else if (num === candidate2) {
                count2++;
            } 
            else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } 
            else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } 
            else {
                count1--;
                count2--;
            }
        }

        let result = [];
        let threshold = Math.floor(nums.length / 3);

        let freq1 = 0, freq2 = 0;

        for (let num of nums) {
            if (num === candidate1) freq1++;
            if (num === candidate2) freq2++;
        }

        if (freq1 > threshold) result.push(candidate1);
        if (freq2 > threshold) result.push(candidate2);

        return result;
    }

---

### 12. Important Takeaways

There can be at most two elements greater than n/3.

We extend Moore’s Voting by tracking two candidates.

Cancellation logic still applies.

Verification pass is mandatory.

The algorithm maintains constant space.
