// In Priority Queue we store elements as Objects:

// { value: "Task", priority: number }

class MinPriorityQueue{
  constructor(){
    this.heap = [];
  }

  getParentIndex(i){
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i){
    return 2 * i + 1;
  }

  getRightChildIndex(i){
    return 2 * i + 2;
  }

  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size(){
    return this.heap.length;
  }

  peek(){
    return this.heap[0];
  }

  enqueue(value, priority){
    const node = {value, priority};
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp(){
    let index = this.size() - 1;
    while(index > 0){
      let parentIndex = this.getParentIndex(index);

      if(this.heap[parentIndex].priority <= this.heap[index].priority){
        break;
      }

      this.swap(parentIndex, index);

      index = parentIndex;
    }
  }

  dequeue(){
    if(this.size() === 1){
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown(){
    let index = 0;

    while(this.getLeftChildIndex(index) < this.size()){
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
    }

    if(rightChildIndex < this.size() &&
      this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority)
    {
      smallerChild = rightChildIndex;
    }

    if(this.heap[index].priority <= this.heap[smallerChildIndex].priority){
      break;
    }

    this.swap(index, smallerChildIndex);

    index = smallerChildIndex;
  }
  
}
