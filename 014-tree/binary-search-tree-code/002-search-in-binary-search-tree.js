// Search in Binary Search Tree

// RECALL BST PROPERTY
// LEFT subtree  < ROOT < RIGHT subtree

// This is the only thing we use to search efficiently.

// INTUITION

// Suppose you want to find target.

// At any node:

// If target === node → found
// If target < node → go LEFT
// If target > node → go RIGHT

// That’s it.
// Same idea as binary search on array.

// VISUALIZATION

// Tree:

//         5
//        / \
//       3   7
//      / \   \
//     2   4   8

// Search for 4
// Step 1: 4 < 5 → go left
// Step 2: 4 > 3 → go right
// Step 3: found at 4

// Search for 6
// Step 1: 6 > 5 → go right
// Step 2: 6 < 7 → go left
// Step 3: null → NOT found 

// Complexity
// Balanced BST
// Time = O(log N)
// Worst case (skewed)
// Time = O(N)

function searchBST(root, target){
  // Step 1: Base Case

  if(!root) return null;

  // Step 2: found

  if(root.val === target) return root;

  // Step 3: go left
  if(target < root.val){
    return searchBST(root.left, target);
  }

  // Step 4: Go right
  return searchBST(root.right, target);
}



// Iterative Approach


// Space = O(1)

function searchBST(root, target){
  let curr = root;
  while(curr){
    if(curr.val === target) return curr;

    if(target < curr.val){
      curr = curr.left;
    }else {
      curr = curr.right;
    }
  }
  return null;
}











