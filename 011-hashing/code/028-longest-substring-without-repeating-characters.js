// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Time complexity: O(n^3)
// Space Complexity: O(n)
function longestSubstring(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let set = new Set();
      let valid = true;

      for (let k = i; k <= j; k++) {
        if (set.has(s[k])) {
          valid = false;
          break;
        }
        set.add(s[k]);
      }

      if (valid) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}

// Better Solution
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function longestSubstring(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();

    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) break;

      set.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
}

// Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
function longestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Most Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
function longestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }

    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
