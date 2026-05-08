// Problem:

// We are given a circular array.

// We need to find:

// maximum possible subarray sum.

// NORMAL ARRAY vs CIRCULAR ARRAY

// Normal subarray:

// [1, -2, 3, 4]

// Best:
// [3, 4] = 7
// Circular Array

// In circular array:

// last element connects to first element

// Visualization:

// 0 → 1 → 2 → 3
// ↑         ↓
// -----------

// So subarray can wrap around.

// Example:

// [5, -3, 5]

// Normal best:

// 5 + (-3) + 5 = 7

// But circular best:

// 5 (last) + 5 (first) = 10

// Answer:

// 10


// Brute Force: 

// INTUITION

// Generate every circular subarray.

// Find maximum sum.

// HOW TO GENERATE CIRCULAR SUBARRAY?

// Use modulo.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function maxSubarrayCircular(nums){
  let n = nums.length;
  let ans = -Infinity;

  for(let i = 0; i<n; i++){
    let sum = 0;

    for(let len = 0; len < n; len++){
      let index = (i + len) % n;

      sum += nums[index];

      ans = Math.max(ans, sum);
    }
  }

  return ans;
}




// Optimal Approach:

// Circular maximum is either:

// 1. Normal maximum subarray
// 2. Wrapping maximum subarray

// PART 1 — NORMAL MAXIMUM

// Use Kadane.

// KADANE IDEA

// At every index:

// Either:

// start fresh

// or

// extend previous subarray
// Example
// [5, -2, 3]

// At 3:

// 3
// OR
// 5 + (-2) + 3

// Take better.

// PART 2 — WRAPPING CASE

// Example:

// [5, -3, 5]

// Wrapping best:

// 5 + 5

// Equivalent to:

// totalSum - (-3)

// So:

// maximum circular =
// totalSum - minimumSubarray
// WHY?

// Because removing the minimum middle part leaves the best wrapping part.

// FORMAL EQUATION

// If:

// Total Sum = T
// Removed Middle = M

// Then:

// Circular Subarray Sum = T - M

// To maximize circular sum:

// maximize(T - M)

// Since T is fixed:

// minimize(M)

// Therefore:

// M = minimum subarray sum

// QED.

// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubarrayCircular(nums){
  let total = nums[0];
  let currentMax = nums[0];
  let maxSum = nums[0];

  let currentMin = nums[0];
  let minSum = nums[0];

  for(let i = 1; i<nums.length; i++){
    total += nums[i];

    // Kadane Max
    
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(maxSum, currentMax);

    // Kadane Min
    currentMin = Math.min(nums[i], currentMin + nums[i]);
    minSum = Math.min(minSum, currentMin);
  }

  if(total === minSum){
    return maxSum;
  }

  return Math.max(maxSum, total - minSum);

}











