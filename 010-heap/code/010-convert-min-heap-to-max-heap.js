function converToMaxHeap(arr, n){
  let maxHeap = [];
  for(let i = Math.floor((n/2)-1); i>=0; i--){
    maxHeap.push(arr[i]);
    heapifyDown(maxHeap, i);
  }
    
}

function heapifyDown(maxHeap, i){
  let largest = i;
  while(true){
    let leftIndex = 2 * i + 1;
    let rightIndex = 2 * i + 2;

    if(leftChild < maxHeap.length && maxHeap[leftIndex] > maxHeap[largest]){
      largest = leftIndex;
    }

    if(rightIndex < maxHeap.length && maxHeap[rightIndex] > maxHeap[largest]){
      largest = rightIndex;
    }

    if(largest === i) break;

    [maxHeap[largest], maxHeap[i]] = [maxHeap[i], maxHeap[largest]];

    largest = leftIndex;
  }
}
