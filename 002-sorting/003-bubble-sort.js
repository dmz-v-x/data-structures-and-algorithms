// Bubble Sort Algorithm:

// We check if the previous element is largest that the current element if it is then we swap those two elements, after each iteration the largest element goes to the last.

// Brute Force Apprach:

let arr = [11, 25, 23, 22, 11, 12];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length; j++){
            if (arr[j-1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr));

// Better Approach:


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// Optimal Appraoch:

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;

        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }
    return arr;
}


// Complexity

// Time: O(n²) (average & worst)

// Best case: O(n) (already sorted)

// Space: O(1)
