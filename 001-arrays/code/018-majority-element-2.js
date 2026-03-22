// Majority Element 2

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// Brute Force: Count frequency of every element

// Time Complexity: O(n^2)
// Space Complexity: O(n)
function majorityElement(nums){
  let result = [];
  for(let i = 0; i<nums.length; i++){
    let count = 0;
    for(let j = 0; j<nums.length; j++){
      if(nums[j] === nums[i]){
        count++;
      }
    }

    if(count > Math.floor(nums.length / 3)){
      if(!result.includes(nums[i])){
        result.push(nums[i]);
      }
    }
  }
  return result;
}

// Better Approach: Using HashMap
// Time Complexity: O(n)
// Space Complexity: O(n)
function majorityElement(nums){
  let map = new Map();
  let result = [];

  for(let num of nums){
    map.set(num, (map.get(num) || 0) + 1);
  }

  for(let [key, value] of map){
    if(value > Math.floor(nums.length/3)){
      result.push(key);
    }
  }
  return result;
}


// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function majorityElement(nums){
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  // Phase 1: Finding Candidate
  for(let num of nums){
    if(candidate1 === num){
      count1++;
    }else if(candidate2 === num){
      count2++;
    }else if(count1 === 0){
      candidate1 = num;
      count = 1;
    }else if(count2 === 0){
      candidate2 = num;
      count = 1;
    }else{
      count1--;
      count2--;
    }
  }

  // Phase 2: Verifying
  count1 = 0;
  count2 = 0;
  for(let num of nums){
    if(num === candidate1){
      count1++;
    }else if(num === candidate2){
      count2++;
    }
  }

  let result = [];
  if(count1 > Math.floor(nums.length / 3)) result.push(candidate1);
  if(count2 > Math.floor(nums.length / 3)) result.push(candidate2);

  return result;
}
