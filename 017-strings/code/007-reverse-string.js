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

