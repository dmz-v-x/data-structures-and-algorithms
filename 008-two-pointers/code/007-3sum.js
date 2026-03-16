// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Brute Force
// Time Complexity: O(n^3)
// Space Complexity: O(no. of triplets)
function threeSum(nums){
  const set = new Set();
  const res = [];
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      for(let k = j+1; k<nums.length; k++){
        if(nums[i] + nums[j] + nums[k] === 0){
          let temp = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          let key = temp.join(',')
          if(!set.has(key)){
            set.add(key);
            res.push(temp);
          }
        }
      }
    }
  }
  return res;
}

// Better Approach: 
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function threeSum(nums){
  const set = new Set();
  const res = [];
  for(let i = 0; i<nums.length; i++){
    const hash = new Set();
    for(let j = i+1; j<nums.length; j++){
      let needed = -(nums[i] + nums[j])
      if(hash.has(needed)){
        let temp = [nums[i], nums[j], needed].sort((a, b) => a - b)
        let key = temp.join(',')

        if(!set.has(key)){
          set.add(key);
          res.push(temp);
        }
      }
    }
    hash.add(nums[j]);
  }
}








