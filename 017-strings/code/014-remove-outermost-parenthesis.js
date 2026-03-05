// Remove Outermost Parentheses
// Given a valid parentheses string s, remove the outermost parentheses of every primitive substring.

// That sentence sounds complicated, but the idea is actually simple.

// The string contains valid parentheses groups.

// For each group:

// remove the first '(' and the last ')'

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Naive Solution: Using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
function removeOuterParenthesis(s){
  let stack = [];
  let result = "";

  for(let char of s){
    if(char === '('){
      if(stack.length > 0){
        result += char;
      }
      stack.push(char);
    }else {
      stack.pop();
      if(stack.length > 0){
        result += char;
      }
    }
  }
  return result;
}

// Better Solution: Using Depth Counter

function removeOuterParenthesis(s){
  let depth = 0;
  let result = 0;
  for(let char of s){
    if(char === '('){
      if(depth > 0){
        result += char;
      }
      depth++;
    }else {
      depth--;
      if(depth > 0){
        result += char;
      }
    }
    return result;
  }
}
