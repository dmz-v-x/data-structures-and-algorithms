// Given a string, determine if it is a palindrome considering only alphanumeric characters and ignoring cases.

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Naive Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isValidPalindrome(s){
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g/, "");
  let reversed = cleaned.split('').reversed().join('');

  return cleaned === reversed;
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isValidPalindrome(s){
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g/, "");
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

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function isValidPalindrome(s){
  let left = 0;
  let right = s.length - 1;
  while(left < right){
    while(left < right && !/[^a-z0-9]/i.test(s[left])){
      left++;
    }

    while(left < right && !/[^a-z0-9]/i.test(s[right])){
      right--;
    }

    if(s[left].toLowerCase() !== s[right].toLowerCase()){
      return false;
    }
    left++;
    right--;
  }
  return true;
}
