// We are given:

// n = number of pairs of parentheses

// We must generate:

// ALL valid combinations of n pairs

// For:

// n = 3

// Output:

// ((()))
// (()())
// (())()
// ()(())
// ()()()

// What is “VALID”?

// A string is valid if:

// Rules:

// At no point:
// closing brackets > opening brackets

// Total:
// open = close = n

// Brute Force: 

// Idea
// Generate all possible strings of '(' and ')'
// Filter valid ones

// Total strings
// 2^(2n)

// Because:

// Length = 2n
// Each position → 2 choices

// Complexity
// Time: O(2^(2n) * n)

function generateParenthesis(n){
  let result = [];

  function helper(str){
    if(str.length === 2 * n){
      if(isValid(str)){
        result.push(str);
      }
      return;
    }

    helper(str + "(");
    helper(str + ")");
  }

  function isValid(str){
    for balance = 0;
    for(let ch of str){
      if(ch === "(") balance++;
      else balance--;

      if(balance < 0) return false;
    }

    return balance === 0;
  }

  helper("");
  return result;
}



// Better Appraoch: Pruning

// Key Idea

// Don’t generate invalid strings at all

// Track two things:
// open  = number of '(' used
// close = number of ')' used

// Rules

// -> We can add '(' if:
// open < n

// -> We can add ')' if:
// close < open

// This ensures validity ALWAYS

// -> Dry Run (n = 3)

// Start:

// ""


function generateParenthesis(n){
  let result = [];

  function helper(str, open, close){
    if(str.length === 2 * n){
      result.push(str);
      return;
    }

    if(open < n){
      helper(str + "(", open + 1, close);
    }

    if(close < open){
      helper(str + ")", open, close+1);
    }
  }

  helper("", 0, 0);
  return result;
}


// Optimal Approach: Backtracking

function generateParenthesis(n){
  let result = [];
  let path = [];

  function helper(open, close){
    if(path.length === 2 * n){
      result.push(path.join(""));
      return;
    }

    // add '('

    if(open < n){
      path.push("(");
      helper(open + 1, close);
      path.pop();
    }

    // add ')'

    if(close < open){
      path.push(")");
      helper(open, close + 1);
      path.pop();
    }
  }

  helper(0, 0);
  return result;
}





