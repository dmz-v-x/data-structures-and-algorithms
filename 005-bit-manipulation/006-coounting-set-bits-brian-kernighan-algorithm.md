# Counting Set Bits Using Brian Kernighan’s Algorithm

One of the **most elegant and high-impact bit manipulation algorithms**:

    while (n > 0):
        n = n & (n - 1)
        count++

👉 Counts how many `1` bits exist in a number.

Also known as:

> **Brian Kernighan’s Algorithm**

Let’s understand this from absolute scratch.

---

# Step 1 — What Are Set Bits?

In binary:

- **Set bit** → Bit = `1`
- **Unset bit** → Bit = `0`

Example:

    n = 13 → Binary = 1101

Set bits = **3**

---

# Step 2 — The Naive Approach (What Beginners Usually Do)

Basic method:

👉 Check every bit one by one.

Example logic:

    while (n > 0):
        if (n & 1):
            count++
        n = n >> 1

---

## Problem with This Approach ❌

👉 It checks **every bit position**

For a 32-bit integer:

- Always runs **32 iterations**

Even if only one bit is set.

Inefficient.

---

# Step 3 — The Genius Insight Behind Kernighan’s Algorithm 🔥

We already know:

    n & (n - 1)

👉 Removes the **rightmost set bit**

Meaning:

👉 Instead of scanning bits…

👉 We directly **destroy one set bit per iteration**

---

# Step 4 — How The Algorithm Works

Core idea:

    while (n > 0):
        n = n & (n - 1)
        count++

Each iteration:

✅ Removes ONE set bit  
✅ Increases count  

---

# Step 5 — Visual Example 👀

---

## Example — n = 13

Binary:

    13 → 1101

Set bits = 3

---

### Iteration 1

    1101  (13)
AND 1100  (12)
------------
    1100  (12)

✅ One bit removed

---

### Iteration 2

    1100  (12)
AND 1011  (11)
------------
    1000  (8)

✅ Another bit removed

---

### Iteration 3

    1000  (8)
AND 0111  (7)
------------
    0000  (0)

✅ Last bit removed

Loop ends.

👉 Count = **3**

---

# Step 6 — Why Is This So Efficient? 

👉 Runs only for **number of set bits**

If:

- 1 set bit → 1 iteration
- 3 set bits → 3 iterations
- 10 set bits → 10 iterations

---

## Time Complexity 

    O(number of set bits)

NOT:

    O(total bits)

Huge improvement.

---

# Step 7 — Compare Performance

For 32-bit numbers:

| Method | Iterations |
|----------|-------------|
| Naive bit check | Always 32 |
| Kernighan | Only set bits |

Example:

    n = 8 → 1000

Naive → 32 loops  
Kernighan → 1 loop 🔥

---

# Step 8 — Language Implementations

---

## C / C++

```cpp
int countSetBits(int n) {
    int count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}
```

---

## Java

```java
int countSetBits(int n) {
    int count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}
```

---

## Python

```python
def count_set_bits(n):
    count = 0

    while n > 0:
        n = n & (n - 1)
        count += 1

    return count
```

---

# Step 9 — Why Do Interviewers LOVE This Algorithm

Because it tests:

✅ Bit manipulation fundamentals  
✅ Pattern recognition  
✅ Efficiency thinking  
✅ Understanding of `n & (n - 1)`  

Also appears inside MANY problems:

---

## ✅ Use Case 1 — Hamming Weight

👉 Count number of 1s.

Classic LeetCode problem.

---

## ✅ Use Case 2 — Power of 2 Check

    countSetBits(n) == 1

---

## ✅ Use Case 3 — Subset / Bitmask Problems

Used in:

- DP with bitmask
- State compression
- Graph problems

---

## ✅ Use Case 4 — XOR / Unique Element Problems

Often combined with XOR tricks.

---

# Step 10 — Common Beginner Mistakes

---

## ❌ Mistake 1 — Using wrong loop condition

Wrong ❌

    while (n >= 0)

Correct ✅

    while (n > 0)

---

## ❌ Mistake 2 — Confusing with shifting approach

This algorithm does NOT shift bits.

It **removes bits directly**.

---

## ❌ Mistake 3 — Forgetting negative numbers

For signed integers:

👉 Use unsigned or handle carefully.

(In interviews, inputs usually positive)

---

# Step 11 — Mental Model to Remember Forever

👉 `n & (n - 1)` removes ONE set bit

👉 Loop runs once per set bit

👉 Count = Number of 1s

Simple  
Elegant  
Extremely powerful

---

# Final Takeaway

Whenever asked:

> “Count set bits efficiently”

Think immediately:

    Brian Kernighan’s Algorithm

Tiny trick  
Massive optimization  
