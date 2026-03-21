// Next Greater Element to Left

// Example:
// [4, 5, 2, 10]

// Output:

// [-1, -1, 5, -1]

// Brute force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextGreaterLeft(arr){
  let n = arr.length;
  let res = new Array(n).fill(-1);
  
  for(let i = n-1; i>=0; i--){
    for(let j = i - 1; j>=0; j--){
      if(arr[j] > arr[i]){
        result[i] = arr[j];
        break;
      }
    }
  }
  return result;
}

// Another Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function nextGreaterLeft(arr){
  let n = arr.length; 
  let res = new Array(n).fill(-1);

  for(let i = 0; i<n; i++){
    for(let j = i-1; j>=0; j--){
      if(arr[j] > arr[i]){
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
function nextGreaterLeft(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for(let i = 0; i<n; i++){
    while(stack.length && arr[i] >= stack[stack.length - 1]){
      stack.pop();
    }
    if(stack.length){
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}





