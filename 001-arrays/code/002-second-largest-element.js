// Naive Approach

// Time complexity: O(nlogn)
// Space Complexity: O(1)

getSecondLargest(arr){
  arr.sort((a, b) => a - b);
  let largest = arr[arr.length - 1];
  for(let i = arr.length - 2; i>=0; i--){
    if(arr[i] !== largest){
      return arr[i];
    }
  }
  return -1;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

getSecondLargest(arr){
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > largest){
      secondLargest = largest;
      largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] !== largest){
      secondLargest = arr[i];
    }
  }

  return (secondLargest === -Infinity) ? -1 : secondLargest
}

