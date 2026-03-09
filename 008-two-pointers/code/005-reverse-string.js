// Given a string (or character array), reverse the string.

// Example:

// Input:
// "hello"

// Output:
// "olleh"

// Example 2

// Input:
// "abcd"

// Output:
// "dcba"

// Naive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseString(s){
  return s.split("").reverse().join("");
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function reverseString(s){
  let result = "";

  for(let i = s.length - 1; i>=0; i--){
    result += s[i];
  }
  return result;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function reverseString(s){
  let left = 0;
  let right = s.length - 1;

  while(left < right){
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
