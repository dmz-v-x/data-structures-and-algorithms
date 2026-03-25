// Problem

// Given a binary array (0 and 1) and an integer goal
// Return number of subarrays with sum = goal

// Example
// nums = [1,0,1,0,1], goal = 2
// Output = 4

// Valid subarrays:

// [1,0,1]
// [1,0,1,0]
// [0,1,0,1]
// [1,0,1]

// In previous problem:

// we used while (sum >= target) → shrink

// But here:
// We need EXACT sum = goal

// Problem

// You can’t directly shrink when:

// sum > goal

// Because:

// removing 0 does NOT change sum
// removing 1 does

// Behavior is tricky


// Brute Force: Generate all subarrays, count those where sum equal to goal
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function numSubarrayWithSum(nums, goal){
  let count = 0;
  for(let i = 0; i<nums.length; i++){
    let sum = 0;
    for(let j = i; j<nums.length; j++){
      sum += nums[j];
      if(sum === goal) count++;
    }
  }
  return count;
}

// Better Approach

“Before starting, we have seen a prefix sum of 0 exactly once.”








