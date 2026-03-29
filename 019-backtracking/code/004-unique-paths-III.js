// Unique Paths 3

// Grid contains:

// 1 → start
// 2 → end
// 0 → empty cell
// -1 → obstacle

// You must:

// Start at 1
// End at 2
// Visit EVERY non-obstacle cell exactly once

// "Find all valid paths that visit every cell exactly once can't walk over obstacle"

// It's not necessary that we start at (0, 0), So the approach will be:

// Steps
// 1. Find non obstacle count.
// 2. Find starting point (x, y)
// 3. Call Backtrack function

// Time Complexity: O(3^k) k (we visits k cells)
// Space Complexity: O(k)

function uniquePath(grid){
  let startI = 0;
  let startJ = 0;
  let nonObstacleCount = 0;
  let m = grid.length;
  let n = grid[0].length;
  for(let i = 0; i<m; i++){
    for(let j = 0; j<n; j++){
      if(grid[i][j] === 1){
        startI = i
        startJ = j;
      }

      if(grid[i][j] !== -1){
        nonObstacleCount++;
      }

    }
  }

  function backtrack(i, j, nonObstacleCount, count){
    if(i < 0 ||j < 0 || i >= m || j >= n || grid[i][j] === -1) return 0;

    if(grid[i][j] === 2 && count === nonObstacleCount){
      return 1;
    }

    let temp = grid[i][j];
    grid[i][j] = -1;

    

    let totalPath = backtrack(i+1, j, nonObstacleCount, count+1) +
                    backtrack(i-1, j, nonObstacleCount, count+1) +
                    backtrack(i, j+1, nonObstacleCount, count+1) +
                    backtrack(i, j-1, nonObstacleCount, count+1);

    grid[i][j] = temp;

    return totalPath;
  }

  return backtrack(startI, startJ, nonObstacleCount, 1);
}
