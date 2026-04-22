// Kth Smallest Element in BST

// Inorder traversal of BST → sorted order

// That means:

// 1st smallest → 1st inorder element  
// 2nd smallest → 2nd inorder element  
// kth smallest → kth inorder element

// VISUALIZATION

// Tree:

//         5
//        / \
//       3   6
//      / \
//     2   4
//    /
//   1

// Inorder:
// [1, 2, 3, 4, 5, 6]

// k = 3 → answer = 3

// Complexity
// Time: O(N)
// Space: O(N)

function kthSmallest(root, k){
  let arr = [];

  function inorder(node){
    if(!node) return;

    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return arr[k - 1];
}

// Better Approach: No Extra Array

// IDEA

// Don’t store everything
// Stop when we reach kth node


function kthSmallest(root, k){
  let count = 0;
  let result = null;

  function inorder(node){
    if(!node || result !== null) return;

    inorder(node.left);

    count++;
    if(count === k){
      result = node.val;
      return;
    }

    inorder(node.right);
  }

  inorder(root);
  return result;
}

// Complexity
// Time: O(H + k)
// Space: O(H)




// Optimal Approach: Using Morris Traversal


function kthSmallest(root, k) {
  let curr = root;
  let count = 0;

  while (curr) {

    if (!curr.left) {
      count++;
      if (count === k) return curr.val;

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

        count++;
        if (count === k) return curr.val;

        curr = curr.right;
      }
    }
  }
}


// O(1) space






