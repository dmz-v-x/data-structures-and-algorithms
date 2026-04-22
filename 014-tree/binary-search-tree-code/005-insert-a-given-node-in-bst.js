// Insert a Node in Binary Search Tree

// RECALL BST RULE
// LEFT < ROOT < RIGHT

// We must insert the new value without breaking this rule

// INTUITION

// Think like search:

// Keep moving left or right
// until you find an empty spot

// VISUALIZATION

// Initial Tree
//         5
//        / \
//       3   7
//      / \
//     2   4

// Insert = 6

// Step-by-step
// 6 > 5 → go right
// 6 < 7 → go left
// left is null → insert here

// Final Tree
//         5
//        / \
//       3   7
//      / \  /
//     2   4 6



// Recursion Approach

function insertToBST(root, val){
  // Step 1: empty spot found

  if(!root) return new TreeNode(val);

  // Step 2: go left

  if(val < root.val){
    root.left = insertToBST(root.left, val);
  }

  // Step 3: Go right
  else{
    root.right = insertToBST(root.left, val);
  }

  return root;
}

// Iterative Approach


function insertToBST(root, val){
  if(!root) return new TreeNode(val);

  let curr = root;

  while(true){
    if(val < curr.val){
      if(!curr.left){
        curr.left = new TreeNode(val);
        break;
      }
      curr = curr.left;
    }else{
      if(!curr.right){
        curr.right = new TreeNode(val);
        break;
      }
      curr = curr.right;
    }
  }
  return root;
}


// Balanced BST
// Time = O(log N)
// Worst case
// Time = O(N)



EDGE CASES

Empty tree
return new TreeNode(val);

Duplicate values

Depends on problem:

allow on right
or ignore








