// Given a string s:

// Find the longest substring which is a palindrome

// What is a palindrome?
// Reads same forward and backward

// Examples:

// "aba" 
// "abba"
// "abc" 

// Brute Force: Check all substring

// Time Complexity: O(n^2);
function longestPalindrome(s) {
  let maxStr = "";

  function isPalindrome(str) {
    let l = 0, r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = "";

      for (let k = i; k <= j; k++) {
        substr += s[k];
      }

      if (isPalindrome(substr) && substr.length > maxStr.length) {
        maxStr = substr;
      }
    }
  }

  return maxStr;
}



// Optimal Solution: 

// We want:

// Find the longest substring that is a palindrome

// Instead of checking all substrings…

// Think:

// A palindrome expands from its CENTER


// Example

// "aba"

// Center = b

// Expand:

// b → aba

// "abba"

// Center = between b and b

// Expand:

// bb → abba

// Types of Centers

// Every palindrome comes from 2 types of centers

// 1. Odd length
// "a b a"
//    ↑
//  center

// Call:

// expand(i, i)

// 2. Even length
// "a b b a"
//    ↑ ↑
//  center

// Call:

// expand(i, i+1)


// Why r - l - 1?

// Because:

// Loop stops when invalid

// So actual palindrome is:

// (l+1) → (r-1)

// Length:

// (r - 1) - (l + 1) + 1 = r - l - 1


function longestPalindrome(s){
  let start = 0; 
  let end = 0;

  function expand(l, r){
    while(l >= 0 && r < s.length && s[l] === s[r]){
      l--;
      r++;
    }
    return r - l - 1;
  }

  for(let i = 0; i<s.length; i++){
    let len1 = expand(i, i);
    let len2 = expand(i, i+1);

    let maxLen = Math.max(len1, len2);

    if(maxLen > end - start){
      start = i - Math.floor((maxLen - 1)/2);
      end = i + Math.floor((maxLen / 2));
    }
  }

  let ans = "";
  for(let i = start; i<= end; i++){
    ans += s[i];
  }

  return ans;
}








