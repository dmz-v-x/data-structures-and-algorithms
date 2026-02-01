### 1. Queue Introduction

A **Queue** is a linear data structure that follows a very strict rule:

**FIFO — First In, First Out**

This means:
- The element that goes in **first** comes out **first**
- The element that goes in **last** comes out **last**

Common queue operations you will always hear about:
- `enqueue` (push)
- `dequeue` (pop)
- `peek / front` (top)
- `size`

---

### 2. Queue in JavaScript

One important thing to understand early:

👉 **JavaScript does NOT provide a built-in Queue class**

Unlike some other languages, JavaScript does not give you a ready-made queue data structure.

So whenever we want a queue in JavaScript:
- We **implement it ourselves**
- Or we **simulate it using arrays or custom classes**

---

### 3. What is a Queue?

A **Queue** is a data structure where:

- Elements are added from **one end**
- Elements are removed from the **other end**
- The order of elements is preserved

In simple words:

> **The first element added is the first one removed**

This rule is called:

**FIFO — First In, First Out**

---

### 4. Imagine a line at a ticket counter

Think about a real-world line:

- First person enters the line → gets the ticket first
- Second person → waits
- Third person → waits even more
- No one is allowed to cut the line

This real-life behavior maps perfectly to a **queue** in Data Structures.

Queues are basically **fair lines**.

---

### 5. Visual Understanding of a Queue

A queue always has two important ends:

- **Front** → where elements are removed
- **Rear** → where elements are added

Representation:

Front → [ A ] [ B ] [ C ] ← Rear

Explanation:
- `A` entered first → will leave first
- `B` entered second → will leave second
- `C` entered last → will leave last

Order is everything in a queue.


### 6. Where Queues Are Used (Intuition Only)

Queues are used **whenever order matters**.

Some common real-world and programming examples:
- Task scheduling
- Print job management
- Call center systems
- Breadth-First Search (BFS) in trees and graphs
- Message queues (background jobs)
- Event handling systems

Whenever things must be processed **one by one in order**, a queue is usually involved.

---

### 7. Core Queue Operations

Every queue — no matter how it is implemented — supports the same basic operations:

Operation | Meaning  
--------- | --------
`enqueue` | Add element to the **rear**
`dequeue` | Remove element from the **front**
`peek / front` | View front element (without removing it)
`isEmpty` | Check if the queue is empty
`size` | Number of elements in the queue

Important reminder:
👉 **JavaScript does NOT provide these operations by default**  
👉 We must **create them ourselves**

---

### 8. The Golden Rule of Queues

A queue has two strict rules:

❌ You never remove from the **rear**  
❌ You never insert at the **front**

You can only do this:

- **Insert → Rear**
- **Remove → Front**

If you break this rule, it is **no longer a queue**.

This rule is what truly defines a queue.
