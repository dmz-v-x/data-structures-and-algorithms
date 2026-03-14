// What is a Prefix Array (Prefix Sum)

// A prefix sum array stores the sum of elements from index 0 to index i.

// Example:

// Array

// arr = [2, 4, 6, 8]

// Prefix Sum

// prefix[0] = 2
// prefix[1] = 2 + 4 = 6
// prefix[2] = 2 + 4 + 6 = 12
// prefix[3] = 2 + 4 + 6 + 8 = 20

// Problem Statement

// Given an array, build the prefix sum array.

// Example

// Input
// arr = [1,2,3,4,5]

// Output
// [1,3,6,10,15]

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function prefixSum(arr){
  cont n = arr.length;
  const prefix = new Array(n);
  for(let i = 0; i<n; i++){
    let sum = 0;
    for(let j = 0; j<=i; j++){
      sum += arr[j];
    }
    prefix[i] = sum;
  }
  return prefix;
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function prefixSum(arr){
  const n = arr.length;
  const prefix = new Array(n);
  prefix[0] = arr[0];
  for(let i = 0; i<n; i++){
    prefix[i] = prefix[i-1] + prefix[i];
  }
  return prefix;
}

// Optimal Appraoch: In Place Prefix Sum
// Time Complexity: O(n)
// Space Complexity: O(1)
function prefixSum(arr){
  for(let i = 1; i<arr.length; i++){
    arr[i] = arr[i] + arr[i-1];
  }
  return arr;
}

