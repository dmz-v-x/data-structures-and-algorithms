// We need to print nodes column by column (vertical)

// Example
//         3
//        / \
//       9   20
//           / \
//          15  7

// Output
// [
//  [9],
//  [3,15],
//  [20],
//  [7]
// ]

// Key Idea: Coordinates

// Root → col = 0

// Left child → col - 1
// Right child → col + 1

// Example Mapping:

//         3 (0)
//        / \
//    9(-1) 20(+1)
//           /   \
//      15(0)   7(+2)

// Think of tree like vertical columns

// Column -2   Column -1   Column 0   Column 1   Column 2

// We are grouping nodes by column index

// CORE IDEA

// Use BFS (level order) + column tracking

// Why BFS?

// Ensures:

// Top → Bottom order automatically

// Data structure
// Map: col → array of values
// Queue: [node, col]

// Algorithm
// 1. Start BFS from root (col = 0)
// 2. For each node:
//    - store in map[col]
//    - push left (col-1)
//    - push right (col+1)
// 3. Track minCol & maxCol
// 4. Extract result from min → max


// DRY RUN STEP-BY-STEP

// Tree:

//         3
//        / \
//       9   20
//           / \
//          15  7

// Step 1
// queue = [(3,0)]
// map = {}

// Step 2

// Process 3:

// map[0] = [3]

// push (9,-1)
// push (20,+1)

// Step 3

// Process 9:

// map[-1] = [9]

// Process 20:

// map[1] = [20]

// push (15,0)
// push (7,2)

// Step 4

// Process 15:

// map[0] = [3,15]

// Process 7:

// map[2] = [7]

// Final Map
// -1 → [9]
//  0 → [3,15]
//  1 → [20]
//  2 → [7]

// Output
// [[9], [3,15], [20], [7]]


function verticalOrder(root){
  if(!root) return [];

  let map = new Map();
  let queue = [[root, 0]];

  let minCol = 0;
  let maxCol = 0;

  while(queue.length > 0){
    let [node, col] = queue.shift();

    if(!map.has(col)){
      map.set(col, []);
    }

    map.get(col).push(node.val);
    minCol = Math.min(minCol, col);
    maxCol = Math.max(maxCol, col);

    if(node.left) queue.push([node.left], col - 1);
    if(node.right) queue.push([node.right], col + 1);
   }

  let result = [];

  for(let col = minCol; col <= maxCol; col++){
    result.push(map.get(col));
  }
  return result;
}
















