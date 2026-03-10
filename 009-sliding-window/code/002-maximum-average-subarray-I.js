// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// Naive Solution
// Time Complexity: O(N * K)
// Space Complexity: O(1)
function findMaxAverage(nums, k){
  let maxAvg = -Infinity
  for(let i = 0; i<= nums.length - k; i++){
    let sum = 0;
    for(let j = i; j < i + k; j++){
      sum += nums[j];
    }
    let avg = sum / k;
    maxAvg = Math.max(maxAvg, avg);
  }
  return maxAvg;
}

// Optimal Solution
// Time Complexity: O(N)
// Space Complexity: O(1)
function findMaxAverage(nums, k){
  let windowSum = 0;
  for(let i = 0; i<k; i++){
    windowSum += nums[i];
  }

  let maxSum = windowSum;
  for(let i = k; i<nums.length; i++){
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum)
  }
  return maxSum/k;
}
