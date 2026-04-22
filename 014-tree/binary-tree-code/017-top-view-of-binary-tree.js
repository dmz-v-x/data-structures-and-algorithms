// WHAT DOES "TOP VIEW" MEAN?

// Which nodes can you see?

// Only the first node at each vertical column.

// Example
//         1
//        / \
//       2   3
//        \
//         4
//          \
//           5

// Assign columns:
//         1 (0)
//        /   \
//    2(-1)   3(+1)
//        \
//         4 (0)
//          \
//           5 (+1)

// From TOP you see:
// Column -1 → 2
// Column 0 → 1 (NOT 4)
// Column +1 → 3 (NOT 5)

// Result:

// [2, 1, 3]

// Brute Force: DFS + Store All

// traverse entire tree

// Store:

// (col, row, value)
// For each column:
// pick node with minimum row

// Complexity
// Time: O(N log N)
// Space: O(N)

function topView(root){
  let nodes = [];

  function dfs(node, row, col){
    if(!node) return;

    nodes.push([col, row, node.val]);
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row+1, col + 1);
  }

  dfs(root, 0, 0);

  // sort by col then row

  nodes.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1]
  });

  let map = new Map();

  for(let [col, row, val] of nodes){
    if(!map.has(col)){
      map.set(col, val); // first smallest row
    }
  }

  return [...map.values()];
}



// Optimal 

// CORE INSIGHT

// BFS = level order

// So:

// We visit top nodes first
// First time we see a column → that's the answer

// Logic

// Use queue:

// (node, column)

// Maintain:

// Map<col, value>
// If column not visited → store it

// Complexity
// Time: O(N log N) (sorting columns)
// Space: O(N)

function topView(root){
  if(!root) return [];

  let map = new Map();
  let queue = [[root, 0]];

  while(queue.length){
    let [node, col] = queue.shift();

    // First node at this coloumn
    if(!map.has(col)){
      map.set(col, node.val);
    }

    if(node.left) queue.push([node.left, col - 1]);
    if(node.right) queue.push([node.right, col + 1]);
  }

  let sortedCols = [...map.keys()].sort((a, b) => a - b);

  let result = [];
  for(let col of sortedCols){
    result.push(map.get(col));
  }

  return result;
}













