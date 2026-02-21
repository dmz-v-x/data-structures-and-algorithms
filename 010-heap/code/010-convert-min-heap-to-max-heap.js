function convertToMaxHeap(arr, n){
  for(let i = Math.floor((n/2) - 1); i>= 0; i--){
    heapifyDown(arr, i);
  }
    
}

function heapifyDown(arr, i){
  while(true){
    let largest = i;
    let leftIndex = 2 * i + 1;
    let rightIndex = 2 * i + 2;

    if(leftIndex < arr.length && arr[leftIndex] > arr[largest]){
      largest = leftIndex;
    }

    if(rightIndex < arr.length && arr[rightIndex] > arr[largest]){
      largest = rightIndex;
    }

    if(largest === i) break;

    [arr[largest], arr[i]] = [arr[i], arr[largest]];

    i = largest;
  }
}
