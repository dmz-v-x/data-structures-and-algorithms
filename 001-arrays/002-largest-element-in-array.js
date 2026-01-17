// Brute Force:

// 1. Sort the array O(NlogN) operation
// 2. Select the last element of the array.
// 3. Time complexity: O(NlogN)
// 4. Space Complexity: O(1);

// Optimal Solution:

let arr = [8, 10, 5, 7, 9];

function largestElement(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }

    }  
    return largest;
}

console.log(largestElement(arr));

// Time Complexity: O(N)
// Space Complexity: O(1)
