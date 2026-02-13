// Naive Approach: Using Set

// Time Complexity: O(n1 + n2 + sizeofset + nlogn);
// Space Complexity: O(size of set)

function unionOfTwoSortedArrays(arr1, arr2){
  let set = new Set();
  let arr = [];
  for(let i = 0; i<arr1.length; i++){
    set.add(arr1[i]);
  }

  for(let i = 0; i<arr2.length; i++){
    set.add(arr2[i]);
  }

  for(const key of set){
    arr.push(key);
  }

  arr.sort((a, b) => a - b);

  return arr;
}

// Optimal Approach

// Time: O(n + m)

// Space: O(n + m) (for result)

function unionOfTwoSortedArrays(arr1, arr2){
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] <= arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  }

  // Remaining elements of arr1
  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }

  // Remaining elements of arr2
  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }

  return result;
}


