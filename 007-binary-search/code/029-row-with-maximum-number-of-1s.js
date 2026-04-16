// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

// Return an array containing the index of the row, and the number of ones in it.

 

// Example 1:

// Input: mat = [[0,1],[1,0]]
// Output: [0,1]
// Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 

// Example 2:

// Input: mat = [[0,0,0],[0,1,1]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
// Example 3:

// Input: mat = [[0,0],[1,1],[0,0]]
// Output: [1,2]
// Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].

// Brute Force: Using nested loops
// Time Complexity: O(n * m)
// Space Complexity: O(1)
function rowAndMaximumOnes(mat){
  let m = mat.length;
  let n = mat[0].length;
  let rowIndex = 0;
  let maxCount = -Infinity;
  for(let i = 0; i<m; i++){
    let count = 0;
    for(let j = 0; j<n; j++){
      if(mat[i][j] === 1){
        count++;
      }

      if(count > maxCount){
        maxCount = count;
        rowIndex = i;
      }
    }
  }
  return [rowIndex, maxCount];
}

// Better Approach: Binary Search


// Idea: 

// Since rows are sorted:

// 0 0 0 1 1 1
//       ↑ first 1

// Find first occurrence of 1
// Number of 1s = m - firstIndex

// Better Approach
// Time complexity: O(n log m);
// Space Complexity: O(1)

function firstOneIndex(row){
 let left = 0;
 let right = row.length - 1;
 let ans = row.length;

 while(left <= right){
  let mid = Math.floor((left + right) / 2);

  if(row[mid] === 1){
   ans = mid;
   right = mid - 1;
  }else{
   left = mid + 1;
  }
 }
 return ans;
}

function rowWithMax1s(matrix){
 let maxCount = 0;
 let index = -1;
 let m = matrix[0].length;

 for(let i = 0; i<matrix.length; i++){
  let first = firstOneIndex(matrix[i]);
  let count = m - first;

  if(count > maxCount){
   maxCount = count;
   index = i;
  }
 }
 return index;
}

// Optimal Approach

// Intuition:

// Start from top-right corner

// Why?

// Left → more 1s possible
// Down → fewer 1s possible

// Walkthrough

// Start:

// (row = 0, col = m-1)

// Rules:

// If current = 1 → move LEFT (try to find more 1s)
// If current = 0 → move DOWN

// Time Complexity: O(n + m)
// Space Complexity: O(1)

function rowWithMax1s(matrix){
 let n = matrix.length;
 let m = matrix[0].length;

 let row = 0;
 let col = m - 1;
 let index = -1;

 while(row < n && col >= 0){
  if(matrix[row][col] === 1){
   index = row;
   col--; // move left
  }else{
   row++;
  }
 }
 return index;
}
