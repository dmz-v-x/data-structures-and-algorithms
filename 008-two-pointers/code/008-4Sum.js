// Problem

// Given an array nums and a target, return all unique quadruplets:

// a + b + c + d = target

// Example:

// nums = [1,0,-1,0,-2,2], target = 0

// Output:
// [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]


// Brute Force
// Time Complexity: O(n^4)
// Space Complexity: O(No. of quadruplets)
function fourSum(nums, target){
  const set = new Set();
  const res = [];

  let n = nums.length;

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        for(let l = k+1; l<n; l++){
          let sum = nums[i] + nums[j] + nums[k] + nums[l];

          if(sum === target){
            let temp = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
            let key = temp.join(',');

            if(!set.has(key)){
              set.add(key);
              res.push(temp)
            }
          }
        }
      }
    }
  }
  return result;
}
