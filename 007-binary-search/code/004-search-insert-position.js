// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Optimal Appraoch 1

function searchInsert(nums, target){
  for(let i = 0; i<nums.length; i++){
    if(nums[i] >= target){
      return i;
    }
  }
  return nums.length;
}


// Optimal Approach 2 - Using Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)
function searchInsert(nums, target){
  let start = 0;
  let end = nums.length - 1;
  let ans = arr.length;

  while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(arr[mid] >= target){
      ans = mid;
      right = mid - 1;
    }else {
      left = mid + 1;
    }
  }
  return ans;
}




