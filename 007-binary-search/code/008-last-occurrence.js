// Last occurrence = last index where element == target

// Example
// arr = [1, 2, 2, 2, 3, 4]
// target = 2

// Output = 3 (NOT 1 or 2)

// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
function lastOccurrence(arr, target){
  for(let i = arr.length - 1; i>=0; i--){
    if(arr[i] === target) return i;
  }
  return -1;
}

// Optimal Approach: Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)
function lastOccurrence(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] <= target){
      if(arr[mid] === target){
        ans = mid;   // possible answer
      }
      left = mid + 1; // go right for later index
    }else{
      right = mid - 1;
    }
  }
  return ans;
}
