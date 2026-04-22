// Construct Binary Tree from Preorder + Inorder

// We are given:

// Two arrays:

// preorder = [ROOT, LEFT..., RIGHT...]
// inorder  = [LEFT..., ROOT, RIGHT...]

// UNDERSTAND EACH TRAVERSAL

// PREORDER
// ROOT → LEFT → RIGHT

// So:

// First element = ROOT

// INORDER
// LEFT → ROOT → RIGHT

// So:

// Root splits left and right subtree

// Core Idea:

// Preorder gives ROOT
// Inorder tells how to split tree

// TAKE A SIMPLE EXAMPLE

// Example
// preorder = [3, 9, 20, 15, 7]
// inorder  = [9, 3, 15, 20, 7]

// BUILD TREE STEP-BY-STEP

// Step 1: Find ROOT
// From preorder:

// root = 3

// Step 2: Find root in inorder
// inorder = [9, 3, 15, 20, 7]
//               ↑
//             root

// Step 3: Split inorder
// LEFT  = [9]
// RIGHT = [15, 20, 7]

// Step 4: Split preorder accordingly

// preorder = [3, 9, 20, 15, 7]

// Remove root:

// remaining = [9, 20, 15, 7]

// LEFT subtree size = 1
// LEFT  = [9]
// RIGHT = [20, 15, 7]


// CURRENT TREE
//         3
//        / \
//      [9]  [20,15,7]

// STEP 4 — RECURSION

// LEFT SUBTREE
// pre = [9]
// in  = [9]

// leaf node

// RIGHT SUBTREE
// pre = [20, 15, 7]
// in  = [15, 20, 7]

// Step 1:
// root = 20

// Step 2:
// inorder = [15, 20, 7]
//               ↑
// Split:
// LEFT  = [15]
// RIGHT = [7]

// Split preorder:
// remaining = [15, 7]

// LEFT  = [15]
// RIGHT = [7]

// FINAL TREE
//         3
//        / \
//       9   20
//          /  \
//         15   7

// Complexity
// Time: O(N)
// Space: O(N)

function buildtree(preorder, inorder){
  let map = new Map(); // find index of root in inorder fast

  // Store inorder indices
  for(let i = 0; i < inorder.length; i++){
    map.set(inorder[i], i); // storing value -> index in inorder
  }

  let preIndex = 0;

  function build(inStart, inEnd){
    // Step 1: base case
    if(inStart > inEnd) return null;

    // Step 2: pick root from preorder
    let rootVal = preOrder[preIndex++];
    let root = new TreeNode(rootVal);

    // Step 3: find root in inorder
    let index = map.get(rootVal);

    // Step 4: Build left subtree
    root.left = build(inStart, index - 1);

    // Step 5: Build right subtree
    root.right = build(index+1, inEnd);

    return root;
  }

  return build(0, inorder.length - 1);

}












