// WHAT DOES "BOTTOM VIEW" MEAN?

// Which nodes do you see?

// Only the last (lowest) node at each vertical column

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

// From BOTTOM you see:

// Column -1 → 2
// Column 0 → 4 (NOT 1)
// Column +1 → 5 (NOT 3)

// Result:

// [2, 4, 5]



// Brute Force: (DFS + Store all)

// Traverse entire tree

// Store:

// (col, row, value)
// For each column:
// pick node with maximum row

// Complexity
// Time: O(N log N)
// Space: O(N)

function bottomView(root){
  let nodes = [];

  function dfs(node, row, col){
    if(!node) return;

    nodes.push([col, row, node.val]);

    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }

  dfs(root, 0, 0);

  // sort by col, then row desc
  nodes.sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0];
    return b[1] - a[1];
  })

  let map = new Map();

  for(let [col, row, val] of nodes){
    if(!map.has(col)){
      map.set(col, val); // first = deeper
    }
  }

  return [...map.values()];
  
}





// Optimal Approach


// KEY DIFFERENCE FROM TOP VIEW

// | Top View    | Bottom View |
// | ----------- | ----------- |
// | store FIRST | store LAST  |

// Complexity
// Time: O(N log N)
// Space: O(N)

function bottomView(root){
  if(!root) return [];

  let map = new Map();
  let queue = [[root, 0]];

  while(queue.length){
    let [node, col] = queue.shift();

    // Always overwrite (latest = deepest)
    map.set(col, node.val);

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








