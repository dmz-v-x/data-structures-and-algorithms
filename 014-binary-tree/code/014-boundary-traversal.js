// Boundary traversal means:

// Traverse the OUTER boundary of the tree in anti-clockwise direction

// Example
//           1
//         /   \
//        2     3
//       / \     \
//      4   5     6
//         / \   /
//        7   8 9

// Output
// [1, 2, 4, 7, 8, 9, 6, 3]

// STEP 1: WHAT IS “BOUNDARY”?

// Boundary = 3 parts:


// Left Boundary (excluding leaves)
// 1 → 2 → 4
// (but 4 is leaf → handled separately)

// Leaf Nodes (left → right)
// 4, 7, 8, 9, 6

// Right Boundary (excluding leaves, reversed)


// Optimal Approach:

// CORE IDEA

// Do 3 separate traversals

// Step-by-step plan
// 1. Add root (if not leaf)
// 2. Add LEFT boundary (excluding leaves)
// 3. Add ALL leaves
// 4. Add RIGHT boundary (excluding leaves, reversed)


// DRY RUN STEP-BY-STEP

// Tree:

//           1
//         /   \
//        2     3
//       / \     \
//      4   5     6
//         / \   /
//        7   8 9

// Step 1: Add root
// [1]

// Step 2: Left boundary

// Traverse:

// 1 → 2 → 4

// Skip leaf 4:

// [2]

// Now:

// [1, 2]

// Step 3: Leaves
// 4, 7, 8, 9, 

// Now:

// [1, 2, 4, 7, 8, 9]

// Step 4: Right boundary

// Traverse:

// 1 → 3 → 6 → 9

// Skip leaves → keep:

// 9, 1

// Reverse:

// 6, 3, 1

// Final:

// [1, 2, 4, 7, 8, 9 6, 3]

// Wait — duplicate 6?

// That’s why we exclude leaves earlier

// Correct final:

// [1, 2, 4, 7, 8, 9, 6, 3]

// COMPLEXITY
// Time: O(N)
// Space: O(H)

function boundaryOfBinaryTree(root){
  if(!root) return [];

  let result = [];

  function isLeaf(node){
    return !node.left && !node.right;
  }

  // Step 1: root

  if(!isLeaf(root)) result.push(root.val);

  // Step 2: Left Boundary

  let curr = root.left;
  while(curr){
    if(!isLeaf(curr)) result.push(curr.val);

    if(curr.left) curr = curr.left;
    else curr = curr.right;
  }

  // Step 3: Leaves

  function addLeaves(node){
    if(!node) return;

    if(isLeaf(node)){
      result.push(node.val);
      return;
    }

    addLeaves(node.left);
    addLeaves(node.right);
  }

  addLeaves(root);

  // Step 4: Right boundary

  let stack = [];
  curr = root.right;

  while(curr){
    if(!isLeaf(curr)) stack.push(curr.val);

    if(curr.right) curr = curr.right;
    else curr = curr.left;
  }

  // reverse right boundary

  while(stack.length){
    result.push(stack.pop());
  }
  
  return result;
}


















