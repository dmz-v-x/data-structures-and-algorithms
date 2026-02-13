// Naive Solution:

// Approach 1:

// 1. Create a new array.
// 2. Iterate through the array and whenever you find a non zero element push it to created array.
// 3. Number of zeros = length of original array - length of new array.
// 4. Replace elements from new array to original array one by one.
// 5. loop through the length of number of zeros and add the zeros starting from newArray.length to orignalArray.length -1;


// Approach 2:

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
