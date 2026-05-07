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

// Better Approach Prefix Sum + HashMap

// “Before starting, we have seen a prefix sum of 0 exactly once.”

// Dry Run

// nums = [1,0,1,0,1]
// goal = 2

// Initialize:

// map = {
//   0: 1
// }

// Why?

// Because:

// prefix sum 0 already exists before array starts

// Step 1
// num = 1
// sum = 1

// need = sum - goal
//      = 1 - 2
//      = -1

// Not found.

// Store:

// map = {
//   0:1,
//   1:1
// }

// Step 2
// num = 0
// sum = 1

// need = 1 - 2 = -1

// Not found.

// Update:

// map[1] = 2

// Step 3
// num = 1
// sum = 2

// need = 2 - 2 = 0

// map[0] = 1

// So:

// count += 1

// One valid subarray found.

// Step 4
// num = 0
// sum = 2

// need = 0

// Again:

// count += map[0]
//        += 1
// Step 5
// num = 1
// sum = 3

// need = 1

// map[1] = 2

// Meaning:

// 2 previous prefix sums had value 1

// So:

// count += 2

// Final:

// count = 4

function numSubarraysWithSum(nums, goal) {
  let map = new Map();

  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {

    sum += num;

    let need = sum - goal;

    if (map.has(need)) {
      count += map.get(need);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}



