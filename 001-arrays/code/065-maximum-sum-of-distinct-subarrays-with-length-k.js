// Input:
// nums = [1, 5, 4, 2, 9, 9, 9]
// k = 3

// Goal:
// Consider all subarrays of size k

// Only take those with all distinct elements

// Return maximum sum

// Valid subarrays:
// [1,5,4] → sum = 10
// [5,4,2] → sum = 11
// [4,2,9] → sum = 15 (Answer)

// Brute Force: 

// Idea
// Generate every subarray of size k
// Check if distinct
// Compute sum

// Time Complexity: O(n * k)

function maximumSubarraySum(nums, k){
  let n = nums.length;
  let maxSum = 0;

  for(let i = 0; i<= n - k; i++){
    let set = new Set();
    let sum = 0;
    let isValid = true;

    for(let j = i; j<i+k; j++){
      if(set.has(nums[j])){
        isValid = false;
        break;
      }
      set.add(nums[j]);
      sum += nums[j];
    }

    if(isValid){
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}


// Optimal Approach: Sliding Window

// Complexity
// Time: O(n)
// Space: O(k)

function maximumSubarraySum(nums, k){
  let n = nums.length;
  let map = new Map();
  let sum = 0;
  let maxSum = 0;

  let left = 0;

  for(let right = 0; right < n; right++){
    // add current element
    sum += nums[right];
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    // maintain window size k
    if(right - left + 1 > k){
      sum -= nums[left];

      map.set(nums[left], map.get(nums[left]) - 1);
      if(map.get(nums[left]) === 0){
        map.delete(nums[left]);
      }

      left++;
    }

    // check valid window
    if(right - left + 1 === k && map.size === k){
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
}
















