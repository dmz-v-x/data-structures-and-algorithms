// Algorithm:

// -> You start a loop from 1 to n becuase the inner loop will go from i-1 to 0. For each element in arr[i] we check if it is smaller that element in i-1 to 0 if yes we shift the greater element to that index. And once shifting is done we insert the element at the appropriate index.


let arr = [11, 25, 23, 22, 11, 12];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while (i >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(arr));

// Time Complexity: O(N^2)
// Space Complexity: O(1)
