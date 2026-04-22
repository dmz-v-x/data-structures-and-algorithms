// Construct Binary Tree from Inorder + Postorder

// WHAT CHANGED?

// Earlier:

// Preorder → ROOT first

// Now:

// Postorder → ROOT last

// UNDERSTAND TRAVERSALS

// INORDER

// LEFT → ROOT → RIGHT

// Same role:

// splits tree

// POSTORDER

// LEFT → RIGHT → ROOT

// So:

// LAST element = ROOT

// CORE IDEA
// Postorder → gives ROOT (from end)
// Inorder   → splits left & right

// EXAMPLE
// inorder   = [9, 3, 15, 20, 7]
// postorder = [9, 15, 7, 20, 3]

// BUILD STEP-BY-STEP

// Root
// root = last of postorder = 3

// Find in inorder
// [9, 3, 15, 20, 7]
//     ↑

// Split
// LEFT  = [9]
// RIGHT = [15, 20, 7]

// VERY IMPORTANT RULE
// Build RIGHT subtree FIRST
// Then LEFT subtree

DRY RUN STRUCTURE

postIndex starts at end

Step 1:
root = 3
postIndex--

Step 2:
build RIGHT first → [15,20,7]
build LEFT next  → [9]

FINAL TREE
        3
       / \
      9   20
         /  \
        15   7

function buildTree(inorder, postorder){
  let map = new Map();

  for(let i = 0; i < inorder.length; i++){
    map.set(inorder[i], i);
  }

  let postIndex = postorder.length - 1;

  function build(inStart, inEnd){
    if(inStart > inEnd) return null;

    let rootVal = postOrder[postIndex--];
    let root = new TreeNode(rootVal);

    let index = map.get(rootVal);

    // Important: Build right first
    root.right = build(index+1, inEnd);
    root.left = build(inStart, index-1);

    return root;
  }

  return build(0, inorder.length - 1);
}

// KEY DIFFERENCE FROM PREORDER VERSION


// | Feature       | Preorder     | Postorder    |
// | ------------- | ------------ | ------------ |
// | Root comes    | Start        | End          |
// | Pointer moves | forward      | backward     |
// | Build order   | Left → Right | Right → Left |











