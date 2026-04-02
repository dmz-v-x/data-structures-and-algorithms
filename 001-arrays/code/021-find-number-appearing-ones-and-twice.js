// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1


// Brute Force Approach
// Time Complexity: O(n^2)
function singleNumber(nums){
  for(let i = 0; i<nums.length; i++){
    let count = 0;
    for(let j = 0; j<nums.length; j++){
      if(nums[i] === nums[j]){
        count++;
      }
    }
    if(count === 1){
      return nums[i];
    }
  }
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function singleNumber(nums){
  let map = new Map();
  for(let i = 0; i<nums.length; i++){
    map.set(nums[i], ((map.get(nums[i]) || 0) + 1));
  }

  for(const [key, value] of map){
    if(value === 1){
      return key;
    }
  }
}


// Optimal Solution
// Time complexity: O(n)
// Space Complexity: O(1)
function singleNumber(nums){
  let xor = 0;
  for(let i = 0; i<nums.length; i++){
    xor ^= nums[i];
  }
  return xor;
}














