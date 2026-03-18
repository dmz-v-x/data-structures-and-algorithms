// Given an array, find:

// Length of the longest subarray whose sum is 0

// Example
// Input:  [1, -1, 3, 2, -2, -3, 3]
// Output: 6

// Naive Approach: Check all subarrays, track max length

// Time Complexity: O(n^2)
// Space Complexity: O(1);
function largestSubarray(nums){
  let maxLen = 0;
  for(let i = 0; i<nums.length; i++){
    let sum = 0;
    for(let j = i; j<nums.length; j++){
      sum += nums[j];
      if(sum === 0){
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}



// Optimal Approach: HashMap + Prefix Sum
// Time Complexity: O(n)
// Space Complexity: O(n)
function largestSubarray(nums){
  let map = new Map();
  let sum = 0;
  let maxLen = 0;

  for(let i = 0; i<nums.length; i++){
    sum += nums[i];

    if(sum === 0){
      maxLen = i+1;
    } 

    if(map.has(sum)){
      let prevIndex = map.get(sum);
      maxLen = Math.max(maxLen, i - prevIndex);
    }else {
      map.set(sum, i);
    }
  }
  return maxLen;
}
