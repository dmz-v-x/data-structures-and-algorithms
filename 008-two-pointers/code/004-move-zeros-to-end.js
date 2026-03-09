// Move Zeroes
// Problem

// Given an array nums, move all zeroes to the end while maintaining the relative order of non-zero elements.

// Constraints:

// Must be in-place

// Cannot create another array

// Example
// Input:
// nums = [0,1,0,3,12]

// Output:
// [1,3,12,0,0]

// Explanation:

// Non-zero numbers → 1,3,12
// Zeros move to end

// Final order preserved:

// [1,3,12,0,0]

// Naive Approach:
// Time Complexity: O(n)
// Space Complexity: O(n)
function moveZeroes(nums){
  let result = [];
  let zeroCount = 0;
  for(let num of nums){
    if(num === 0){
      zeroCount++;
    }else {
      result.push(num);
    }
  }
  while(zeroCount > 0){
    result.push(0);
    zeroCount--;
  }
  for(let i = 0; i<nums.length; i++){
    nums[i] = result[i];
  }
}

// Better Approach
// Time Complexity: O(n) -> Two Passes
// Space Complexity: O(1)
function moveZeroes(nums){
  let index = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== 0){
      nums[index] = nums[i];
      index++;
    }
  }
  while(index < nums.length){
    nums[index] = 0;
    index++;
  }
}

// Optimal Approach
// Time Complexity: O(n) -> single pass
// Space Complexity: O(1)
function moveZeros(nums){
  let lastNonZero = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== 0){
      [nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]];
      lastNonZero++;
    }
  }
}
