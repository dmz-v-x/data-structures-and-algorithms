// We are given 2 binary trees

// We must check:

// Are they EXACTLY identical?

// What does “identical” mean?

// Two trees are identical if:

// Structure is same
// Node values are same

// Example

// Tree 1
//     1
//    / \
//   2   3

// Tree 2
//     1
//    / \
//   2   3

// SAME → return true

// Not identical case
// Tree 1        Tree 2

//     1            1
//    /              \
//   2                2

// Structure different → false

// Brute Force:

// Idea: 

// Convert both trees into some representation
// Compare them

// Approach

// Do traversal (say preorder)

// But just preorder is NOT enough

// Why?

// Tree A:        Tree B:

//   1              1
//  /                \
// 2                  2

// Preorder:

// [1,2]   vs   [1,2]  looks same but NOT

// Fix: include NULLs
// Tree A → [1,2,null,null,null]
// Tree B → [1,null,2,null,null]

// Now they differ

// Complexity
// Time: O(N + M)
// Space: O(N + M)


function isSameTree(p, q){

  function serialize(node, arr){
    if(!node){
      arr.push("null")
      return;
    }

    arr.push(node.val);
    serialize(node.left, arr);
    serialize(node.right, arr);
  }



  let arr1 = [];
  let arr2 = [];

  serialize(p, arr1);
  serialize(q, arr2);

  return arr1.join(",") === arr2.join(",");
}


// Optimal Approach

// At each step:

// We check:

// 1. Both null → true
// 2. One null → false
// 3. Values different → false
// 4. Recurse left AND right

// FINAL LOGIC
// isSame(p, q) =
//     if both null → true
//     if one null → false
//     if values differ → false
//     return left && right

// You are walking both trees together

// Like:

// Tree1 pointer   Tree2 pointer
//      ↓               ↓
//    compare at SAME TIME

// COMPLEXITY
// Time: O(N)
// Space: O(H) recursion


function isSameTree(p, q){
  // Case 1: both null

  if(p === null && q === null) return true;

  // Case 2: one null

  if(p === null || q === null) retrun false;

  // Case 3: Values differ
  if(p.val !== q.val) return false;

  // Case 4: check left and right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}















