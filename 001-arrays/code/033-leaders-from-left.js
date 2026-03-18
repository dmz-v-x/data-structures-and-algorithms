An element is a leader from left if it is greater than all elements to its left

Example
Input:  [10, 22, 12, 3, 0, 6]
Output: [10, 22]

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function leadersLeft(nums){
  let result = [];
  for(let i = 0; i<nums.length; i++){
    isLeader = true;
    for(let j = 0; j<i; j++){
      if(nums[j] >= nums[i]){
        isLeader = false;
        break;
      }
    }
    if(isLeader) result.push(nums[i]);
  }
  return result;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function leadersLeft(nums){
  let result = [];
  let maxSoFar = -Infinity;

  for(let num of nums){
    if(num > maxSoFar){
      result.push(num);
      maxSoFar = num;
    }
  }
  return result;
}

