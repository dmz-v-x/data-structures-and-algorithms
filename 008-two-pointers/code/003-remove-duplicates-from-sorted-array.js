// Remove Duplicates from Sorted Array
// Problem

// You are given a sorted array nums.

// Your task:

// Remove duplicates in-place

// Each unique element should appear only once

// Return the number of unique elements (k)

// Important constraint:

// You must modify the original array

// You cannot use extra space

// Example
// Input:
// nums = [1,1,2]

// Output:
// 2

// Modified array:
// [1,2,_]

// Explanation

// Unique elements = 1, 2

// So k = 2.

// Example 2

// Input:
// nums = [0,0,1,1,1,2,2,3,3,4]

// Output:
// 5

// Modified array:
// [0,1,2,3,4,_,_,_,_,_]

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function removeDuplicates(nums){
  let unique = [];
  for(let num of nums){
    if(!unique.includes(nums)){
      unique.push(num);
    }
  }

  for(let i = 0; i<unique.length; i++){
    nums[i] = unique[i];
  }

  return unique.length;
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function removeDuplicates(nums){
  let unique = [...new Set(nums)]

  for(let i = 0; i<unique.length; i++){
    nums[i] = unique[i];
  }

  return unique.length;
}

// Optimal Appraoch
// Time Complexity: O(n)
// Space Complexity: O(1)
function removeDuplicates(nums){
  let i = 0;
  for(let j = 1; j<nums.length; j++){
    if(nums[i] !== nums[j]){
      i++
      nums[i] = nums[j];
    }
  }
  return i+1;
}
