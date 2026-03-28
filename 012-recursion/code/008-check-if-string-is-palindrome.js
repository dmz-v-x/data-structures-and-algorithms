// Check if string is palindrome

// s = MADAM is a plaindrome

// Check for palindrome using two pointers
function checkPalindrome(s, i, j){
  if(i >= j) return true;

  if(s[i] !== s[j]) return false;

  return checkPalindrome(s, i+1, j-1);
  
}

checkPalindrome("MADAM", 0, 4);

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
