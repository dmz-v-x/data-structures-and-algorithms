// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring with all unique characters.

// Example:
// Input: "abcabcbb"
// Output: 3
// Explanation: "abc"

// Brute Force: Trying all possible substrings
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let maxLen = 0;
  for(let i = 0; i<s.length; i++){
    let set = new Set();
    for(let j = i; j<s.length; j++){
      if(set.has(s[j])) {
        break;
      }
      set.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}

// Better Approach: 
// Idea: Keep set of current characters, if duplicates comes remove from left until valid
// Time Complexity: O(2n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for(let right = 0; right < s.length; right++){
    while(set.has(s[right])){
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}


// Optimal Approach: Using HashMap

// Here if duplicate is found move left to one index after the previous occurrence.

// Time Complexity: O(n)
// Space Complexity: O(n)
function lengthOfLongestSubstring(s){
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for(let right = 0; right < s.length; right++){
    let char = s[right];

    if(map.has(char)){
      left = Math.max(left, map.get(char) + 1);
    }

    map.set(char, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

