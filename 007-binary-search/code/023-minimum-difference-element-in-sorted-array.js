// Given a sorted array and a target x

// Find element with minimum absolute difference

// Example
// arr = [1, 3, 8, 10, 15]
// x = 12

// Differences:

// |1-12| = 11  
// |3-12| = 9  
// |8-12| = 4  
// |10-12| = 2  
// |15-12| = 3

// Answer = 10



// Brute Force
// Time Complexity: O(n)
function minDiff(arr, x){
  let minDiff = Infinity
  let result = -1;

  for(let num of nums){
    let diff = Math.abs(num - x);
    if(diff < minDiff){
      minDiff = diff;
      result = num;
    }
  }
  return result;
}



// Optimal Approach
// Time Complexity: O(log n)
function minDiff(arr, x){
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  // Binary Search to find lower bound
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === x) return [mid];
    else if(arr[mid] < x){
      left = mid + 1;
    }else {
      right = mid - 1;
    }
  }

  // Now:
  // left = ceil index
  // right = floor index

  if (left >= n) return arr[n - 1];   // x > all elements
  if (right < 0) return arr[0];       // x < all elements

  // Compare floor & ceil
  if (Math.abs(arr[left] - x) < Math.abs(arr[right] - x)) {
    return arr[left];
  } else {
    return arr[right];
  }
  
}







