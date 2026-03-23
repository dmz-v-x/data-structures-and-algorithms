// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// Given an array:

// Find an index i such that:

// arr[i] > arr[i-1] AND arr[i] > arr[i+1]

// Example

// Input: nums = [1,2,3,1]
// Output: 2

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5


// Brute Force: Check for every element
// Time Complexity: O(n)
function findPeak(arr){
  let n = arr.length;
  for(let i = 0; i<n; i++){
    let left = (i === 0) ? -Infinity : arr[i-1];
    let right = (i === n - 1) ? -Infinity : arr[i + 1];

    if(arr[i] > left && arr[i] > right){
      return i;
    }
  }
}

// Optimal Approach: Thinking in terms of slope
// Time Complexity: O(log n)
function findPeak(arr){
  let left = 0;
  let right = arr.length

  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] < arr[mid + 1]){
      left = mid + 1;
    }else{
      right = mid;
    }
  }
  return left;
}
