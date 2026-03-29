// You are given a grid:

// 0 → free cell
// 1 → obstacle

// You start at (0,0)
// Reach (m-1, n-1)
// Only moves: right, down

// Time Complexity: O(2^(m+n))
// Space Complexity: O(m+n)

function uniquePathsWithObstacle(grid){
  let m = grid.length;
  let n = grid[0].length;

  function paths(i, j){
    if(i >= m || j >= n || grid[i][j] === 1) return 0;

    if(i === m - 1 || j === n - 1) return 1;

    return paths(i, j+1) + paths(i+1, j);
  }

  return paths(0, 0);
}
