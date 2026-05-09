// PROBLEM

// Given:

// s = "a1b2"

// Return all possible strings after changing:

// letters → lowercase or uppercase

// Digits remain same.

// OUTPUT
// [
//  "a1b2",
//  "a1B2",
//  "A1b2",
//  "A1B2"
// ]

// MOST IMPORTANT INSIGHT

// Every character creates:

// some number of choices

// FOR LETTERS

// Example:

// 'a'

// Choices:

// 'a'
// 'A'

// FOR DIGITS

// Example:

// '1'

// Choices:

// ONLY one choice

// Digit stays same.

// THIS IS THE ENTIRE PROBLEM

// For every position:

// Try all valid choices

// THIS IS CLASSIC BACKTRACKING
// Choose
// Explore
// Undo

// VISUALIZATION

// Take:

// "a1"

// POSITION 0 → 'a'

// Choices:

// 'a'
// 'A'

// BRANCH 1

// Choose:

// 'a'

// Current string:

// "a"

// NEXT POSITION → '1'

// Digit.

// Only choice:

// "1"

// Result:

// "a1"

// BRANCH 2

// Choose:

// 'A'

// Result:

// "A1"

// RECURSION TREE
//                  ""
//                /    \
//              a        A
//              |        |
//             a1       A1


// We define:

// backtrack(index, current)

// Meaning:

// We are processing s[index]
// Current built string is current

// INITIAL CALL
// backtrack(0, "")

// BASE CASE

// When:

// index === s.length

// Meaning:

// We processed all characters

// Store answer.

// BASE CASE
// if(index === s.length){
//     result.push(current);
//     return;
// }


// CURRENT CHARACTER
// let ch = s[index];


// CASE 1 → DIGIT

// If digit:

// Only ONE branch
// Recursive call
// backtrack(index + 1, current + ch);

// CASE 2 → LETTER

// Two branches:

// Lowercase branch
// backtrack(index + 1, current + ch.toLowerCase());
// Uppercase branch
// backtrack(index + 1, current + ch.toUpperCase());

function letterCasePermutation(s){
  let result = [];

  function backtrack(index, current){
    if(index === s.length){
      result.push(current);
      return;
    }

    let ch = s[index];

    // digit
    if(ch >= '0' && ch <= '9'){
      backtrack(index + 1, current+ch);
    }else{
      // Lowercase brach
      backtrack(index + 1, current + ch.toLowerCase());

      // uppercase branch
      backtrack(index + 1, current  + ch.toUpperCase());
    }
  }

  backtrack(0, "");
  return result; 
}

// Time Complexity: O(2^k) k - number of letters
// Space Complexity: O(n)

























  
