// Example:

// Input array:
// [4,7,1,9,3]

// Check if element exists:
// 7

// Output:
// true

// Naive Approach: Using Linear Search

// Time Complexity: O(n) Scan entire array in worst case

function exits(arr, target){
  for(let num of arr){
    if(num === target){
      return true;
    }
  }
  return false;
}

// Better Approach

// Time Complexity: O(1)
// Space Complexity: O(n) -> store every element in array.

function exits(arr, target){
  const set = new Set(arr);
  return set.has(target);
}
