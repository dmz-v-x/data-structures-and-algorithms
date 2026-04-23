// WHAT IS LCA?

// LCA of two nodes p and q is:

// The lowest node where both p and q are in its subtree

// Example
//         6
//        / \
//       2   8
//      / \ / \
//     0  4 7  9
//       / \
//      3   5

// LCA of 2 and 8:
// Answer = 6

// LCA of 3 and 5:
// Answer = 4

// WHY BST MAKES THIS EASY

// In normal binary tree → complex
// In BST → super simple because

// LEFT < ROOT < RIGHT

// CORE IDEA

// At any node:

// Case 1:
// p and q BOTH < root

// Go LEFT

// Case 2:
// p and q BOTH > root

// Go RIGHT

// Case 3:
// p and q are on different sides

// THIS is LCA 

// Example: p = 2, q = 8
// At 6:
// 2 < 6 and 8 > 6
// → split happens → LCA = 6

// Example: p = 3, q = 5
// At 6 → go left
// At 2 → go right
// At 4:
// 3 < 4 and 5 > 4 → split → LCA = 4

// Recursive

function lowestCommonAncestor(root, p, q){
  if(!root) return null;

  if(p.val < root.val && q.val < root.val){
    return lowestCommonAncestor(root.left, p, q);
  }

  if(p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q);
  }

  return root; // split point
}


// Iterative Solution

function lowestCommonAncestor(root, p, q){
  let curr = root;
  while(curr){
    if(p.val < curr.val && q.val < curr.val){
      curr = curr.val
    }else if(p.val > curr.val && q.val > curr.val){
      curr = curr.right;
    }else{
      return curr;
    }
  }
}


// Complexity
// Balanced BST
// Time = O(log N)
// Worst case
// Time = O(N)




















