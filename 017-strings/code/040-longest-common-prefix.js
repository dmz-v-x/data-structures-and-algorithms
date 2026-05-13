// Problem:

// Given an array of strings:

// ["flower","flow","flight"]

// Find the:

// longest prefix common to all strings

// Answer:

// "fl"

// because:

// flower  -> fl...
// flow    -> fl...
// flight  -> fl...

// A prefix means:

// starting portion of a string

// Example:

// "flower"

// Prefixes:

// f
// fl
// flo
// flow
// flowe
// flower

// What Does "Common Prefix" Mean?

// It means:

// all strings start with same characters
// Example
// ["flower","flow","flight"]

// Compare Character-by-Character

// | Position | String1 | String2 | String3 |
// | -------- | ------- | ------- | ------- |
// | 0        | f       | f       | f       |
// | 1        | l       | l       | l       |
// | 2        | o       | o       | i       |


// At index 2:

// o != i

// Mismatch found.

// So answer stops before that.

// Result:

// "fl"

// MOST IMPORTANT OBSERVATION

// Common prefix grows only until:

// first mismatch

// After mismatch:

// STOP immediately.

// Brute Force Intuition

// Take first string:

// "flower"

// Check every character position against all other strings.


// Brute Force

// Time Complexity: O(n * m)
// Space Complexity: O(1)
  
function longestCommonPrefix(strs){
  if(strs.length === 0){
    return "";
  }

  for(let i = 0; i<strs[0].length; i++){
    let char = strs[0][i];
    for(let j = 1; j<strs.length; j++){
      if(i >= strs[j].length || strs[j][i] !== char){
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

// MOST IMPORTANT CONDITION
// i >= strs[j].length

// Why needed?

// Suppose:

// ["car","ca"]

// At:

// i = 2

// Second string ended.

// Common prefix cannot continue.

// Answer:

// "ca"

function longestCommonPrfix(strs){
  let prefix = strs[0];

  for(let i = 1; i<strs.length; i++){
    
    while(!strs[i].startsWith(prefix)){
      prefix = prefix.slice(0, -1);

      if(prefix === " "){
        return "";
      }
    }
  }

  return prefix
}












