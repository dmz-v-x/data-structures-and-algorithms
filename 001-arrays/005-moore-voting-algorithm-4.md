## Generalized Moore Voting Algorithm

### 1. Introduction

This blog explains the fully generalized version of Moore’s Voting Algorithm:

Finding all elements that appear more than ⌊ n/k ⌋ times.

Problem:

Given an integer array of size n, return all elements whose frequency is greater than n/k.

This is known as the Generalized Boyer–Moore Majority Vote Algorithm.

Time Complexity: O(n)  
Space Complexity: O(k)

Note: Unlike earlier variations (n/2, n/3, n/4), space now depends on k.

---

### 2. Problem Statement

Given an array of integers and a number k, return all elements that appear more than ⌊ n/k ⌋ times.

Example:

    Input:  nums = [1,1,1,2,2,3,3,3], k = 3
    Output: [1, 3]

Array length = 8  
n/k = 8/3 = 2  

Elements appearing more than 2 times:

    1 → 3 times
    3 → 3 times

---

### 3. Key Observation (Critical Insight)

There can be at most (k − 1) elements that appear more than n/k times.

Reason:

Assume k elements each appear more than n/k times:

    freq(A1) > n/k
    freq(A2) > n/k
    ...
    freq(Ak) > n/k

Then:

    freq(A1) + freq(A2) + ... + freq(Ak) > n

Impossible.

Therefore:

Maximum majority elements = k − 1

This defines how many candidates we must track.

---

### 4. Core Intuition

Cancellation logic still applies.

Whenever we encounter an element that is not among tracked candidates:

It reduces the influence of existing candidates.

Only elements with sufficiently high frequency survive repeated cancellations.

---

### 5. Algorithm Idea

Maintain:

    k − 1 candidates
    k − 1 counters

Rules while traversing:

1. If element matches an existing candidate  
   → Increment its counter

2. Else if there is an empty slot (counter = 0)  
   → Add as new candidate

3. Else  
   → Decrement all counters

This simulates multi-way cancellation.

---

### 6. Conceptual Example

Array:

    [A, B, C, D, A, B, A, A]

Let k = 4

Threshold = n/4

We track 3 candidates.

When a new distinct element appears and no slot is free:

All counters decrease.

Frequent elements survive longer.

---

### 7. Why Verification is Mandatory

The algorithm finds potential candidates, not guaranteed answers.

We must verify actual frequencies.

Final step:

Count occurrences of each candidate.

Return only those exceeding n/k.

---

### 8. Why the Algorithm Works

Each decrement step represents cancelling k distinct elements.

Elements appearing more than n/k times cannot be fully eliminated.

Tracking k − 1 candidates guarantees capturing all valid answers.

---

### 9. Pseudocode

    Create empty map: candidates

    for element in array:

        if element exists in candidates:
            increment its count

        else if candidates.size < k - 1:
            add element with count = 1

        else:
            decrement count of all candidates

            remove candidates with count = 0

---

### 10. Verification Pseudocode

    result = []

    for each candidate:
        if frequency(candidate) > n/k:
            add to result

---

### 11. JavaScript Implementation

    function majorityElementNbyK(nums, k) {
        const candidates = new Map();

        for (let num of nums) {

            if (candidates.has(num)) {
                candidates.set(num, candidates.get(num) + 1);
            } 
            else if (candidates.size < k - 1) {
                candidates.set(num, 1);
            } 
            else {
                for (let [key, value] of candidates) {
                    if (value === 1) {
                        candidates.delete(key);
                    } else {
                        candidates.set(key, value - 1);
                    }
                }
            }
        }

        const result = [];
        const threshold = Math.floor(nums.length / k);

        for (let candidate of candidates.keys()) {

            let freq = 0;

            for (let num of nums) {
                if (num === candidate) freq++;
            }

            if (freq > threshold) {
                result.push(candidate);
            }
        }

        return result;
    }

---

### 13. Important Takeaways

For threshold n/k → maximum answers = k − 1.

We must track k − 1 candidates.

Cancellation logic generalizes naturally.

Verification pass is always required.

Space complexity becomes O(k).
