### 1. Introduction

When learning Data Structures & Algorithms (DSA), trees are one of the most important concepts you will encounter. Many advanced structures — Binary Search Trees, Heaps, Tries, Segment Trees — are built on tree fundamentals.

---

### 2. What is a Tree?

A Tree is a non-linear data structure made of connected elements called nodes.

Unlike arrays or linked lists (which are linear), a tree branches out.

Key intuition:

A tree represents hierarchical relationships.

Examples from real life:

• File system (folders inside folders)  
• Organization structure (CEO → Managers → Employees)  
• DOM structure in web pages  

Core properties:

• Made of nodes  
• One special node called the root  
• Nodes connected by edges  
• No cycles (cannot loop back)

Visual intuition:

        A
       / \
      B   C
     / \
    D   E

---

### 3. Fundamental Tree Terminology

Before diving deeper, we must define essential vocabulary.

---

### 3.1 Node

A Node is the basic building block of a tree.

It typically contains:

• Value / Data  
• References (links) to other nodes  

Example:

Node = container that stores data + connections

---

### 3.2 Root

The Root is the topmost node of a tree.

Important rules:

• A tree always has exactly ONE root  
• Every other node originates from the root  

Example:

        A   ← Root

---

### 3.3 Parent and Child

Parent:

A node that has other nodes connected below it.

Child:

A node that originates from another node.

Example:

        A
       / \
      B   C

A → Parent of B and C  
B → Child of A  

---

### 3.4 Leaf Node

A Leaf Node is a node that has NO children.

It is the endpoint of the tree.

Example:

        A
       / \
      B   C
     / \
    D   E

D, E, C → Leaf nodes

Key idea:

Leaf = terminal node

---

### 3.5 Ancestors

Ancestors are all nodes encountered when moving upward toward the root.

Example:

        A
       /
      B
     /
    C

Ancestors of C:

• B
• A

---

### 3.6 Subtree

A Subtree is any node along with all of its descendants.

Every node is itself the root of a subtree.

Example:

        A
       / \
      B   C
     / \
    D   E

Subtree rooted at B:

      B
     / \
    D   E

Key insight:

Tree = recursive structure  
Subtree = tree inside tree

---

### 3.7 Height

Height of a node:

Number of edges in the longest downward path to a leaf.

Height of tree:

Height of the root node.

Example:

        A
       /
      B
     /
    C

Height of C = 0  
Height of B = 1  
Height of A = 2  

Key rule:

Leaf nodes always have height = 0

---

### 3.8 Depth

Depth of a node:

Number of edges from root to that node.

Example:

        A
       /
      B
     /
    C

Depth of A = 0  
Depth of B = 1  
Depth of C = 2  

Difference from height:

Depth → measures upward distance  
Height → measures downward distance

---

### 4. What is a Binary Tree?

Now we specialize.

Definition:

A Binary Tree is a tree where each node has at most TWO children.

Important phrase:

“At most 2” means:

• Node may have 0 children  
• Node may have 1 child  
• Node may have 2 children  

---

### 4.1 Why “Binary”?

Because branching factor = 2

Each node splits into:

• Left Child  
• Right Child  

Example:

        A
       / \
      B   C

---

### 4.2 Key Binary Tree Terms

---

### Left Child

The node connected via the left reference.

---

### Right Child

The node connected via the right reference.

---

Example:

        A
       / \
      B   C

B → Left child  
C → Right child  

---

### 4.3 Binary Tree Does NOT Mean

Common misconception:

Binary Tree ≠ Sorted Tree  
Binary Tree ≠ Balanced Tree  

Binary Tree ONLY enforces child count limit.

---

### 5. Connecting All Concepts Together

Let’s analyze a full example.

Example Tree:

            A
           / \
          B   C
         / \
        D   E

Node Types:

• Root → A  
• Parent Nodes → A, B  
• Child Nodes → B, C, D, E  
• Leaf Nodes → C, D, E  

Subtrees:

• Subtree at B → B, D, E  
• Subtree at A → entire tree  

Heights:

• Height of D/E/C = 0  
• Height of B = 1  
• Height of A = 2  

Depths:

• Depth of A = 0  
• Depth of B/C = 1  
• Depth of D/E = 2  

Ancestors:

• Ancestors of E → B, A  

---

### 6. Why These Concepts Matter in DSA

These are not just definitions.

They directly influence:

• Time complexity  
• Recursion design  
• Traversal algorithms  
• Interview problem solving  

Examples:

Height impacts performance:

Balanced tree → fast operations  
Skewed tree → slow operations  

Subtree understanding:

Critical for recursion problems.

Leaf node logic:

Used in many base conditions.

---

### 7. Mental Model for Mastery

Always visualize trees as:

Recursive structures of nodes.

Every node behaves like:

• Root of its own subtree  
• Entry point to smaller problems  

This mindset unlocks:

DFS  
Tree DP  
Path problems  
Structural transformations  
