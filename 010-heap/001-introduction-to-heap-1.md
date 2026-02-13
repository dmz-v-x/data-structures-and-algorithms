# Introduction to Heap

Heaps are one of the most important data structures in Data Structures & Algorithms (DSA).  
They frequently appear in coding interviews, competitive programming, and real-world systems.

---

### 1. What is a Heap?

A **Heap** is a special type of **binary tree**.

But not just any binary tree.

It has **two very important rules**:

---

### Rule 1 — Complete Binary Tree

A heap must always be a:

> **Complete Binary Tree**

Meaning:

✔ All levels are completely filled  
✔ Except possibly the last level  
✔ Last level is filled **from left to right**

Example:

```
        10
      /    \
     20     30
    /  \
   40  50
```

This is valid.

But this is NOT valid:

```
        10
      /    
     20     
       \
        50
```

Why?

Because nodes are not filled left-to-right.

---

### Rule 2 — Heap Property

Now comes the core logic.

A heap obeys **ordering rules**.

There are **two types of heaps**:

---

### Min Heap

Every parent is **smaller** than its children.

```
        10
      /    \
     20     30
```

✔ Parent ≤ Children

Smallest element is always at the **top (root)**.

---

### Max Heap

Every parent is **larger** than its children.

```
        50
      /    \
     30     20
```

✔ Parent ≥ Children

Largest element is always at the **top (root)**.

---

### Key Idea

Heap is NOT fully sorted.

It only guarantees:

✔ Parent-child order  
✔ Fast access to smallest / largest

---

### 2. How to Represent a Heap?

Here’s the cool part.

We **DO NOT store heap using tree nodes**.

Instead…

> We store heap using an **array**

Why?

Because heap is a **complete binary tree** → perfect for arrays.

---

### Important Insight

Array representation avoids pointers & saves memory.

---

### Index Relationships

For a node at index `i`:

✔ Left Child → `2i + 1`  
✔ Right Child → `2i + 2`  
✔ Parent → `(i - 1) / 2`

---

### Example

Array:

```
[10, 20, 30, 40, 50]
```

Tree Representation:

```
        10 (index 0)
      /     \
   20(1)   30(2)
   /   \
40(3) 50(4)
```

---

### Clarifying Statement

Technically:

✔ Heap is stored in an **array**
✔ Not a stack
✔ But yes → fixed size often used

Better wording:

> Heap → Array of size `k` (important!)

---

### 3. Identification of Heap Problems

This is **EXTREMELY IMPORTANT for interviews**.

Most students fail here.

---

### Look for TWO Keywords

Whenever you see:

✔ `k` (some number)  
✔ `Smallest / Largest`

→ Think **HEAP**

---

### Classic Heap Triggers

✔ kth largest  
✔ kth smallest  
✔ top k elements  
✔ smallest k elements  
✔ largest k elements

---

### Example Questions

✔ Find kth largest element  
✔ Find k closest points  
✔ Find top k frequent elements

---

### 4. Which Heap to Choose? (Golden Rule)

This is where confusion usually happens.

Memorize this:

---

### Decision Table

| Problem Type | Heap Type |
|--------------|------------|
| k + Largest  | Min Heap   |
| k + Smallest | Max Heap   |

---

### Why This Works

Let’s break this slowly.

---

### Case 1 — kth Largest Element

Goal:

We want the **largest numbers**.

But we keep only **k elements**.

So we use:

✔ **Min Heap of size k**

Why?

Because:

✔ Smallest among top k stays at root  
✔ Remove smaller junk values

---

### Logic

1. Insert elements
2. Keep heap size = k
3. Remove smaller values
4. Top = kth largest

---

### Example (Step-by-Step)

Find 3rd largest in:

```
[10, 5, 20, 8, 25]
```

Use **Min Heap (size = 3)**

Process:

✔ Insert 10 → [10]  
✔ Insert 5 → [5,10]  
✔ Insert 20 → [5,10,20]

Heap full.

Next:

✔ Insert 8 → [5,8,20,10] → Remove 5  
✔ Heap → [8,10,20]

✔ Insert 25 → Remove 8  
✔ Heap → [10,20,25]

---

Root = 10 → 3rd Largest

---

### Case 2 — kth Smallest Element

Use:

✔ **Max Heap of size k**

Because:

✔ Largest among smallest k stays at top  
✔ Remove larger junk values

---

### 5. Heap Top Significance

Simple rule:

✔ Max Heap → Top = Largest  
✔ Min Heap → Top = Smallest

Always.

No exception.

---

### 6. Why Heaps Matter (Performance Insight)

This is a **BIG interview concept**.

---

### Full Sorting Approach

Sorting array:

✔ Merge Sort → `O(n log n)`

Cannot improve.

---

### Heap Optimization

We don’t need full sort.

We only care about **k elements**.

Heap:

✔ Complexity → `O(n log k)`

Huge improvement when:

✔ k << n

---

### Real-World Example

n = 1,000,000  
k = 10

Sorting → Expensive  
Heap → Very Fast

---

### 7. The Ultimate Identification Formula

Memorize this like a weapon:

---

### Heap Detection Cheat Sheet

✔ k + smallest / largest  
✔ Smallest → Max Heap  
✔ Largest → Min Heap  
✔ n log n → n log k optimization

---

### Final Mental Model

Heap questions are mostly:

> **Partial Sorting Problems**

We only care about:

✔ k important elements  
✔ Not full order

