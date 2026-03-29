// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

// Example 1:

// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

// Example 2:

// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]

// Why Backtracking in this question: We are asked to print all subsequences so that's a hint, whenever asked about all subsets, subarrays, subsequences.


// Brute Force: 
// -> Generate all subsequences 2^n
// -> Find valid ones
// -> Remove duplicates

function findSubsequences(nums){
  let res = new Set();

  function backtrack(index, path){
    if(path.length >= 2){
      res.add(path.join(","));
    }
  }

  backtrack(0, []);
}
