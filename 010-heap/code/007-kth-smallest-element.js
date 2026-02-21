kthSmallest(arr, k){
  let maxHeap = [];
  for(let i = 0; i<arr.length; i++){
    if(maxHeap.length < k){
      maxHeap.push(arr[i]);
      heapifyUp(maxHeap);
    }else if(maxHeap[0] > arr[i]){
      maxHeap[0] = arr[i];
      heapifyDown(maxHeap);
    }
  }
}

leftChildIndex(index){
  return 2 * index + 1;
}

rightChildIndex(index){
  return 2 * index + 2;
}

heapifyUp(maxHeap){
  let index = maxHeap.length - 1;
  while(index > 0){
    let parentIndex = Math.floor((index - 1)/2);
    if(maxHeap[parentIndex] >= maxHeap[index]){
      break;
    }
    [maxHeap[index], maxHeap[parentIndex]] = [maxHeap[parentIndex], maxHeap[index]];
    index = parentIndex;
  }
}

heapifyDown(maxHeap){
  let index = 0;
  while(leftChildIndex(index) < maxHeap.length)
}










