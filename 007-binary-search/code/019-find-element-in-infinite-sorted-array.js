// You are given a sorted infinite array

// You are given a sorted infinite array

// arr = [1,2,3,5,7,9,12,15,18,21, ... infinite]
// target = 15

// You don’t know:

// arr.length ❌

// Binary search needs:

// low = 0  
// high = n - 1

// But here:

// n = unknown ❌

// First find a range where target lies

// Then apply binary search

// EXPANDING WINDOW

// Start with small range:

// low = 0  
// high = 1

// Expand until:
// arr[high] >= target

// How?
// while (arr[high] < target) {
//   low = high;
//   high = high * 2;
// }

// This is called:

// Exponential Search



// Brute Force
// Time Complexity: O(n)
function findElement(arr, target){
  let i = 0;
  while(true){
    if(arr[i] === target) return i;

    if(arr[i] > target) return -1;

    i++;
  }
}


// Optimal Approach
// Time Complexity: O(log n)
function findElement(arr, target){
  let low = 0;
  let high = 1;

  // Step 1: Expand Range
  while(target > arr[high]){
    low = high;
    high = high * 2;
  }

  // Step 2: Perform Binary Search
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid] === target) return mid;

    else if(target > arr[mid]){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  return -1;
}
