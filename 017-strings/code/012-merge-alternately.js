// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// Naive Approach: Use Two Separate Loops
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
function mergeAlternately(word1, word2){
  let result = "";
  let minLen = Math.min(word1.length, word2.length);

  for(let i = 0; i<minLen; i++){
    result += word1[i];
    result += word2[i];
  }

  for(let i = minLen; i<word1.length; i++){
    result += word1[i];
  }

  for(let i = minLen; i<word2.length; i++){
    result += word2[i];
  }
  return result;
}


// Better Appraoch: Iterate till max length and add characters

// Time Complexity: O(m + n)
// Space Complexity: O(m + n)
function mergeAlternately(word1, word2){
  let result = "";
  let maxLen = Math.max(word1.length, word2.length);
  for(let i = 0; i<maxLen; i++){
    if(i < word1.length){
      result += word1[i];
    }
    if(i < word2.length){
      result += word2[i];
    }
  }
  return result;
}


// Optimal Appraoch
// Time Complexity: O(m + n)
// Space Complexity: O(m + n)
function mergeAlternately(word1, word2){
  let result = "";
  let i = 0; 
  let j = 0;

  while(i< word1.length || j<word2.length){
    if(i < word1.length){
      result += word1[i];
      i++;
    }
    if(j < word2.length){
      result += word2[j];
      j++;
    }
  }
  return result;
}
