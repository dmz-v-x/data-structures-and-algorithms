// Problem

// Given a matrix:

// If any cell = 0
// → make its entire row and column = 0

// Example
// Input:
// [
//  [1, 1, 1],
//  [1, 0, 1],
//  [1, 1, 1]
// ]

// Output:

// [
//  [1, 0, 1],
//  [0, 0, 0],
//  [1, 0, 1]
// ]

// Brute Force:
// -> Traverse Matrix
// -> If matrix[i][j] == 0 (mark row and column as -1)
// -> Second pass: convert all -1 to 0

// Brute Force: 
// Time Complexity: O((n*m)*(n*m))
// Space Complexity: O(1)
function setZeros(matrix){
  let n = matrix.length; 
  let m = matrix[0].length;

  function markRow(i){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] != 0) matrix[i][j] = -1;
    }
  }

  function markColumn(j){
    for(let i = 0; i<n; i++){
      if(matrix[i][j] !== 0) matrix[i][j] = -1;
    }
  }

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] === 0){
        markRow(i);
        markColumn(j);
      }
    }
  }

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] === -1){
        matrix[i][j] = 0;
      }
    }
  }
}


// Better Approach

// Create:
// row[]
// col[]
// Mark:
// if matrix[i][j] == 0 → row[i]=1, col[j]=1
// Second pass:
// if row[i]==1 OR col[j]==1 → make 0

// Time Complexity: O(n * m);
// Space: O(n + m)

function setZeroes(matrix){
  let n = matrix.length;
  let m = matrix[0].length;

  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] === 0){
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for(leti = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(row[i] === 1 || col[j] === 1){
        matrix[i][j] = 0;
      }
    }
  }
}


// Optimal Approach

