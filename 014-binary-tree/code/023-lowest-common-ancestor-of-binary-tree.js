// Given a binary tree and two nodes p and q
// Return their lowest common ancestor

// WHAT DOES LCA MEAN?

// The lowest node in the tree such that:

// p is in its subtree
// q is in its subtree

// Example

//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4

// Case 1:

// p = 5, q = 1
// LCA = 3

// Case 2:

// p = 5, q = 4
// LCA = 5

// Brute Force

// Complexity
// Time: O(N)
// Space: O(N) (paths)

function getPath(root, target, path){
  if(!root) return false;

  path.push(root);
  if(root === target) return true;

  if(
    getPath(root.left, target, path) ||
    getPath(root.right, target, path)
  ){
    return true;
  }

  path.pop();
  return false;
  
}

function lowestCommonAncestor(root, p, q){
  let path1 = [];
  let path2 = [];

  getPath(root, p, path1);
  getPath(root, q, path2);

  let i = 0;
  while(i < path1.length && i < path2.length){
    if(path1[i] !== path2[i]) break;
    i++;
  }

  return path1[i - 1];
  
}


// Optimal Approach: Recursion

// Complexity
// Time: O(N)
// Space: O(H) (recursion stack)

function lowestCommonAncestor(root, p, q){
  if(!root || root === p || root === q){
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if(left && right){
    return root;
  }

  return left ? left : right;
}





















