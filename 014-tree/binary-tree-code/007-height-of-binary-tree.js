// What is “Height” of a Binary Tree?

//  Height = maximum depth from root to any leaf

// In simple words:

// Longest path (in terms of nodes OR edges) from root to a leaf

// Important Note (Interviews!)

// There are 2 definitions:

// | Definition     | Meaning                     |
// | -------------- | --------------------------- |
// | Height (nodes) | Count nodes in longest path |
// | Height (edges) | Count edges in longest path |

// Visual Understanding

// Consider:

//         1
//        / \
//       2   3
//      /
//     4

// Longest path = 1 → 2 → 4

// Height (nodes) = 3
// Height (edges) = 2



// Recursive Approach

// Time Complexity: O(n)
// Space Complexity: O(h), in worst case: O(n)
function height(root){
  if(root === null) return 0;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  return 1 + Math.max(leftHeight, rightHeight);
}



// Iterative Approach
// Time Complexity: O(n)
// Space Complexity: O(w), worst case: O(n)
function height(root){
  if(!root) return 0;

  let queue = [root];
  let height = 0;

  while(queue.length > 0){
    let size = queue.length;

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    height++;
  }
  return height;
}

