// PROBLEM

// Given:

// s = "ababccc"

// Split string into:

// unique substrings

// such that:

// number of substrings is MAXIMUM

// EXAMPLE ANSWER
// ["a","b","ab","c","cc"]

// All unique.

// Count:

// 5

// Every character must belong to EXACTLY one substring

// No skipping.

// No overlapping.

// No reordering.

// VALID PARTITION

// Example:

// ["a","b","ab","c","cc"]

// Let’s map it.

// "a"

// Uses:

// index 0
// "b"

// Uses:

// index 1
// "ab"

// Uses:

// index 2,3
// "c"

// Uses:

// index 4
// "cc"

// Uses:

// index 5,6

// NOTICE

// Every character used:

// exactly once

// Continuous partition.

// MOST IMPORTANT INSIGHT

// At every position:

// We can cut substring at MANY places

// EXAMPLE

// Suppose:

// s = "abab"

// Starting from index 0.

// Possible first substrings:

// "a"
// "ab"
// "aba"
// "abab"

// THIS IS THE ENTIRE PROBLEM

// For every index:

// Try every possible substring starting there

// THIS IS CALLED
// Partition backtracking

// ADDITIONAL CONSTRAINT

// Substrings must be:

// UNIQUE

// So we maintain:

// let used = new Set();

// WHAT DOES SET STORE?

// Already used substrings.

// Example:

// used = {"a", "b", "ab"}

// Meaning:

// Cannot use these again


// VISUALIZATION

// Input:

// "aba"

// START AT INDEX 0

// Choices:

// "a"
// "ab"
// "aba"

// BRANCH 1 → "a"

// Used:

// {"a"}

// Now recurse from index 1.

// Remaining string:

// "ba"

// NEXT LEVEL

// Choices:

// "b"
// "ba"
// Choose "b"

// Used:

// {"a","b"}

// Recurse from index 2.

// Remaining:

// "a"

// PROBLEM

// "a" already exists in set.

// Cannot use.

// Branch fails.

// BACKTRACK

// Remove:

// "b"

// Try next choice:

// "ba"

// Allowed.

// THIS IS THE SEARCH PROCESS
// Try
// Explore
// Fail/Succeed
// Undo
// Try next

// WHAT SHOULD FUNCTION REPRESENT?

// Most important recursion question.

// We define:

// backtrack(start)

// Meaning:

// Find maximum unique splits
// starting from index start

// IMPORTANT

// We also maintain:

// used Set

// globally during recursion.

// BASE CASE

// When:

// start === s.length

// Meaning:

// Entire string processed

// Valid partition found.

// WHAT SHOULD WE RETURN?

// Number of substrings formed.

// FUNCTIONAL RECURSION INSIGHT

// This problem naturally works well with:

// returning values

// TRY ALL SUBSTRINGS

// From current index:

// for(let end = start; end < s.length; end++)

// CREATE SUBSTRING
// let sub = s.substring(start, end + 1);

// EXAMPLE

// If:

// start = 0

// Then:

// "a"
// "ab"
// "aba"

// UNIQUE CHECK
// if(used.has(sub)) continue;

// Skip duplicates.

// CHOOSE
// used.add(sub);

// EXPLORE

// Now recurse for remaining string.

// IMPORTANT FORMULA

// Suppose current substring chosen counts as:

// 1 substring

// plus:

// maximum splits from remaining part

// So:

// 1 + backtrack(end + 1)

// UNDO
// used.delete(sub);



function maxUniqueSplit(s){
  let used = new Set();

  function backtrack(start){
    if(start === s.length){
      return 0;
    }

    let maxSplit = 0;

    for(let end = start; end < s.length; end++){
      let sub = s.substring(start, end + 1);

      // skip duplicates
      if(used.has(sub)) continue;

      // choose
      used.add(sub);

      // explore
      let splits = 1 + backtrack(end + 1);

      maxSplits = Math.max(maxSplits, splits);

      // undo
      used.delete(sub);
    }
    return maxSplits;
  }
  return backtrack(0);
}


















