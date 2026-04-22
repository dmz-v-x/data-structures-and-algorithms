// Given:

// a binary tree
// a target node
// an integer k

// Return all nodes exactly k distance away from target

// Distance = number of edges

// Example
//         3
//        / \
//       5   1
//      / \ / \
//     6  2 0  8
//       / \
//      7   4

// target = 5, k = 2

// Answer:
// [7, 4, 1]


// WHY IS THIS HARD?

// Because movement is NOT just downward

// From node 5 you can go:

// left → 6
// right → 2
// up → 3 (parent)

// Trees don’t have parent pointers → problem!

// CORE IDEA

// Convert tree → graph

// Each node connects to:
// left, right, parent


// Approach: BFS


// Complexity
// Time: O(N)
// Space: O(N)

// Step 1: Build Parent Map: Store parent of each node

function buildParentMap(root){
  let parent = new Map();
  let queue = [root];

  while(queue.length){
    let node = queue.shift();

    if(node.left){
      parent.set(node.left, node);
      queue.push(node.left);
    }

    if(node.right){
      parent.set(node.right, node);
      queue.push(node.right);
    }
  }
  return parent;
}

// Step 2: BFS from target

function distanceK(root, target, k){
  let parent = buildParentMap(root);

  let visited = new Set();
  let queue = [target];

  visited.add(target);

  let dist = 0;

  while(queue.length){
    if(dist === k) break;

    let size = queue.length;

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      // explore neighbors

      if(node.left && !visited.has(node.left)){
        visited.add(node.left);
        queue.push(node.left);
      }

      if(node.right && !visited.has(node.right)){
        visited.add(node.right);
        queue.push(node.right);
      }

      if(parent.get(node) && !visited.has(parent.get(node))){
        visited.add(parent.get(node));
        queue.push(parent.get(node));
      }
    }

    dist++;
  }

  return queue.map(node => node.val);
}



















