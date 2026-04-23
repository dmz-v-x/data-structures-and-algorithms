// Construct BST from Preorder Traversal

// WHAT ARE WE GIVEN?
// preorder = [ROOT, LEFT..., RIGHT...]

// And we must build a BST

// RECALL BST RULE
// LEFT < ROOT < RIGHT

// Observation

// In preorder:

// First element = ROOT

// Then:

// All smaller values → LEFT subtree
// All larger values → RIGHT subtree

// EXAMPLE
// preorder = [8, 5, 1, 7, 10, 12]

// Step 1:
// Root = 8

// Step 2:
// Left subtree = [5, 1, 7]   (< 8)
// Right subtree = [10, 12]  (> 8)

// Final tree:
//         8
//        / \
//       5   10
//      / \    \
//     1   7    12


// Optimal Approach: Bound Method

// Core Idea

// Use range (bound)

// Each node must be within a valid range


function bstFromPreorder(preorder){
  let i = 0;

  function build(bound){
    // Stop if out of range
    if(i === preorder.length || preorder[i] > bound){
      return null;
    }

    let root = new TreeNode(preorder[i++]);

    // Left Subtree (smaller values)
    root.left = build(root.val)

    // right Subtree(greater values)
    root.right = build(bound);

    return root;
  }

  return build(Infinity);
}

// COMPLEXITY
// Time: O(N) 
// Space: O(H)











