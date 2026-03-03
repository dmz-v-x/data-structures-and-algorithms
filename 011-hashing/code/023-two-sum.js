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


// Naive Approach
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

// Better Approach: Sorting + Two Pointers

// Time complexity: O(nlogn)
// Space Complexity: O(n)
function twoSum(nums, target){
  const arr = nums.map((nums, index) => ({value, index}));

  arr.sort((a, b) => a.value - b.value);
  let i = 0;
  let j = nums.length - 1;
  while(i < j){
    const sum = nums[i].value + nums[j].value;

    if(sum < target){
      i++;
    }else if(sum > target){
      j--;
    }else {
      return [nums[i].index, nums[j].index];
    }
  }
}

// Optimal Approach: Using Hashing

// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum(nums, target){
  const map = new Map();
  for(let i = 0; i<nums.length; i++){
    if(map.has(target - nums[i])){
      return [map.get(target - nums[i]), i];
    }else {
      map.set(nums[i], i);
    }
  }
}












