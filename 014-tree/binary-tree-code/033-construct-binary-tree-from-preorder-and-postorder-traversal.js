// Construct Binary Tree from Preorder + Postorder

// First understand this clearly:

// Tree CANNOT be uniquely constructed from preorder + postorder

// But:

// We CAN construct one valid tree

// That’s exactly what the problem expects.

// PREORDER
// ROOT → LEFT → RIGHT

// First element = root

// POSTORDER
// LEFT → RIGHT → ROOT

// Last element = root


// WHAT INFORMATION DO WE HAVE?

// From preorder:

// We know ROOT
// We know LEFT subtree starts next

// From postorder:

// We know where LEFT subtree ends

// EXAMPLE
// pre  = [1, 2, 4, 5, 3, 6, 7]
// post = [4, 5, 2, 6, 7, 3, 1]

// Algorithm

// Step 1: Root
// root = pre[0] = 1

// Step 2: Left Root
// leftRoot = pre[1] = 2

// Step 3: Find in postorder
// post = [4, 5, 2, 6, 7, 3, 1]
//               ↑
// index = 2

// Step 4: Left subtree size
// leftSize = index - postStart + 1 = 3
// nodes = [4,5,2]

// Step 5: Split arrays
// LEFT:
// pre  = [2, 4, 5]
// post = [4, 5, 2]

// RIGHT:
// pre  = [3, 6, 7]
// post = [6, 7, 3]

// RECURSION

// Repeat same process

// FINAL TREE
//         1
//        / \
//       2   3
//      / \ / \
//     4  5 6  7



function constructFromPrePost(pre, post){
  let map = new Map();

  for(let i = 0; i < post.length; i++){
    map.set(post[i], i);
  }

  function build(preStart, preEnd, postStart, postEnd){
    if(preStart > preEnd) return null;

    let root = new TreeNode(pre[preStart]);

    if (preStart === preEnd) return root;

    let leftRootVal = pre[preStart + 1];
    let index = map.get(leftRootVal);

    let leftSize = index - postStart + 1;

    root.left = build(
      preStart + 1,
      preStart + leftSize,
      postStart,
      index
    );

    root.right = build(
      preStart + leftSize + 1,
      preEnd,
      index + 1,
      postEnd - 1
    );

    return root;
  }

  return build(0, pre.length - 1, 0, post.length - 1);
}

