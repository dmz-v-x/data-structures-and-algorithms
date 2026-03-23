// Find element in rotated sorted array (Duplicates Allowed)

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false


// Brute Force
// Time Complexity: O(n)
function search(arr, target){
  for(let num of nums){
    if(num === target){
      return true;
    }
  }
  return false;
}

// Optimal Approach
// Time Complexity: O(log n)
function search(arr, target){
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid] === target) return true;

    if(arr[left] === arr[mid] && arr[mid] === arr[right]){
      left++;
      right--;
    }

    else if(arr[mid] >= arr[left]){
      if(arr[left] >= target && target < arr[mid]){
        right = mid - 1;
      }else {
        left = mid + 1;
      }
    }else {
      if(arr[right] >= target && target > arr[mid]){
        left = mid + 1;
      }else{
        right = mid - 1;
      }
    }    
  }
  return false;
}
