// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.

// Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
// Output: 5
// Explanation: Subarrays with sum = -5 are [-5] and [-5, 8, -14, 2, 4]. The length of the longest subarray with a sum of -5 is 5.

// Input: arr[] = [10, -10, 20, 30], k = 5
// Output: 0
// Explanation: No subarray with sum = 5 is present in arr[].

// Brute Force
// Time Complexity: O(n^3)
function longestSubarray(nums, k){
  let maxLen = 0;
  for(let i = 0; i<nums.length; i++){
    for(let j = i; j<nums.length; j++){
      let sum = 0;

      for(let x = i; x<=j; x++){
        sum += nums[x];
      }

      if(sum === k){
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}


// Better Approach
// Time Complexity: O(n^2);
function longestSubarray(nums, k){
  let maxLen = 0;
  for(let i = 0; i<nums.length; i++){
    let sum = 0;
    for(let j = i; j<nums.length; j++){
      sum += nums[j];

      if(sum === k){
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}


// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function longestSubarray(nums, k) {
  let map = new Map();
  let prefixSum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum === k) {
      maxLen = i + 1;
    }

    if (map.has(prefixSum - k)) {
      let len = i - map.get(prefixSum - k);
      maxLen = Math.max(maxLen, len);
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return maxLen;
}











