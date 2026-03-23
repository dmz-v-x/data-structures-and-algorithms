Normal sorted array
[1, 2, 3, 4, 5, 6, 7]

Rotated version
[4, 5, 6, 7, 1, 2, 3]

It was sorted… then rotated at some pivot

Given:

arr = [4,5,6,7,0,1,2]
target = 0

Output = 4

// Brute Force
// Time Complexity: O(n)
function search(arr, target){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === target) return i;
  }
  return -1;
}

// Normal Binary Search Fails

// Normal BS assumes: left and right both side is sorted

// But here:

// [4,5,6,7,0,1,2]

// Entire array is NOT sorted 

// Key Observation

// At least ONE HALF is ALWAYS sorted

// Example:
// [4,5,6,7,0,1,2]
//          ↑ mid

// Check:

// Left half → [4,5,6,7] ✅ sorted
// Right half → [0,1,2] ❌ (in this view)

// Optimal Approach
// Time Complexity: O(log n)
// Space Complexity: O(1)
function search(arr, target){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === target) return mid;

    if(arr[left] <= arr[mid]){
      if(target >= arr[left] && target < arr[mid]){
        right = mid - 1;
      }else{
        left = mid + 1;
      }
    }else{
      if(target > arr[mid] && target <= arr[right]){
        left = mid + 1;
      }else{
        right = mid - 1;
      }
    }
  }
  return -1;
}
