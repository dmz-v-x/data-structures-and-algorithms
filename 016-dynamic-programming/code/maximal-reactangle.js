// You are given a binary matrix (0s and 1s).
// Find the largest rectangle containing only 1s.

// Example
// matrix = [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]

// Answer = 6

// Intuition

// Think like this:

// Instead of thinking in 2D…

// Convert each row into a histogram

// Step-by-step transformation:

// Row 0:

// 1 0 1 0 0
// ↓
// [1,0,1,0,0]

// Row 1:

// 1 0 1 1 1
// ↓
// [2,0,2,1,1]   (stack heights ↑)

// Row 2:

// 1 1 1 1 1
// ↓
// [3,1,3,2,2]

// Row 3:

// 1 0 0 1 0
// ↓
// [4,0,0,3,0]

// Brute Force

// For every cell:

// Try to expand rectangle:

// Right
// Down

// Check if all values = 1

// Start from each (i,j) where matrix[i][j] = 1

// Then:

// Fix top-left

// Expand bottom row by row

// Track minimum width

function maximalRectangle(matrix){
  let n = matrix.length;
  let m = matrix[0].length;
  let maxArea = 0;

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] === 1){
        
      }
    }
  }
  
}





































