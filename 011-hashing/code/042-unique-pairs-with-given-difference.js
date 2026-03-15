// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.

 

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).


// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function findPairs(nums, k){
  let set = new Set();
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      if(Math.abs(nums[i] - nums[j]) === k){
        let a = Math.min(nums[i], nums[j]);
        let b = Math.max(nums[i], nums[j]);

        set.add(a + "," + b);
      }
    }
  }
  return set.size;
}

// Better Approach: Using Sorting & Two Pointers
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function findPairs(nums, k){
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let count = 0;

  while(right < nums.length){
    if(left === right || nums[right] - nums[left] < k){
      right++;
    }else if(nums[right] - nums[left] > k){
      left++;
    }else{
      left++;
      right++;
      count++;
      while(right < nums.length && nums[right] === nums[right - 1]){
        right++;
      }
    }
  }
  return count;
}
