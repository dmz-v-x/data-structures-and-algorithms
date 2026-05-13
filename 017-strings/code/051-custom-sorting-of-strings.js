// Custom Sort String

// You are given:

// order = "cba"
// s = "abcd"

// You must sort s according to the order string.

// First Understand the Meaning

// Normally alphabetical order is:

// a b c d e ...

// BUT HERE:

// order = "cba"

// means:

// c comes first
// b comes second
// a comes third

// This is the NEW custom alphabet.

// Understand With Example

// Input:

// order = "cba"
// s = "abcd"

// We want characters in s arranged according to:

// c -> highest priority
// b -> next
// a -> next

// Character 'd' is not in order string.

// So final answer can be:

// "cbad"

// Why?

// Because:

// c before b
// b before a
// d can be anywhere after those


// MOST IMPORTANT OBSERVATION

// The order string defines priority.

// So we need:

// character -> priority

// Example:

// order = "cba"

// Then:

// | Character | Priority |
// | --------- | -------- |
// | c         | 0        |
// | b         | 1        |
// | a         | 2        |

// Smaller priority means earlier in sorted order.

// How JavaScript Sorting Works

// In JavaScript:

// array.sort((a, b) => ...)

// Comparator rules:

// | Return Value | Meaning       |
// | ------------ | ------------- |
// | negative     | a comes first |
// | positive     | b comes first |
// | 0            | equal         |

// Small Comparator Example
// [3,1,2].sort((a,b) => a-b)
// Compare 3 and 1
// 3 - 1 = 2

// Positive.

// So:

// 1 comes before 3
// Compare 1 and 2
// 1 - 2 = -1

// Negative.

// So:

// 1 comes before 2

// Final:

// [1,2,3]

// Our Goal

// We want custom comparison.

// Instead of:

// a - b

// we compare:

// priority[a] - priority[b]

// Build Priority Map

// Example:

// order = "cba"

// Create:

// {
//    c: 0,
//    b: 1,
//    a: 2
// }


Code:

// Time Complexity: O(m + n log n)

function customSortString(order, s){
  let priority = {};

  for(let i = 0; i<order.length; i++){
    priority[order[i]] = i;
  }

  return s.split("").sort((a, b) => {
    let p1 = priority[a] ?? Infinity;
    let p2 = priority[b] ?? Infinity;

    return p1 - p2;
  }).join("");
}


// VERY IMPORTANT PART
// priority[a] ?? Infinity

// Why?

// Because some characters may NOT exist in order.

// Example:

// order = "cba"
// s = "abcd"

// Character:

// 'd'

// not found.

// So:

// priority['d']

// is:

// undefined

// We give it:

// Infinity

// Meaning:

// put it at the end

// Why split("") Needed

// Strings are immutable in JavaScript.

// Cannot directly sort string.

// So:

// s.split("")

// converts:

// "abcd"

// to:

// ['a','b','c','d']

// Arrays can be sorted.


// Better Approach:

// Instead of sorting:

// Count frequencies.

// Example:

// s = "abcdabc"

// Frequency:

// | Char | Count |
// | ---- | ----- |
// | a    | 2     |
// | b    | 2     |
// | c    | 2     |
// | d    | 1     |

// Now traverse order:

// cba

// Add:

// cc
// bb
// aa

// Then remaining chars:

// d

// Result:

// "ccbbaad"

function customSortString(order, s){
  let freq = {};


  for(let ch of s){
    freq[ch] = (freq[ch] || 0) + 1;
  }

  let result = "";

  for(let ch of order){
    while(freq[ch] > 0){
      result += ch;
      freq[ch]--;
    }
  }

  for(let ch of freq){
    while(freq[ch] > 0){
      result += ch;
      freq[ch]--;
    }
  }

  return result;
}


// Time Complexity: O(n + m)

