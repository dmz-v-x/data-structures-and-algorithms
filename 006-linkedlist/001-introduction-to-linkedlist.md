## Introduction to LinkedList

### WHAT IS A LINKED LIST?

A **Linked List** is a **linear data structure** where elements are **NOT stored next to each other in memory**.

Instead:

- Each element knows **where the next element is**
- Elements are connected using **links (references)**

---

### What Is Stored in a Linked List?

Each element in a linked list contains **two things**:

1️⃣ **Data** → the actual value  
2️⃣ **Link** → reference to the next element  

This combined unit is called a **Node**.

So:
- Linked List = collection of **nodes**
- Nodes are connected using **links**

---

### Mental Model

**Array**
📦📦📦📦  
- Boxes are next to each other  
- Stored continuously in memory  

**Linked List**
📦➡️📦➡️📦➡️📦  
- Boxes are scattered  
- Connected using arrows (links)

---

### VERY IMPORTANT DSA TRUTH

In a **Linked List**:

- ❌ You **cannot** access elements by index  
- ❌ `list[3]` → **NOT POSSIBLE**

You must:
- ✅ Start from the **first node**
- ✅ Move **step by step**
- ✅ Follow links one node at a time  

This process is called **Traversal**.

---

### Key Properties

| Property        | Linked List            |
|-----------------|------------------------|
| Memory          | Not contiguous         |
| Access          | Sequential only        |
| Insertion       | Easy (no shifting)     |
| Deletion        | Easy (just change links) |
| Random Access   | ❌ Not allowed         |

---

### Final Takeaway

A Linked List is **not about speed of access**.  
It is about **flexibility**.

You trade:
- ❌ Fast indexing  
for  
- ✅ Easy insertion and deletion  

This tradeoff is the **core reason Linked Lists exist** in DSA.
