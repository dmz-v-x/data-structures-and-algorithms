// Given:
// Array nums
// Integer k

// Goal:
// Pick a subsequence of length k
// Such that sum is maximum

// Example:
// nums = [2, 1, 3, 3]
// k = 2

// Answer = [3, 3]

// Brute Force: 

// Plan:

// Pair each element with index:

// [value, index]
// Sort by value (descending)
// Pick top k
// Sort those k elements by index
// Extract values

// Time Complexity: Sorting → O(n log n)

function maxSubsequence(nums, k){
  let arr = nums.map((num , i) => [num, i]);

  // Step 1: sort value by descending order
  arr.sort((a, b) => b[0] - a[0]);

  // Step 2: Take top k
  let topK = arr.slice(0, k);

  // Step 3: sort by index
  topK.sort((a, b) => a[1] - b[1]);

  // Step 4: extract values
  return topK.map(x => x[0]);
}


// Optimal Appraoch

// Maintain k largest elements using min heap
// If size > k → remove smallest

// Steps:
// Iterate through array
// Push [value, index] into heap
// If size > k → pop smallest
// Sort remaining by index

// Time Complexity:
// Heap operations → O(n log k)
// Better when k << n

function maxSubsequence(nums, k){
  let heap = [];

  for(let i = 0; i<nums.length; i++){
    heap.push([nums[i], i]);

    heap.sort((a, b) => a[0] - b[0]);

    if(heap.length > k){
      heap.shift(); // remove smallest
    }
  }

  heap.sort((a, b) => a[1] - b[1]);
  return heap.map(x => x[0]);
}

// Using Min Heap Class Implementation

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  bubbleDown() {
    let i = 0;
    let n = this.heap.length;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

function maxSubsequence(nums, k) {
  let heap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    heap.push([nums[i], i]);

    if (heap.heap.length > k) {
      heap.pop();
    }
  }

  let result = heap.heap;

  // sort by index
  result.sort((a, b) => a[1] - b[1]);

  return result.map(x => x[0]);
}
