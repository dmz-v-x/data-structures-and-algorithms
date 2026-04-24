// You are given:

// Sorted array of positive integers arr[]
// An integer k

// Find the k-th missing positive number

// Example
// arr = [2,3,4,7,11]
// k = 5

// Missing numbers:

// Numbers: 1, 2, 3, 4, 5, 6, 7,  8, 9, 10, 11

// Missing Number: 1, 5, 6, 8, 9, 10, 12...

// 5th Missing Number = 9;

// At any index i, we can calculate:

// How many numbers are missing till that point

// Formula:

// missing = arr[i] - (i + 1)

// Why this works

// Expected numbers if nothing missing:

// index:   0 1 2 3 4
// should:  1 2 3 4 5
// actual:  2 3 4 7 11

// At index 3:

// arr[3] = 7
// expected = 4
// missing = 7 - 4 = 3

// Missing numbers: 1,5,6

// Brute Force:

Is this number present in the array or missing?”

If missing → count++
When count == k → answer found

Example
arr = [2,3,4,7,11]
k = 5

We check numbers:

| Number | In array? | Missing count |
| ------ | --------- | ------------- |
| 1      | ❌         | 1             |
| 2      | ✅         | 1             |
| 3      | ✅         | 1             |
| 4      | ✅         | 1             |
| 5      | ❌         | 2             |
| 6      | ❌         | 3             |
| 7      | ✅         | 3             |
| 8      | ❌         | 4             |
| 9      | ❌         | 5 ✅          |




function findKthPositive(arr, k){
  let i = 0; // pointer for array
  let num = 1; // current number;
  let missing = 0;

  while(true){
    if(i < arr.length && arr[i] === num){
      // number exists in array
      i++;
    }else{
      missing++;

      if(missing === k){
        return num;
      }
    }

    num++;
    
  }
}

// Complexity

// Worst case:

// O(n + k)

// Why?

// We may scan full array
// And also go up to k missing numbers




// Optimal Approach: Binary Search

function findKthPositive(arr, k){
  let low = 0;
  let high = arr.length - 1;

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    let missing = arr[mid] - (mid + 1);

    if(missing < k){
      low = mid + 1;
    }else {
      high = mid - 1;
    }
  }

  return low + k;
}

// Complexity
// Binary search → O(log n)
  


















