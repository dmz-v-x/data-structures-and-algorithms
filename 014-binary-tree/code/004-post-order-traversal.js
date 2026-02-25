class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1. Recursive Post Order Traversal

function recursivePostOrderTraversal(root){
  if(root === null) return;
  recursivePostOrderTraversal(root.left); // LEFT
  recursivePostOrderTraversal(root.right); // RIGHT
  console.log(root.value); // ROOT
}

// 2. Iterative Post Order Traversal Using Two stack

function iterativePostOrderTraversal(root){
  if(root === null) return;
  
  let stack1 = [root];
  let stack2 = [];

  while(stack1.length > 0){
    const node = stack1.pop();
    stack2.push(node)

    if(node.left) stack1.push(node.left);
    if(node.right) stack1.push(node.right);
  }

  while(stack2.length > 0){
    const node = stack2.pop();
    console.log(node.value);
  }
}

// 3 Iterative Post Order Traversal Using One Stack

function iterativePostOrderTraversalOneStack(root){
  if(root === null) return;

  const stack = [];
  let current = root;
  let lastVisited = null;

  while(current !== null && stack.length > 0){
    // Step 1: Go left
    while(current !== null){
      stack.push(current);
      current = current.left;
    }

    // Step 2: Peek (Not Pop yet)
    let peekNode = stack[stack.length - 1];

    if(peekNode.right !== null && lastVisited !== peakNode.right){
      current = peakNode.right; // Go Right
    }else {
      console.log(peekNode.value); // Visit Root
      lastVisited = stack.pop();
    }
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
