// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// The sequence elements must be consecutive integers.

// Example 1
// nums = [100,4,200,1,3,2]

// Longest consecutive sequence:

// [1,2,3,4]

// Length:

// 4
// Example 2
// nums = [0,3,7,2,5,8,4,6,0,1]

// Longest sequence:

// [0,1,2,3,4,5,6,7,8]

// Length:

// 9

// Time Complexity: O(n^2)

function longestConsecutive(nums){

  function exists(target){
    for(let num of nums){
      if(num === target){
        return true;
      }
    }
    return false;
  }

  let longest = 0;

  for(let num of nums){
    let current = num;
    let length = 1;

    while(exists(current + 1)){
      current++;
      length++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
}


// Better Approach: Sorting

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function longestConsecutive(nums){
  if(nums.length === 0){
    return 0;
  }

  nums.sort((a, b) => a - b);

  let longest = 1;
  let currentLength = 1;

  for(let i = 1; i<nums.length; i++){
    if(nums[i] === nums[i-1]){
      continue;
    }

    if(nums[i] === nums[i-1]+1){
      currentLength++;
    }else{
      currrentLength = 1;
    }

    longest = Math.max(longest, currentLength);
  }

  return longest;
    
}


// Optimal Approach: HashSet

// Time Complexity: O(n)
// Space Complexity: O(n)

function longestConsecutive(nums){
  let set = new Set(nums);

  let longest = 0;

  for(let num of nums){
    if(!set.has(num - 1)){
      let current = num;
      let length = 1;

      while(set.has(current+1)){
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}













