## Moore's Voting Algorithm

### 1. Introduction

Moore’s Voting Algorithm is an efficient technique used to solve a very common interview problem:

Find the majority element in an array.

A majority element is defined as:

An element that appears more than n/2 times in an array of size n.

The key advantage of this algorithm is:

Time Complexity: O(n)  
Space Complexity: O(1)

---

### 2. Problem Statement

Given an array of integers, return the element that appears more than n/2 times.

Example:

    Input:  [2, 2, 1, 2, 3, 2, 2]
    Output: 2

Array length = 7  
n/2 = 3.5  

Element 2 appears 5 times, which is more than n/2.

---

### 3. The Core Intuition

The algorithm is based on a cancellation idea.

Think of the majority element as a dominant candidate.  
All other elements act as opponents.

Whenever we see:

One majority element  
One non-majority element  

They cancel each other.

Because the majority element appears more than all other elements combined, it will always survive after all cancellations.

Key reasoning:

If an element appears more than n/2 times,  
then its frequency is greater than the sum of frequencies of all other elements.

Therefore, it cannot be completely cancelled.

---

### 4. Cancellation Mental Model

Consider this sequence:

    [A, B, A, C, A, D, A]

Pair cancellations:

    A vs B  → cancel  
    A vs C  → cancel  
    A vs D  → cancel  

Remaining element:

    A

The majority element survives.

---

### 5. Algorithm Idea

We only maintain two variables:

    candidate
    count

Rules while traversing the array:

1. If count becomes 0  
   → Choose a new candidate

2. If current element equals candidate  
   → Increment count

3. If current element differs from candidate  
   → Decrement count

---

### 6. Step-by-Step Example 1

Array:

    [3, 2, 3]

Start:

    candidate = None
    count = 0

Step 1 → element = 3

    count == 0 → pick new candidate
    candidate = 3
    count = 1

Step 2 → element = 2

    2 != 3 → decrement count
    count = 0

Step 3 → element = 3

    count == 0 → pick new candidate
    candidate = 3
    count = 1

Final candidate:

    3

---

### 7. Step-by-Step Example 2

Array:

    [2, 2, 1, 1, 1, 2, 2]

Start:

    candidate = None
    count = 0

Step → 2

    candidate = 2
    count = 1

Step → 2

    same as candidate → count = 2

Step → 1

    different → count = 1

Step → 1

    different → count = 0

Step → 1

    count == 0 → candidate = 1
    count = 1

Step → 2

    different → count = 0

Step → 2

    count == 0 → candidate = 2
    count = 1

Final candidate:

    2

Correct majority element.

---

### 8. Why the Algorithm Works

The majority element appears more than n/2 times.

All other elements combined appear less than n/2 times.

Each cancellation removes one majority and one non-majority element.

Since majority_count > other_count,  
the majority element must remain.

---

### 9. Important Edge Case

Moore’s Voting Algorithm assumes that a majority element exists.

If the problem does not guarantee this, a verification pass is required.

Verification step:

Count occurrences of the candidate.

    If frequency > n/2 → valid majority
    Else → no majority element

---

### 10. Pseudocode

Basic Moore’s Voting logic:

    candidate = None
    count = 0

    for element in array:

        if count == 0:
            candidate = element
            count = 1

        else if element == candidate:
            count += 1

        else:
            count -= 1

    return candidate

---

### 11. Pseudocode with Verification

    candidate = mooreVoting(array)

    frequency = countOccurrences(candidate)

    if frequency > n/2:
        return candidate
    else:
        return -1

---

### 12. JavaScript Implementation

    function majorityElement(nums) {
        let candidate = null;
        let count = 0;

        for (let num of nums) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } 
            else if (num === candidate) {
                count++;
            } 
            else {
                count--;
            }
        }

        return candidate;
    }

---

### 13. JavaScript with Verification

    function majorityElement(nums) {
        let candidate = null;
        let count = 0;

        for (let num of nums) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } 
            else if (num === candidate) {
                count++;
            } 
            else {
                count--;
            }
        }

        let freq = 0;

        for (let num of nums) {
            if (num === candidate) freq++;
        }

        return freq > Math.floor(nums.length / 2)
            ? candidate
            : -1;
    }

---
