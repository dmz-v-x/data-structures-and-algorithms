// Next Smaller Element to Right

// Given:

// arr = [4, 5, 2, 10]

// Output:

// [2, 2, -1, -1]

// Brute Force Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextSmallerRight(arr){
  let n = arr.length;
  let res = new Array(n).fill(-1);

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      if(arr[j] < arr[i]){
        res[i] = arr[j];
        break;
      }
    }
  }
  retrun res;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function nextSmallerRight(arr){
  let n = arr.length; 
  let res = new Array(n).fill(-1);
  let stack = [];

  for(let i = n-1; i>=0; i--){
    while(stack.length && stack[stack.length] >= arr[i]){
      stack.pop();
    }
    if(stack.length){
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return res;
}
