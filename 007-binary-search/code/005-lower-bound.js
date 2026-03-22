// Lower Bound = first index where element ≥ target

// Example
// arr = [1, 3, 3, 5, 7]
// target = 3

// Lower Bound = index 1 (first 3)

// target = 4

// Lower Bound = index 3 (first ≥ 4 → 5)

// target = 8

// Lower Bound = 5 (out of array → insert at end)

// Brute Force
// Time Complexity: O(n)
function lowerBound(arr, target){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] >= target) return arr[i]
  }
  return arr.length;
}


// Optimal Approach
// Time Complexity: O(log n)
function lowerBound(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid]>=target){
      ans = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans;
}
