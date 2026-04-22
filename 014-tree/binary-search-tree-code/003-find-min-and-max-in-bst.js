// Find Minimum & Maximum in BST

// RECALL BST PROPERTY
// LEFT subtree  < ROOT < RIGHT subtree

// INTUITION

// Minimum value

// Smallest value will always be:

// Keep going LEFT until you can't go anymore

// Maximum value

// Largest value will always be:

// Keep going RIGHT until you can't go anymore

// VISUALIZATION

// Tree:

//         5
//        / \
//       3   7
//      / \   \
//     2   4   8

// Find MIN
// 5 → 3 → 2 → stop

// Answer = 2

// Find MAX
// 5 → 7 → 8 → stop

// Answer = 8

// Recursive Approach

function findMin(root){
  if(!root) return null;

  if(!root.left) return root.val;

  return findMin(root.left);
}

function findMax(root){
  if(!root) return null;

  if(!root.right) return root.val;

  return findMax(root.right);
}


// Iterative Approach

function findMin(root){
  let curr = root;

  while(curr && curr.left){
    curr = curr.left;
  }

  return curr ? curr.val : null;
}

function findMax(root){
  let curr = root;

  while(curr && curr.right){
    curr = curr.right;
  }

  return curr ? curr.val : null
}




// Balanced BST
// Time = O(log N)
// Worst case (skewed)
// Time = O(N)



// EDGE CASES

// Empty tree
// if (!root) return null;

// Single node
// That node is both min and max








