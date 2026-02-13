// Naive Approach:

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                return false;
            }
        }
    }
    return true;
}


// Optimal Approach:

// Time Complexity: O(n)
// Space Complexity: O(1)

function isSorted(arr){
  for(let i = 1; i<arr.length; i++){
    if(arr[i-1] > arr[i]){
      return false;
    }
  }
  return true;
}





