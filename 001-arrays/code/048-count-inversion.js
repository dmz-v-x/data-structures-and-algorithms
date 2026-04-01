// Count Inversion

// Given an array of integers arr[]. You have to find the Inversion Count of the array. 
// Note : Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).

// Input: arr[] = [2, 3, 4, 5, 6]
// Output: 0
// Explanation: As the sequence is already sorted so there is no inversion count.
  
// Input: arr[] = [10, 10, 10]
// Output: 0
// Explanation: As all the elements of array are same, so there is no inversion count.

// Brute Force: Check every pair
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
function countInversion(arr){
  let count = 0;
  for(let i = 0; i<arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] > arr[j]){
        count++;
      }
    }
  }
  return count;
}


// Optimal Solution
// Time Complexity: O(n log n)
// Space Complexity: O(n)

function countInversions(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, low, high) {
  if (low >= high) return 0;

  let mid = Math.floor((low + high) / 2);

  let count = 0;

  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += merge(arr, low, mid, high);

  return count;
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);

      // 🔥 KEY LINE
      count += (mid - left + 1);

      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // copy back
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return count;
}
