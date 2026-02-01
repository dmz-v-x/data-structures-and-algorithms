## TYPES OF LINKED LISTS 

---

## 1. SINGLY LINKED LIST

This is the **default linked list**.

If a DSA problem says **“Linked List”** without clarification,  
you should **assume Singly Linked List**.

---

### Structure

Each node contains **two parts**:

- `data`
- `next`

Representation:

[data | next] → [data | next] → [data | null]

---

### Direction

- Movement is allowed in **only one direction**
- Forward only

You can go:
- A → B → C

You **cannot** go backward.

---

### DSA Characteristics

- Simple structure
- Memory efficient (only one pointer per node)
- Cannot move backward directly
- Reversal is common and important (classic interview question)

This type appears in **90% of linked list DSA problems**.

---

## 2. DOUBLY LINKED LIST

A more powerful but heavier version of a linked list.

---

### Structure

Each node contains **three parts**:

- `prev` → reference to previous node
- `data`
- `next` → reference to next node

Representation:

null ← [prev | data | next] ↔ [prev | data | next] → null

---

### Direction

- You can move **forward**
- You can move **backward**

This makes navigation easier.

---

### DSA Characteristics

- Easier deletion (no need to track previous node separately)
- Bidirectional traversal
- Extra memory cost (two pointers per node)
- Slightly more complex to implement

Used when **backward traversal** is required.

---

## 3. CIRCULAR LINKED LIST

In this type, the list **does not end at null**.

The last node points back to the first node.

---

### Singly Circular Linked List

Structure:
    
    A  →  B  →  C  
    ↑           ↓  
    └───────────┘  

- Last node’s `next` points to `head`
- No `null` at the end

---

### Doubly Circular Linked List

Special case where:

- tail.next = head
- head.prev = tail

You can move infinitely in both directions.

---

### DSA Characteristics

- No natural “end”
- Useful for repeating cycles
- Used in special problems only
- Slightly tricky to handle termination conditions

---

## 4. DSA USAGE COMPARISON

| Type     | Used in DSA? | Reason |
|----------|--------------|--------|
| Singly   | ⭐⭐⭐⭐⭐ | Simple and most common |
| Doubly   | ⭐⭐⭐ | Extra flexibility |
| Circular | ⭐⭐ | Special use cases |

---

## 5. INTERVIEW GOLD RULE

If an interviewer says:

**“Solve this using Linked List”**

You should assume:

**Singly Linked List**

Unless they explicitly say:
- Doubly Linked List
- Circular Linked List

---

## ONE-LINE SUMMARY

Linked Lists can be **singly** (one direction), **doubly** (both directions), or **circular** (last node connects back to first), and in DSA, singly linked lists are used most of the time.
