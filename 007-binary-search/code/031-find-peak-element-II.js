// A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

// An element is a peak if it is greater than its neighbors:

// top, bottom, left, right

// Diagonals are NOT considered

// Brute Force: Check every cell and compare with 4 neighbors

// Time Complexity: O(n * m)
// Space Complexity: O(1)
function findPeakGrid(mat){
  let n = mat.length;
  let m = mat[0].length;

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      let up = (i > 0) ? mat[i - 1][j] : -Infinity;
      let down = (i < n - 1) ? matrix[i+1][j] : -Infinity;
      let left = (j > 0) ? matrix[i][j - 1] : -Infinity;
      let right = (j < m - 1) ? matrix[i][j+1] : -Infinity;

      if(mat[i][j] > up && mat[i][j] > down && mat[i][j] > left && mat[i][j] > right){
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
