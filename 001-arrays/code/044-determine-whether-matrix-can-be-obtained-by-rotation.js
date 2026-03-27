// You are given two matrices:

// mat
// target

// You can rotate mat by 90° (clockwise) any number of times (0, 1, 2, 3)

// Return:

// true → if mat can become target
// false → otherwise

// Example
// mat:
// 1 2
// 3 4

// target:
// 3 1
// 4 2

// Rotate once → matches → true

// Brute Force: Try all rotations

// Compare mat with target
// If not same → rotate
// Repeat 4 times

// Brute Force
// Time Complexity: 4 * O(n^2)

function findRotation(mat, target){
  function rotate(matrix){
    let n = matrix.length;

    // transpose
    for(let i = 0; i<n; i++){
      for(let j = i+1; j<n; j++){
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }

    // reverse
    for(let i = 0; i<n; i++){
      matrix[i].reverse();
    }
  }

  function isEqual(a, b){
    for(let i = 0; i<a.length; i++){
      for(let j = 0; j<a[0].length; j++){
        if(a[i][j] !== b[i][j]) return false;
      }
    }
    return true;
  }

  for(let k = 0; k<4; k++){
    if(isEqual(mat, target)) return true;
    rotate(mat);
  } 
}

// Optimal Approach

// Idea

// Instead of physically rotating:

// Check if target[i][j] matches rotated positions of mat

// 4 rotation mappings
// 0°:
// mat[i][j] === target[i][j]

// 90°:
// mat[i][j] === target[j][n - i - 1]

// 180°:
// mat[i][j] === target[n - i - 1][n - j - 1]

// 270°:
// mat[i][j] === target[n - j - 1][i]


// Optimal Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)


findRotation(mat, target){
  let n = mat.length;

  let same0 = true;
  let same90 = true;
  let same180 = true;
  let same270 = true;

  for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
      if(mat[i][j] !== target[i][j]) same0 = false;

      if(mat[i][j] !== target[j][n - i + 1]) same90 = false;

      if(mat[i][j] !== target[n - i - 1][n - j - 1]) same180 = false;

      if(mat[i][j] !== target[n - j - 1][i]) same270 = false;
    }
  }
  return same0 || same90 || same180 || same270;
}


















