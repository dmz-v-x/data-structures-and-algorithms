// Longest Common Prefix

// You are given an array of strings:

// ["flower", "flow", "flight"]

// You need to find the longest common prefix.

// Prefix = starting part of a string

// Example:
// flower → "fl"
// flow   → "fl"
// flight → "fl"

// Answer = "fl"


// Brute Force: Take first string as reference, compare it's characters with all other strings

// Time Complexity: O(n * m)

function longestCommonPrefix(strs){
  if(strs.length === 0) return "";

  let first = strs[0];
  for(let i = 0; i<first.length; i++){
    let char = first[i];

    for(let j = 1; j<strs.length; j++){
      if(i >= strs[j].length || strs[j][i] !== char){
        return first.slice(0, i);
      }
    }
  }
  return first;
}


// Better Approach: Sort the array, only compare first and last string

// After sorting:

// Most similar strings come closer
// Most different strings go far apart

// Common prefix of entire array = Common prefix of first and last

function longestCommonPrefix(strs){
  if(strs.length === 0) return "";

  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];

  let i = 0;
  while(i < first.length && i < last.length && first[i] === last[i]){
    i++;
  }
  return first.substring(0, i);
}
