# Unset the Rightmost Set Bit Using Bit Manipulation

One of the **most powerful and frequently used bit tricks**:

    n & (n - 1)

👉 This operation **removes the rightmost set bit (last 1)**.

Let’s understand this deeply from absolute scratch.

---

# Step 1 — What is a "Set Bit"?

In binary:

- **Set bit** → Bit = `1`
- **Unset bit** → Bit = `0`

Example:

    n = 10 → 1010

Here:

- Bit positions with `1` → Set bits

---

# Step 2 — What is the "Rightmost Set Bit"?

👉 The **last `1` when scanning from right to left**.

Example:

    12 → 1100 → Rightmost set bit = 2nd position
    10 → 1010 → Rightmost set bit = last position
    40 → 101000 → Rightmost set bit = 4th position

This bit is extremely important in many algorithms.

---

# Step 3 — What Happens When We Do (n - 1)? 👀

This is the key magic.

When you subtract 1:

✅ Rightmost `1` becomes `0`  
✅ All bits to the right become `1`

---

## Example 1 — n = 12

    12 → 1100
    11 → 1011

Observe carefully:

    1100
    1011

👉 That last `1` flipped.

---

## Example 2 — n = 10

    10 → 1010
     9 → 1001

Again:

- Rightmost `1` → OFF
- Lower bits → ON

---

# Step 4 — Now Apply Bitwise AND

Let’s combine:

    n & (n - 1)

---

## Example — n = 12

    n     = 1100
    n - 1 = 1011

    1100
AND 1011
---------
    1000 ✅

👉 Rightmost `1` removed.

---

## Example — n = 10

    1010
AND 1001
---------
    1000 ✅

Again → last `1` gone.

---

# Step 5 — Why Does This Work?

Because:

👉 `(n - 1)` flips the **rightmost set bit**

👉 ANDing removes that bit completely

Everything else stays the same.

---

# Final Rule

    n & (n - 1)

✅ Removes the **rightmost set bit**

---

# Step 6 — Visual Pattern

General binary structure:

    n = xxxx1000...000

After subtracting 1:

    n - 1 = xxxx0111...111

After AND:

    xxxx0000...000

👉 Only that last `1` disappears.

---

# Step 7 — Why Is This Trick So Important?

This tiny trick powers MANY algorithms.

---

## ✅ Use Case 1 — Counting Set Bits (Brian Kernighan’s Algorithm)

Instead of checking every bit:

    while (n > 0):
        n = n & (n - 1)
        count++

👉 Each iteration removes one `1`.

Super efficient

---

## ✅ Use Case 2 — Checking Power of 2

Recall:

    n & (n - 1) == 0

Because:

👉 Only one bit existed → removed → 0

---

## ✅ Use Case 3 — Bitmask Problems

Used in:

- Subset generation
- Mask transitions
- State compression DP

---

## ✅ Use Case 4 — Greedy / XOR Problems

Helps isolate / manipulate bits efficiently.

---

# Step 8 — Language Examples

---

## C / C++

    n = n & (n - 1);

---

## Java

    n = n & (n - 1);

---

## Python

    n = n & (n - 1)

---

# Step 9 — Common Beginner Confusions

---

## "Does this always subtract 1?"

No.

👉 It **removes a bit**, not subtracts numerically.

Example:

    12 → 1100 (decimal 12)
    Result → 1000 (decimal 8)

Not 11.

---

## "Which bit gets removed?"

👉 ALWAYS the **rightmost set bit**

---

# Step 10 — Mental Model to Remember Forever 

👉 **Subtracting 1 flips the last 1**

👉 **AND removes it**

Simple  
Predictable  
Extremely powerful

---

# Step 11 — Interview Insight 

Interviewers LOVE this trick because it appears in:

✅ Bit counting problems  
✅ Unique element problems  
✅ XOR puzzles  
✅ DP with bitmask  
✅ Optimization questions  

Understanding this = Huge confidence boost

---

# Final Takeaway

Whenever you need to:

👉 Remove last `1` bit → Think:

    n & (n - 1)

Tiny trick  
Massive utility  

Just say **next** 😄
