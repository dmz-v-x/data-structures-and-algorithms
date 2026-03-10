// Problem Statement

// Given a string `s`, find the **length of the longest substring without repeating characters**.

// Example:

//     s = "abcabcbb"

// Substrings without repeating characters:

//     "a"
//     "ab"
//     "abc"
//     "bca"
//     "cab"

// Longest substring:

//     "abc"

// Length:

//     3

// Naive Approach: Generating all substring and tracking the max length substring
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let maxLen = 0;
  for(let i = 0; i<s.length; i++){
    let set = new Set();
    for(let j = i; j<s.length; j++){
      if(set.has(s[j])) break;
      set.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1)
    }
  }
  return maxLen
}

// Better Approach: Sliding Window with Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let set = new Set();
  let left = 0;
  let maxLen = 0;
  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
      set.delete(s[left])
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// Optimal Approach: Using Map
// Time Complexity: O(n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for(let right = 0; right < s.length; right++){
    if(map.has(s[right])){
      left = Math.max(left, map.get(s[right]) + 1)
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
    
  }
  return maxLen;
}













