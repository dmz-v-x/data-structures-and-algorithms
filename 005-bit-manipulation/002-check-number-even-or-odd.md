# Checking if a Number is Odd or Even Using Bit Manipulation

One of the simplest yet most powerful tricks in programming and DSA:

> **Is a number odd or even?**

Most beginners learn this using the modulus operator:

    n % 2

But in interviews and low-level programming, you’ll often see:

    n & 1

Let’s break this down from absolute scratch.

---

# Step 1 — What Does Odd and Even Actually Mean?

A number is:

- **Even** → Divisible by 2  
- **Odd** → Not divisible by 2

Examples:

- Even → 2, 4, 6, 10, 100  
- Odd → 1, 3, 5, 11, 101

So mathematically:

    Even → remainder = 0 when divided by 2  
    Odd  → remainder = 1 when divided by 2

---

# Step 2 — How Numbers Look in Binary

Computers store numbers in **binary (base 2)**.

Let’s look at some numbers:

| Decimal | Binary |
|---------|--------|
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |

Now observe something VERY IMPORTANT 👀

👉 **Look at the LAST BIT (rightmost bit)**

- Even numbers → End with **0**
- Odd numbers → End with **1**

Examples:

    4 → 0100 → ends with 0 → even
    5 → 0101 → ends with 1 → odd

This last bit is called:

> **Least Significant Bit (LSB)**

---

# Step 3 — What Does `n & 1` Mean?

The `&` operator is the **bitwise AND** operator.

Bitwise AND rule:

| Bit A | Bit B | A & B |
|-------|-------|--------|
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

Now consider:

    n & 1

What is `1` in binary?

    1 → 0001

This means:

👉 We are checking **only the last bit**.

---

# Step 4 — Visual Example

Let’s test with numbers.

---

## Example 1 — Even Number

    n = 6
    Binary = 0110

    0110
AND 0001
---------
    0000 → result = 0

👉 Even number

---

## Example 2 — Odd Number

    n = 5
    Binary = 0101

    0101
AND 0001
---------
    0001 → result = 1

👉 Odd number

---

# Final Rule

    n & 1 == 1 → Odd
    n & 1 == 0 → Even

---

# Step 5 — Why Does This Work?

Because:

👉 The number `1` isolates the **Least Significant Bit (LSB)**.

- If LSB = 1 → odd
- If LSB = 0 → even

No division required.

---

# Step 6 — Why Use This Instead of `% 2`?

Both work.

But `n & 1` is:

✅ Faster (bitwise operations are very cheap)  
✅ Common in low-level systems  
✅ Used heavily in DSA / competitive programming  
✅ Interview favorite  

---

# Step 7 — Language Examples

---

## C / C++

    if (n & 1)
        cout << "Odd";
    else
        cout << "Even";

---

## Java

    if ((n & 1) == 1)
        System.out.println("Odd");
    else
        System.out.println("Even");

---

## Python

    if n & 1:
        print("Odd")
    else:
        print("Even")

---

# Step 8 — What About Negative Numbers?

Still works 

Example:

    n = -3

Binary representation uses **two’s complement**, but:

👉 The last bit still determines odd/even.

So:

    -3 → Odd
    -4 → Even

---

# Step 9 — Common Beginner Mistakes

---

## Mistake 1 — Confusing Logical AND (`&&`) with Bitwise AND (`&`)

Wrong ❌

    n && 1

Correct ✅

    n & 1

---

## Mistake 2 — Comparing incorrectly

Better style:

    if ((n & 1) == 1)

But many languages allow:

    if (n & 1)

---

# Step 10 — Mental Model to Remember Forever

👉 **Odd/Even is just about the LAST BIT**

Nothing else matters.

- Last bit = 0 → Even
- Last bit = 1 → Odd

`n & 1` simply asks:

> “Is your last bit ON?”

---

# Interview Insight

This tiny trick appears in MANY problems:

✅ Alternating bits  
✅ Bit masking  
✅ XOR problems  
✅ Binary tricks  
✅ Optimizations  

Interviewers LOVE this because:

👉 It shows you understand how computers think.

---

# Final Takeaway

Whenever you need odd/even:

    n & 1

Simple  
Fast  
Elegant  
Interview-safe  

---


