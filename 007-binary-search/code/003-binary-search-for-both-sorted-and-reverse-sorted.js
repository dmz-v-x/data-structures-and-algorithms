// Binary Search when sorting order is not known


// Time Complexity: O(log n)
function binarySearchAnyOrder(arr, target){
  let left = 0;
  let right = arr.length - 1;

  let isAscending = arr[right] > arr[left];

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] === target){
      return mid;
    }

    if(isAscending){
      if(arr[mid] > target){
        right = mid - 1
      }else {
        left = mid + 1;
      }
    }else {
      if(arr[mid] > target){
        left = mid + 1;
      }else {
        right = mid - 1;
      }
    }
      
  }
  return -1;
}
