// You are given a binary tree with exactly 3 nodes:

//     root
//    /   \
//  left  right

// You need to check:

// root.val === left.val + right.val

var checkTree = function(root) {
  return root.val === root.left.val + root.right.val;
};

// Complexity
// Time: O(1)
// Space: O(1)
