// Given an array, arr[] and an integer x, return true if there exists a pair of elements in the array whose absolute difference is x, otherwise, return false.

// Examples:

// Input: arr[] = [5, 20, 3, 2, 5, 80], x = 78
// Output: true
// Explanation: Pair (2, 80) have an absolute difference of 78.
// Input: arr[] = [90, 70, 20, 80, 50], x = 45
// Output: false
// Explanation: There is no pair with absolute difference of 45.
// Input: arr[] = [1], x = 1
// Output: false

// Naive Approach

// Time Complexity: O(n^2)
// Space Complexity: O(1)

findPair(arr, x) {
  if(arr.length < 2) return false;
    for(let i = 0; i<arr.length; i++){
      for(let j = i+1; j<arr.length; j++){
        if(Math.abs(arr[i] - arr[j]) === x){
          return true;
        }
      }
    }   
      return false;
}

// Efficient Approach

// Time Complexity: O(n)
// Space Complexity: O(n)

findPair(arr, x){
  if(arr.length < 2) return false;
  const set = new Set();
  for(let num of arr){
    if(set.has(num + x) || set.has(num - x)){
      return true;
    }
    set.add(num);
  }
  return false;
}

// When array modifying is allowed

findPair(arr, x){
  if(arr.length < 2) return false;
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while(j < arr.length){
    let diff = arr[j] = arr[i];
    if(i !== j && diff === x) return true;
    else if(diff < x) j++;
    else i++;

    if(i === j) j++;
  }
  return false;
}


