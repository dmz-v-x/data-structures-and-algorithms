class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ===== Index Helpers =====

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // ===== Utility =====

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  clear() {
    this.heap = [];
  }

  // ===== Insert =====

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] <= this.heap[index]) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // ===== Extract Min =====

  extractMin() {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  // ===== Heapify Down (MIN HEAP FIX) =====

  heapifyDown(i) {
    const size = this.size();

    while (true) {
      let smallest = i;

      const leftIndex = this.getLeftChildIndex(i);
      const rightIndex = this.getRightChildIndex(i);

      if (
        leftIndex < size &&
        this.heap[leftIndex] < this.heap[smallest]
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < size &&
        this.heap[rightIndex] < this.heap[smallest]
      ) {
        smallest = rightIndex;
      }

      if (smallest === i) break;

      this.swap(i, smallest);
      i = smallest;
    }
  }

  // ===== Build Heap =====

  buildHeap(array) {
    this.heap = [...array];

    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // ===== Delete Arbitrary Index =====

  delete(index) {
    if (index < 0 || index >= this.size()) return null;

    if (index === this.size() - 1) return this.heap.pop();

    this.swap(index, this.size() - 1);
    const removed = this.heap.pop();

    // Decide direction of fix
    const parentIndex = this.getParentIndex(index);

    if (
      index > 0 &&
      this.heap[index] < this.heap[parentIndex]
    ) {
      this.heapifyUp(index);
    } else {
      this.heapifyDown(index);
    }

    return removed;
  }

  // ===== Replace Root =====

  replace(value) {
    if (this.isEmpty()) {
      this.heap.push(value);
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = value;

    this.heapifyDown(0);

    return min;
  }

  // ===== Replace at index =====

  replaceAt(index, newValue) {
  if (index >= this.size()) return null;

  const oldValue = this.heap[index];
  this.heap[index] = newValue;

  if (newValue < oldValue) {
    this.heapifyUp(index);
  } else if (newValue > oldValue) {
    this.heapifyDown(index);
  }

  return oldValue;
}

  // ===== Aliases (Priority Queue Style) =====

  push(value) {
    this.insert(value);
  }

  pop() {
    return this.extractMin();
  }
}
