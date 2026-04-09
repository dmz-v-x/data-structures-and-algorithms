// Given an array nums and a number k

// Count how many subarrays have product < k

// Example:
// nums = [10, 5, 2, 6]
// k = 100

// Valid subarrays:

// [10] = 10
// [5] = 5
// [2] = 2
// [6] = 6
// [10,5] = 50
// [5,2] = 10
// [2,6] = 12
// [5,2,6] = 60

// Answer = 8



// Brute Force: Generate all subarrays and check
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function numSubarrayProductLessThanK(nums, k){
  let count = 0;
  for(let i = 0; i<nums.length; i++){
    let product = 1;
    for(let j = i; j<nums.length; j++){
      product *= nums[j];

      if(product < k){
        count++;
      }else{
        break;
      }
    }
  }
  return count;
}


// Optimal Approach: Using Sliding Window

function numSubarrayProductLessThanK(nums, k){
  if(k <= 1) return 0;
  let product = 1;
  let left = 0;
  let count = 0;

  for(let right = 0; right < nums.length; right++){
    product *= nums[right];

    while(product >= k){
      product = product / nums[left];
      left++;
    }

    count += right - left + 1
    
  }
  return count;
}



