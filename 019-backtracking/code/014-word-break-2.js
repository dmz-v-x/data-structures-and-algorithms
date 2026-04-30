// Problem:

// Given:

// a string s
// a dictionary wordDict

// Return ALL possible sentences where:

// words are from dictionary
// spaces inserted such that whole string is used

// Example:
// s = "catsanddog"
// wordDict = ["cat","cats","and","sand","dog"]

// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]

// VERY IMPORTANT DIFFERENCE

// | Problem       | Goal                 |
// | ------------- | -------------------- |
// | Word Break I  | return TRUE/FALSE    |
// | Word Break II | return ALL SENTENCES |

// Core Difficulty

// We are not just checking validity
// We are building ALL combinations

// This becomes a tree of possibilities

// catsanddog

// Start:
//  ├── "cat" → "sanddog"
//  │       ├── "sand" → "dog"
//  │       │       └── "dog" → ✅ "cat sand dog"
//  │
//  ├── "cats" → "anddog"
//          ├── "and" → "dog"
//                  └── "dog" → ✅ "cats and dog"

// Brute Force: Pure Recursion

// At each index:

// try every word in dictionary
// if it matches → go deeper
// build sentence


function wordBreak(s, wordDict){

  let result = [];

  function backtrack(start, path){
    // Base Case
    if(start === s.length){
      result.push(path.join(" "));
      return;
    }

    for(let word of wordDict){
      
    }
  }

  backtrack(0, []);
  return result;
  
}























