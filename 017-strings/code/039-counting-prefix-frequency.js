// Given an array and integer k, count number of subarrays whose sum = k.

// Example:

// arr = [1,1,1]
// k = 2

// Subarrays with sum = 2

// [1,1] (index 0-1)
// [1,1] (index 1-2)

// Answer

// 2

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function countSubarray(arr, k){
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let i = i; j<arr.length; j++){
      sum += arr[j];
      if(sum === k){
        count++;
      }
    }
  }
  return count;
}

// Optimal Approach

function countSubarry(arr, k){
  let prefixSum = 0;
  let count = 0;
  let map = new Map();
}
