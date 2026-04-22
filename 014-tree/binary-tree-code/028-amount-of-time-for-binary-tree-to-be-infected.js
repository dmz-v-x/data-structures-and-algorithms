// A virus starts from a node

// Every minute it spreads to:

// left
// right
// parent

// Return time to infect entire tree

// Relating to nodes at distance k, 

// This problem is:

// “How many levels until BFS finishes?”

// Distance K → fixed level
// This problem → maximum level

// Tree → behaves like graph

// We need:

// left
// right
// parent

// Complexity
// Time: O(N)
// Space: O(N)

function amountOfTime(root, start){
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

  // Step 2: Find starting node

  function findNode(node){
    if(!node) return null;
    if(node.val === start) return node;

    return findNode(node.left) || findNode(node.right);
  }

  let target = findNode(root);

  // Step 3: BFS
  let visited = new Set();
  let queue = [target];

  visited.add(target);

  let time = 0;
  while(queue.length){
    let size = queue.length;
    let spread = false;

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
        spread = true;
      }

      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
        spread = true;
      }

      if (parent.get(node) && !visited.has(parent.get(node))) {
        visited.add(parent.get(node));
        queue.push(parent.get(node));
        spread = true;
      }
    }

    if(spread) time++;
  }
  return time;
}





















