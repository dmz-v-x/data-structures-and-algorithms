// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
 

// Example 1:

// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:

// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1


// Brute Force

function reversePairs(arr){
  let count = 0;

  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] > 2 * arr[j]){
        count++;
      }
    }
  }
  return count;
}

// Optimal Approach
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

function reversePairs(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, low, high) {
  if (low >= high) return 0;

  let mid = Math.floor((low + high) / 2);

  let count = 0;

  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);

  return count;
}

function countPairs(arr, low, mid, high) {
  let count = 0;
  let right = mid + 1;

  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    count += (right - (mid + 1));
  }

  return count;
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left++]);
    } else {
      temp.push(arr[right++]);
    }
  }

  while (left <= mid) temp.push(arr[left++]);
  while (right <= high) temp.push(arr[right++]);

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}
