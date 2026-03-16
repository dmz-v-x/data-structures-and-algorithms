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
