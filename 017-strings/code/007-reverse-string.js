// Problem:

// Given a string, reverse the string.

// Example:

// Input:  "hello"
// Output: "olleh"

// Example:

// Input:  "banana"
// Output: "ananab"

// Naive Solution: 
// Time Complexity: O(n);
// Space Complexity: O(n)
function reverseString(str){
  return str.split('').sort().join('');
}

// Better Approach:
// Time Complexity: O(n)
// Space Complexity: O(n)
function reverseString(str){
  let result = '';
  for(let i = str.length - 1; i>=0; i--){
    result += str[i];
  }
  return result;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseString(str){
  let arr = str.split('');
  let left = 0;
  let right = arr.length-1;
  
  while(left < right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr.join('');
}

// We cannot reverse a string using constant space we have to use an array becuase JavaScript strings are immutable
