// Brute Force Approach

// Time Complexity: O(2n)
// Space Complexity: O(n)

function reverseAnArray(arr){
  let revArr = [];
  int index = 0;
  for(let i = arr.length-1; i>=0; i--){
    revArr[index] = arr[i];
    index++;
  }

  for(let i = 0; i<arr.length; i++){
    arr[i] = revArr[i];
  }

  return arr;
}

// Better Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

function reverseAnArray(arr){
  let i = 0;
  let j = arr.length - 1;
  while(i < j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

// Recursive Appraoch

// Time Complexity: O(N)
// Space Complexity: O(1)

function reverseAnArray(arr, start, end){
  if(start >= end) return arr;
  [arr[start], arr[end]] = [arr[end], arr[start]];
  
  return reverseAnArray(arr, start+1, end-1);
  
}
