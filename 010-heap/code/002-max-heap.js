class maxHeap{
  constructor(){
    this.heap = [];
  }

  // Get Parent Index

  getParentIndex(i){
    return Math.floor((i - 1) / 2);
  }

  // Get Left Child Index

  getLeftChildIndex(i){
    return 2 * i + 1;
  }

  // Get Right Child Index

  getRightChildIndex(i){
    return 2 * i + 2;
  }

  // swap

  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // size

  size(){
    return this.heap.length;
  }

  // peek

  peek(){
    return this.heap[0];
  }

  // insert
  
  insert(value){
    this.heap.push(value);
    this.hepifyUp();
  }

  // heapifyUp

  heapifyUp(){
    let index = this.size() - 1;
    if(index > 0){
      let parentIndex = this.getParentIndex(index);

      if(this.heap[parentIndex] >= this.heap[index]){
        break;
      }

      this.swap(parentIndex, index);

      index = parentIndex;
    }
  }

  // extract Max

  extractMax(){
    if(this.size() === 1){
      return this.heap.pop();
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  // heapify Down

  heapifyDown(){
    let index = 0;
    
    while(this.leftChildIndex(index) < this.size()){
      let greaterChildIndex = this.leftChildIndex(index);
      let rightChildIndex = this.rightChildIndex(index);

      if(rithChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[greaterChildIndex]){
        greaterChildIndex = rightChildIndex;
      }

      if(this.heap[index] >= this.heap[greaterChildIndex]){
        break;
      }

      this.swap(index, greaterChildIndex)

      index = greaterChildIndex;
    }
  }
  

  
}
