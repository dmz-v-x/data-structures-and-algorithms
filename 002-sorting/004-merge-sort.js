// Iterative Merge Sort
// Time Complexity: O(n log n) [for all: best, average, worst cases]
// Space Complexity: O(n)

function merge(arr, left, mid, right) {
  let temp = [];

  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= right) {
    temp.push(arr[j]);
    j++;
  }

  for (let k = left; k <= right; k++) {
    arr[k] = temp[k - left];
  }
}

function iterativeMergeSort(arr) {
  let n = arr.length;

  for (let size = 1; size < n; size *= 2) {

    for (let left = 0; left < n - 1; left += 2 * size) {

      let mid = Math.min(left + size - 1, n - 1);

      let right = Math.min(left + 2 * size - 1, n - 1);

      merge(arr, left, mid, right);
    }
  }

  return arr;
}

// Clean Approach

function mergeSort(arr) {
  let n = arr.length, temp = Array(n);

  for (let size = 1; size < n; size *= 2)
    for (let left = 0; left < n; left += 2 * size) {
      let mid = Math.min(left + size, n);
      let right = Math.min(left + 2 * size, n);
      let i = left, j = mid, k = left;

      while (i < mid && j < right) temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
      while (i < mid) temp[k++] = arr[i++];
      while (j < right) temp[k++] = arr[j++];

      for (let p = left; p < right; p++) arr[p] = temp[p];
    }

  return arr;
}
