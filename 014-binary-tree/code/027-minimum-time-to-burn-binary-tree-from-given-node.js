// Problem:

// Fire starts from a node
// Every second it spreads to:

// left child
// right child
// parent

// Find total time to burn entire tree


// Tree alone is not enough

// Because:

// We need to go UP (parent)

// So we convert:

// Tree → Graph

function minTime(root, target){
  // Step 1: Build Parent Map
  let parent = new Map();
  let q = [root];

  while(q.length){
    let node = q.shift();

    if(node.left){
      parent.set(node.left, node);
      q.push(node.left);
    }

    if(node.right){
      parent.set(node.right, node);
      q.push(node.right);
    }
  }

  // Step 2: Find target node

  function findNode(node){
    if(!node) return null;

    if(node.val === target) return node;

    return findNode(node.left) || findNode(node.right);
  }

  let targetNode = findNode(root);

  // Step 3: 

  let visited = new Set();
  let queue = [targetNode];

  visited.add(targetNode);
  let time = 0;

  while(queue.length){
    let size = queue.length;
    let burned = false;

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      if(node.left && !visited.has(node.left)){
        visited.add(node.left);
        queue.push(node.left);
        burned = true;
      }

      if(node.right && !visited.has(node.right)){
        visited.add(node.right);
        queue.push(node.right);
        burned = true;
      }

      if(parent.get(node) && !visited.has(parent.get(node))){
        visited.add(parent.get(node));
        queue.push(parent.get(node));
        burned = true;
      }
    }

    if(burned) time++;
  }

  return time;
  
}






















