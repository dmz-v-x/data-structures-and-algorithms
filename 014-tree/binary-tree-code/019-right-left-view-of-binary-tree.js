// WHAT DOES "VIEW" MEAN HERE?

// Instead of top/bottom (columns), now we think in levels (rows).

// Example
//         1
//        / \
//       2   3
//      / \   \
//     4   5   6

// LEFT VIEW

// What you see from left side

// Level 0 → 1
// Level 1 → 2
// Level 2 → 4

// Result:

// [1, 2, 4]

// RIGHT VIEW

// What you see from right side

// Level 0 → 1
// Level 1 → 3
// Level 2 → 6

// Result:

// [1, 3, 6]

// CORE IDEA 
// Left View  → FIRST node at each level
// Right View → LAST node at each level




// Brute Force: Store all levels

// Traverse tree
// Store nodes level-wise
// Pick:
// first → left view
// last → right view

// Complexity
// Time: O(N)
// Space: O(N)

function leftRightView(root){
  let levels = [];

  function dfs(node, level){
    if(!node) return;

    if(!levels[level]) levels[level] = [];
    levels[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
    
  }

  dfs(root, 0);

  let leftView = [];
  let rightView = [];

  for(let lvl of levels){
    leftView.push(lvl[0]);
    rightView.push(lvl[lvl.length - 1]);
  }

  return {leftView, rightView};
}


// Optimal Appraoch: BFS

// Process level by level

// Complexity
// Time: O(N)
// Space: O(N)

function leftRightView(root){
  if(!root) return {leftView: [], rightView: []};

  let queue = [root];
  let leftView = [];
  let rightView = [];

  while(queue.length){
    let size = queue.length;

    for(let i = 0; i<size; i++){
      let node = queue.shift();

      if(i === 0) leftView.push(node.val); // first
      if(i === size - 1) rightView.push(node.val); // last

      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }
  return {leftView, rightView};
}











