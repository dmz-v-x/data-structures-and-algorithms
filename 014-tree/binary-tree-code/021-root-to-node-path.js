// Given a binary tree and a target value
// Return the path from root → that node

// WHAT DO WE WANT?
// Example
  
//         1
//        / \
//       2   3
//      / \
//     4   5

// Target = 5

// Answer: [1, 2, 5]

// We need to:

// 1. Try a path
// 2. If wrong → undo (backtrack)
// 3. If correct → return path

// INTUITION

// We maintain:

// path = []

// At every node:

// Add node to path
// Check:
//   if target → DONE
// Otherwise:
//   go left
//   go right
// If not found → remove node (BACKTRACK)

// Complexity
// Time: O(N)
// Space: O(H) (height of tree)

function rootToNodePath(root, target){
  let path = [];

  function dfs(node){
    if(!node) return false;

    // Step 1: add current node
    path.push(node.val);

    // Step 2: Check target
    if(node.val === target) return true;

    // Step 3: explore children
    if(dfs(node.left) || dfs(node.right)){
      return true;
    }

    path.pop();

    return false;
  }

  dfs(root);
  return path;
}


















