// Given a rotated sorted array:

// arr = [4,5,6,7,0,1,2]

// Find minimum element

// Output:

// 0

// Given a rotated sorted array:

// arr = [4,5,6,7,0,1,2]

// Find minimum element

// Output:

// 0

// The minimum element = pivot point

// The point where:

// arr[i] < arr[i-1]


// Brute Force
// Time Complexity: O(n)
function findMin(arr){
  let min = Infinity;
  for(let num of nums){
    min = Math.min(min, num);
  }
  return min;
}

// Optimal Approach
// Time Complexity: O(log n)
// Space Complexity: O(1)
function findMin(arr){
  let left = 0;
  let right = arr.length - 1;
  let ans = Infinity;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[left] <= arr[right]){
      ans = Math.min(arr[left], ans);
      break;
    }

    // Left half sorted
    if(arr[left] <= arr[mid]){
      ans = Math.min(arr[left], ans);
      left = mid + 1;
    }
    // Right half sorted
    else{
      ans = Math.min(ans, arr[mid]);
      right = mid - 1;
    }
  }
  return ans;
}
