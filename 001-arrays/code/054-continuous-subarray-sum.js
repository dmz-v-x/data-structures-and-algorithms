// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.

// Example
// nums = [23, 2, 4, 6, 7]
// k = 6

// Subarray:

// [2, 4] → sum = 6 → 6 % 6 = 0 

// Brute Force: Trying all possible combinations
// Time Complexity: O(n^2)

function checkSubarraySum(nums, k){
  let n = nums.length;

  for(let i = 0; i<n; i++){
    let sum = nums[i];
    for(let j = i+1; j<n; j++){
      sum += nums[j];

      if(sum % k === 0){
        return true;
      }
    }
  }
  return false;
}


// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(n)

function checkSubarraySum(nums, k){
  let map = new Map();
  map.set(0, -1);

  let sum = 0;
  for(let i = 0; i<nums.length; i++){
    sum += nums[i];

    let rem = ((sum % k) + k) % k;

    if(map.has(rem)){
      let prevIndex = map.get(rem);

      if((i - prevIndex) >= 2){
        return true;
      }
    } else {
        map.set(rem, i);
    }
  }
  return false;
}



// Modulo is defined as:

// a = k * q + r

// BUT with a strict condition:

// 0 ≤ r < k












