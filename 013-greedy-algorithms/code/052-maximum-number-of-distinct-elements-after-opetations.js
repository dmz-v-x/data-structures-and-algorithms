// Typical version of this problem:

// You are given an array nums and an integer k.
// You can change each element at most once by adding any value in range:

// [-k, +k]

// Goal:

// Maximize number of DISTINCT elements

// STEP 1: What does operation mean?

// For each number x:

// x → any value in [x - k, x + k]

// So each number becomes a range

// Example:
// x = 5, k = 2
// → possible values = [3, 7]

// STEP 2: Reframe Problem

// Instead of numbers, think:

// Each element = interval

// [x - k, x + k]

// Goal becomes:

// Assign each interval a value such that
// all chosen values are distinct

// STEP 3: Greedy Insight (VERY IMPORTANT)

// We want:

// Pick values as small as possible

// WHY?

// So we leave space for future elements


// STEP 4: Strategy

// Sort array
// For each number:
// Try to assign the smallest possible value
// But it must be greater than previous assigned

// STEP 5: Variables
// prev → last assigned value

// STEP 6: Decision for each element

// For number x:

// range = [x - k, x + k]

// We want:

// candidate = max(prev + 1, x - k)

// Why?
// prev + 1 → ensure distinct
// x - k → minimum allowed

// Check validity:
// if candidate ≤ x + k → valid

// Assign it

// Else:

// skip this number


function maxDistinct(nums, k){
  nums.sort((a, b) => a - b);

  let prev = -Infinity;
  let count = 0;

  for(let x of nums){
    let low = x - k;
    let high = x + k;

    let candidate = Math.max(prev + 1, low);

    if(candidate <= high){
      prev = candidate;
      count++;
    }
  }
  return count;
}


// Example:
// nums = [1, 2, 2, 3]
// k = 1
// Step 1: Convert to ranges
// 1 → [0, 2]
// 2 → [1, 3]
// 2 → [1, 3]
// 3 → [2, 4]

// Step 2: Process
// First: 1 → [0,2]
// prev = -∞
// candidate = max(-∞, 0) = 0
// → assign 0
// prev = 0
// count = 1

// Second: 2 → [1,3]
// candidate = max(1, 1) = 1
// → assign 1
// prev = 1
// count = 2

// Third: 2 → [1,3]
// candidate = max(2, 1) = 2
// → assign 2
// prev = 2
// count = 3

// Fourth: 3 → [2,4]
// candidate = max(3, 2) = 3
// → assign 3
// prev = 3
// count = 4

// Answer = 4

// Intervals:

// [0---2]
//    [1---3]
//    [1---3]
//       [2---4]

// We pick:
// 0, 1, 2, 3

// Always pick leftmost available slot

















