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
// Space Complexity: O(N)
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

// Better Approach: Using Prefix sum
// Time Complexity: O(N)
// Space Complexity: O(N)
function maxSubarraySum(arr, k){
  let n = arr.length;
  let prefix = new Array(n);
  prefix[0] = arr[0];
  
  for(let i = 1; i<n; i++){
    prefix[i] = prefix[i-1]+arr[i];
  }

  let maxSum = -Infinity;

  for(let i = 0; i<n; i++){
    let j = i+k-1;
    let sum = prefix[j] - (i > 0 ? prefix[i-1] : 0);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// Sliding Window
// Total Complexity: O(N)
// Space Complexity: O(1)
function maxSubarraySum(arr, k){
  let windowSum = 0;
  for(let i = 0; i<k; i++){
    windowSum += arr[i];
  }

  let maxSum = windowSum 
  for(let i = k; i<arr.length; i++){
    windowSum = wimdowSum - arr[i-k] + arr[i];
    maxSum = Math.max(windowSum, maxSum);
  }
  return maxSum
}
