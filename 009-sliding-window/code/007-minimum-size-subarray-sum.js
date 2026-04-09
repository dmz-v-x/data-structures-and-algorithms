// Problem

// Given:

// array of positive integers
// a target target

// Return:
// minimum length of a contiguous subarray
// whose sum ≥ target

// Example
// nums = [2,3,1,2,4,3]
// target = 7

// Output = 2
// Explanation: [4,3]



// Observations

// 1. Subarray -> contiguous: so sliding window is possible
// 2. all numbers are positive: 
// when expand: sum increases
// when shrink: sum decreases

// Brute Force: Check All possible combination and track the minimum subarray

function minSubArrayLen(target, nums){
  let minLen = Infinity;
  for(let i= 0; i<nums.length; i++){
    let sum = 0;
    for(let j = i j<nums.length; j++){
      sum += nums[j];
      if(sum >= target){
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Optimal Approach
// Time Complexity: O(2n) -> O(n)
// Space Complexity: O(1);
function minSubarrayLen(target, nums){
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  
  for(let right = 0; right < nums.length; right++){
    sum += nums[right];
    while(sum >= target){
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
