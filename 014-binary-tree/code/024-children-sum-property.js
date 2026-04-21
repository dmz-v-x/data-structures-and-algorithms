// WHAT IS THE PROPERTY?

// A tree satisfies Children Sum Property if:

// node.val = left.val + right.val

// (for every non-leaf node)

// Example (Valid)
//         10
//        /  \
//       8    2
//      / \
//     3   5

// Check:

// 10 = 8 + 2 
// 8 = 3 + 5 

// Example (Invalid)
//         10
//        /  \
//       5    2

// 10 ≠ 5 + 2 

// We are asked to CONVERT the tree so that it satisfies the property

// CORE RULES

// We can:

// INCREASE node values
// NOT decrease values

// INTUITION

// At each node:

// childSum = left + right

// Case 1:
// childSum >= node.val

// Update node:

// node.val = childSum

// Case 2:
// childSum < node.val

// Push value DOWN:

// left.val = node.val
// right.val = node.val

// KEY IDEA
// Top-down → fix children if smaller
// Bottom-up → fix parent after recursion




// Optimal Approach

// Complexity
// Time: O(N)
// Space: O(H)

function changeTree(root){
  if(!root) return;

  let childSum = 0;

  if(root.left) childSum += root.left.val;
  if(root.right) childSum += root.right.val;

  // Top Down
  if(childSum >= root.val){
    root.val = childSum
  }else {
    if(root.left) root.left.val = root.val;
    if(root.right) root.right.val = root.val;
  }

  // recurse
  changeTree(root.left);
  changeTree(root.right);

  // Bottom Up
  let total = 0;
  if(root.left) total += root.left.val;
  if(root.right) total += root.right.val;

  if(root.left || root.right){
    root.val = total;
  }
}














