## Creating Different Types of Heaps and Their Operations

This guide explains the theory behind:

- Min Heap  
- Max Heap  
- Generic Heap (Custom Comparator / Priority Queue)

And all fundamental heap operations:

- Insert  
- Peek  
- Extract (Remove Root)  
- Heapify Up  
- Heapify Down  
- Build Heap (O(n))  
- Delete Arbitrary Index  

The focus here is purely conceptual understanding.

---

### 1. Core Idea Behind All Heaps

All heaps share the same structural foundation.

A heap is:

- Stored in an array  
- Represented as a complete binary tree  
- Controlled using index mathematics  

The array is interpreted as a tree using positional relationships.

For any index `i`:

Parent → floor((i - 1) / 2)  
Left Child → 2*i + 1  
Right Child → 2*i + 2  

These formulas work because the heap is always a complete binary tree.

---

### 2. Min Heap

#### Definition

A Min Heap obeys the rule:

Parent ≤ Children

This guarantees:

The smallest element is always at the root.

---

#### Behavioural Characteristics

- Root contains minimum value  
- Every subtree also satisfies Min Heap property  
- Not fully sorted  
- Only parent-child ordering guaranteed  

---

#### Insert Operation (Heapify Up)

Insertion strategy:

1. Place the new element at the end of the array  
2. Compare it with its parent  
3. If heap property is violated → swap  
4. Continue upward until property is restored  

This upward adjustment is called:

Heapify Up (Bubble Up)

---

#### Extract Operation (Heapify Down)

Removal strategy:

1. Save the root (minimum)  
2. Move the last element to the root  
3. Remove the last array element  
4. Restore heap property downward  

This downward adjustment is called:

Heapify Down

---

### 3. Max Heap

#### Definition

A Max Heap obeys the rule:

Parent ≥ Children

This guarantees:

The largest element is always at the root.

---

#### Behavioural Characteristics

- Root contains maximum value  
- Every subtree satisfies Max Heap property  
- Not fully sorted  
- Only parent-child ordering guaranteed  

---

#### Insert Operation

Strategy identical to Min Heap, but:

Swaps occur when child > parent.

Heapify Up moves larger values upward.

---

#### Extract Operation

Strategy identical, but:

Heapify Down pushes smaller values downward.

---

### 4. Generic Heap (Most Important Concept)

In real-world problems, heaps rarely store plain numbers.

Instead, they store:

- Objects  
- Custom priorities  
- Domain-specific data  

---

#### Key Idea

Generic Heap introduces:

Custom comparison logic.

Rather than hardcoding Min or Max rules, the heap relies on:

A comparator function.

---

#### Why This Matters

This allows heaps to represent:

- Priority queues  
- Complex ordering rules  
- Flexible ranking systems  

The heap property becomes:

Defined by the comparator.

---

### 5. Min Heap vs Max Heap via Comparator

Heap behaviour depends entirely on comparison logic.

- Min Heap → Parent smaller priority  
- Max Heap → Parent larger priority  

Same structure, different rule.

This is a critical mental model:

Heaps differ by comparison, not structure.

---

### 6. Priority Queue (Heap’s Most Common Application)

#### Definition

A Priority Queue removes elements based on priority rather than insertion order.

Unlike FIFO queues:

Order depends on importance.

---

#### Why Heap is Ideal

Priority Queue requires:

- Fast insertion  
- Fast removal of highest/lowest priority  
- Instant access to top priority  

Heap provides:

- Insert → O(log n)  
- Remove → O(log n)  
- Peek → O(1)

---

#### Conceptual Storage

Instead of values:

We store objects with priorities.

Ordering decisions depend only on priority.

---

#### Stability Consideration

Priority queues are generally not stable.

Equal priorities do not guarantee insertion order preservation.

---

### 7. Delete Arbitrary Index (Advanced Operation)

Sometimes removal is required for a non-root element.

---

#### Strategy

1. Swap target element with last element  
2. Remove last element  
3. Restore heap property  

Restoration may require:

- Heapify Up  
- Heapify Down  

Depending on violation direction.

---

### 8. Build Heap from Array (Critical Optimization)

#### Problem

Given an unsorted array, convert it into a heap efficiently.

---

#### Naive Approach

Insert elements one by one.

Time Complexity: O(n log n)

---

#### Optimal Approach

Build heap bottom-up.

Time Complexity: O(n)

---

#### Key Insight

Leaf nodes are already valid heaps.

Only non-leaf nodes require heapification.

---

#### Starting Point

Begin heapifying from:

floor(n / 2) - 1

Proceed upward toward root.

---

### Final Mental Model

All heap variants share:

- Same storage model  
- Same structural rules  
- Same operations  

They differ only in:

- Heap property definition  
- Comparison logic  

---

### Essential Memory Rules

- Heap is not fully sorted  
- Root always holds most important element  
- Insert → Heapify Up  
- Extract → Heapify Down  
- Build Heap → O(n)
