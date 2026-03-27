// Find Three Consecutive Integers That Sum to a Given Number

// Given a number num, find 3 consecutive integers such that:

// x + (x+1) + (x+2) = num

// Return them, or empty if not possible.

// x + (x+1) + (x+2) = num

// Simplify:

// 3x + 3 = num
// 3x = num - 3
// x = (num - 3) / 3

// For x to be integer:

// (num - 3) must be divisible by 3

// Which means:

// num % 3 === 0

// Steps:

// If num % 3 !== 0 → ❌ impossible
// Else:
// middle number = num / 3
// answer = [mid-1, mid, mid+1]

// Optimal Solution
// Time Complexity: O(1)
// Space Complexity: O(1)

function sumOfThre(nums){
  if(nums % 3 !== 0) return [];
  let mid = nums/3;
  return [mid - 1, mid, mid + 1];
}

// Question: Why mid / 3 is the middle number?

// Three consecutive integers are ALWAYS of the form:

// x, x+1, x+2

// In:

// x, x+1, x+2

// The middle number is:

// x+1

// sum = x + x + 1 + x + 2
// sum = 3x + 3
// sum = 3(x + 1)

// sum = 3 x (middle number)

// so: middle = sum/3



