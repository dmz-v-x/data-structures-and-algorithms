// WHAT ARE WE GIVEN?
// postorder = [LEFT..., RIGHT..., ROOT]

// Last element = ROOT

// RECALL BST RULE
// LEFT < ROOT < RIGHT

// Since postorder is:

// LEFT → RIGHT → ROOT

// If we process from end → start:

// ROOT → RIGHT → LEFT

// VERY IMPORTANT RULE
// Build RIGHT subtree FIRST
// Then LEFT subtree

// EXAMPLE
// postorder = [1, 7, 5, 12, 10, 8]

// Step 1:
// root = 8

// Step 2:
// Right subtree = [12, 10]  (> 8)
// Left subtree  = [1, 7, 5] (< 8)

// Final tree:
//         8
//        / \
//       5   10
//      / \    \
//     1   7    12

function bstFromPostorder(postorder){
  let i = postorder.length - 1;

  function build(bound){
    // stop if out of range

    if(i < 0 || postorder[i] < bound){
      return null;
    }

    let root = new TreeNode(postorder[i--]);

    // build right subtree first
    root.right = build(root.val);

    // then left subtree
    root.left = build(bound);

    return root;
  }

  return build(-Infinity);
}


// COMPLEXITY
// Time: O(N)
// Space: O(H)













