// Find:

// Maximum subarray sum
// AND the actual subarray

// Brute Force
// Time Complexity: O(n^3)
function maxSubarray(arr){
  let maxSum = -Infinite;
  let bestSubarray = [];

  for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
      let sum = 0;
      let temp = [];

      for(let k = i; k<=j; k++){
        sum += arr[k];
        temp.push(arr[k]);
      }

      if(sum > maxSum){
        maxSum = sum;
        bestSubarray = temp;
      }
    }
  }
  return {maxSum, subarray: bestSubarray}
}

// Better Approach
// Time Complexity: O(n^2)
function maxSubarray(arr){
  let maxSum = -Infinity;
  let bestSubarray = [];

  for(let i = 0; i<arr.length; i++){
    let sum = 0;
    for(let j = i; j<arr.length; j++){
      sum += arr[j];

      if(sum > maxSum){
        maxSum = sum;
        bestSubarray = arr.slice(i, j+1);
      }
    }
  }
  return {maxSum, subarray: bestSubarray};
}

// Optimal Approach

function maxSubarray(arr){
  let max = arr[0];
  let sum = 0;
  
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for(let i = 0; i<arr.length; i++){
    sum += arr[i];

    if(sum > max){
      max = sum;
      start = tempStart;
      end = i;
    }

    if(sum < 0){
      sum = 0;
      tempStart = i+1;
    }
  }

  return {
    maxSum: max,
    subarray: arr.slice(start, end+1);
  }
}

