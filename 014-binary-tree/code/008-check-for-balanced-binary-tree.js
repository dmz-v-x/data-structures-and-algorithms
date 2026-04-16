// What does “Balanced” mean?

// A tree is balanced if:

// For every node:
// |height(left) - height(right)| ≤ 1

// Not just root — EVERY node must satisfy this

// Visual Understanding

// Balanced
//     1
//    / \
//   2   3

// Not Balanced
//     1
//    /
//   2
//  /
// 3

// Left height = 2, Right = 0 → difference = 2

// Time Complexity: O(n^2): n nodes × O(n) height = O(n^2)
// Space Complexity: O(h)

function height(root){
  if(!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function isBalanced(root){
  if(!root) return true;

  let left = height(root.left);
  let right = height(root.right);

  if(Math.abs(left - right) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
}


// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(h) h = height of root, worst case: O(n) (skewed tree)
function checkHeight(root){
  if(!root) return 0;

  let left = checkHeight(root.left);
  if(left === -1) return -1;

  let right = checkHeight(root.right);
  if(right === -1) return -1;

  if(Math.abs(left - right) > 1) return -1;

  return 1 + Math.max(left, right);
}

function isBalanced(root){
  return checkHeight(root) !== -1;
}



