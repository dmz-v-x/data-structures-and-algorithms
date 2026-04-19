// You are given a string of digits like:

// "23"

// On a phone keypad:

// 2 → abc
// 3 → def

// So combinations are:

// ad, ae, af, bd, be, bf, cd, ce, cf


// Brute Force

// For "23":

// First digit → a b c
// Second digit → d e f

// Now combine:

// a → d e f → ad ae af
// b → d e f → bd be bf
// c → d e f → cd ce cf

// This is:

// Combination building step by step

// NOT permutation
// NOT subset

// This is:

// Build strings character by character


function letterCombinations(digits){
  if(digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}

let result = [""];

for(let digit of digits){
  let temp = [];
  let letters = map[digit];

  for(let prefix of result){
    for(let char of letters){
      temp.push(prefix + char);
    }
  }
  result = temp;
}
  return result;
}



// Optimal Approach

// For "23":

//             ""
//          /   |   \
//        a     b     c
//      / | \  / | \  / | \
//    ad ae af bd be bf cd ce cf

// Core Idea

// At every step:

// Pick a digit
// Try all letters for that digit
// Move to next digit
// When full string is formed → store answer


function letterCombination(digits){
  if(digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }

  let result = [];

  function backtrack(index, path){

    // base case

    if(path.length === digits.length){
      result.push(path);
      return;
    }


    let digit = digits[index];
    let letters = map[digit];

    for(let char of letters){
      backtrack(index+1, path+char);
    }
    
  }

  backtrack(0, "");

  return result;
}




