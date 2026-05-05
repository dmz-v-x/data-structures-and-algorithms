// You are given an array nums consisting of positive integers.

// We call a subarray of an array complete if the following condition is satisfied:

// The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.
// Return the number of complete subarrays.

// A subarray is a contiguous non-empty part of an array.

 

// Example 1:

// Input: nums = [1,3,1,2,2]
// Output: 4
// Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

// Example 2:

// Input: nums = [5,5,5,5]
// Output: 10
// Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.

// Time Complexity: O(n)
// Space Complexity: O(n)

function countCompleteSubarrays(nums){
  let set = new Set(nums);
  let size = set.size;
  let left = 0;
  let map = new Map();
  let count = 0;

  for(let right = 0; right<nums.length; right++){
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while(map.size === size){
      count += nums.length - right;

      let leftVal = nums[left];
      let leftFreq = map.get(leftVal);

      if(leftFreq === 1){
        map.delete(leftVal);
      }else{
        map.set(leftVal, leftFreq - 1);
      }

      left++;
    }

  }
  return count;
}


