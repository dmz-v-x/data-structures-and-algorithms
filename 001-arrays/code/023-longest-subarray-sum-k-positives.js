// Array contains only POSITIVE numbers

// Example

// arr = [1,2,1,0,1,1,0]
// k = 4  

// Optimal Approach: Using Sliding Window 

function longestSubarray(arr, k){
  let left = 0;
  let right = 0;
  let sum = 0;
  let maxLen = 0;

  while(right < arr.length){
    sum += arr[right];

    while(sum > k){
      sum -= arr[left];
      left++;
    }

    if(sum === k){
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
  }
  return maxLen;
}
