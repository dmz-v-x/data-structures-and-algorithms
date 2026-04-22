// You are given a binary tree
// Find the maximum width

// What is “width”?

// Width of a level = number of nodes between leftmost and rightmost (including null gaps in between)

// Example
//         1
//        / \
//       2   3
//      /     \
//     4       5

// Levels:

// Level 1 → width = 1
// Level 2 → width = 2
// Level 3 → width = 4 (positions: 4, null, null, 5)

// Maximum width = 4

// Key Idea
// Level-based → BFS problem

// Why NOT DFS?

// Let’s think carefully:

// DFS goes deep
// But width depends on nodes at same level


function widthOfBinaryTree(root) {
  if (!root) return 0;

  let maxWidth = 0;
  let queue = [[root, 0]];

  while (queue.length > 0) {
    let size = queue.length;
    let start = queue[0][1];
    let end = queue[queue.length - 1][1];

    maxWidth = Math.max(maxWidth, end - start + 1);

    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();

      if (node.left) {
        queue.push([node.left, 2 * index]);
      }

      if (node.right) {
        queue.push([node.right, 2 * index + 1]);
      }
    }
  }

  return maxWidth;
}
