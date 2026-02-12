// Naive Appraoch
// Time Complexity: O(nlogn)

function missingNumber(nums){
  nums.sort((a,b) => a - b);

  for(let i = 0; i<nums.length; i++){
    if(nums[i] !== i){
      return i;
    }
  }

  return nums.length;
}

// Better Approach
// Time Complexity: O(n)

function missingNumber(nums){
  let n = nums.length;
  let sum = n(n+1)/2;
  for(let i = 0; i<nums.length; i++){
    sum -= nums[i];
  }

  return sum;
}

// Optimal Approach
// Time Complexity: O(n)

function missingNumber(nums){
  let result = nums.length; 

  for (let i = 0; i<nums.length; i++){
    result ^= i ^ nums[i];
  }

  return result;
}
