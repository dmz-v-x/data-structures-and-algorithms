### 1. Introduction

Once a binary tree is represented in memory, the next fundamental question becomes:

How do we systematically visit its nodes?

This process is called **tree traversal**.

Traversal is one of the most important topics in tree-based DSA problems. Nearly every tree problem relies on some form of traversal.

Understanding traversal deeply unlocks:

• Searching  
• Aggregation problems (sum, max, height)  
• Structural transformations  
• Path problems  
• Interview problem solving  

---

### 2. What is Tree Traversal?

Tree Traversal = Visiting every node of a tree exactly once in a defined order.

Unlike arrays (linear), trees branch.

So "order" becomes critical.

Example Tree:

            A
           / \
          B   C
         / \
        D   E

Different traversal strategies produce different visit sequences.

---

### 3. Two Fundamental Categories of Traversal

All traversal techniques fall into two main families:

---

### 3.1 Depth-First Traversal (DFS)

Core idea:

Explore as deep as possible before moving sideways.

Mental model:

"Go down → then backtrack"

---

### 3.2 Breadth-First Traversal (BFS)

Core idea:

Explore level by level.

Mental model:

"Go wide → then deeper"

---

### 4. Depth-First Traversals (DFS)

DFS has three primary variations.

They differ only in **when the root node is visited**.

---

## 4.1 Preorder Traversal

Rule:

Root → Left → Right

Meaning:

Visit node BEFORE its subtrees.

---

### Example

            A
           / \
          B   C
         / \
        D   E

Sequence:

A → B → D → E → C

---

### Why This Happens

Start at root:

Visit A  
Go left → Visit B  
Go left → Visit D  
Backtrack → Visit E  
Backtrack → Visit C  

---

### Visual Trace

Step-by-step movement:

Visit A
    Go Left → Visit B
        Go Left → Visit D
        Backtrack
        Go Right → Visit E
    Backtrack
    Go Right → Visit C

---

### Mental Model

Preorder = Root visited first.

Useful for:

• Tree copying  
• Serialization  
• Expression trees  

---

## 4.2 Inorder Traversal

Rule:

Left → Root → Right

Meaning:

Visit node BETWEEN subtrees.

---

### Example

            A
           / \
          B   C
         / \
        D   E

Sequence:

D → B → E → A → C

---

### Why This Happens

Go left fully first.

Only visit root AFTER left subtree.

---

### Visual Trace

Go Left → Go Left → Visit D  
Backtrack → Visit B  
Go Right → Visit E  
Backtrack → Visit A  
Go Right → Visit C  

---

### Critical Insight

Inorder traversal of BST → Sorted sequence.

This is extremely important in interviews.

---

## 4.3 Postorder Traversal

Rule:

Left → Right → Root

Meaning:

Visit node AFTER subtrees.

---

### Example

            A
           / \
          B   C
         / \
        D   E

Sequence:

D → E → B → C → A

---

### Why This Happens

Root visited last.

---

### Visual Trace

Explore entire left subtree  
Then right subtree  
Then visit root  

---

### Mental Model

Postorder = Bottom-up traversal.

Useful for:

• Tree deletion  
• Dependency problems  
• Height calculations  

---

### 5. Comparing DFS Variants Visually

Example Tree:

            A
           / \
          B   C
         / \
        D   E

Preorder:

A → B → D → E → C

Inorder:

D → B → E → A → C

Postorder:

D → E → B → C → A

---

### Key Observation

Same tree.

Different visiting logic.

Different sequences.

---

### 6. Breadth-First Traversal (BFS)

Also called:

Level Order Traversal.

Rule:

Visit nodes level by level.

---

### Example

            A
           / \
          B   C
         / \
        D   E

Sequence:

A → B → C → D → E

---

### Visual Progression

Level 1 → A  
Level 2 → B, C  
Level 3 → D, E  

---

### Mental Model

BFS = Horizontal scanning.

Useful for:

• Shortest path problems  
• Level-based logic  
• Tree width  

---

### 7. Advanced Traversal Variations

Beyond the fundamentals, interviews often test variations.

---

## 7.1 Reverse Level Order

Rule:

Bottom level → Upwards.

Example:

Tree:

            A
           / \
          B   C
         / \
        D   E

Reverse Level Order:

D → E → B → C → A

---

## 7.2 Zigzag Traversal

Rule:

Alternate direction per level.

Example:

            A
           / \
          B   C
         / \
        D   E

Sequence:

Level 1 → A (Left → Right)  
Level 2 → C → B (Right → Left)  
Level 3 → D → E (Left → Right)

Result:

A → C → B → D → E

---

## 7.3 Vertical Traversal

Rule:

Group nodes by vertical alignment.

Example:

            A
           / \
          B   C
         / \
        D   E

Vertical columns:

Column -1 → D  
Column 0 → B, A, E  
Column +1 → C  

---

## 7.4 Boundary Traversal

Rule:

Visit outer boundary of tree.

Example:

            A
           / \
          B   C
         / \
        D   E

Boundary:

A → B → D → E → C

---

## 7.5 Diagonal Traversal

Rule:

Group nodes diagonally.

Example:

            A
           / \
          B   C
         / \
        D   E

Diagonals:

Diagonal 1 → A → C  
Diagonal 2 → B → E  
Diagonal 3 → D  

---

### 8. Traversal Strategy Selection

When solving problems:

Ask:

• Do I need depth exploration? → DFS  
• Do I need level information? → BFS  

---

### DFS Preferred For

• Path problems  
• Height / depth problems  
• Subtree logic  
• Recursion-heavy tasks  

---

### BFS Preferred For

• Level-based logic  
• Shortest distance  
• Minimum depth  
• Width calculations  

---

### 9. Complexity Considerations

Regardless of traversal type:

Every node visited once.

Time Complexity:

O(n)

Where n = number of nodes.

---

Space Complexity depends on:

DFS → Height of tree  
BFS → Maximum width of tree  

Balanced vs Skewed impact memory usage.

---

### 10. Common Beginner Confusions

---

### Confusion 1 — "Why three DFS variants?"

Because traversal differs by root timing.

---

### Confusion 2 — "Is one traversal better?"

No.

Each serves different problems.

---

### Confusion 3 — "Why inorder special?"

Because BST property → sorted output.

---

### Confusion 4 — "Traversal vs Searching?"

Traversal = Visit ALL nodes  
Search = Stop early if found  

---

### 11. Mental Models for Mastery

Always visualize traversal as:

Movement pattern.

Preorder → Root-first  
Inorder → Root-middle  
Postorder → Root-last  
BFS → Level scanning  

---

### 12. Final Summary

Core Traversals:

Depth-First (DFS):

• Preorder  
• Inorder  
• Postorder  

Breadth-First (BFS):

• Level Order  

Advanced Variations:

• Reverse Level Order  
• Zigzag  
• Vertical  
• Boundary  
• Diagonal  

Most important insight:

Traversal defines problem-solving strategy.

Different order → Different logic → Different solutions.
