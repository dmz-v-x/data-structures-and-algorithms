// Rotate Matrix by 90 degrees

// You are given an N × N matrix.

// Example:

// 1 2 3
// 4 5 6
// 7 8 9

// Rotate it 90° clockwise → output should be:

// 7 4 1
// 8 5 2
// 9 6 3

// Brute Force

// After mapping the original matrix with the rotated one we come up with this formula for new position of the elements

// new[j][n-i-1] = matrix[i][j]

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
function rotateMatrix(matrix){
  let n = matrix.length;
  let result = new Array.from({length: 3}, () => Array(n).fill(0));

  for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
      result[j][n - i - 1] = matrix[i][j];
    }
  }
  return result;
}

// Better Approach

// Step 1: Transpose (convert rows to column)
// Step 2: Reverse each row


// Time Complexity: O(n^2)
// Space Complexity: O(n^2)


function rotateMatrix(matrix){
  let n = matrix.length;

  // Step 1: transpose(matrix)

  let transposed = Array.from({length: n}, () => Array(n).fill(0));

  for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
      transposed[j][i] = matrix[i][j];
    }
  }

  for(let i = 0; i<n; i++){
    transposed[i].reverse();
  }
  return transposed;
}


// Optimal Approach
// Time complexity: O(n^2);
function rotate(matrix){
  let n = matrix.length;

  // Step 1: Transpose (in-place)
  for(let i = 0; i<n; i++){
    for(let j = i; j<n; j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for(let i = 0; i<n; i++){
    matrix[i].reverse();
  }
  return matrix;
}

// Optimal Approach
// Time Complexity: O(n^2) with slight improvement
function rotate(matrix){
  let n = matrix.length;

  // 1. Transpose(in - place)

  for(let i = 0; i<n-1; i++){
    for(let j = i; j<n; j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for(let i = 0; i<n; i++){
    matrix[i].reverse();
  }

  return matrix;
}
