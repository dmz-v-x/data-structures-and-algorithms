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
    if(this.size() === 1){
      return 
    }
  }
  

  
}
