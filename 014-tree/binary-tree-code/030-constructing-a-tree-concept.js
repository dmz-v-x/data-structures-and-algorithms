// Constructing UNIQUE BINARY TREE

// Can we construct a unique binary tree using:

// inorder + preorder
// inorder + postorder
// preorder + postorder

// YES → inorder + preorder ✅
// YES → inorder + postorder ✅
// NO  → preorder + postorder ❌ (in general)



// WHY IS INORDER SPECIAL?

// Inorder gives:

// LEFT → ROOT → RIGHT

// So:

// It splits the tree into left and right subtrees

// This is the key missing information in other traversals.


// | Traversals           | Can build unique tree? | Why              |
// | -------------------- | ---------------------- | ---------------- |
// | Inorder + Preorder   | ✅ Yes                  | root + split     |
// | Inorder + Postorder  | ✅ Yes                  | root + split     |
// | Preorder + Postorder | ❌ No                   | no boundary info |
