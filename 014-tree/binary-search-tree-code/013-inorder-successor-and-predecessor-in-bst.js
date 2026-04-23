// WHAT DO THESE MEAN?

// Inorder Successor
// Next greater element (just after node in inorder)

// Inorder Predecessor
// Previous smaller element (just before node in inorder)

// Inorder traversal of BST = sorted order

// So:

// Successor → next element
// Predecessor → previous element

// VISUALIZATION

// BST:

//         5
//        / \
//       3   7
//      / \   \
//     2   4   8
// Inorder:
// [2, 3, 4, 5, 7, 8]

// For node = 5

// Successor = 7
// Predecessor = 4


// SUCCESSOR

// Case 1: Node has RIGHT subtree
// Successor = leftmost node in right subtree
// Example:
// Node = 5
// Right subtree = [7,8]
// Leftmost = 7

// Case 2: No RIGHT subtree
// Go up until node is LEFT child of its parent

// That parent is successor


// PREDECESSOR
// Case 1: Node has LEFT subtree
// Predecessor = rightmost node in left subtree

// Case 2: No LEFT subtree
// Go up until node is RIGHT child

// That parent is predecessor

function inorderSuccessor(root, target){
  let succ = null;
  while(root){
    if(target.val < root.val){
      succ = root;
      root = root.left;
    }else{
      root = root.right;
    }
  }
}

function inorderPredecessor(root, target){
  let pred = null;

  while(root){
    if(target.val > root.val){
      pred = root;
      root = root.right;
    }else{
      root = root.left;
    }
  }
  return pred;
}





// Complexity
// Time: O(H)
// Space: O(1)









