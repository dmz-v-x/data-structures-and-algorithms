// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function firstNonRepeatingChar(str){
  for(let i = 0; i<str.length; i++){
    let count = 0;
    for(let j = 0; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    if(count === 1){
      return str[i];
    }
  }
  return null;
}


// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)

function firstNonRepeatingChar(str){
  const freq = {};

  // count frequency
  for(let char of str){
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first non-repeating char
  for(let char of str){
    if(freq[char] === 1){
      return char;
    }
  }
  return null;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Compliexity: O(1)

function firstNonRepeatingChar(str){
  const freqMap = new Map();

  // First pass: store frequency
  for(let char of str){
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Second pass: find first unique char
  for(let char of str){
    if(freqMap.get(char) === 1){
      retrun char;
    }
  }
  return null;
}

// Optimal Appraoch (Only for lowercase english letters)

// Time Complexity: O(n)
// Space Complexity: O(1)

function firstNonRepeatingChar(str){
  let freq = new Array(26).fill(0);

  // Count Frequency
  for(let i = 0; i<str.length; i++){
    const index = str.charCodeAt(i) - 97;
    freq[index]++;
  }

  // Find first occurrence

  for(let i = 0; i<str.length; i++){
    const index = str.charCodeAt(i) - 97;
    if(freq[index] === 1){
      return str[i];
    }
  }
  return null;
}












