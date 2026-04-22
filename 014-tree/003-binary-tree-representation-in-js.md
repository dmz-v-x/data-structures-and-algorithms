### 1. Introduction

Now that we understand what a binary tree is and the different shapes it can take, the next logical step is:

How do we actually represent a Binary Tree in JavaScript?

This is where theory becomes implementation.

A tree is just an abstract idea until we model it in code.

---

### 2. Core Idea Behind Tree Representation

A binary tree is made of nodes.

Each node contains:

• Data (value)  
• Reference to left child  
• Reference to right child  

So the entire tree is built from interconnected objects.

Mental model:

Tree = Network of linked node objects

---

### 3. The Fundamental Building Block — Tree Node

Every binary tree starts with a node definition.

In JavaScript, we typically use a class.

---

### 3.1 Basic Tree Node Structure

Conceptually, a node looks like:

value → stores data  
left → reference to left subtree  
right → reference to right subtree  

---

### 3.2 JavaScript Node Class

Example:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

Key observations:

• value → stores data  
• left/right → initially null  
• Nodes linked dynamically  

---

### 4. Creating Nodes

Nodes are just objects.

Example:

const nodeA = new TreeNode(10);
const nodeB = new TreeNode(20);
const nodeC = new TreeNode(30);

Visual intuition:

nodeA → { value: 10, left: null, right: null }

---

### 5. Connecting Nodes (Building the Tree)

Trees emerge when nodes reference other nodes.

---

### 5.1 Manual Tree Construction

Example:

const root = new TreeNode(10);
const leftChild = new TreeNode(5);
const rightChild = new TreeNode(15);

root.left = leftChild;
root.right = rightChild;

Visual structure:

        10
       /  \
      5   15

Key idea:

Nodes link → Tree forms

---

### 5.2 Larger Example

const root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

Visual:

            10
           /  \
          5   15
         / \
        3   7

Important insight:

Tree grows recursively.

Every node can spawn subtrees.

---

### 6. Understanding the Recursive Nature

Look closely:

root.left → itself a TreeNode  
root.left.left → another TreeNode  

Which means:

Tree = Node → Points to more trees

This recursive property powers most algorithms.

---

### 7. Tree Representation vs Array Representation

There are TWO common ways to represent trees:

---

### 7.1 Pointer-Based Representation (Most Common)

Uses objects & references.

Structure:

Node → left → right

Advantages:

✔ Natural & flexible  
✔ Used in BST, general trees  
✔ Easy recursion  

---

### 7.2 Array-Based Representation (Special Cases)

Used mostly for:

✔ Complete Binary Trees  
✔ Heaps  

Index relationships:

For node at index i:

Left Child → 2i + 1  
Right Child → 2i + 2  
Parent → floor((i - 1) / 2)

Example:

Array: [10, 5, 15, 3, 7]

Represents:

            10
           /  \
          5   15
         / \
        3   7

But this ONLY works efficiently for compact trees.

---

### 8. Why Pointer Representation Dominates in DSA

Most interview problems use:

Object-based node linking.

Why?

Because trees are rarely perfect/complete in real scenarios.

We need flexibility.

---

### 9. Traversing the Tree (Preview)

Once represented, we can move through the tree.

Example:

root.left  
root.right  
root.left.left  

This ability enables:

DFS  
BFS  
Search  
Insert  
Delete  

---

### 10. Visualizing Memory Structure

Important mental model:

Each node = Separate object in memory.

Connections = References (links)

Example:

root → points to node(5)  
node(5) → points to node(3)

Tree = Graph of references

---

### 11. Common Beginner Confusions

---

### Confusion 1 — "Where is the tree stored?"

Answer:

There is no single “tree object”.

The root node IS the tree.

Everything flows from root.

---

### Confusion 2 — "Why null children?"

Because not all nodes have children.

Leaf nodes must terminate.

---

### Confusion 3 — "Why recursion works?"

Because each subtree is itself a tree.

---

### 12. Practical Implementation Example

Full example:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

Conceptually:

We just built a binary tree.

No magic.

Only objects + references.
