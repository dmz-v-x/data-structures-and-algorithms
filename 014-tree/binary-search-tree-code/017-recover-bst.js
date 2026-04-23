// In a BST:

// Two nodes are swapped by mistake

// We must:

// Fix the BST WITHOUT changing structure

// KEY PROPERTY

// Inorder traversal of BST = sorted order

// WHAT GOES WRONG?

// If two nodes are swapped:

// Sorted order gets broken

// EXAMPLE
// Original BST:
// [1, 2, 3, 4]

// After swap (2 and 4):
// [1, 4, 3, 2]

// Types of Violation:

// Case 1: Adjacent swap
// [1, 3, 2, 4]

// One violation

// Case 2: Non-adjacent swap
// [1, 4, 3, 2]

// Two violations


function recoverTree(root){
  let first = null;
  let second = null;
  let prev = new TreeNode(-Infinity);

  function inorder(node){
    if(!node) return;

    inorder(node.left);

    // violation
    if(prev.val > node.val){
      if(!first){
        first = prev;
      }
      second = node;
    }

    prev = node;

    inorder(node.right);
  }

  inorder(root);

  [first.val, second.val] = [second.val, first.val];
}


// Morris Traversal:

function recoverTree(root) {
  let curr = root;
  let prev = null;
  let first = null;
  let second = null;

  while (curr) {
    if (!curr.left) {
      if (prev && prev.val > curr.val) {
        if (!first) first = prev;
        second = curr;
      }

      prev = curr;
      curr = curr.right;
    } 
    else {
      let pred = curr.left;

      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }

      if (!pred.right) {
        pred.right = curr;
        curr = curr.left;
      } 
      else {
        pred.right = null;

        if (prev && prev.val > curr.val) {
          if (!first) first = prev;
          second = curr;
        }

        prev = curr;
        curr = curr.right;
      }
    }
  }

  // swap
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
}


// Complexity:

// | Approach  | Time | Space   |
// | --------- | ---- | ------- |
// | Recursive | O(N) | O(H)    |
// | Morris    | O(N) | O(1) 🔥 |



