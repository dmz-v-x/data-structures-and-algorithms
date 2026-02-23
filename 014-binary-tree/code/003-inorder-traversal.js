class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive InOrder Traversal

function recursiveInOrderTraversal(root){
  if(root === null) return;
  recursiveInOrderTraversal(root.left);
  console.log(root.value);
  recursiveInOrderTraversal(root.right);
}

function iterativeInOrderTraversal(root){
  let stack = [];
  let current = root;

  // Step 1: Go to left as much as possible
  while(current !== null || stack.length > 0){
    while(current !== null){
      stack.push(current);
      current = current.left;
    }

    // Step 2: Process the node
    current = stack.pop();
    console.log(current.value);

    // Step 3: Move right
    current = current.right;
  }
}
