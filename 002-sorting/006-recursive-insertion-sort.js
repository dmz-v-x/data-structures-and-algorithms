// Insertion Sort:

// Core idea:

// “Take one element and insert it into the correct position in the sorted part.”

function insertionSortRecursive(arr, n = arr.length) {
    // Base case: single element is already sorted
    if (n <= 1) return arr;

    // Recursively sort first n-1 elements
    insertionSortRecursive(arr, n - 1);

    // Insert last element into sorted part
    let key = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;

    return arr;
}
