// First Understand What a Heap Actually Is

// Before code…

// First build the mental picture.

// A Min Heap is a special kind of Binary Tree where:

// Every parent is smaller than or equal to its children.

// That is the ONLY rule.

// Example:

//         2
//       /   \
//      5     8
//     / \   / \
//    10 7  9  15

// Check every parent:

// 2 <= 5 and 8
// 5 <= 10 and 7
// 8 <= 9 and 15

// Everything valid.

// This is a Min Heap.

// MOST IMPORTANT THING

// A heap is NOT about sorting everything.

// Many beginners think:

// Heap means sorted structure

// NO.

// Only parent-child relationship matters.

// Example:

//         1
//       /   \
//      4     2
//     / \
//    9   7

// This is STILL a valid Min Heap.

// Why?

// Because:

// 1 <= 4 and 2
// 4 <= 9 and 7

// That’s enough.

// Notice:

// 4 > 2

// That is allowed because they are siblings, not parent-child.

// Why Heap Exists

// Heap is made for ONE SUPERPOWER:

// Get smallest element FAST

// In Min Heap:

// smallest element is ALWAYS at root

// Meaning:

// heap[0]

// in array implementation.

// Real World Visualization

// Imagine:

// Hospital emergency queue

// Smaller number = more emergency.

// 1 -> critical
// 2 -> urgent
// 5 -> moderate
// 10 -> low

// You ALWAYS want:

// most urgent patient quickly

// Heap helps do this efficiently.

// Why Array Instead of Tree?

// Very important concept.

// We DRAW heap like a tree.

// BUT internally:

// it is stored in ARRAY

// Example heap:

//         2
//       /   \
//      5     8
//     / \   / \
//    10 7  9  15

// Stored as:

// [2, 5, 8, 10, 7, 9, 15]


// MAGIC OF ARRAY INDEXES

// Now comes the most important heap trick.

// If node index is:

// i

// Then:

// Left Child
// 2*i + 1
// Right Child
// 2*i + 2
// Parent
// Math.floor((i - 1)/2)


// VISUALIZE INDEXES

// Array:

// Index:  0  1  2  3  4  5  6
// Value: [2, 5, 8,10, 7, 9,15]

// Tree:

//              0(2)
//           /         \
//       1(5)          2(8)
//      /    \        /    \
//  3(10) 4(7)    5(9)  6(15)

// Now test formulas.

// For index 0
// left = 2*0+1 = 1
// right = 2*0+2 = 2

// Correct.

// For index 1
// left = 3
// right = 4

// Correct.

// Parent Example

// Index 4:

// parent = Math.floor((4-1)/2)
//        = Math.floor(3/2)
//        = 1

// Correct.


// COMPLETE HEAP OPERATIONS OVERVIEW

// A heap mainly supports:

// | Operation   | Meaning                |
// | ----------- | ---------------------- |
// | insert      | add new element        |
// | extractMin  | remove smallest        |
// | peek        | see smallest           |
// | heapifyUp   | fix upward             |
// | heapifyDown | fix downward           |
// | buildHeap   | create heap from array |

// MOST IMPORTANT INTUITION

// Whenever heap property breaks:

// parent > child

// We FIX it.

// There are ONLY TWO directions:

// | Direction   | Used When             |
// | ----------- | --------------------- |
// | heapifyUp   | newly inserted node   |
// | heapifyDown | root replaced/deleted |

// INSERT INTUITION

// Suppose heap:

//         2
//       /   \
//      5     8

// Array:

// [2,5,8]

// Insert:

// 1

// Where do we put it first?

// ALWAYS at END.

// Array becomes:

// [2,5,8,1]

// Tree:

//         2
//       /   \
//      5     8
//     /
//    1

// Problem:

// 5 > 1

// Heap broken.

// So we FIX upward.

// HEAPIFY UP VISUALIZATION

// Current:

//         2
//       /   \
//      5     8
//     /
//    1

// Compare with parent:

// 1 < 5

// Swap.

//         2
//       /   \
//      1     8
//     /
//    5

// Still broken:

// 1 < 2

// Swap again.

//         1
//       /   \
//      2     8
//     /
//    5

// Done.

// BUILD INSERT CODE STEP BY STEP
// Tiny Step 1

// Push element.

// insert(value) {
//     this.heap.push(value);
// }

// Why?

// Because heap must remain complete binary tree.

// So insertion always happens at end.

// Tiny Step 2

// Now fix heap.

// insert(value) {
//     this.heap.push(value);
//     this.heapifyUp(this.size() - 1);
// }

// Why:

// new node inserted at last index

// BUILD HEAPIFY UP STEP BY STEP
// First Think

// We need:

// while child < parent
//     swap
// Step 1

// Loop until root.

// while(index > 0)

// Why?

// Root has no parent.

// Step 2

// Find parent.

// const parentIndex = this.getParentIndex(index);
// Step 3

// Check if already valid.

// if(this.heap[parentIndex] <= this.heap[index])
//     break;

// Meaning:

// parent smaller already

// No fixing needed.

// Step 4

// Else swap.

// this.swap(index, parentIndex);
// Step 5

// Move upward.

// index = parentIndex;

// Because swapped node moved up.

Finaly Heapify Up

heapifyUp(index){
  while(index > 0){
    const parentIndex = this.getParentIndex(index);

    if(this.heap[parentIndex] <= this.heap[index]){
      break;
    }

    this.swap(index, parentIndex);

    index = parentIndex;
  }
}

// DRY RUN INSERT

// Insert:

// 1

// into:

// [2,5,8]
// Push
// [2,5,8,1]

// index:

// 3
// Parent
// Math.floor((3-1)/2)
// = 1

// Compare:

// 1 < 5

// Swap:

// [2,1,8,5]
// Move Up

// index:

// 1

// Parent:

// 0

// Compare:

// 1 < 2

// Swap:

// [1,2,8,5]

// Done.


// EXTRACT MIN INTUITION

// Now hardest concept.

// Suppose:

//         1
//       /   \
//      2     8
//     /
//    5

// Array:

// [1,2,8,5]

// We want remove minimum.

// Minimum is ALWAYS root.

// Remove:

// 1

// But now tree gets broken.

// So what do we do?


// KEY TRICK

// Take LAST element and move to ROOT.

// Why?

// Because complete tree structure must remain valid.

// So:

// 5 goes to root

// Tree:

//         5
//       /   \
//      2     8

// Problem:

// 5 > 2

// Heap broken.

// Now fix DOWNWARD.

// This is:

// heapifyDown

// HEAPIFY DOWN VISUALIZATION

// Current:

//         5
//       /   \
//      2     8

// Compare with smaller child.

// Smaller child:

// 2

// Swap.

//         2
//       /   \
//      5     8

// Done.

// IMPORTANT RULE

// In Min Heapify Down:

// always swap with SMALLER child

// Why?

// Because parent must become smallest among them.


// BUILD extractMin STEP BY STEP
// Step 1 — Empty check
// if(this.isEmpty()) return null;
// Step 2 — One element case
// if(this.size() === 1)
//     return this.heap.pop();
// Step 3 — Save min
// const min = this.heap[0];
// Step 4 — Move last to root
// this.heap[0] = this.heap.pop();
// Step 5 — Fix downward
// this.heapifyDown(0);
// Step 6 — Return min
// return min;

// FINAL extractMin

extractMin() {
  if(this.isEmpty()) return null;

  if(this.size() === 1){
    return this.heap.pop();
  }

  const min = this.heap[0];

  this.heap[0] = this.heap.pop();

  this.heapifyDown(0);

  return min;
}




// BUILD HEAPIFY DOWN INTUITION

// This is the most important algorithm in heap.

// Goal:

// keep pushing large value downward

// until heap becomes valid.

// DRY RUN HEAPIFY DOWN

// Array:

// [5,2,8]

// index:

// 0
// Find children

// Left:

// 1 -> value 2

// Right:

// 2 -> value 8
// Find smallest

// Currently:

// smallest = 0

// Compare left:

// 2 < 5

// smallest becomes:

// 1

// Compare right:

// 8 < 2

// No.

// Swap

// Swap index 0 and 1.

// [2,5,8]

// Move downward.

// i = 1

// No more children.

// Done.

// BUILD heapifyDown STEP BY STEP
// Step 1

// Infinite loop.

// while(true)

// We manually break.

// Step 2

// Assume current is smallest.

// let smallest = i;
// Step 3

// Get children.

// const leftIndex = this.getLeftChildIndex(i);
// const rightIndex = this.getRightChildIndex(i);
// Step 4

// Check left.

// if(
//    leftIndex < size &&
//    this.heap[leftIndex] < this.heap[smallest]
// )
// {
//    smallest = leftIndex;
// }
// Step 5

// Check right.

// if(
//    rightIndex < size &&
//    this.heap[rightIndex] < this.heap[smallest]
// )
// {
//    smallest = rightIndex;
// }
// Step 6

// If no change:

// if(smallest === i)
//     break;

// Heap valid.

// Step 7

// Else swap.

// this.swap(i, smallest);
// Step 8

// Move downward.

// i = smallest;


final heapifyDown

heapifyDown(i){
  const size = this.size();

  while(true){
    let smallest = i;

    const leftIndex = this.getLeftChildIndex(i);
    const rightIndex = this.getRightChildIndex(i);

    if(leftIndex < size && this.heap[leftIndex] < this.heap[smallest]){
      smallest = leftIndex;
    }

    if(rightIndex < size && this.heap[rightIndex] < this.heap[smallest]){
      smallest = rightIndex;
    }

    if(smallest === i) break;

    this.swap(i, smallest);

    i = smallest;
  }
}



















  





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
