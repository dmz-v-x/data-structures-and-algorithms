// You are given:

// Array: arr
// Number: k

// Find maximum sum of any subarray of size k

// Example
// arr = [2, 1, 5, 1, 3, 2]
// k = 3

// All subarrays of size 3:

// [2,1,5] → sum = 8
// [1,5,1] → sum = 7
// [5,1,3] → sum = 9
// [1,3,2] → sum = 6

// Answer = 9




// Brute Force: Try all subarray of size k

// If n = length of array
// Then:

// Total Subarray = n - k + 1

// Time Complexity: O(n * k)

function maxSumSubarray(arr, k){
  let n = arr.length;
  let maxSum = -Infinity

  for(let i = 0; i<= n-k; i++){
    let sum = 0;
    for(let j = i; j<k; j++){
      sum += arr[j];
    }

    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}


// Problem with brute

// We are recalculating sum again and again

// Example:

// [2,1,5] → sum = 8
// [1,5,1] → we recompute again 

// KEY INSIGHT (VERY IMPORTANT)

// From:

// [2,1,5] → sum = 8

// To:

// [1,5,1]

// Instead of recomputing:

// We can do:

// New sum = old sum - element leaving + element entering
// = 8 - 2 + 1 = 7


// Better Approach

// Time Complexity: O(n)

function maxSumSubarray(arr, k){
  let n = arr.length;

  let sum = 0;

  // first window
  for(let i = 0; i<k; i++){
    sum += arr[i];
  }

  let maxSum = sum;

  // sliding window
  for(let i = k; i<n; i++){
    sum = sum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}


// Optimal Appraoch: Sliding Window Thinking + Two Pointers

// Time Complexity: O(n)

function maxSum(arr, k){
  let n = arr.length;
  let maxSum = -Infinity;
  let left = 0;
  let sum = 0;

  for(let right = 0; right<n; right++){
    sum += arr[right];

    // window size exceeded
    if(right - left + 1 > k){
      sum -= arr[left];
      left++;
    }

    // window size === k
    if(right - left + 1 === k){
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}











