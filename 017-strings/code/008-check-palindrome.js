// A palindrome is a string that reads the same forward and backward.

// Examples

// Example 1

// Input: "madam"
// Output: true

// Naive Approach: Reverse the string and check with original

// Time Complexity: O(n)
// Space Complexity: O(n)

function isPalindrome(str){
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isPalindrome(str){
  let reversed = "";
  for(let i = str.length -1; i>=0; i--){
    reversed += str[i];
  }

  return str === reversed;
}

// Optimal Approach: Using two pointer

function isPalindrome(str){
  let i = 0;
  let j = str.length-1;
  while(i < j){
    if(str[i] !== str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}
