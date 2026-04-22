// Introduction to Binary Search Tree

// WHAT IS A BINARY TREE?

// A tree where:

// Each node has at most 2 children
// (left and right)

// WHAT MAKES BST SPECIAL?

// A Binary Search Tree follows a rule:

// LEFT subtree < ROOT < RIGHT subtree

// CORE PROPERTY

// For every node:

// All values in left subtree  < node.val
// All values in right subtree > node.val

// STEP 2 — SIMPLE EXAMPLE

//         5
//        / \
//       3   7
//      / \ / \
//     2  4 6  8

// Let’s check:
// Left of 5 → (2,3,4) → all < 5 
// Right of 5 → (6,7,8) → all > 5 

// WHY BST IS POWERFUL

// Because:

// It behaves like a sorted structure

// KEY RESULT
// Inorder traversal of BST = sorted array

// Example:
// Inorder → 2, 3, 4, 5, 6, 7, 8

// BASIC OPERATIONS

// Search

// Compare and move:

// If target < node → go left
// If target > node → go right

// Insert

// Same idea:

// Find correct position and insert







