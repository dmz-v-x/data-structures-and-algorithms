// Problem: Find pairs with a given difference k (Repetition Allowed)

// Given an array arr and integer k, find pairs (a, b) such that:

// |a - b| = k

// Example

// arr = [1, 5, 3, 4, 2]
// k = 2

// Valid pairs:
// (1,3)
// (5,3)
// (3,1)
// (4,2)

// Brute Force
// Time Complexity: O(n^2)
function pairsWithDiff(arr, k){
  let count = 0;

  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
      if(i !== j && Math.abs(arr[i] - arr[j]) === k){
        count++;
      }
    }
  }
  return count;
}

// Better Appraoch

function pairsWithDiff(arr, k){
  arr.sort((a, b) => a - b);
  let count = 0;

  for(let i = 0; i<arr.length; i++){
    for(let j = i + 1; j<arr.length; j++){
      let diff = arr[j] - arr[i];

      if(diff === k){
        count++;
      } 
      if(diff > k) break;
    }
    
  }
}

// Optimal Appraoch
// Time Complexity: O(n)
// Space Complexith: O(n)
function pairsWithDiff(arr, k) {

  let set = new Set(arr);
  let count = 0;

  for (let num of arr) {

    if (set.has(num + k)) {
      count++;
    }

  }

  return count;
}








