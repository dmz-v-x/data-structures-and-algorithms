// PROBLEM

// Given:

// nums = [2,1,5,1,3,2]
// k = 3

// Find:

// maximum sum of any subarray of size exactly k

// VISUALIZATION

// All windows of size 3:

// [2,1,5] = 8
// [1,5,1] = 7
// [5,1,3] = 9
// [1,3,2] = 6

// Answer:

// 9


// Brute Force:

// INTUITION

// Generate every subarray of size k.

// Calculate sum.

// Track maximum.

// Time Complexity: O(n * k)

function maxSumSubarray(nums, k){
  let maxSum = -Infinity;

  for(let i = 0; i<nums.length-k; i++){
    let sum = 0;
    for(let j = i; j<i+k; j++){
      sum += nums[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}


// Optimal Approach: Sliding Window

// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSumSubarray(nums, k){
  let windowSum = 0;
  for(let i = 0; i<k; i++){
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  for(let i = k; i<nums.length; i++){
    windowSum = windowSum + nums[i] - nums[i-k];

    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}


