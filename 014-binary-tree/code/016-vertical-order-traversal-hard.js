// Given:

// A binary tree

// Return:

// Vertical order traversal such that:

// Nodes are grouped by column (vertical line)
// If same column → sort by:
// row (top to bottom)
// if same row → value (ascending)





// SUPER BASIC INTUITION

// Let’s first understand:

// What is a column?

// We assign coordinates to each node:

//         3 (0,0)
//        / \
//   (−1,1)  (1,1)
//      9      20
//            /  \
//       (0,2)    (2,2)
//         15        7

// Rule:
// Left → column - 1
// Right → column + 1
// Row always increases downward


// FINAL GOAL

// We want output like:

// [
//   [9],        // column -1
//   [3,15],     // column 0 (sorted by row, then value)
//   [20],       // column 1
//   [7]         // column 2
// ]



// Brute Force

// Idea:
// Traverse tree

// Store nodes with:

// (column, row, value)
// Sort everything at the end

// Complexity
// Time: O(N log N) (sorting)
// Space: O(N)

function verticalTraversal(root){
  let nodes = [];

  function dfs(root, row, col){
    if(!node) return;

    nodes.push([col, row, node.val]);
    dfs(node.left, row+1, col-1);
    dfs(node.right, row+1, col+1);
  }

  dfs(root, 0, 0);

  // sort
  nodes.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0]; // col
    if(a[1] !== b[1]) return a[1] - b[1]; // row
    return a[2] - b[2]; // value
  })

  let result = [];
  let prevCol = null;

  for(let [col, row, val] of nodes){
    if(col !== prevCol){
      result.push([]);
      prevCol = col;
    }

    result[result.length - 1].push(val);
  }
  return result;
}





// Optimal Approach:

var verticalTraversal = function(root) {
  let map = new Map();

  let queue = [[root, 0, 0]]; // node, col, row

  while (queue.length) {
    let [node, col, row] = queue.shift();

    if (!map.has(col)) map.set(col, new Map());
    if (!map.get(col).has(row)) map.get(col).set(row, []);

    map.get(col).get(row).push(node.val);

    if (node.left) queue.push([node.left, col - 1, row + 1]);
    if (node.right) queue.push([node.right, col + 1, row + 1]);
  }

  let sortedCols = [...map.keys()].sort((a, b) => a - b);
  let result = [];

  for (let col of sortedCols) {
    let colMap = map.get(col);
    let sortedRows = [...colMap.keys()].sort((a, b) => a - b);

    let colResult = [];

    for (let row of sortedRows) {
      let values = colMap.get(row);
      values.sort((a, b) => a - b); // acts like minHeap
      colResult.push(...values);
    }

    result.push(colResult);
  }

  return result;
};



