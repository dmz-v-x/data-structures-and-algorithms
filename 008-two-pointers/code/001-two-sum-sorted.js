// Problem Statement

// You are given:

// A sorted array of integers

// A target sum

// Return the indices of two numbers whose sum equals the target.

// Important constraint:

// The array is sorted in non-decreasing order

// Example:

// Input:
// numbers = [2,7,11,15]
// target = 9

// Output:
// [1,2]

// Explanation:
// numbers[1] + numbers[2] = 2 + 7 = 9


// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function twoSum(numbers, target){
  for(let i = 0; i<numbers.length; i++){
    for(let j = i+1; j<number.length; j++){
      if(numbers[i] + numbers[j] === target){
        return [i+1, j+1];
      }
    }
  }
}

// Better Approach: Using Hash Map

// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(numbers, target){
  let map = new Map();
  for(let i = 0; i<numbers.length; i++){
    if(map.has(target - numbers[i])){
      return [(map.get(target - numbers[i]) + 1, i+1)];
    }
    map.set(numbers[i], i);
  }
}

// Optimal Approach: Two Pointer (Only works for sorted array)

// Time Complexity: O(n)
// Space Complexity: O(1)
function twoSum(numbers, target){
  let left = 0;
  let right = numbers.length - 1;

  while(left < right){
    let sum = numbers[left] + numbers[right];

    if(sum === target){
      return [left+1, right+1];
    }

    if(sum < target){
      left++;
    }else{
      right--;
    }
  }
}






















