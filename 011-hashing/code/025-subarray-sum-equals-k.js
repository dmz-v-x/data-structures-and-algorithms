// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

// Brute Force
// Time Complexity: O(n^3)
function subarraySum(nums, k){
  let count = 0;

  for(let i = 0; i<nums.length; i++){
    for(let j = i; j<nums.length; j++){
      let sum = 0;
      for(let x = i; x<=j; x++){
        sum += nums[x];
      }
      if(sum === k) count++;
    }
  }
  return count;
}

// Better Approach
// Time Complexity: O(n^2)
function subarraySum(nums, k){
  let count = 0;
  for(let i = 0; i<nums.length; i++){
    let sum = 0;
    for(let j = i; j<nums.length; j++){
      sum += nums[j];
      if(sum === k) count++;
    }
  }
  return count;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function subarraySum(nums, k){
  let map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;
  for(let num of nums){
    prefixSum += num;

    if(map.has(prefixSum - k)){
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}




