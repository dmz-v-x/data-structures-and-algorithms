// Given an array arr[] of postive and negative integers, the objective is to find the number of subarrays having a sum exactly equal to a given number k.

// Examples: 

// Input : arr[] = [10, 2, -2, -20, 10], k = -10
// Output : 3
// Explanation: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum equal to -10.

// Input : arr[] = [9, 4, 20, 3, 10, 5], k = 33
// Output : 2
// Explanation: Subarrays: arr[0...2], arr[2...4] have sum equal to 33.

// Input : arr[] = [1, 3, 5], k = 2
// Output : 0
// Explanation: No subarrays with 0 sum.

// Brute Force Solution
// Time Complexity: O(n^3)
function countSubarray(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;

      for (let x = i; x <= j; x++) {
        sum += nums[x];
      }

      if (sum === k) count++;
    }
  }

  return count;
}

// Better Solution
// Time Complexity: O(n^2)
function countSubarray(nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) count++;
    }
  }

  return count;
}

// Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(n)

function countSubarray(nums, k) {
  let map = new Map();
  map.set(0, 1);

  let prefixSum = 0;
  let count = 0;

  for (let num of nums) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}
