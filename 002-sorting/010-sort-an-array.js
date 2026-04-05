// LeetCode: 912. Sort an Array


// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

function sortArray(nums){

  mergeSort(nums, 0, nums.length - 1);

  return nums;
}

function mergeSort(nums, start, end){
  if(start === end) return;
  let mid = Math.floor((start + end)/2);
  mergeSort(nums, start, mid);
  mergeSort(nums, mid+1, end);
  merge(nums, start, mid, end);
}

function merge(nums, start, mid, end){
  let result = [];
  let left = start;
  let right = mid + 1;
  while(nums[left] <= mid && right <= end){
    if(nums[left] <= nums[right]){
      result.push(nums[left]);
      left++;
    }else if(nums[right] < nums[left]){
      result.push(nums[right]);
      right++;
    }
  }

  while(left <= mid){
    result.push(nums[left]);
    left++;
  }

  while(right <= end){
    result.push(nums[right]);
    right++;
  }

  for(let i = 0; i<result.length; i++){
    nums[low + i] = result[i];
  }
    
}
