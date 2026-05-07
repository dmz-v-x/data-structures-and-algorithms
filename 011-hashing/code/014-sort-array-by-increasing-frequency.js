// Given an array of integers nums, sort the array:

// By increasing frequency
// If two numbers have same frequency:
// sort by decreasing value

// Example
// nums = [1,1,2,2,2,3]

// Frequencies:

// 1 -> 2
// 2 -> 3
// 3 -> 1

// Sorting rules:

// smaller frequency first

// So:

// 3 comes first (freq 1)
// 1 comes next  (freq 2)
// 2 comes last  (freq 3)

// Answer:

// [3,1,1,2,2,2]


// Another Example
// nums = [2,3,1,3,2]

// Frequency:

// 2 -> 2
// 3 -> 2
// 1 -> 1

// Now:

// 1 has smaller frequency -> first

// Between:

// 2 and 3

// both frequency = 2.

// Tie rule:

// larger number first

// So:

// 3 before 2

// Answer:

// [1,3,3,2,2]



// MOST IMPORTANT THING

// This problem is mostly about:

// custom sorting

// The entire challenge is:

// how to write sorting condition


// Brute Force:

// Intuition

// For every element:

// count its frequency manually
// compare with every other element
// sort accordingly

function frequencySort(nums) {

  let freq = new Map();

  // Step 1: Count frequency
  for (let num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Step 2: Custom sort
  nums.sort((a, b) => {

    // Increasing frequency
    if (freq.get(a) !== freq.get(b)) {
      return freq.get(a) - freq.get(b);
    }

    // Same frequency -> decreasing value
    return b - a;
  });

  return nums;
}



















