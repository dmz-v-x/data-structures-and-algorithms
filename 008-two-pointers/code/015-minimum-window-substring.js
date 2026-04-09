// Given:
// String s → big string
// String t → target characters

// Goal:
// Find the smallest substring of s that contains all characters of t (including frequency)

// Example:
// s = "ADOBECODEBANC"
// t = "ABC"

// Valid substrings (contain A, B, C):

// "ADOBEC"
// "DOBECODEBA"
// "CODEBANC"
// "BANC" (smallest)

// Answer = "BANC"

// Brute Force: Try all possible substrings
// Time Complexity: Outer Loop: O(n) + Inner Loop: O(n) + isValid: O(26) = O(1) ==> O(n^2)
// Space Complexity: O(n) at worst case
function minWindow(s, t){
  let need = {};
  for(let ch of t){
    need[ch] = (need[ch] || 0) + 1;
  }

  let minLength = Infinity
  let ans = "";

  function isValid(window, need){
    for(let key in need){
      if((window[key] || 0) < need[key]){
        return false;
      }
    }
    return true;
  }

  for(let i = 0; i<s.length; i++){
    let window = {};
    for(let j = i; j<s.length; j++){
      let ch = s[j];
      window[ch] = (window[ch] || 0) + 1;

      if(isValid(window, need)){
        let len = j - i + 1;
        if(len < minLen){
          minLen = len;
          ans = s.slice(i, j+1);
        }
      }
    }
  }
  return ans;
}


// Better Approach

function minWindow(s, t){
  let need = {};
  for(let ch of t){
    need[ch] = (need[ch] || 0) + 1;
  }

  const required = Object.keys(need).length;
  let minLen = Infinity;
  let ans = "";

  for(let i = 0; i<s.length; i++){
    let window = {};
    let formed = 0;

    for(let j = i; j<s.length; j++){
      let ch = s[j];
      window[ch] = (window[ch] || 0) + 1;

      if(need[ch] && window[ch] === need[ch]){
        formed++;
      }

      if(formed === required){
        let len = j - i + 1;

        if(len < minLen){
          minLen = len;
          ans = s.slice(i, j+1);
        }
      }
    }
  }
  return ans;
}


// Optimal Approach
// Time complexity: O(2n) => O(n)
function minWindow(s, t){
  const need = {};
  for(let ch of t){
    need[ch] = (need[ch] || 0) + 1;
  }

  let window = {};
  let required = Object.keys(need).length;
  let formed = 0;

  let left = 0;
  let right = 0;

  let minLen = Infinity;
  let ans = "";

  while(right < s.length){
    let ch = s[right];
    window[ch] = (window[ch] || 0) + 1;

    if(need[ch] && window[ch] === need[ch]){
      formed++;
    }

    while(left <= right && formed === required){
      let len = right - left + 1;

      if(len < minLen){
        minLen = len;
        ans = s.slice(left, right + 1);
      }

      let leftChar = s[left];
      window[leftChar]--

      if(need[leftChar] && window[leftChar] < need[leftChar]){
        formed--;
      }
      left++;
    }
    right++;
  }
  return ans;
}















