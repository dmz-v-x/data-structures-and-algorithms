// Count Total Nodes in a Complete Binary Tree

// WHAT IS A COMPLETE BINARY TREE?

// All levels are full except possibly last
// Last level is filled left to right

//         1
//        / \
//       2   3
//      / \  /
//     4  5 6

// This is complete

// Idea

// Just count all nodes using traversal

// Brute Force: Just count all nodes using traversal

// Complexity
// Time: O(N)
// Space: O(H)

function countNodes(root){
  if(!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

// Better Appraoch

// Key observation:

// Complete tree is almost full

// For perfect binary tree:

// nodes = 2^h - 1

// WHAT IS PERFECT TREE?

// A tree where:

// left height == right height

// Example
//         1
//        / \
//       2   3
//      / \ / \
//     4  5 6  7

// height = 3
// nodes = 2³ - 1 = 7

// IDEA

// At every node:

// Find left height
// Find right height

// CASE 1:
// leftHeight === rightHeight

// Perfect tree

// nodes = 2^h - 1

// CASE 2:
// Not equal

// Not perfect → recurse

// Complexity
// Time: O((log N)²)
// Space: O(log N)

function getLeftHeight(node){
  let height = 0;
  while(node){
    height++;
    node = node.left;
  }
  return height;
}

function getRightHeight(node){
  let height = 0;
  while(node){
    height++;
    node = node.right;
  }
  return height;
}

function countNodes(root){
  if(!root) return 0;

  let leftHeight = getLeftHeight(root);
  let rightHeight = getRightHeight(root);

  // perfect tree
  if(leftHeight === rightHeight){
    return (1 << leftHeight) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
}
























