// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
  
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// We can also say the question is find the max subarry with at most 2 zero

function longestOnes(nums, k){
  let maxLen = 0;
  for(let i = 0; i<nums.length; i++){
    let zeros = 0;
    for(let j = i; j<nums.length; j++){
      if(nums[j] === 0){
        zeros++;
      }
      
      if(zeros > k){
        break;
      }

      maxLen = Math.max(maxLen, j - i +1);
    }
      
  }
  return maxLen;
}

// Better Solution

funciton longestOnes(nums, k){
  let left = 0;
  let right = 0;
  let zeros = 0;
  let maxLen = 0;

  while(right <= nums.length -1){
    if(nums[right] === 0){
      zeros++;
    }

    while(zero > k){
      if(nums[left] === 0){
        zeros--;
      }
      left++;
    }

    
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
}

// Optimal Solution

function longestOnes(nums, k){
  let left = 0;
  let right = 0;
  let zeros = 0;
  let maxLen = 0;

  while(right < nums.length){
    if(nums[right] === 0){
      zeros++;
    }

    if(zeros > k){
      if(nums[left] === 0){
        zeros--;
      }
      left++;
    }

    if(zeros <= k){
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }
  return maxLen;
}
