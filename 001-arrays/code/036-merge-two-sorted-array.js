// PROBLEM: Merge Two Sorted Arrays

// Given two sorted arrays:

// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]

// Output:

// [1, 2, 3, 4, 5, 6]

// Naive Approach: Concatenate + Sort

// Time Complexity: O((n+m)log(n+m))
// Space Complexity: O(n+m)
function merge(arr1, arr2){
  let arr = arr1.concat(arr2);
  arr.sort((a, b) => a - b);
  return arr;
}

// Better Approach
// Time Complexity: O(n+m)
// Space Complexity: O(n+m)
function merge(arr1, arr2){
  let i = 0, let j = 0;
  let arr = [];

  while(i<arr.length && j < arr.length){
    if(arr1[i] <= arr[j]){
      result.push(arr[i]);
      i++;
    }else{
      result.push(arr[j]);
      j++;
    }
  }

  while(i < arr1.length){
    result.push(arr[i]);
    i++;
  }

  while(j < arr2.length){
    result.push(arr[j]);
    j++;
  }

  return result;
}

// Optimal Approach: Using Gap Method
