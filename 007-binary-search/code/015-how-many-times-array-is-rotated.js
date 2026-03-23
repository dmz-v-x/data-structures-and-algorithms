// How many times array is rotated

// Number of rotation = index of minimum element 
// (Rotation is from right to left shifting elements from end of array)

// Example
// arr = [4,5,6,7,0,1,2]

// Minimum = 0
// Index = 4

// Rotations = 4

// Core Idea: rotation count = index of minimum



// Brute Force: Find minimum and track it's index
// Time Complexity: O(n)
function countRotation(arr){
  let min = Infinity
  let index = -1;

  for(let i = 0; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
      index = i;
    }
  }
  return index;
}



// Optimal Approach: Binary Search
// Time Complexity: O(log n)

// Same as find minimum, but instead of returning value we return index

function countRotation(arr){
  let left = 0;
  let right = arr.length; 
  let index = -1;
  let ans = Infinity;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[left] <= arr[right]){
      if(arr[left] < ans){
        ans = arr[left];
        index = left;
      }
      break;
    }

    // Left half sorted
    if(arr[mid] >= arr[left]){
      if(arr[left] < ans){
        ans = arr[left];
        index = left;
      }
      left = mid + 1;
    }

    // Right half sorted
    else{
      if(arr[mid] < ans){
        ans = arr[mid];
        index = mid
      }
      right = mid - 1;
    }
  }
  return index;
}










