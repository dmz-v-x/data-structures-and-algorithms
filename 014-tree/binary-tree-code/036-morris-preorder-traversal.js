// Morris Preorder Traversal

// Normal traversals:

// | Method    | Space |
// | --------- | ----- |
// | Recursion | O(H)  |
// | Stack     | O(H)  |

// Morris:

// O(1) space

// CORE IDEA

// Instead of stack/recursion:

// We temporarily modify the tree (threads)

// WHAT IS A "THREAD"?

// We connect:

// Rightmost node of left subtree → current node

// PREORDER REMINDER
// ROOT → LEFT → RIGHT

// So we must:

// Print node BEFORE going left


function morrisPreorder(root) {
  let curr = root;
  let result = [];

  while (curr) {

    // Case 1: no left child
    if (!curr.left) {
      result.push(curr.val);
      curr = curr.right;
    } 
    else {
      // find predecessor
      let pred = curr.left;

      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }

      // thread not created
      if (!pred.right) {
        result.push(curr.val);   // preorder print
        pred.right = curr;       // create thread
        curr = curr.left;
      } 
      else {
        // thread exists → remove
        pred.right = null;
        curr = curr.right;
      }
    }
  }

  return result;
}
