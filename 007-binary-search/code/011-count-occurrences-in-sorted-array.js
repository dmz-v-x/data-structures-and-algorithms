// Count Occurrences in Sorted Array

// Example
// arr = [1, 2, 2, 2, 3, 4]
// target = 2

// Output:

// 3

// Brute Force: Linear Search and Count Elements
// Time Complexity: O(n)
// Space Complexity: O(1)
function countOccurrences(arr, target){
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
      count++;
    } 
  }
  return count;
}

// Optimal Approach

// Instead of counting directly:

// Formula: upperBound(target) - lowerBound(target)

// Example:

// arr = [1, 2, 2, 2, 3]

// lowerBound(2) = 1
// upperBound(2) = 4

// count = 4 - 1 = 3
// Time Compleixty: O(log n)
// Space Complexity: O(1)
function countOccurrences(arr, target){
  let lb = lowerBound(arr, target);
  let up = upperBound(arr, target);

  // if target not presetn
  if(lb === arr.length || arr[lb] !== target){
    return 0;
  }

  return ub - lb;
}

function lowerBound(arr, target) {
  let left = 0, right = arr.length - 1;
  let ans = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

function upperBound(arr, target) {
  let left = 0, right = arr.length - 1;
  let ans = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
