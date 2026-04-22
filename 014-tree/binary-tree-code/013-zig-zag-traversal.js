// Given a binary tree, return level order traversal BUT:

// Level 0 → Left → Right  
// Level 1 → Right → Left  
// Level 2 → Left → Right  
// Level 3 → Right → Left  
// ... alternating

// Example
//         1
//        / \
//       2   3
//      / \   \
//     4   5   6

// Output
// [
//  [1],
//  [3,2],
//  [4,5,6]
// ]

// Brute Force Approach

// First do normal level order traversal (BFS)
// Then reverse alternate levels

// Steps
// Get levels normally:
// [
//  [1],
//  [2,3],
//  [4,5,6]
// ]

// Reverse odd levels:
// [
//  [1],
//  [3,2],
//  [4,5,6]
// ]

// Complexity
// Time: O(N) + O(N) = O(N)
// Space: O(N)

function zigzagLevelOrder(root){
  if(!root) retrun [];
  let result = [];

  let queue = [root];

  while(queue.length > 0){
    let size = queue.length;
    let level = [];

    for(let i = 0; i<size; i++){
      let node = queue.shift();
      level.push(node.val);

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    result.push(level);
  }

  // reverse alternate levels
  for(let i = 1; i<result.length; i += 2){
    result[i].reverse();
  }
  return result;
}



// Optimal Appraoch

// Use index placement instead of reversing

// Create array of size levelSize

// let level = new Array(size);

// Fill using index

// If:

// leftToRight = true
// → index = i

// If:

// leftToRight = false
// → index = size - 1 - i

// Tree:

//         1
//        / \
//       2   3
//      / \   \
//     4   5   6

// Level 0
// queue = [1]
// leftToRight = true

// level = [ _ ]
// i = 0 → index = 0

// → [1]

// Level 1
// queue = [2,3]
// leftToRight = false

// size = 2
// level = [_, _]

// i = 0 (node = 2)
// index = 2 - 1 - 0 = 1
// level = [_, 2]

// i = 1 (node = 3)
// index = 2 - 1 - 1 = 0
// level = [3, 2]

// Level 2
// queue = [4,5,6]
// leftToRight = true

// level = [_, _, _]

// Fill normally:

// [4,5,6]

// COMPLEXITY
// Time: O(N)
// Space: O(N)

function zigzagLevelOrder(root){
  if(!root) return [];

  let result = [];
  let queue = [root];
  let leftToRight = true;

  while(queue.length > 0){
    let size = queue.length;
    let level = new Array(size);

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      let index = leftToRight ? i : size - 1 - i;
      level[index] = node.val;

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    result.push(level);
    leftToRight = !leftToRight;
  }
  return result;
}














