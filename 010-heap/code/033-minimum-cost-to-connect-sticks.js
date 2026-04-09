// You are given an array of stick lengths.

// Rule:
// You can connect any two sticks
// Cost of connecting = sum of their lengths
// After connecting → they become one new stick
// Goal:

// Connect all sticks into one stick with minimum total cost


// Example
// sticks = [2, 4, 3]
// One way:
// Connect 2 + 4 = 6 → cost = 6 → new sticks: [6, 3]
// Connect 6 + 3 = 9 → cost = 9

// Total = 6 + 9 = 15


// Another way:
// Connect 3 + 2 = 5 → cost = 5 → new sticks: [5, 4]
// Connect 5 + 4 = 9 → cost = 9

// Total = 5 + 9 = 14 (minimum)




// Core Intuition:

// If you connect large sticks early, cost becomes huge later

// If you connect small sticks first, cost stays low

// Key Insight:

// Always pick the two smallest sticks first

// This is a Greedy + Heap problem


// Brute Force: Try all possible combinations
// Time Complexity: O(n!)
// Space Complexity: O(n)
function connectSticksBrute(sticks){
  
  if(sticks.length === 1) return 0;

  let minCost = Infinity;

  for(let i = 0; i<sticks.length; i++){
    for(let j = i+1; j<sticks.length; j++){
      // pick two sticks

      let newStick = sticks[i] + sticks[j];

      // create new array without i, j
      let remaining = [];

      for(let k = 0; k<sticks.length; k++){
        if(k !== i && k !== j){
          remaining.push(sticks[k]);
        }
      }

      remaining.push(newSticks);

      let cost = newStick + connectSticksBrute(remaining);
      minCost = Math.min(minCost, cost);
    }
  }
  return minCost;
}


// Better: Using sorting
// Time Complexity: O(n^2 logn)
function connectSticks(sticks){
  let arr = [...sticks];
  let totalCost = 0;

  while(arr.length > 1){
    arr.sort((a, b) => a - b);

    let a = arr.shift();
    let b = arr.shift();

    let sum = a + b;
    totalCost = sum;

    arr.push(sum);
  }
  return totalCost;
}


// Optimal Solution:

// Time Complexity: O(n log n)
// Space Complexity: O(n)

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val){
    this.heap.push(val);
    this.bubbleUp();
  }

  pop(){
    if(this.heap.length === 1) return this.heap.pop();

    let top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  size(){
    return this.heap.length;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
        let parent = Math.floor((i - 1) / 2);
        if (this.heap[parent] <= this.heap[i]) break;
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

      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}



class Solution {
  minCost(arr) {
      if (arr.length <= 1) return 0;

      let heap = new MinHeap();
      for (let x of arr) heap.push(x);

      let totalCost = 0;

      while (heap.size() > 1) {
          let a = heap.pop();
          let b = heap.pop();

          let sum = a + b;
          totalCost += sum;

          heap.push(sum);
      }

      return totalCost;
  }
}





















