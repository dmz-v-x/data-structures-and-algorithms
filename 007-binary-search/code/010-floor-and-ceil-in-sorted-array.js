// Floor and Ceil in Sorted Array

// Floor: Greatest element ≤ target

// Ceil: Smallest element ≥ target

// Example
// arr = [1, 3, 5, 7]
// target = 4

// Floor = 3
// Ceil = 5

// Brute Force
// Time Complexity: O(n)
// Space Complexity: O(1)

function floorCeil(arr, x){
  let floor = -1
  let ceil = -1
  for(let i = 0; i<arr.length; i++){
    if(arr[i]<=x){
      floor = arr[i]
    }

    if(arr[i]>=x && ceil === -1){
      ceil = arr[i];
    }
  }
  return [floor, ceil];
}

// Optimal Solution: 

// UpperBound - 1 for floor
// LowerBound for ceil

// Time Complexity: O(log n)
// Space Complexity: O(1)
function lowerBound(arr, x){ // For Ceil
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] >= x){
      ans = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans;
}

function upperBound(arr, x){ // Floor
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] > x){
      ans = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans;
}

function floorCeil(arr, x){
  let lb = lowerBound(arr, x);
  let up = upperBound(arr, x);

  let ceil = lb < arr.length ? arr[lb] : -1;
  let floor = ub > 0 ? arr[ub - 1] : -1;

  return [floor, ceil];
}
