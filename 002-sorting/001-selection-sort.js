// Selection Sort

// Approach:

// -> We iterate through the array and we assume that the first element is the smallest, why because after each iteration the smallest element will be palced in their correct positons, so we assume the smallest element is at the index of the iteration.

// -> Then we run a loop from i+1 and we find the actual smallest index we update the smallest index to the actual smallest index

// -> Now we have just swap the smallest element as we have the index with the respective array iteration index.

// -> After each iteration we get the smallest element at it's right positon.



let arr = [11, 25, 12, 22, 11];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        
        if (arr[i] > arr[smallest]) {
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }

        console.log(arr);
        
    }
    return arr;
}

console.log(selectionSort(arr));

