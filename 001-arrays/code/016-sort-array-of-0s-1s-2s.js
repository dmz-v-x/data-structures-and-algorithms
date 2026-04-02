// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


// Brute Force
// Time Complexity: O(n log n)

function sortColors(nums){
  nums.sort((a, b) => a - b);
}

// Better Appraoch: Two Passes
// Time Complexity: O(n)
// Space Complexity: O(1)
function sortColors(nums){
  let count0 = 0; 
  let count1 = 0;
  let count2 = 0;

  for(let num of nums){
    if(num === 0) count0++;
    else if(num === 1) count1++;
    else count2++;

    let i = 0;
    while(count0--) nums[i++] = 0;
    while(count1--) nums[i++] = 1;
    while(count2--) nums[i++] = 2;
  }
}


// Optimal Approach: Divide array in 3 regions (0s, 1s, and 2s)
// Time Complexity: O(n)
// Space Complexity: O(1)
function sortColors(nums){
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while(mid <= high){
    if(nums[mid] === 0){
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    }else if(nums[mid] === 1){
      mid++;
    }else{
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Important:

// Why don’t we move mid when we see 2?

// Because:

// After swapping with high
// The new value at mid is unknown

// So we must re-check it
