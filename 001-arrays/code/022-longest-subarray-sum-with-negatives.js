// Problem:

// Given an array and a target sum k,
// find the length of the longest subarray whose sum = k

// Example

// arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3]
// k = 3

// Valid subarrays:

// [1,2] -> sum = 3 -> length = 2
// [3] -> sum = 3 -> length = 1
// [3,-3,1,1,1] -> sum = 3 -> length = 5
// [1,1,1] -> sum = 3 -> length = 3

// Longest length = 5

// Brute Force
// Time Complexity: O(n^3)
function largestSubarray(arr, k){
  let n = arr.length;
  let maxLen = 0;
  for(let i = 0; i<n; i++){
    for(let j = i; j<n; j++){
      let sum = 0;
      for(let x = i; x<=j; x++){
        sum += arr[x];
      }
      if(sum === k){
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

// Better Approach
// Time Complexity: O(n^2)
function largestSubarray(arr, k){
  let n = arr.length;
  let maxLen = 0;
  for(let i = 0; i<n; i++){
    let sum = 0;
    for(let j = i; j<n; j++){
      sum += arr[j];

      if(sum === k){
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function largetstSubarray(arr, k){
  let prefixSum = 0;
  let map = new Map();
  let maxLen = 0;

  map.set(0, -1);
  
  for(let num of arr){
    prefixSum += num;

    if(map.has(prefixSum - k)){
      let len = i - map.get(prefixSum - k);
      maxLen = Math.max(maxLen, len);
    }

    if(!map.has(sum)){
      map.set(sum, i);
    }
  }
  return maxLen;
}

// Optimal Appraoch: (Works only if there are only positives)
// Time Complexity: O(N)
// Space Complexity: O(1)
function longestSubarry(arr, k){
  let left = 0;
  let maxLen = 0;
  for(let right = 0; right<arr.length; i++){
    sum += arr[i];

    while(sum > k){
      sum -= arr[left];
      left++;
    }

    if(sum === k){
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }
  return maxLen;
}
