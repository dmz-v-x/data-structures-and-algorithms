// Given an array:

// [4, 5, 2, 10]

// For each element, find the next greater element on the right

// Output:

// [5, 10, 10, -1]

// Brute Force

// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextGreater(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);
  for(let i = 0; i<n; i++){
    for(let j = 1; j<n; j++){
      if(arr[j] > arr[i]){
        result[i] = arr[j];
        break;
      }
    }
  }
  return result;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function nextGreater(arr){
  let n = arr.length;
  let stack = [];
  let result = new Array(n).fill(-1);
  for(let i = n-1; i>=0; i--){
    while(stack.length && arr[i] >= stack[stack.length - 1]){
      stack.pop();
    }
    if(stack.length){
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
}
