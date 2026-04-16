// What is Diameter?
// Longest path between ANY two nodes

// Path can pass through root OR not
// Usually counted in edges

// At any node:

// Diameter through node = leftHeight + rightHeight

// Example
//         1
//        / \
//       2   3
//      / \
//     4   5

// Longest path:

// 4 → 2 → 1 → 3

// Diameter = 3 edges

// Key Idea
// Path-based → DFS problem

// Side-by-Side Comparison

// | Feature            | Maximum Width       | Diameter     |
// | ------------------ | ------------------- | ------------ |
// | Direction          | Horizontal (level)  | Any path     |
// | Focus              | Nodes in same level | Longest path |
// | Approach           | BFS                 | DFS          |
// | Uses indices?      | Yes                 | No           |
// | Depends on height? | No                  | Yes          |


// Brute Force

// For every node:

// Find left height
// Find right height
// Compute diameter
// Take max

// Time Complexity
// O(n^2)

// Why?
// For each node → we call height() → O(n)
// Total nodes = n

// n × n = n²

function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

function diameter(root) {
  if (!root) return 0;

  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  let currDiameter = leftHeight + rightHeight;

  let leftDiameter = diameter(root.left);
  let rightDiameter = diameter(root.right);

  return Math.max(currDiameter, leftDiameter, rightDiameter);
}



// Optimal Approach

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return diameter;
}



// Time Complexity: O(n)

// Space Complexity: O(h)
// h = height
// worst case → O(n)






