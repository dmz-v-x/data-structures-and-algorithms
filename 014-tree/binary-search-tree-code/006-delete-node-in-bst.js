// Given a BST and a value key, delete that node while maintaining BST property

// RECALL BST RULE
// LEFT < ROOT < RIGHT

// After deletion, this must still hold

// THREE CASES

// Case 1: Node is a LEAF
// Just delete it

// Example
// Delete 2

//     5
//    /
//   2

// Result:

//     5

// Case 2: Node has ONE CHILD
// Replace node with its child
// Example
// Delete 3

//     5
//    /
//   3
//    \
//     4

// Result:

//     5
//    /
//   4

// Case 3: Node has TWO CHILDREN (MOST IMPORTANT)

// We cannot delete directly

// We must:

// Replace node with:
// 1. Inorder successor (smallest in right subtree)
// OR
// 2. Inorder predecessor (largest in left subtree)



// VISUALIZATION

// Delete 5:

//         5
//        / \
//       3   7
//      / \   \
//     2   4   8
// Step 1:
// Successor = 7 (smallest in right subtree)

// Step 2:
// Replace 5 → 7

// Step 3:
// Delete 7 from right subtree

// Final:
//         7
//        / \
//       3   8
//      / \
//     2   4

// DRY RUN 

// Delete 3:

//         5
//        / \
//       3   7
//      / \
//     2   4

// Step 1:
// Found node 3

// Step 2:
// Successor = 4

// Step 3:
// Replace 3 → 4

// Step 4:
// Delete original 4


function findMin(node){
  while(node.left){
    node = node.left;
  }
  return node;
}

function deleteNode(root, key){
  if(!root) return null;

  // 1. Search Node
  if(key < root.val){
    root.left = deleteNode(root.left, key);
  }else if(key > root.val){
    root.right = deleteNode(root.right, key);
  }else{
    // Step 2: Node found

    // Case 1: No Children
    if(!root.left && !root.right){
      return null;
    }

    // Case 2: One Child
    if(!root.left) return root.right;
    if(!root.right) return root.left;

    // Case 3: Two Children
    let successor = findMin(root.right);
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }
  return root;
}



// Balanced BST
// Time = O(log N)
// Worst case
// Time = O(N)

