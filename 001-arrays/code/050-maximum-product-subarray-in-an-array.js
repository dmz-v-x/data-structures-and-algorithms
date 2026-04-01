// Find the maximum product of a contiguous subarray

// Example
// arr = [2, 3, -2, 4]

// Subarrays:

// [2] → 2
// [2,3] → 6 
// [2,3,-2] → -12
// [3,-2,4] → -24
// [4] → 4

// Answer = 6

// Brute Force: Try all subarray and compute product
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function maxProduct(arr){
  let maxProd = -Infinity

  for(let i = 0; i<arr.length; i++){
    let prod = 1;
    for(let j = i; j<arr.length; j++){
      prod *= arr[j];
      maxProd = Math.max(maxProd, prod);
    }
  }
  return maxProd;
}

// Optimal Approach: Kadane Variant

function maxProduct(arr) {
  let maxEnding = arr[0];
  let minEnding = arr[0];
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];

    if (curr < 0) {
      // swap
      [maxEnding, minEnding] = [minEnding, maxEnding];
    }

    maxEnding = Math.max(curr, maxEnding * curr);
    minEnding = Math.min(curr, minEnding * curr);

    result = Math.max(result, maxEnding);
  }

  return result;
}



// Alternate Optimal (Prefix Sum + Suffix Trick)
// Time Complexity: O(n)
function maxProduct(arr) {
  let maxProd = -Infinity;
  let prefix = 1;
  let suffix = 1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    prefix *= arr[i];
    suffix *= arr[n - 1 - i];

    maxProd = Math.max(maxProd, prefix, suffix);

    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;
  }

  return maxProd;
}















