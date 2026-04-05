// Selection Sort idea:

// “Find the smallest element and put it in the correct place.”

function selectionSort(arr, start = 0){
  if(start >= arr.length - 1) return;

  let minIndex = start;
  for(let i = start + 1; i<arr.length; i++){
    if(arr[minIndex] > arr[i){
      minIndex = i;
    }
  }

  [arr[start], arr[minIndex]] = [arr[minIndex], arr[start]];

  selectionSort(arr, start + 1);
}

// Time Complexity: Best = Avg = Worst = O(n^2);
// Space Complexity: O(n)
