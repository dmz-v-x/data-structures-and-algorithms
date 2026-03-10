// Problem Statement

// Given an array of integers and an integer `K`, find the **first negative integer in every window of size `K`**.

// If a window does not contain any negative number, return:

//     0

// Example:

//     arr = [12, -1, -7, 8, -15, 30, 16, 28]
//     K = 3

// Windows:

//     [12, -1, -7] → first negative = -1
//     [-1, -7, 8] → first negative = -1
//     [-7, 8, -15] → first negative = -7
//     [8, -15, 30] → first negative = -15
//     [-15, 30, 16] → first negative = -15
//     [30, 16, 28] → no negative → 0

// Output:

//     [-1, -1, -7, -15, -15, 0]

// Naive Approach
// Time Complexity: O(N * K)
// Space Complexity: O(N)
function firstNegative(arr, k){
  let result = [];
  for(let i = 0; i<arr.length - k; i++){
    let firstNegative = 0;
    for(let j = i; j<i+k; j++){
      if(arr[j] < k){
        firstNegative = arr[j];
        break;
      }
    }
    result.push(firstNegative);
  }
  return result;
}
