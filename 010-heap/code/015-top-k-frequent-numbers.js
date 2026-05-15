// Given an array:

// nums = [1,1,1,2,2,3]
// k = 2

// Return:

// [1,2]

// Why?

// Because:

// 1 appears 3 times
// 2 appears 2 times
// 3 appears 1 time

// Top 2 most frequent:

// 1 and 2

// FIRST UNDERSTAND THE REAL PROBLEM

// This problem is NOT about sorting numbers.

// This problem is actually:

// COUNTING frequencies
// +
// finding biggest frequencies

// So internally we need two things:

// | Thing                          | Purpose           |
// | ------------------------------ | ----------------- |
// | Frequency Map                  | count occurrences |
// | Way to get highest frequencies | answer            |

// VISUALIZE THE PROBLEM

// Array:

// [1,1,1,2,2,3]

// Think like grouping balls.

// 1 -> ● ● ●
// 2 -> ● ●
// 3 -> ●

// Now question becomes:

// Which groups are largest?

// Answer:

// 1 and 2

// IMPORTANT OBSERVATION

// The actual values:

// 1,2,3

// do NOT matter much.

// What matters is:

// frequency count

// So first step in almost every solution:

// Build frequency map

// BUILD FREQUENCY MAP STEP BY STEP

// Array:

// [1,1,1,2,2,3]

// We create:

// {
//    1: 3,
//    2: 2,
//    3: 1
// }

// HOW TO BUILD FREQUENCY MAP
// Intuition

// Traverse array.

// For every number:

// increase its count

// DRY RUN FREQUENCY MAP

// Start:

// map = {}
// Read first 1
// map[1] = 1

// Now:

// {
//  1:1
// }
// Read second 1
// map[1]++

// Now:

// {
//  1:2
// }
// Read third 1
// {
//  1:3
// }
// Read 2
// {
//  1:3,
//  2:1
// }
// Read second 2
// {
//  1:3,
//  2:2
// }
// Read 3
// {
//  1:3,
//  2:2,
//  3:1
// }

// Done.

// FREQUENCY MAP CODE
// const freqMap = new Map();

// for (const num of nums) {
//     freqMap.set(num, (freqMap.get(num) || 0) + 1);
// }

// NOW WE LEARN 3 APPROACHES

// | Approach              | Complexity |
// | --------------------- | ---------- |
// | Brute Force           | O(n log n) |
// | Better (Heap)         | O(n log k) |
// | Optimal (Bucket Sort) | O(n)       |

// BRUTE FORCE APPROACH
// IDEA
// Count frequencies
// ↓
// Convert to array
// ↓
// Sort by frequency descending
// ↓
// Take first k elements

// Very intuitive.

// CONVERT MAP TO ARRAY

// Why?

// Because sorting is easier on arrays.

// Convert into:

// [
//  [1,3],
//  [2,2],
//  [3,1]
// ]

// Meaning:

// [number, frequency]


// SORT DESCENDING

// Sort by frequency:

// [
//  [1,3],
//  [2,2],
//  [3,1]
// ]

// Already sorted here.

// TAKE FIRST K

// k = 2

// Take:

// [
//  [1,3],
//  [2,2]
// ]

// Extract numbers:

// [1,2]

// Done.

// BRUTE FORCE VISUALIZATION
// nums
//  ↓

// frequency map
//  ↓

// array of pairs
//  ↓

// sort by frequency
//  ↓

// take first k

// BRUTE FORCE DRY RUN

// Input:

// nums = [1,1,1,2,2,3]
// k = 2
// Frequency Map
// {
//  1:3,
//  2:2,
//  3:1
// }
// Array Form
// [
//  [1,3],
//  [2,2],
//  [3,1]
// ]
// Sort Descending
// [
//  [1,3],
//  [2,2],
//  [3,1]
// ]
// Take first 2
// [1,2]

// Brute Force:

// TIME COMPLEXITY
// | Part      | Complexity |
// | --------- | ---------- |
// | Build map | O(n)       |
// | Sort      | O(m log m) |

// Where:

// m = unique elements

// Worst case:

// O(n log n)


function topKFrequent(nums, k){
  // Step 1: Bulid frequency map

  const freq = new Map();

  for(const num of nums){
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Convert map to array
  const arr = Array.from(freqMap.entries());

  // Step 3: Sort descending by frequency
  arr.sor((a, b) => a - b);

  // Step 4: Take first k elements
  const result = [];

  for(let i = 0; i<k; i++){
    result.push(arr[i][0]);
  }

  return result;
}



// Min Heap Implementation

// Do we really need:

// FULL sorting?

// NO.

// We only need:

// TOP K elements

// Not all elements sorted.


// CORE IDEA

// Maintain only k largest frequencies.

// Use:

// MIN HEAP of size k
// WHY MIN HEAP?

// Because smallest among top-k should be removable quickly.

// Heap root stores:

// smallest frequency among current top-k
// VISUALIZATION

// Suppose:

// [
//  [1,3],
//  [2,2],
//  [3,1],
//  [4,5]
// ]

// k = 2

// PROCESS
// Insert [1,3]

// Heap:

// [3]
// Insert [2,2]

// Heap:

// [2,3]

// (min heap)

// Insert [3,1]

// Heap becomes:

// [1,3,2]

// Size > k.

// Remove smallest:

// 1 removed

// Heap:

// [2,3]
// Insert [4,5]

// Heap:

// [2,3,5]

// Remove smallest:

// 2 removed

// Final heap:

// [3,5]

// Corresponding numbers:

// 1 and 4

// Done.

// WHY THIS WORKS

// Heap ALWAYS keeps:

// largest k frequencies

// Small frequencies automatically get kicked out.

// IMPORTANT HEAP STORAGE

// We store:

// [number, frequency]

// Example:

// [1,3]
// BETTER APPROACH DRY RUN

// Input:

// nums = [1,1,1,2,2,3]
// k = 2

// Frequency map:

// {
//  1:3,
//  2:2,
//  3:1
// }
// Insert [1,3]

// Heap:

// [3]
// Insert [2,2]

// Heap:

// [2,3]
// Insert [3,1]

// Heap:

// [1,3,2]

// Size > 2

// Remove min:

// 1 removed

// Heap:

// [2,3]

// Done.

// Answer:

// 2 and 1




var topKFrequent = function(nums, k) {

    class MinHeap {

        constructor() {
            this.heap = [];
        }

        // =========================
        // HELPER METHODS
        // =========================

        getParentIndex(i) {
            return Math.floor((i - 1) / 2);
        }

        getLeftChildIndex(i) {
            return 2 * i + 1;
        }

        getRightChildIndex(i) {
            return 2 * i + 2;
        }

        swap(i, j) {
            [this.heap[i], this.heap[j]] =
            [this.heap[j], this.heap[i]];
        }

        size() {
            return this.heap.length;
        }

        // =========================
        // INSERT
        // =========================

        insert(value) {

            this.heap.push(value);

            this.heapifyUp(this.size() - 1);
        }

        heapifyUp(index) {

            while (index > 0) {

                const parentIndex =
                    this.getParentIndex(index);

                // Compare frequencies
                if (
                    this.heap[parentIndex][1] <=
                    this.heap[index][1]
                ) {
                    break;
                }

                this.swap(index, parentIndex);

                index = parentIndex;
            }
        }

        // =========================
        // REMOVE MIN
        // =========================

        extractMin() {

            if (this.size() === 0) {
                return null;
            }

            if (this.size() === 1) {
                return this.heap.pop();
            }

            const min = this.heap[0];

            this.heap[0] = this.heap.pop();

            this.heapifyDown(0);

            return min;
        }

        heapifyDown(index) {

            while (true) {

                let smallest = index;

                const left =
                    this.getLeftChildIndex(index);

                const right =
                    this.getRightChildIndex(index);

                if (
                    left < this.size() &&
                    this.heap[left][1] <
                    this.heap[smallest][1]
                ) {
                    smallest = left;
                }

                if (
                    right < this.size() &&
                    this.heap[right][1] <
                    this.heap[smallest][1]
                ) {
                    smallest = right;
                }

                if (smallest === index) {
                    break;
                }

                this.swap(index, smallest);

                index = smallest;
            }
        }
    }

    // =========================
    // STEP 1: Frequency Map
    // =========================

    const freqMap = new Map();

    for (const num of nums) {

        freqMap.set(
            num,
            (freqMap.get(num) || 0) + 1
        );
    }

    // =========================
    // STEP 2: Min Heap
    // =========================

    const minHeap = new MinHeap();

    // =========================
    // STEP 3: Process Frequencies
    // =========================

    for (const [num, freq] of freqMap.entries()) {

        minHeap.insert([num, freq]);

        // Keep heap size k
        if (minHeap.size() > k) {
            minHeap.extractMin();
        }
    }

    // =========================
    // STEP 4: Build Answer
    // =========================

    const result = [];

    while (minHeap.size() > 0) {

        const [num, freq] =
            minHeap.extractMin();

        result.push(num);
    }

    return result;
};









