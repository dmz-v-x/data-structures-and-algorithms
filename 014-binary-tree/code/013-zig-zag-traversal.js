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












