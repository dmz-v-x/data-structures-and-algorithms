class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function iterativeLevelOrderTraversal(root){
  if(root === null) return;
  const queue = [root];

  while(queue.length > 0){
    const node = queue.shift(); // Remove from front

    console.log(node.value); // Visit Node

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
    
  }
}
