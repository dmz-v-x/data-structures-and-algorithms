// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Brute force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function twoSum(nums, target){
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
}

// Better Approach
// Time complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target){
  let map = new Map(); // numbet -> index

  for(let i = 0; i<nums.length; i++){
    if(map.has(target - nums[i])){
      return [i, map.get(target, nums[i])];
    }

    map.set(nums[i], i);
  }
  return [];
}


// Optimal Approach: Two Pointers works only if array is sorted
// Time complexity: O(n)
// Space Complexity: O(1)
function twoSum(nums, target){
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let sum = nums[left] + nums[right];

    if(sum === target){
      return [left, right];
    }else if(sum < target){
      left++;
    }else{
      right--;
    }
  }
  return [];
}
