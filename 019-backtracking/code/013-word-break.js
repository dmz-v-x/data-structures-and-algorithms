// Word Break Problem

// You are given:

// A string s
// A dictionary of words wordDict

// You need to check:

// Can you split the string into valid dictionary words?

// Example
// s = "leetcode"
// wordDict = ["leet", "code"]

// Answer = TRUE
// Because:

// "leetcode" → "leet" + "code"

// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
  
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

// Core Intuition:

// At every index, we have a choice:

// Try to "cut" the string
// Check if left part is valid
// Then solve remaining part

// Think like:

// "applepenapple"

// Try cuts:

// a | pplepenapple ❌
// ap | plepenapple ❌
// app | lepenapple ❌
// apple | penapple ✅  ← valid word!

// Now solve: "penapple"

// This becomes a decision tree problem

// Trying every possible cut and recursively checking

// Time Complexity: O(2^n)
// Space Complexity: O(n)

function wordBreak(s, wordDict){
  const set = new Set(wordDict);

  function solve(start){
    if(start === s.length){
      return true;
    }

    for(let end = start + 1; end <= s.length; end++){
      let prefix = s.substring(start, end);

      if(set.has(prefix) && solve(end)){
        return true;
      }

      return false;
    }
  }

  return solve(0);
}



// Better Appraoch: DP

function wordBreak(s, wordDict){
  const set = new Set(wordDict);
  const memo = {};

  function solve(start){
    if(start === s.length) return true;

    if(memo[start] !== undefined){
      return memo[start];
    }

    for(let end = start + 1; end <= s.length; end++){
      let prefix = s.substring(start, end);

      if(set.has(prefix) && start(end)){
        return memo[start] = true;
      }
    }

    return memo[start] = false;
  }

  return solve(0);
}

// memo[start] = true

// evaluates to:

// true

// So this line is equivalent to:
// memo[start] = true;
// return true;





