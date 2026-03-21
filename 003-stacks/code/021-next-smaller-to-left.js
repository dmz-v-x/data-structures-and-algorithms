// Next Smaller to Left

// Given:

// arr = [4, 5, 2, 10]

// Output:

// [-1, 4, -1, 2]

// Brute Force

// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextSmallerLeft(arr){
  let n = arr.length;
  let res = new Array(n).fill(-1);

  for(let i = 0; i<n; i++){
    for(let j = i -1; j>= 0; j--){
      if(arr[j] < arr[i]){
        res[i] = arr[j];
        break;
      }
    }
  }
  return res;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function nextSmallerLeft(arr){
  let n = arr.length; 
  let res = new Array(n).fill(-1);
  let stack = [];

  for(let i = 0; i<n; i++){
    while(stack.length && stack[stack.length - 1] >= arr[i]){
      stack.pop();
    }
    if(stack.length){
      res[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return res;
}



