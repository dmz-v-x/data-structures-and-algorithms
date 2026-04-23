// A grid:

// grid = [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]

// Meaning

// | Value | Meaning       |
// | ----- | ------------- |
// | 0     | Empty cell    |
// | 1     | Fresh orange  |
// | 2     | Rotten orange |


// Rule

// Every minute:

// Rotten orange spreads to adjacent (up, down, left, right) fresh oranges

// Goal

// Return minimum time to rot all oranges

// If impossible → return -1

// First intuition

// Ask:

// “Is this spreading over time?”

// YES

// “Multiple sources spreading simultaneously?”

// YES

// That means:

// MULTI-SOURCE BFS

// Why BFS?

// Because:

// BFS = level by level
// Each level = 1 minute

// We need:

// 1. Queue

// Store all rotten oranges initially

// 2. Count fresh oranges

// So we know when all are rotten


// Scan grid
// grid = [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]
// Initial state
// Rotten: (0,0)
// Fresh count = 6

// Queue:

// queue = [[0,0]]

// Directions

// We can move in 4 directions:

// dirs = [
//   [1,0],  // down
//   [-1,0], // up
//   [0,1],  // right
//   [0,-1]  // left
// ]


// BFS starts

// We process level by level

// Minute 0

// Queue:

// [[0,0]]
// Process (0,0)

// Neighbors:

// (1,0) → fresh → becomes rotten
// (0,1) → fresh → becomes rotten

// Update

// Queue:

// [[1,0], [0,1]]

// Fresh → 6 → 4

// Minute 1

// Queue:

// [[1,0], [0,1]]
// Process (1,0)
  
// (2,0) → 0
// (1,1) → fresh → rotten

// Process (0,1)
// (0,2) → fresh → rotten
// Update

// Queue:

// [[1,1], [0,2]]

// Fresh → 4 → 2

// Minute 2

// Queue:

// [[1,1], [0,2]]
// Process (1,1)
  
// (2,1) → fresh → rotten
// Process (0,2)

// nothing new

// Queue:

// [[2,1]]

// Fresh → 2 → 1

// Minute 3

// Queue:

// [[2,1]]

// Process (2,1)
  
// (2,2) → fresh → rotten

// Queue:

// [[2,2]]

// Fresh → 1 → 0

// Minute 4

// Queue:

// [[2,2]]

// No more spread

// STEP 5: Answer

// Total time = 4


function orangesRotting(grid){
  let rows = grid.length;
  let cols = grid[0].length;

  let queue = [];
  let fresh = 0;

  // Step 1: find all rotten + count fresh

  for(let r = 0; r < rows; r++){
    for(let c = 0; c < cols; c++){
      if(grid[r][c] === 2){
        queue.push([r, c]);
      }else if(grid[r][c] === 1){
        fresh++;
      }
    }
  }

  if(fresh === 0) return 0;

  let minutes = 0;

  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // Step 2: BFS
  while(queue.length > 0){
    let size = queue.length;
    let rottedThisMinute = false;

    for(let i = 0; i<size; i++){
      let [r, c] = queue.shift();

      for(let [dr, dc] of dirs){
        let nr = r + dr;
        let nc = c + dc;

        if(
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          grid[nr][nc] === 1
        ){
          grid[nr][nc] === 2;
          queue.push([nr, nc]);
          fresh--;
          rottedThisMinute = true;
        }
      }
    }
    if(rottedThisMinute) minutes++;
  }

  return fresh === 0 ? minutes : -1;
}

// Complexity
// Time
// O(rows × cols)
// Space
// O(rows × cols)















































