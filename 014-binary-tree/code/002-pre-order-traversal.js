class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive Pre Order Traversal 
function preOrderTraversal(root){
  if(root === null) return;
  console.log(root.value);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

// Iterative Pre Order Traversal
function iterativePreOrderTraversal(root){
  if(root === null) return;
  let stack = [root];

  while(stack.length > 0){
    const node = stack.pop();
    console.log(node.value);

    if(node.right) stack.push(node.right);
    if(node.left) stack.push(node.left);
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

preOrderTraversal(root);
iterativePreOrderTraversal(root);
