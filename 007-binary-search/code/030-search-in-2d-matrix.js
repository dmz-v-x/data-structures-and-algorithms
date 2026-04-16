// Identify the Problem Type

// There are 2 common variants:

// Type 1 (Fully Sorted Matrix)

// Each row is sorted
// First element of each row > last element of previous row

// Example:

// 1  3  5  7
// 10 11 16 20
// 23 30 34 60

// Think of it like a flattened sorted array

// Type 2 (Row + Column Sorted)
// Rows sorted (left → right)
// Columns sorted (top → bottom)

// Example:

// 1  4  7  11
// 2  5  8  12
// 3  6  9  16
// 10 13 14 17

// Not fully sorted globally


// Brute Force: Check every element works for both
// Time Complexity: O(n * m);
// Space Complexity: O(1)
function searchMatrix(matrix, target){
  let n = matrix.length;
  let m = matrix[0].length;

  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] === target){
        return true;
      }
    }
  }
  return false;
}

// Better Approach

function binarySearch(row, target){
  let left = 0;
  let right = row.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(row[mid] === target) return true;
    else if(row[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

function searchMatrix(matrix, target){
  for(let i = 0; i<matrix.length; i++){
    if(binarySearch(matrix[i], target)){
      return true;
    }
  }
  return false;
}


// Optimal Approach: Fully Sorted Matrix
// Time Complexity: O(log (n * m));
// Space Complexity: O(1)
function searchMatrix(matrix, target){
  let n = matrix.length;
  let m = matrix[0].length;

  let left = 0;
  let right = n * m - 1;

  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    let row = Math.floor(mid / m);
    let col = mid % m;

    if(matrix[row][col] === target) return true;
    else if(matrix[row][col] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}


// Optimal Approach: When Row + Column is Sorted
// Time Complexity: O(n + m)
// Space Complexity: O(1)
function searchMatrix(matrix, target){
  let n = matrix.length;
  let m = matrix[0].length;

  let row = 0;
  let col = m - 1;

  while(row < n && col >= 0){
    if(matrix[row][col] === target){
      return true;
    }else if(matrix[row][col] > target){
      col--;
    }else{
      row++;
    }
  }
  return false;
}



