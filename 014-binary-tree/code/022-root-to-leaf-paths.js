// WHAT IS A LEAF?

// A node with:

// no left child AND no right child

// Example
//         1
//        / \
//       2   3
//        \
//         5

// Output
// [
//   "1->2->5",
//   "1->3"
// ]

// At every node:

// 1. Add node to path
// 2. If leaf → save path
// 3. Explore children
// 4. Remove node (backtrack)

// Complexity
// Time: O(N × path_length)
// Space: O(H) recursion

function binaryTreePaths(root){
  let result = [];

  function dfs(node, path){
    if(!node) return;

    // add current node to path;
    path.push(node.val);

    // Check if leaf
    if(!node.left && !node.right){
      result.push(path.join("->"));
    }else{
      dfs(node.left, path);
      dfs(node.right, path);
    }

    // backtrack
    path.pop();
  }

  dfs(root, []);
  return result;
}




















