// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

// Example 1:

// Input: nums = [1,1,1,1,1], k = 10
// Output: 1

// Explanation: The only good subarray is the array nums itself.
// Example 2:

// Input: nums = [3,1,4,3,2,2,4], k = 2
// Output: 4

// Explanation: There are 4 different good subarrays:
// - [3,1,4,3,2,2] that has 2 pairs.
// - [3,1,4,3,2,2,4] that has 3 pairs.
// - [1,4,3,2,2,4] that has 2 pairs.
// - [4,3,2,2,4] that has 2 pairs.

// Complexity
// Time: O(n)
// Space: O(n)

function countGood(nums, k){
  let n = nums.length;
  let map = new Map();

  let left = 0;
  let pairs = 0;
  let count = 0;

  for(let right = 0; right<n; right++){
    let val = nums[right];

    // existing frequency contributes to new pairs
    let freq = map.get(val) || 0;
    pairs += freq;

    map.set(val, freq+1);

    while(pairs >= k){
      count += (n - right);

      let leftVal = nums[left];
      let leftFreq = map.get(left);

      pairs -= (leftFreq - 1);
      left++;
    }
  }
  return count;
}



