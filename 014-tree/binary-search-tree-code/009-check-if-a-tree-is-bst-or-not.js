// Given a binary tree, check:

// Does it follow BST rules or not?

// BST RULE

// LEFT subtree  < ROOT < RIGHT subtree

// This must hold for ALL nodes (not just immediate children)

// WRONG THINKING 

// Only checking:
// node.left < node < node.right

// Example

//         5
//        / \
//       3   7
//          /
//         4   invalid

// Why invalid?

// 4 is in RIGHT subtree of 5 but < 5 

// CORRECT IDEA

// Every node must satisfy a range

// (min, max)

// Rule:
// node.val must be between (min, max)

// HOW RANGE CHANGES
// At root:
// (-∞, +∞)

// Going LEFT:
// (max becomes root.val)

// Going RIGHT:
// (min becomes root.val)

// VISUALIZATION

// Tree:

//         5
//        / \
//       3   7
// Ranges:
// 5 → (-∞, +∞)
// 3 → (-∞, 5)
// 7 → (5, +∞)

// Complexity
// Time: O(N)
// Space: O(H)

function ifValidBST(root){
  function validate(node, min, max){
    if(!node) return true; // empty tree = valid BST

    if(node.val <= min || node.val >= max){
      return false;
    }

    return(
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
}













