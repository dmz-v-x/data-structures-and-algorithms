// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]


// Brute Force Approach: Do Normal Sorting
// Time Complexity: O(nlogn)
function sortColors(nums){
  nums.sort((a, b) => a - b);
}

// In Brute force solution we are not using the fact that only 0, 1 and 2 exists


// Better Approach: Count number of 0's, 1's, and 2's (Two Pass Solution)
// Time Complexity: O(n)
// Space Complexity: O(1)
function sortColors(nums){
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for(let i = 0; i<nums.length; i++){
    if(nums[i] === 0){
      countZero++;
    }else if(nums[i] === 1){
      countOne++;
    }else{
      countTwo++;
    }
  }

  let index = 0;
  let i = 0;
  let j = 0;
  let k = 0;

  while(i < countZero || j < countOne || k < countTwo){
    if(i < countZero){
      nums[index] = 0;
      i++;
    }else if(j < countOne){
      nums[index] = 1;
      j++;
    }else{
      nums[index] = 2;
      k++;
    }
  }
}


// Optimal Solution

// We divide array into 3 regions:

// We maintain 3 pointers:

// low → where 0 should go  
// mid → current element  
// high → where 2 should go

// Initial:
// low = 0
// mid = 0
// high = n-1

// Approach:

// Case 1: nums[mid] == 0

// 👉 Put it in 0 region

// swap(nums[low], nums[mid])
// low++
// mid++

// Case 2: nums[mid] == 1

// Already in correct region

// mid++

// Case 3: nums[mid] == 2

// Put it in 2 region

// swap(nums[mid], nums[high])
// high--

// IMPORTANT:

// DO NOT increment mid here

// Because swapped value needs checking.
// Time Complexity: O(n) Single Pass
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



