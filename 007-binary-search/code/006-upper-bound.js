// Upper Bound = first index where element > target

// Example
// arr = [1, 3, 3, 5, 7]
// Case 1:
// target = 3

// First element > 3 is 5

// Answer = index 3

// Case 2:
// target = 4

// First element > 4 is 5

// Answer = 3

// Case 3:
// target = 7

// No element > 7
// Answer = 5 (end of array)

// | Concept     | Condition   |
// | ----------- | ----------- |
// | Lower Bound | `>= target` |
// | Upper Bound | `> target`  |

// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
function upperBound(arr, target){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > target) return i;
  }
  return arr.length;
}


// Optimal Approach
// Time Complexity: O(log n)
// Space Complexity: O(1)
function upperBound(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length; 

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] > target){
      ans = mid;          // possible answer
      right = mid - 1;    // go left for earlier index;
    }else{
      left = mid + 1;
    }
  }
}



















