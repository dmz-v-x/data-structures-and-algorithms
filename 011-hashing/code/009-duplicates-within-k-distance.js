// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

function duplicateInRange(arr, k){
  const map = new Map();
  for(let i = 0; i<arr.length; i++){
    if(map.has(arr[i])){
      if(Math.abs(map.get(arr[i]) - i) <= k){
        return true;
      }
      map.set(arr[i], i);
    }else{
      map.set(arr[i], i);
    }
  }
  return false;
}
