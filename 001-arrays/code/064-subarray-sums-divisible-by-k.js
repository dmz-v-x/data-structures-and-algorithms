// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7

// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:

// Input: nums = [5], k = 9
// Output: 0

// Brute Force: Try all subarray and check sum % k === 0

// Time Complexity: O(n^2)

function subarrayDivByK(nums, k){
  let n = nums.length;
  let count = 0;

  for(let i = 0; i<n; i++){
    let sum = 0;
    for(let j = i; j<n; j++){
      sum += nums[j];

      if(sum % k === 0){
        count++;
      }
    }
  }
  return count;
}



// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(k) or O(n)

function subarrayDivByK(nums, k){
  let map = new Map();
  map.set(0, -1);

  let sum = 0;
  let count = 0;

  for(let i = 0; i<nums.length; i++){
    sum += nums[i];

    let rem = ((sum % k) + k) % k;

    if(map.has(rem)){
      count += map.get(rem)
    }

    map.set(rem, (map.get(rem) || 0) + 1);
  }
}





