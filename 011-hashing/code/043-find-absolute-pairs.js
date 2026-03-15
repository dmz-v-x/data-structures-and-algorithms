// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// Example 2:

// Input: nums = [1,3], k = 3
// Output: 0
// Explanation: There are no pairs with an absolute difference of 3.
// Example 3:

// Input: nums = [3,2,1,5,4], k = 2
// Output: 3
// Explanation: The pairs with an absolute difference of 2 are:
// - [3,2,1,5,4]
// - [3,2,1,5,4]
// - [3,2,1,5,4]

// Naive Approach: Counting all pairs
// Time Complexity: O(n^2)
// Space Complexity: O(1);
function countPairs(arr, k){
  let pairs = 0;
  for(let i = 0; i<arr.length - 1; i++){
    for(let j = i+1; j<arr.length; j++){
      if(Math.abs(arr[i] - arr[j]) === k){
        pairs++;
      }
    }
  }
  return pairs;
}

// Better Approach: Sorting and Two Pointers
// Time Complexity: O(nlogn) + O(n) -> O(nlogn)
function countPairs(arr, k){
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let count = 0;

  while(right < arr.length){
    let diff = arr[right] - arr[left];
    if(diff === k){
      left++;
      right++;
      count++;
    }else if(diff < k){
      right++;
    }else {
      left++;
    }

    if(left === right){
      right++;
    }
  }
  return count;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function countPairs(arr, k){
  let map = new Map();
  let count = 0;
  for(let num of arr){
    if(map.has(num - k)){
      count += map.get(num - k);
    }
    if(map.has(num + k)){
      count += map.get(num + k);
    }
    map.set(num, (map.get(num) || 0) + 1);
  }
  return count;
}
