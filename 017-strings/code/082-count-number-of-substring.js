// Given a string s with only:

// a, b, c

// Count substrings that contain at least one a, b, and c

// Example
// s = "abcabc"

// Valid substrings:

// "abc", "abca", "abcab", "abcabc",
// "bca", "bcab", "bcabc",
// "cab", "cabc",
// "abc"

// Answer = 10

// Generate all substrings, then check each one

// Generate all substrings (i → j)
// For each substring:
// Check if it contains a, b, c

// Brute Force

// Fix i
// Expand j
// Maintain count of a, b, c

function countSubstring(s){
  let count = 0;
  

  for(let i = 0; i<s.length; i++){
    let map = {a: 0, b: 0, c: 0};
    for(let j = i; j<s.elngth; j++){
      freq[s[j]]++;

      if(freq.a > 0 && freq.b > 0 && freq.c > 0){
        count++;
      }
    }
  }
  return count;
}

// Optimal Approach: Using Sliding Window
// Time Complexity: O(n)
function countSubstring(s){
  let n = s.length;
  let count = 0;
  let left = 0;
  let map = {
    a: 0,
    b: 0,
    c: 0
  }

  for(let right = 0; right < n; right++){
    map[s[right]]++;

    while(map.a > 0 && map.b > 0 && map.c > 0){
      count += (n - right);
      map[s[left]]--;
      left++;
    }
  }
  return count;
}
