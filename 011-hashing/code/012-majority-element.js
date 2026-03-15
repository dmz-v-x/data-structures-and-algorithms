// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Naive Approach:
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function majorityElement(nums){
  for(let i = 0; i<n; i++){
    let count = 0;
    for(let j = 0; j<n; j++){
      if(nums[i] === nums[j]){
        count++;
      }
    }
    if(count > Math.floor(n/2)){
      return nums[i];
    }
  }
  return -1;
}

// Better Approach: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)
function majorityElement(nums){
  const map = new Map();
  const n = nums.length;

  for(let num of nums){
    map.set(num, (map.get(num) || 0) + 1);
  }

  for(let [key, value] of map){
    if(value > Math.floor(n / 2)){
      return key;
    }
  }
  return -1;
}

// Optimal Approach: Boyer Moore Voting Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
function majorityElement(nums){
  let candidate = null;
  let count = 0;
  for(let num of nums){
    if(count === 0){
      candiate = num;
    }

    if(num === candidate){
      count++;
    }else{
      count--;
    }
  }
  return candidate;
}
