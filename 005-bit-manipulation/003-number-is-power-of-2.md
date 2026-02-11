# Checking if a Number is a Power of 2 Using Bit Manipulation

One of the **most important bit manipulation tricks** in DSA and interviews:

> **Is a number a power of 2?**

Instead of loops or logarithms, we use:

    n & (n - 1) == 0

Let’s understand this from absolute scratch.

---

# Step 1 — What is a Power of 2?

A number is a power of 2 if it can be written as:

    2^k  (for some integer k ≥ 0)

Examples:

| Power | Value |
|-------|--------|
| 2^0   | 1      |
| 2^1   | 2      |
| 2^2   | 4      |
| 2^3   | 8      |
| 2^4   | 16     |
| 2^5   | 32     |

Not powers of 2:

3, 5, 6, 7, 10, 12...

---

# Step 2 — How Powers of 2 Look in Binary 👀

This is the **key observation**.

| Decimal | Binary |
|---------|---------|
| 1       | 0001    |
| 2       | 0010    |
| 4       | 0100    |
| 8       | 1000    |
| 16      | 10000   |

👉 Notice something VERY IMPORTANT:

✅ **Exactly ONE bit is set (only one 1)**

Examples:

    8  → 1000
    16 → 10000
    32 → 100000

This is the entire trick.

---

# Step 3 — What Happens When We Do (n - 1)?

Let’s subtract 1 from powers of 2.

---

## Example 1

    n = 8 → 1000
    n - 1 = 7 → 0111

---

## Example 2

    n = 16 → 10000
    n - 1 = 15 → 01111

---

👉 Pattern:

When we subtract 1:

✅ The single `1` becomes `0`  
✅ All bits to the right become `1`

---

# Step 4 — Now Apply Bitwise AND

Recall AND rule:

    1 & 1 = 1
    Otherwise = 0

---

## Example — Power of 2

    n = 8 → 1000
    n-1 = 7 → 0111

    1000
AND 0111
---------
    0000 → Result = 0

---

## Another Example

    n = 16 → 10000
    n-1 = 15 → 01111

    10000
AND 01111
----------
    00000 → Result = 0

---

# Step 5 — Why Does This Work?

Because:

👉 Powers of 2 have **only one set bit**

👉 Subtracting 1 flips:

- That bit → OFF
- All lower bits → ON

👉 ANDing them removes everything → 0

---

# Step 6 — What About Non-Powers of 2?

Let’s test.

---

## Example — n = 10

    10 → 1010
    9  → 1001

    1010
AND 1001
---------
    1000 → Result ≠ 0

---

## Example — n = 6

    6 → 0110
    5 → 0101

    0110
AND 0101
---------
    0100 → Result ≠ 0

---

👉 Non-powers of 2 always leave some bits.

---

# Final Rule 🚀

    n & (n - 1) == 0 → Power of 2
    Otherwise → Not a power of 2

---

# Step 7 — IMPORTANT Edge Case

What about:

    n = 0 ?

    0 → 0000
    n - 1 → -1 → 111111... (binary)

    0000 & 111111... = 0

❌ This would incorrectly say TRUE.

So ALWAYS check:

    n > 0 && (n & (n - 1)) == 0

---

# Step 8 — Language Examples

---

## C / C++

    if (n > 0 && (n & (n - 1)) == 0)
        cout << "Power of 2";
    else
        cout << "Not Power of 2";

---

## Java

    if (n > 0 && (n & (n - 1)) == 0)
        System.out.println("Power of 2");

---

## Python

    if n > 0 and (n & (n - 1)) == 0:
        print("Power of 2")

---

# Step 9 — Mental Model to Remember Forever

👉 **Power of 2 = Only ONE set bit**

👉 `(n - 1)` flips that structure

👉 `AND` removes everything

---

# Step 10 — Why Interviewers LOVE This Question

Because it tests:

✅ Binary understanding  
✅ Bitwise operations  
✅ Pattern recognition  
✅ Edge case thinking  

Also appears inside MANY problems:

- Checking valid sizes
- Optimizations
- Tree / heap problems
- Masking problems

---

# Step 11 — Bonus Insight

This trick also means:

👉 You can count set bits and check:

    setBits == 1 → Power of 2

But `n & (n - 1)` is faster.

---

# Final Takeaway

Whenever asked:

> “Is this a power of 2?”

Think:

    Only one bit set.

Then write:

    n & (n - 1)

Elegant  
Fast 

---
