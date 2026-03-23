// Given a sorted binary array:

// arr = [0,0,0,1,1,1]

// Find index of first 1

// Example:

// arr = [0,0,0,1,1]

// Output = 3

// arr = [0,0,0,0]

// Output = -1

// arr = [1,1,1]

// Output = 0

// First True -> Lower Bound




// Brute Force
// Time Complexity: O(n)
function firstOne(arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] === 1) return i;
  }
  return -1;
}



// Optimal Solution
// Time Complexity: O(log n)
function firstOne(arr){
  let left = 0;
  let right = arr.length - 1;
  let ans = -1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] === 1){
      ans = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans;
}
