// Given:

// nums = [1, 2, 1]

// Output:

// [2, -1, 2]
// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function nextGreaterElement2(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);

  for(let i = 0; i<n; i++){
    for(let j = 1; j<n; j++){
      let idx = (i + j) % n;

      if(arr[idx] > arr[i]){
        result[i] = arr[idx];
        break;
      }
    }
  }
  return result;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function nextGreaterElement2(arr){
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for(let i = 2 * n - 1; i>=0; i--){
    let num = nums[i % n];
    while(stack.length && arr[i] >= stack[stack.length - 1]){
      stack.pop();
    }
    if(i < n){
      result[i] = stack.length ? stack[stack.length - 1] : -1;
    }
    stack.push(num);
  }
  return result;
}
