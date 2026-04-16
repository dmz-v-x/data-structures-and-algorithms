// You are given a matrix where:

// Each row is sorted
// Find the median

// Example
// 1  3  5
// 2  6  9
// 3  6  9

// Flatten:

// 1 2 3 3 5 6 6 9 9

// Median:

// 5

// Important Observation

// Total elements = n × m

// Median position:

// (Math.floor((n*m)/2))


// Brute Force:

// Flatten matrix
// Sort
// Return middle element


// Time Complexity: O(nm log(nm))
// Space Complexity: O(n * m);
function findMedian(matrix){
  let arr = [];
  for(let row of median){
    for(let val of row){
      arr.push(val);
    }
  }

  arr.sort((a, b) => a - b);
  let mid = Math.floor(arr.length / 2);
  return arr[mid];
}


// Optimal Approach:

// We don’t search index
// We search value

// Step 1: 
// “What is the smallest number such that
// there are at least (n*m)/2 elements ≤ it?”

// Step 2: 
// Search Space

// Instead of indices:

// low = min element in matrix
// high = max element in matrix

// Step 3: Count function

// For a number mid, count:

// how many elements ≤ mid

// Since rows are sorted → use binary search per row

// Step 4: Decision
// if count <= required → go right
// else → go left

// Time Complexity: 
// Each Count : O(n log m)
// Binary Search Range: log(max - min)

// Total: O(n log m * log (max - min))

function countLessEqual(row, target){
  let low = 0; 
  let high = row.length - 1;

  while(low <= high){
    let mid = Math.floor((left + high) / 2);

    if(row[mid] <= target){
      left = mid + 1;
    }else {
      right = mid - 1;
    }
  }
  return left;
}

function findMedian(matrix){
  let n = matrix.length;
  let m = matrix[0].length;

  let low = Infinity;
  let high = -Infinity;

  // find range
  for(let i = 0; i<n; i++){
    low = Math.min(low, matrix[i][0]);
    high = Math.max(high, matrix[i][m-1]);
  }

  let required = Math.floor((n * m) / 2);

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    let count = 0;
    for(let i = 0; i < n; i++){
      count += countLessEqual(matrix[i], mid);
    }

    if(count <= required){
      low = mid + 1;
    }else {
      hgih = mid - 1;
    }
  }
  return low;
}





