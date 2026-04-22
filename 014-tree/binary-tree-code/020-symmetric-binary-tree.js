// A tree is symmetric if it is a mirror of itself

// Example (Symmetric)
//         1
//        / \
//       2   2
//      / \ / \
//     3  4 4  3

// Left side = mirror of right side

// Example (Not Symmetric)
//         1
//        / \
//       2   2
//        \   \
//         3   3

// Structure mismatch → not mirror

// CORE INTUITION

// Forget the whole tree.

// Just ask:

// Are LEFT subtree and RIGHT subtree mirror images?

// WHAT DOES "MIRROR" MEAN?

// Two trees are mirror if:

// 1. values are equal
// 2. left of one = right of other
// 3. right of one = left of other

// Approach: Brute Force: Create Mirror Tree

// Idea
// Create mirror of left subtree
// Compare it with right subtree

// Complexity
// Time: O(N)
// Space: O(N) (extra tree)

function isSymmetric(root){
  function mirror(node){
    if(!node) return null;

    let newNode = {val: node.val, left: null, right: null};
    newNode.left = mirror(node.right);
    newNode.right = mirror(node.left);

    return newNode;
  }

  function isSame(a, b){
    if(!a && !b) return true;
    if(!a || !b) return false;

    return (
      a.val === b.val &&
      isSame(a.left, b.left) &&
      isSame(a.right, b.right)
    );
  }

  let mirrored = mirror(root.left);
  return isSame(mirrored, root.right);
}


// Recursive approach

function isSymmetric(root){
  function isMirror(left, right){
    if(!left && !right) return true;

    if(!left || !right) return false;

    if(left.val !== right.val) return false;

    return(isMirror(left.left, right.right) &&
          isMirror(left.right, right.left))
  }

  return isMirror(root.left, root.right);
}















