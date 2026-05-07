// Problem:

// Given an integer array nums and an integer k, return the k most frequent elements.

// Example:

// nums = [1,1,1,2,2,3]
// k = 2

// Answer = [1,2]

// Because:

// 1 appears 3 times
// 2 appears 2 times
// 3 appears 1 time

// Top 2 frequent elements:

// [1,2]



// Brute Force: 

// Count Frequency
// Find top k frequencies

// Time Complexity: O(n) + O(m log m) // m is unique elements
// Worst Case: O(n log n)

// Space Complexity: O(n)

function topKFrequent(nums, k){
  let map = new Map();

  // Count Frequencies
  for(let num of nums){
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Convert to array
  let arr = [...map.entries()];

  // sort descending by frequencies
  arr.sort((a, b) => b[1] - a[1]);

  // Take First K elements

  let result = [];
  
  for(let i = 0; i<k; i++){
    result.push(arr[i][0]);
  }

  return result;
    
}





















