# Getting the Rightmost Set Bit Using Bit Manipulation

Another **legendary bit manipulation trick**:

    n & (-n)

👉 This operation extracts the **rightmost set bit**.

Also known as:

> **lowbit / least significant set bit (LSB)**

Let’s break this down step by step.

---

# Step 1 — What Are We Trying to Find?

👉 The **rightmost set bit** = last `1` from the right.

Example:

| Number | Binary | Rightmost Set Bit |
|--------|---------|------------------|
| 10     | 1010    | 0010 |
| 12     | 1100    | 0100 |
| 40     | 101000  | 001000 |

We want **only that bit**, nothing else.

---

# Step 2 — What is `-n` in Binary? 👀

This is where the magic lives.

Computers store negative numbers using:

> **Two’s Complement Representation**

Rule to compute `-n`:

1. Invert bits (1 → 0, 0 → 1)
2. Add 1

---

## Example — n = 10

Binary of 10:

    10 → 00001010

### Step 1 — Invert bits

    11110101

### Step 2 — Add 1

    11110110 → This is -10

---

# Step 3 — Now Apply `n & (-n)`

Let’s compute:

---

## Example — n = 10

    n     = 00001010
    -n    = 11110110

    00001010
AND 11110110
-------------
    00000010 ✅

👉 Only the rightmost set bit survives.

---

## Example — n = 12

    12 → 00001100

Invert:

    11110011

Add 1:

    11110100 → -12

Now AND:

    00001100
AND 11110100
-------------
    00000100 ✅

Again → last `1` extracted.

---

# Step 4 — Why Does This Work?

Let’s observe patterns.

Binary structure of any number:

    n = xxxx1000...000

Meaning:

- Some bits
- Rightmost `1`
- Followed by zeros

Now compute `-n`:

👉 Two’s complement flips everything until that bit.

Result:

    -n = yyyy1000...000

👉 That SAME bit remains aligned.

When we AND:

👉 Everything cancels except that bit.

---

# Step 5 — Mental Model to Remember Forever

👉 `-n` isolates the rightmost set bit pattern

👉 AND extracts it cleanly

---

# Final Rule ⭐

    n & (-n)

✅ Gives value of **rightmost set bit**

---

# Step 6 — What Does the Result Represent?

Important insight 👀

👉 Result is **not position**, but **value**.

Example:

    n = 10 → 1010

Rightmost set bit:

    0010 → Decimal = 2

---

Another example:

    n = 40 → 101000

Rightmost set bit:

    001000 → Decimal = 8

---

# Step 7 — Why Is This So Important?

This trick is used in MANY advanced problems.

---

## ✅ Use Case 1 — Finding Two Unique Numbers (XOR Problems)

Classic problem:

👉 Two numbers appear once, others twice.

Steps:

1. XOR all → x ^ y
2. Extract differing bit:

       mask = xor & (-xor)

👉 This divides numbers into two groups.

---

## ✅ Use Case 2 — Bitmask Algorithms

Used in:

- Fenwick Tree (Binary Indexed Tree)
- State compression DP
- Subset tricks

---

## ✅ Use Case 3 — Efficient Bit Removal

You can remove that bit:

    n = n - (n & -n)

---

## ✅ Use Case 4 — Lowest Power of 2 Dividing n

    lowbit = n & (-n)

Used heavily in competitive programming.

---

# Step 8 — Language Examples

---

## C / C++

    int lowbit = n & (-n);

---

## Java

    int lowbit = n & (-n);

---

## Python

    lowbit = n & (-n)

---

# Step 9 — Common Beginner Confusions 

---

## ❌ "Why negative numbers??"

Because two’s complement creates a perfect bit pattern.

---

## ❌ "Does this work for all numbers?"

✅ Yes (except n = 0)

    0 & (-0) = 0

Which is correct → no set bits.

---

## ❌ "Is this same as n & (n-1)?"

NO ❌

- `n & (n - 1)` → removes rightmost set bit
- `n & (-n)` → extracts rightmost set bit

Very different operations.

---

# Step 10 — Visual Comparison 

Example:

    n = 12 → 1100

Operation results:

    n & (n - 1) → 1000 (bit removed)
    n & (-n)    → 0100 (bit extracted)

---

# Step 11 — Interview Insight 

Interviewers LOVE this trick in:

✅ XOR puzzles  
✅ Unique number problems  
✅ Masking problems  
✅ Fenwick Tree questions  
✅ Bit partition problems  

Understanding this = Advanced-level signal

---

# Final Takeaway 

Whenever you need:

👉 Rightmost set bit → Think:

    n & (-n)

Tiny trick  
Massive power  

