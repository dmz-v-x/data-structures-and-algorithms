// Given a binary tree (not necessarily BST):

// Find the size of the largest subtree which IS a BST

// WHY THIS IS TRICKY

// Because:

// Some parts of tree may be BST  
// Some parts may NOT be BST

// We must:

// Check every subtree

// KEY IDEA

// For every node, we need to know:

// 1. Is subtree a BST?
// 2. Size of subtree
// 3. Minimum value in subtree
// 4. Maximum value in subtree

// WHY MIN & MAX?

// To check BST:

// left.max < root < right.min

// WHAT SHOULD FUNCTION RETURN?

// For each node, return:

// {
//   isBST,
//   size,
//   min,
//   max
// }

// BASE CASE

// For null node:

// isBST = true  
// size = 0  
// min = +∞  
// max = -∞

// This helps comparisons work correctly

// Logic:

// Step 1: Get left & right info

// Step 2: Check if current subtree is BST
// left.max < root.val < right.min

// Step 3: If YES
// isBST = true  
// size = left.size + right.size + 1
// min = min(root.val, left.min)
// max = max(root.val, right.max)

// Step 4: If NO
// isBST = false  
// size = max(left.size, right.size)

function largestBST(root){
  let maxSize = 0;

  function dfs(node){
    if(!node){
      return{
        isBST: true,
        size: 0,
        min: Infinity,
        max: -Infinity
      };
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    // check bst condition
    if(left.max < node.val && node.val < right.min){
      let size = left.size + right.size + 1;

      maxSize = Math.max(maxSize, size);

      return{
        isBST: true,
        size: size,
        min: Math.min(node.val, left.min),
        max: Math.max(node.val, right.max)
      };
    }
    // not a BST
    return {
      isBST: false,
      size: Math.max(left.size, right.size),
      min: -Infinity,
      max: Infinity
    };
    
  }

  dfs(root);

  return maxSize;
}



// COMPLEXITY
// Time: O(N)
// Space: O(H)











