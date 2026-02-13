// Naive Solution:

// Time Complexity: O(n^2) // [0,0,0,0,0,1]
// Space Complexity: O(1)

function moveZerosToEnd(nums){
  for(let i = 0; i<nums.length; i++){
    if(nums[i] === 0){
      let j = i+1;
      while(j < nums.length && nums[j] === 0){
        j++;
      }
      if(j === nums.length){
        break;
      }

      [nums[i], nums[j]] = [nums[j], nums[i]];      
    }
  }
}

// Optimal Solution

// Time Complexity: O(n)
// Space Complexity: O(1)

function moveZerosToEnd(nums){
  let index = 0;
  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== 0){
      [nums[i], nums[index]] = [nums[index], nums[i]]
      index++;
    }
  }
}
