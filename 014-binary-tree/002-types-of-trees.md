### 1. Introduction

Once you understand what a Binary Tree is, the next major step is recognizing that not all binary trees behave the same way.

Different shapes of trees lead to drastically different performance characteristics.

This is extremely important for interviews.

---

### 2. Why Tree Shape Matters

A binary tree is defined only by:

"Each node has at most two children."

But this definition says nothing about structure.

Two trees with the same nodes can have very different shapes.

Example:

Tree A (Compact):

        A
       / \
      B   C
     / \
    D   E

Tree B (Skewed):

    A
     \
      B
       \
        C
         \
          D

Both are valid binary trees.

But performance? Completely different.

---

### 3. Full Binary Tree

### Definition

A Full Binary Tree is a tree where:

Every node has either:

• 0 children (leaf)  
• 2 children  

No node is allowed to have exactly one child.

---

### Valid Full Binary Tree

        A
       / \
      B   C
     / \
    D   E

Nodes:

A → 2 children ✔  
B → 2 children ✔  
C → 0 children ✔  

---

### Invalid Example

        A
       / \
      B   C
         /
        D

C has only ONE child → Not full ✘

---

### Key Insight

Full tree = clean branching.

No “half-empty” nodes.

---

### 4. Perfect Binary Tree

### Definition

A Perfect Binary Tree satisfies TWO conditions:

1. All internal nodes have 2 children  
2. All leaves are at the SAME level  

---

### Example

            A
          /   \
         B     C
        / \   / \
       D  E  F  G

Characteristics:

✔ Every parent has 2 children  
✔ All leaves aligned  

---

### Node Count Formula

Perfect tree has predictable size:

Nodes = 2^h - 1

Where h = height

Example:

Height = 3 → Nodes = 7

---

### Why This Matters

Perfect trees are:

• Extremely balanced  
• Ideal for performance  
• Rare in real problems  

---

### 5. Complete Binary Tree

### Definition

A Complete Binary Tree fills nodes:

From LEFT to RIGHT.

Rules:

• All levels filled except possibly last  
• Last level filled left to right  

---

### Valid Complete Tree

            A
          /   \
         B     C
        / \   /
       D  E  F

✔ Last level filled left-first  

---

### Invalid Example

            A
          /   \
         B     C
        /     / \
       D     E   F

Gap at left → Not complete ✘

---

### Key Insight

Complete tree = compact storage.

Used heavily in:

• Heaps  
• Priority Queues  

Because array representation works efficiently.

---

### 6. Balanced Binary Tree

### Definition

A Balanced Binary Tree ensures:

Height difference between left & right subtrees is small.

Typical rule (common interview definition):

| height(left) - height(right) | ≤ 1

---

### Balanced Example

        A
       / \
      B   C
     /
    D

Height difference small ✔

---

### Unbalanced Example

    A
     \
      B
       \
        C
         \
          D

Heavily skewed ✘

---

### Why Balanced Trees Matter

Balanced → Height ≈ log(n)

Which gives:

Search → O(log n)  
Insert → O(log n)  

Unbalanced → Height ≈ n

Search → O(n)  

Massive performance difference.

---

### 7. Skewed Binary Tree

### Definition

A Skewed Tree looks like a linked list.

Types:

• Left-skewed  
• Right-skewed  

---

### Right-Skewed

    A
     \
      B
       \
        C

---

### Left-Skewed

        A
       /
      B
     /
    C

---

### Key Insight

Worst-case structure.

Performance degrades.

---

### 8. Comparing All Types Visually

---

### Full Binary Tree

✔ 0 or 2 children only

        A
       / \
      B   C
     / \
    D   E

---

### Perfect Binary Tree

✔ Fully filled + aligned leaves

            A
          /   \
         B     C
        / \   / \
       D  E  F  G

---

### Complete Binary Tree

✔ Left-filled structure

            A
          /   \
         B     C
        / \   /
       D  E  F

---

### Balanced Binary Tree

✔ Height controlled

        A
       / \
      B   C
     /
    D

---

### Skewed Tree

✘ Worst-case shape

    A
     \
      B
       \
        C

---

### 9. Critical Interview Relevance

This is where students usually underestimate trees.

---

### Balanced vs Skewed → Complexity Impact

Balanced Tree:

Height ≈ log(n)

Operations:

Search → O(log n)  
Insert → O(log n)  

---

Skewed Tree:

Height ≈ n

Operations:

Search → O(n)  
Insert → O(n)  

---

### Real Interview Insight

Many questions secretly test:

“Can you detect imbalance?”

Examples:

✔ Validate balanced tree  
✔ Convert skewed → balanced  
✔ Height-based problems  

---

### 10. Mental Models for Fast Recognition

When seeing a tree problem:

Ask immediately:

• Is shape important?  
• Height-dependent?  
• Worst-case scenario?  

---

### Quick Heuristics

Perfect → Ideal theoretical tree  
Complete → Storage-efficient tree  
Balanced → Performance-efficient tree  
Skewed → Performance disaster  
