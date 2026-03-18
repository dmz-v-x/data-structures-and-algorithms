// Problem:

// An element is a leader if it is greater than all elements to its right in circular manner

// Example
// Input:  [5, 3, 8, 3, 2]

// Output:
// [8]


// Naive Solution
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function circularLeaders(nums){
  let n = nums.length; 
  let result = [];

  for(let i = 0; i<n; i++){
    let isLeader = true;
    for(let j = 1; j<n; j++){
      let idx = (i + j) % n;
      if(nums[idx] > nums[i]){
        isLeader = false;
        break;
      }
    }
    if(isLeader) result.push(nums[i]);
  }
  return result;
}

// Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
function circularLeaders(nums){
  let maxVal = Math.max(...nums);
  let result = [];

  for(let num of nums){
    if(num === maxVal){
      result.push(num);
    }
  }
  return result;
}
