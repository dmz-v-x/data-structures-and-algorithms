// Given an array of integers arr[], find the contiguous subarray with the maximum sum that contains only non-negative numbers. If multiple subarrays have the same maximum sum return the one with longest length. If there is still a tie, return the subarray with the smallest starting index. If the array contains only negative numbers, return -1.

// We need:

// Only non-negative subarrays
// Among them, choose:
// Maximum sum
// If tie → longest length
// If still tie → smallest starting index

// If all elements are negative → return -1

// Brute Force:
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function maxSubarray(arr){
  let n = arr.length;

  let maxSum = -1;
  let result = [];
  for(let i = 0; i<n; i++){
    let sum = 0;
    for(let j = i; j<n; j++){
      if(arr[j] < 0) break;

      sum += arr[j];
      let length = j - i + 1;

      if(sum > maxSum || (sum === maxSum && length > result.length)){
        maxSum = sum;
        result = arr.slice(i, j+1);
      }
    }
  }

  return maxSum === -1 ? -1 : result;
}
