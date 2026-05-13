// Lexicographic Comparison Concept

// What Does Lexicographic Mean?

// Lexicographic means:

// dictionary order

// Exactly how words are arranged in a dictionary.

// Example:

// apple
// banana
// cat
// dog

// This is lexicographic order.

// Main Idea

// We compare strings:

// character by character

// from LEFT to RIGHT.

// The FIRST different character decides everything.

// This is the MOST IMPORTANT RULE.

// Example

// Compare:

// "apple"
// "apricot"

// Compare character by character

// | Position | String1 | String2 |
// | -------- | ------- | ------- |
// | 0        | a       | a       |
// | 1        | p       | p       |
// | 2        | p       | r       |

// Now:

// 'p' < 'r'

// So:

// "apple" < "apricot"

// We STOP immediately.

// Nothing after this matters.

// Why 'p' < 'r' ?

// Because characters have ASCII/Unicode values.

// Example:

// | Character | ASCII |
// | --------- | ----- |
// | p         | 112   |
// | r         | 114   |

// Since:

// 112 < 114

// therefore:

// 'p' < 'r'



// Another Example

// Compare:

// "car"
// "cat"

// | Position | c1 | c2 |
// | -------- | -- | -- |
// | 0        | c  | c  |
// | 1        | a  | a  |
// | 2        | r  | t  |

// Now:

// 'r' < 't'

// So:

// "car" < "cat"


// Very Important Prefix Rule

// Compare:

// "app"
// "apple"

// Compare:

// | Position | s1 | s2 |
// | -------- | -- | -- |
// | 0        | a  | a  |
// | 1        | p  | p  |
// | 2        | p  | p  |

// Now first string ends.

// Important rule:

// shorter prefix string is smaller

// So:

// "app" < "apple"

// Why Prefix Smaller?

// Think dictionary:

// app
// apple
// application

// Shorter completed word comes first.

// JavaScript String Comparison

// JavaScript already supports lexicographic comparison.

// Example:

// console.log("apple" < "banana");

// Output:

// true

// Another:

// console.log("car" > "cat");

// Output:

// false

// because:

// r < t

// Important ASCII Understanding

// Uppercase and lowercase are DIFFERENT.

// ASCII:

// | Char | ASCII |
// | ---- | ----- |
// | A    | 65    |
// | Z    | 90    |
// | a    | 97    |
// | z    | 122   |

// So:

// "A" < "a"

// because:

// 65 < 97

// Example
// console.log("Apple" < "apple");

// Output:

// true

// because uppercase letters come first in ASCII.

// Manual Lexicographic Comparison


function compareStrings(s1, s2){
  let n = Math.min(s1, s2);

  for(let i = 0; i<n; i++){
    if(s1[i] < s2[j]){
      return -1;
    }

    if(s1[i] > s2[j]){
      return 1;
    }
  }

  if(s1.length < s2.length){
    return -1;
  }

  if(s1.length > s2.length){
    return 1;
  }

  return 0;
}

// Dry Run

// Compare:

// "abc"
// "abd"
// i = 0
// a vs a

// Equal.

// i = 1
// b vs b

// Equal.

// i = 2
// c vs d

// Now:

// c < d

// Return:

// -1

// meaning:

// "abc" < "abd"



// Lexicographic Sorting

// When sorting strings:

// ["dog", "apple", "cat"].sort()

// JavaScript uses lexicographic sorting by default.

// Result:

// ["apple", "cat", "dog"]



// Number Strings Problem

// Important trap:

// ["10", "2", "30"].sort()

// Result:

// ["10", "2", "30"]

// WHY?

// Because strings are sorted lexicographically.

// Compare:

// "10" vs "2"

// First chars:

// '1' < '2'

// So "10" comes first.

// Numeric Sorting Fix

// Use comparator:

// arr.sort((a,b) => Number(a) - Number(b))
