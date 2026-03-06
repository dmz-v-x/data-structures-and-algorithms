// Given a string s, find the length of the longest substring
// without repeating characters.

// s = "abcabcbb"

// Substrings without repeating characters

// abc → length 3
// bca → length 3
// cab → length 3

// Maximum length

// 3

// Output

// 3

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function longestSubstringWithoutRepeating(s){
  let max = 0;
  for(let i = 0; i<s.length; i++){
    let set = new Set();
    for(let j = i; j<s.length; j++){
      if(!set.has(s[j])){
        set.add(s[j]);
      }else{
        break;
      }
    }
    max = Math.max(max, set.size);
    
  }
  return max;
}

// Better Approach: Using Sliding Window and set

function longestSubstringWithoutRepeating(s){
  let left = 0;
  let set = new Set();
  let max = 0;
  for(let right = 0; right < s.length; right++){
    if(set.has()
  }
}
