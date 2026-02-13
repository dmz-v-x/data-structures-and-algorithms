## Heap Data Structure — Complete Beginner → Strong Mental Model

### 1. What is a Heap?

Think of a heap like:

A special priority-based container.

It is NOT:

- A sorted array  
- A queue  
- A stack  

Instead:

A structure where the most important element is always easy to access.

---

#### Important Clarification

A heap is NOT a JavaScript feature.

JavaScript does not provide a built-in heap.

Heap is purely a DSA concept.

We implement it manually using:

- Arrays  
- Index math  
- Heap rules  

---

### 2. Why Do We Need a Heap?

Imagine tasks with priorities:

| Task       | Priority |
|------------|----------|
| Fix bug    | 10       |
| Read email | 2        |
| Deploy app | 8        |

What do we want?

- Always get highest priority fast  
- Insert new tasks fast  
- Remove highest priority fast  

---

#### If We Use an Array

Problems:

- Finding max → O(n)  
- Sorting every time → Very slow  
- Frequent inserts/removals → Inefficient  

---

#### Heap as the Solution

Heap provides:

- Fast access to top priority  
- Efficient insert  
- Efficient removal  

---

### 3. Binary Tree

Before heap, understand binary tree.

A Binary Tree means:

Each node has at most two children:

- Left child  
- Right child  

Example:

       10
      /  \
     5    3

---

### 4. Complete Binary Tree (Critical Requirement)

A heap must be a Complete Binary Tree.

---

#### What does “Levels” mean?

Levels are horizontal layers of the tree.

Example:

       10        ← Level 1
      /  \
     5    3      ← Level 2
    /
   2             ← Level 3

---

#### All Levels Fully Filled

Every level before the last must be full.

Example:

- Level 1 → full  
- Level 2 → full  

Last level → special rules apply.

---

#### Except Possibly the Last Level

The last level:

- Can be incomplete  
- Must follow rules  

---

#### Nodes Fill from Left to Right

Nodes must be placed as far left as possible.

You cannot skip the left child.

---

#### Valid Complete Binary Tree

       10
      /  \
     5    3
    /
   2

Structure rules satisfied.

---

#### Invalid Complete Binary Tree

       10
        \
         3

Violation:

Left child missing while right child exists.

---

#### Memory Rule

A binary tree is complete if:

Every level is full except maybe the last,  
and the last level fills from left to right.

---

### 5. Heap Property (Core Rule)

Heap introduces ordering rules.

Two types:

---

#### Max Heap

Rule:

Parent ≥ Children

Example:

       10
      /  \
     5    3

Largest value always at root.

---

#### Min Heap

Rule:

Parent ≤ Children

Example:

       2
      / \
     5  10

Smallest value always at root.

---

### 6. Why Top Element Matters

Heap guarantees:

- Max Heap → Maximum in O(1)  
- Min Heap → Minimum in O(1)  

This is the primary reason heaps exist.

---

### 7. Very Important Clarification

Heap is NOT fully sorted.

Example Max Heap:

       10
      /  \
     5    7
    / \
   1   3

Array form:

[10, 5, 7, 1, 3]

Valid heap, but not sorted.

Heap guarantees only parent-child ordering.

---

### 8. How Heap is Stored in an Array

Key Idea:

Heap is a binary tree stored in an array.

No nodes  
No pointers  
Only indices  

This makes heaps efficient.

---

### 9. Tree to Array Mapping

Heap:

        10
       /  \
      5    7
     / \
    1   3

Stored as:

index:  0  1  2  3  4  
value: [10, 5, 7, 1, 3]

Rule:

Level-order traversal from left to right.

---

### 10. Index Relationships (Golden Formulas)

For any index i:

Parent → floor((i - 1) / 2)  
Left Child → 2*i + 1  
Right Child → 2*i + 2  

---

#### Memory Trick

Parent → (i - 1) / 2  
Children → 2i + 1, 2i + 2  

---

#### Example Walkthrough (i = 1)

Array:

[10, 5, 7, 1, 3]

Value at index 1 = 5

Parent:

floor((1 - 1) / 2) = 0 → 10

Left Child:

2*1 + 1 = 3 → 1

Right Child:

2*1 + 2 = 4 → 3

---

### 11. Completeness vs Heap (Critical Concept)

All heaps are complete binary trees.

Not all complete binary trees are heaps.

---

#### Complete but Not Heap

        5
       / \
     10   3

Structure valid.

Heap property violated.

---

### 12. Heap Operation Time Complexity

| Operation          | Time Complexity |
|--------------------|-----------------|
| Find Min / Max     | O(1)            |
| Insert             | O(log n)        |
| Delete Min / Max   | O(log n)        |
| Heapify            | O(log n)        |
| Build Heap         | O(n)            |
| Search (arbitrary) | O(n)            |

---

#### Why Insert / Delete = log n?

Because heap height = log n.

Worst case → travel tree height.

---

### 13. Insert into Heap (Heapify Up)

Rules must remain valid:

- Complete Binary Tree  
- Heap Property  

---

#### Strategy

1. Insert at end of array  
2. Compare with parent  
3. Swap if violated  
4. Repeat  

Called Heapify Up (Bubble Up).

---

#### Example (Max Heap Insert)

Initial Heap:

[10, 5, 7, 1, 3]

Insert 8:

[10, 5, 7, 1, 3, 8]

Compare:

8 > 7 → Swap

[10, 5, 8, 1, 3, 7]

Compare again:

8 < 10 → Stop

---

#### Time Complexity

Insert → O(log n)

---

### 14. Remove / Extract (Max Heap)

Goal:

Remove root (maximum).

---

#### Safe Strategy

1. Save root  
2. Move last element to root  
3. Remove last  
4. Heapify Down  

---

#### Example

Initial:

[10, 5, 8, 1, 3, 7]

Remove 10:

Move 7 → root:

[7, 5, 8, 1, 3]

Heapify Down:

8 > 7 → Swap

[8, 5, 7, 1, 3]

---

#### Time Complexity

Remove → O(log n)

---

### 15. Min Heap

Rule:

Parent ≤ Children.

Smallest element at root.

---

#### Perfect For

- Priority Queue  
- Dijkstra  
- K Smallest Problems  

---

#### Insert / Remove Logic

Same strategy with reversed comparisons.

---

### 16. Priority Queue

Normal Queue → FIFO.

Priority Queue → Priority-based.

---

#### Example

enqueue(A, priority=10)  
enqueue(B, priority=1)

dequeue → A

---

#### Why Heap Works Perfectly

Heap provides:

- Insert → O(log n)  
- Remove → O(log n)  
- Peek → O(1)

---

#### What We Store

Objects:

{ value: "Task A", priority: 2 }

Heap compares priority only.

---

#### Stability

Priority Queue is not stable.

Equal priorities → order not guaranteed.

---

#### Memory Rule

Priority Queue = Heap + Custom Comparison

---

### 17. Build Heap from Array

Given:

arr = [3, 1, 6, 5, 2, 4]

---

#### Naive Approach

Insert one by one → O(n log n)

---

#### Optimal Approach

Build heap bottom-up → O(n)

---

#### Key Insight

Leaf nodes are already heaps.

Only heapify non-leaf nodes.

---

#### Non-leaf Start Index

floor(n / 2) - 1

Heapify downward from here.

---

### Final Mental Model

Heap is:

- Priority structure  
- Complete Binary Tree  
- Partial ordering  
- Fast top access  

---

### Ultimate Memory Rules

- Heap is not sorted  
- Root always important  
- Insert → Heapify Up  
- Remove → Heapify Down  
- Build Heap → O(n)
