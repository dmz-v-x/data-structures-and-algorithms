// An element is a leader if:

// It is greater than all elements to its right

// Example:
// Input:  [10, 22, 12, 3, 0, 6]
// Output: [22, 12, 6]

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function leaders(nums){
  let result = [];
  for(let i = 0; i<nums.length; i++){
    let isLeader = true;
    for(let j = i+1; j<nums.length; j++){
      if(nums[j] > nums[i]){
        isLeader = false;
        break;
      }
    }
    if(isLeader) result.push(nums[i]);
  }
  return result;
}

// Better Approach
