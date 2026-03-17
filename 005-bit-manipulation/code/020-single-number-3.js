// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function singleNumber(nums){
  const result = [];
  for(let i = 0; i<nums.length; i++){
    let count = 0;
    for(let j = 0; j<nums.length; j++){
      if(nums[i] === nums[j]){
        count++;
      }
    }
    if(count === 1){
      result.push(nums[i]);
    }
  }
  return result;
}

// Better Approach: Using Map
// Time Complexity: O(n)
// Space Complexity: O(n)
function singleNumber(nums){
  const map = new Map();
  for(let num of nums){
    map.set(num, (map.get(num || 0) + 1));
  }
  const result = [];
  for(let [key, value] of map){
    if(value === 1){
      result.push(key);
    }
  }
  return result;
}

// Optimal Approach: Bit Manipulation
// Time Complexity: O(n)
// Space Complexity: O(1)
function singleNumber(nums){
  let xor = 0;

  for(let num of nums){
    xor ^= num;
  }

  let diffBit = xor & -xor;

  let num1 = 0;
  let num2 = 0;

  for(let num of nums){
    if(num & diffBit){
      num1 ^= num;
    }else{
      num2 ^= num;
    }
  }
  return [num1, num2];
}





