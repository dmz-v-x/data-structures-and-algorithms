// First occurrence = first index where element == target

// Example
// arr = [1, 2, 2, 2, 3, 4]
// target = 2

// Output = 1 (NOT 2 or 3)

// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)
function firstOccurrence(arr, target){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === target) return i;
  }
  return -1;
}


// Optimal Approach Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)
function firstOccurrence(arr, target){
  let left = 0
  let right = arr.length - 1;
  let ans = -1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] >= target){
      if(arr[mid] === target){
        ans = mid;
      }
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans;
}


// Optimal Approach: We can simply use lower bound as well. O(log n) & O(1)







