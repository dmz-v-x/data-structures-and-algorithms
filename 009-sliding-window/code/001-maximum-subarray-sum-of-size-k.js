// Problem Statement

// Given an array of integers and an integer `K`, find the **maximum sum of any subarray of size K**.

// Example:

//     arr = [2,1,5,1,3,2]
//     K = 3

// Subarrays of size `3`:

//     [2,1,5] → sum = 8
//     [1,5,1] → sum = 7
//     [5,1,3] → sum = 9
//     [1,3,2] → sum = 6

// Maximum sum:

//     9

// Subarray:

//     [5,1,3]

// Naive Approach:
// Time Complexity: O(N * K)
function maxSubarraySum(arr, k){
  let maxSum = -Infinity
  for(let i = 0; i<=arr.length - k; i++){
    let sum = 0;
    for(let j = i; j<i+k; j++){
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum;
}
