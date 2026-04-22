// You are given a binary tree.

// You need to find the maximum path sum

// What is a “path”?
  
// A path is any sequence of nodes connected via parent-child
// It can start and end anywhere
// It must be continuous
// You cannot reuse nodes

// VERY IMPORTANT RULE

// Path can be:

// node → left → left
// node → right → right
// left → node → right   MOST IMPORTANT CASE

// Path does NOT have to pass through root

// STEP 1: INTUITION 

// Let’s think like this:

// At every node, you have 3 choices:

// Take only node
// Take node + left subtree
// Take node + right subtree
// Take node + left + right (full path through node)

// Key Insight

// When returning to parent → you can only return ONE SIDE

// Why?

// Because parent path must be linear, not split.

// So:

// Return = node.val + max(left, right)

// BUT...

// For answer, we consider:

// node.val + left + right


// VISUALIZATION

// Consider:

//         10
//        /  \
//       2    10
//      / \     \
//     20  1     -25
//                / \
//               3   4

// Dry Run Intuition

// Let’s go bottom-up.

// Node = 20
// left = 0, right = 0
// max path = 20

// Node = 1
// max path = 1

// Node = 2
// left = 20, right = 1
// possible path = 20 + 2 + 1 = 23
// return = 2 + max(20,1) = 22

// Global max = 23


// Node = 3 → 3

// Node = 4 → 4

// Node = -25
// left = 3, right = 4
// path = -25 + 3 + 4 = -18
// return = -25 + 4 = -21

// Node = 10 (right side)
// right = -21
// better ignore negative → take 0
// return = 10

// Root = 10
// left = 22
// right = 10

// path = 22 + 10 + 10 = 42

// FINAL ANSWER = 42


// Brute Force Approach: Try all Possible Paths
// Time Complexity: O(N^2)

// Optimal Approach: DFS: Use Post Order Traversal
// Time Complexity: O(N)
// Space Complexity: O(H), Worst: O(N)
function maxPathSum(root){
  let maxSum = -Infinity;

  function dfs(root){
    if(!node) return 0;

    let left = Math.max(0, dfs(root.left));
    let right = Math.max(0, dfs(root.right));

    // Update global max
    maxSum = Math.max(maxSum, left + right + node.val);
  
    // Return best single path
    return node.val + Math.max(left, right);
  }

  dfs(root);
  return maxSum;
}


// Optimal Approch

// CORE IDEA

// At each node:

// We calculate 2 things:

// 1. Path passing THROUGH node
// left + node + right

// This could be the answer

// 2. Path going UP to parent
// node + max(left, right)

// Because parent can't take both sides

// Handle NEGATIVE values

// If left/right is negative → ignore it

// left = max(0, left)
// right = max(0, right)



var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        // Step 1: get left and right
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));

        // Step 2: compute path THROUGH node
        let currentPath = left + right + node.val;

        // Step 3: update global max
        maxSum = Math.max(maxSum, currentPath);

        // Step 4: return single path to parent
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return maxSum;
};



// DRY RUN STEP BY STEP

// Tree:

//         -10
//         /  \
//        9    20
//            /  \
//           15   7
// Step 1: Node 15
// left = 0
// right = 0

// currentPath = 15
// global = 15

// return 15
// Step 2: Node 7
// currentPath = 7
// global = 15

// return 7
// Step 3: Node 20
// left = 15
// right = 7

// currentPath = 15 + 7 + 20 = 42
// global = 42

// return 20 + max(15,7) = 35
// Step 4: Node 9
// currentPath = 9
// global = 42

// return 9
// Step 5: Node -10
// left = 9
// right = 35

// currentPath = 9 + 35 - 10 = 34
// global = 42

// return -10 + 35 = 25










