// Recursive Bubble Sort

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function recursiveBubbleSort(arr, n = arr.length){
  if(n === 1) return

  for(let i = 0; i<n-1; i++){
    if(arr[i] > arr[i+1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
  }
  recursiveBubbleSort(arr, n-1);
}
