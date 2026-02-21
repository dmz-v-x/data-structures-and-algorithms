function buildMaxHeap(arr){
  const n = arr.length;

  for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
    heapifyDown(arr, i, n);
  }

  return arr;
}

function heapifyDown(heap, index, size){
  let largest = index;

  while(true){
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if(left < size && heap[left] < heap[largest]){
      largest = left;
    }

    if (right < size && heap[right] > heap[largest]){
      largest = right;
    }

    if(largest === index) break;

    [heap[index], heap[largest]] = [heap[largest], heap[index]];

    index = largest;
  }
}
