class minHeap{
  constructor(){
    this.heap = [];
  }

  // getParentIndex

  getParentIndex(i){
    return Math.floor((i - 1) / 2);
  }

  // getLeftChildIndex

  getLeftChildIndex(i){
    return 2 * i + 1;
  }

  // getRightChildIndex

  getRightChildIndex(i){
    return 2 * i + 2;
  }

  // swap
  
  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // size of heap
  size(){
    return this.heap.length;
  }

  // peek()

  peek(){
    return this.heap[0];
  }

  // insert

  insert(value){
    this.heap.push(value); // keep tree complete
    this.heapifyUp(); // restore min heap property
  }

  // heapifyUp
  heapifyUp(){
    let index = this.size() - 1;
    while(index > 0){
      let parentIndex = this.getParentIndex(index);

      if(this.heap[parentIndex] <= this.heap[index]){
        break;
      }

      this.swap(index, parentIndex);

      index = parentIndex;
    } 
  }

  // extractMin
  extractMin(){
    if(this.size() === 1){
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.heapifyDown();

    return min;
      
  }

  // heapifyDown

  heapifyDown(){
    let index = 0;
    while(this.leftChildIndex(index) < this.size()){
      let smallerChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      if(rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallerChildIndex]){
        smallerChildIndex = rightChildIndex;
        }

      if(this.heap[index] <= this.heap[smallerChildIndex]){
        break;
      }

      this.swap(index, smallerChildIndex);

      index = smallerChildIndex;
    }
  }

  // Build Heap: Conver a normal array to valid min heap

  buildHeap(array){
    this.heap = array;
    for(let i = Math.floor(this.size()/2) - 1; i>=0; i==){
      this.heapifyDownFromIndex(i);
    }   
  }

  
    
}











