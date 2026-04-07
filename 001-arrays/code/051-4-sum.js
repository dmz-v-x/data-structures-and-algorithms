// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]




// Brute Force

function fourSum(arr, target) {
  let n = arr.length;
  let set = new Set();
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];

          if (sum === target) {
            let temp = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
            let key = temp.join(',');

            if(!set.has(key)){
              set.add(key);
              result.push(temp);
            }
          }
        }
      }
    }
  }
  return result;
}

  // Better Solution

function fourSum(nums, target){
  let result = [];
  let set = new Set();
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      let hash = new Set();
      for(let k = j+1; k<nums.length; k++){
        let fourth = target - (nums[i] + nums[j] + nums[k]);
        if(hash.has(fourth)){
          let temp = [nums[i], nums[j], nums[k], fourth].sort((a, b) => a - b);
          let key = temp.join(',');

          if(!set.has(key)){
            set.add(key);
            result.push(temp);
          }
          
          
        }

        hash.add(nums[k]);
      }
    }
  }
  return result;
}

// Optimal Approach

function fourSum(nums, target){
  nums.sort((a, b) => a - b);
  let result = [];
  for(let i = 0; i<nums.length; i++){
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    for(let j = i+1; j<nums.length; j++){
      if(j > i+1 && nums[j] === nums[j - 1]) continue;
      let left = j+1;
      let right = nums.length - 1;
      while(left < right){
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if(sum === target){
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while(left < right && nums[left] === nums[left + 1]) left++;
          while(left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        }else if(sum < target){
          left++;
        }else {
          right--;
        }
      }
    }
  }
  return result;
}
