// Heap Sort
// Time Complexity: O(n log n)
// Space Complexity: O(1)
function heapSort(arr) {
  let n = arr.length;

  const heapify = (i, size) => {
    while (true) {
      let largest = i, l = 2*i + 1, r = 2*i + 2;
      if (l < size && arr[l] > arr[largest]) largest = l;
      if (r < size && arr[r] > arr[largest]) largest = r;
      if (largest === i) break;
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      i = largest;
    }
  };

  for (let i = Math.floor(n/2) - 1; i >= 0; i--) heapify(i, n);
  for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(0, end);
  }

  return arr;
}
