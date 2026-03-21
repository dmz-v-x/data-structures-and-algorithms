// Given:

// nums = [1, 2, 1]

// Output:

// [2, -1, 2]

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextGreaterRight(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      if(arr[j] > arr[i]){
        result[i] = arr[j];
        break;
      }
    }
  }
  return result;
}

// Optimal Approach

function nextGreaterRight(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];
}
