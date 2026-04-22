// Flatten Binary Tree to Linked List

// WHAT DO WE NEED?

// Convert tree into:

// Linked list (in-place)

// Rules
// Use right pointer as next
// Left pointer should be null
// Order should follow PREORDER

// Example
// Input:
//         1
//        / \
//       2   5
//      / \   \
//     3   4   6

// Output:
// 1 → 2 → 3 → 4 → 5 → 6

// KEY OBSERVATION
// We need preorder traversal order

// Preorder:

// ROOT → LEFT → RIGHT

var flatten = function(root) {
  let prev = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    dfs(node.left);

    node.right = prev;
    node.left = null;

    prev = node;
  }

  dfs(root);
};

// DRY RUN (VERY IMPORTANT)

// Tree:

//         1
//        / \
//       2   5
// Process order:
// 6 → 5 → 4 → 3 → 2 → 1
// Build list:
// prev = null
// 6 → null
// 5 → 6
// 2 → 3 → 4 → 5 → 6
// 1 → 2 → ...


// Complexity
// Time: O(N)
// Space: O(H)

  
