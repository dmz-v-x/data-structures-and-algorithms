// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Brute Force: Generate and compare all possible combinations
// Time Complexity: O(n^3);

function maxSubarray(arr){
  let max = -Infinity
  for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
      let sum = 0;
      for(let k = i; k<=j; k++){
        sum += arr[k];
      }

      max = Math.max(max, sum);
    }
  }
  return max;
}

// Better Approach
// Time Complexity: O(n^2)
function maxSubarray(arr){
  let max = -Infinity
  for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let j = i; j<arr.length; j++){
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

// Optimal Appraoch: Kadane's Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubarray(arr){
  let max = -Infinity
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
    sum += arr[i];

    if(sum > max){
      max = sum;
    }

    if(sum < 0){
      sum = 0;
    }
  }
  return max;
}
