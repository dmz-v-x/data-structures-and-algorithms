// Naive Approach:

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function findMaxConsecutiveOnes(nums) {
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      let count = 0;

      for (let j = i; j < nums.length && nums[j] === 1; j++) {
        count++;
      }

      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
}


// Optimal Approach:

// Time Complexity: O(n)
// Space Complexity: O(1)

function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
}
