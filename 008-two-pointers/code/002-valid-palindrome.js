// Valid Palindrome
// Problem

// Given a string s, determine if it is a palindrome.

// Rules:

// Ignore non-alphanumeric characters.

// Ignore case differences.

// Return true if it is a palindrome, otherwise false.

// Example
// Input:
// s = "A man, a plan, a canal: Panama"

// Output:
// true

// Explanation

// After removing non-alphanumeric characters and ignoring case:

// amanaplanacanalpanama

// Forward and reverse are the same → palindrome.

// Example 2
// Input:
// s = "race a car"

// Output:
// false

// Processed string:

// raceacar

// Reverse:

// racaecar

// Not equal → not a palindrome.

// Naive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isPalindrome(s){
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
  let reversed = cleaned.split('').reverse().join('')

  return cleaned === reversed
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isPalindrome(s){
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleaned.length - 1;

  while(left < right){
    if(cleaned[left] !== cleaned[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}


function isPalindrome(s){
  let start = 0;
  let end = s.length - 1;

  function isAlphaNum(char){
    return /[a-z0-9]/i.test(char)
  }

  while(start < end){
    while(start < end && !isAlphaNum(s[start])) start++;
    while(start < end && !isAlphaNum(s[end])) end --;

    if(s[start].toLowerCase() !== s[end].toLowerCase()){
      return false;
    }

    start++;
    end--;
  }
  return true;
}
