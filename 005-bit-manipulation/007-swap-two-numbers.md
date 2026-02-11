# Swapping Two Numbers Without Using a Temporary Variable (XOR Trick)

One of the most famous bit manipulation tricks:

    a = a ^ b
    b = a ^ b
    a = a ^ b

👉 Swaps two numbers **without using a temp variable**.

Classic interview favorite ⭐

Let’s break this down from absolute scratch.

---

# Step 1 — The Normal Way to Swap (What Everyone Learns First)

Traditional approach:

```text
temp = a
a = b
b = temp
```

Simple  
Clear  
Used in real-world code ✅

---

# Step 2 — Why Do We Even Need Another Trick?

Good question 👀

In interviews / DSA / low-level programming:

✅ Shows understanding of XOR  
✅ Tests bitwise knowledge  
✅ Historical importance  
✅ Appears in puzzles  

---

# Step 3 — What is XOR (`^`)?

Bitwise XOR rule:

| Bit A | Bit B | A ^ B |
|-------|-------|--------|
| 0     | 0     | 0 |
| 0     | 1     | 1 |
| 1     | 0     | 1 |
| 1     | 1     | 0 |

👉 XOR gives `1` when bits differ.

---

# Step 4 — CRITICAL XOR Properties 🔥 (MEMORIZE)

These power the entire trick:

```text
a ^ a = 0
a ^ 0 = a
XOR is reversible
```

Most important:

👉 **(a ^ b) ^ b = a**

This is the magic.

---

# Step 5 — The XOR Swap Algorithm

```text
a = a ^ b
b = a ^ b
a = a ^ b
```

Let’s understand WHY this works.

---

# Step 6 — Step-by-Step Example 👀

Assume:

```text
a = 5
b = 3
```

Binary:

```text
5 → 0101
3 → 0011
```

---

## ✅ Line 1

```text
a = a ^ b
```

```text
0101
^0011
------
0110 → 6
```

Now:

```text
a = 6
b = 3
```

---

## ✅ Line 2

```text
b = a ^ b
```

```text
0110
^0011
------
0101 → 5
```

Now:

```text
a = 6
b = 5
```

👉 b got original a ✅

---

## ✅ Line 3

```text
a = a ^ b
```

```text
0110
^0101
------
0011 → 3
```

Now:

```text
a = 3
b = 5
```

👉 Values swapped 🎉

---

# Step 7 — Why Does This Work? 🧠

Because XOR is **reversible**.

After first step:

```text
a = a ^ b
```

We stored **combined information**.

Then:

```text
b = (a ^ b) ^ b → a
```

Then:

```text
a = (a ^ b) ^ a → b
```

---

# Step 8 — Mental Model to Remember Forever 🚀

👉 XOR temporarily stores **difference between numbers**

👉 Reapplying XOR restores originals

Think:

> XOR = reversible mixing

---

# Step 9 — IMPORTANT Edge Case ⚠️

---

## ❌ When a and b refer to SAME memory

Example:

```text
a = a ^ a → 0
```

Everything breaks.

So:

👉 Only use when **variables are different**

---

# Step 10 — Why This Is Rarely Used in Real Code 👀

Although clever:

❌ Harder to read  
❌ No performance benefit today  
❌ Temp variable is clearer  
❌ Modern compilers optimize swaps  

Real-world best practice:

```text
Use temp variable ✅
```

Interview / DSA:

```text
Know XOR trick ✅
```

---

# Step 11 — Where XOR Thinking REALLY Matters 🔥

This trick is mostly educational.

But XOR itself is **EXTREMELY IMPORTANT**.

Used in:

✅ Single Number problems  
✅ Missing number  
✅ Two unique numbers  
✅ Bitmask problems  
✅ Cryptography  
✅ Parity checks  

---

# Step 12 — Language Implementations

---

## C / C++

```cpp
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

---

## Java

```java
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

---

## Python

```python
a = a ^ b
b = a ^ b
a = a ^ b
```

(Note: Python also supports tuple swap → cleaner)

```python
a, b = b, a
```

---

# Step 13 — Interview Insight 🔥

Interviewers don’t care about swapping.

They care if you understand:

✅ XOR properties  
✅ Reversibility  
✅ Bitwise reasoning  
✅ Edge cases  
