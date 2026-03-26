// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Example 3:
// Input: nums = [1,0,1,2]
// Output: 3

// Brute Force
// For every number
// Try to build sequence: num, num+1, num+2


// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function longestConsecutiveBrute(nums){
  let longest = 0;
  function exists(arr, target){
    for(let num of arr){
      if(num === target){
        return true;
      }
    }
    return false;
  }

  for(let num of nums){
    let current = num
    let count = 1;
    while(exits(nums, current + 1)){
      count++;
      current++;
    }

    longest = Math.max(longest, count);
  }
  return longest;
}

// Better Approach: Sorting
// Time Complexity: O(n log n)
// Space Complexity: O(1)
function longestConsecutive(nums){
  if(nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let longest = 1;
  let count = 1;

  for(let i = 1; i<nums.length; i++){
    if(nums[i] === nums[i - 1]){
      continue; // skip duplicate
    }else if(nums[i-1] + 1 === nums[i]){
      count++;
    }else{
      count = 1;
    }

    longest = Math.max(longest, count);
  }
  return longest;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function longestConsecutive(nums){
  let set = new Set(nums);
  let longest = 0;
  for(let num of nums){
    if(!set.has(num-1)){
      let current = num;
      let count = 1;

      while(set.has(current + 1)){
        count++;
        current++;
      }

      longest = Math.max(longest, count);
    }
  }
  return longest;
}
