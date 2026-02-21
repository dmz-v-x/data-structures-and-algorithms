// Approach
// We use the bottom-up heap construction heapify appraoch
// Only non-leaf nodes need heapifying
// Lat non-leaf node: Math.floor(n / 2) - 1

function buildMinHeap(arr){
  const n = arr.length;
  for(let i = Math.floor(n / 2) - 1; i >= 0; i--){
    heapifyDown(arr, i, n);
  }
  return arr;
}

function heapifyDown(heap, index, size){
  let smallest = index;

  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if(left < size && heap[left] < heap[smallest]){
    smallest = left;
  }

  if(right < size && heap[right] < heap[smallest]){
    smallest = right;
  }

  if(smallest === index) break;

  [heap[index], heap[smallest]] = [heap[smallest], heap[index]];

  index = smallest;
}

