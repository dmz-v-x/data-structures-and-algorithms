// Check if string is palindrome

// s = MADAM is a plaindrome

// PROBLEM

// Check whether a string is palindrome.

// WHAT IS PALINDROME?

// A string that reads same:

// left → right
// right → left

// EXAMPLES
// Palindrome:

// "madam"
// "racecar"
// "abba"

// Not palindrome:

// "hello"
// "abc"

// HOW DO WE CHECK NORMALLY?

// Think iterative first.

// KEY IDEA

// Compare:

// first character
// last character
// Example
// "madam"

//  m  a  d  a  m
//  ↑           ↑

// Compare:

// m === m

// Good.

// Move inward:

//  m  a  d  a  m
//     ↑     ↑

// Compare:

// a === a

// Good.

// Move inward:

//  m  a  d  a  m
//        ↑

// Done.


// RECURSIVE THINKING

// MOST important part.

// Current function should:

// Check current left/right characters

// Then recursion handles:

// remaining inner substring

// THIS IS EXACTLY LIKE REVERSE ARRAY

// Earlier:

// swap outer elements
// recurse inside

// Now:

// compare outer elements
// recurse inside

// WHAT SHOULD FUNCTION REPRESENT?

// We define:

// isPalindrome(str, left, right)

// Meaning:

// Check whether substring from left → right is palindrome

// WHAT IS BASE CASE?

// When should recursion stop?

// Suppose:

// left >= right

// Meaning:

// We checked all characters

// So:

// String IS palindrome

// BASE CASE
// if(left >= right) return true;


// CURRENT WORK

// Compare outer characters.

// Suppose:

// str[left] !== str[right]

// Then:

// NOT palindrome

// Immediately return false.

// CONDITION
// if(str[left] !== str[right]){
//     return false;
// }







// Check for palindrome using two pointers
function checkPalindrome(s, left, right){
  if(left >= right) return true;

  if(s[left] !== s[right]) return false;

  return checkPalindrome(s, left + 1, right - 1);
  
}

let str = "madam"

checkPalindrome(str, 0, str.length-1);

// Check for palindrome using one pointer

// Time Complexity: O(n/2)
// Space Complexity: O(n/2)

function checkPalindrome(s, i){
  let n = s.length;

  if(i >= Math.floor(n/2)) return true;

  if(s[i] !== s[n - i - 1]) return false;

  return checkPalindrome(s, i + 1);
}

console.log(checkPalindrome("MADAM", 0));
