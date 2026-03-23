// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
function searchRange(arr, target){
  let first = -1;
  let last = -1;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] === target){
      if(first === -1){
        first = i;
      }
      last = i;
    }
  }
  return [first, last];
}

// Optimal Approach 
// Time Complexity: O(log n)
// Space Complexity: O(1)

function searchRange(arr, target){
  let first = lowerBound(nums, target);
  let last = upperBound(nums, target) - 1;

  if(first === arr.length || arr[first] !== target){
    return [-1, -1];
  }

  return [first, last];
}

function lowerBound(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let ans = nums.length;

  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(nums[mid] >= target){
      ans = mid;
      right = mid - 1;
    }else {
      left = mid + 1;
    }
  }
}

function upperBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
