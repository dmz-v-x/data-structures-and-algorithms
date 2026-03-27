// Reverse an array using recursion

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseArray(arr, i, j){
  if(i >= j) return
  [arr[i], arr[j]] = [arr[j], arr[i]];
  reverseArray(arr, i+1, j-1);
}





// Reverse an array using one pointer
// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseArray(arr, i){
  let n = arr.length;

  if(i >= Math.floor(n/2)) return;

  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

  reverseArray(arr, i + 1);
}

