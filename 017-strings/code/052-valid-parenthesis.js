// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Naive Approach: Removing valid pairs
// Time Complexity: O(n^2)
function isValid(s){
  let prevLength = -1;
  while(prevLength !== s.length){
    prevLength = s.length
    s = s.replace("()", "");
    s = s.replace("{}", "");
    s = s.replace("[]", "");
  }
  return s.length === 0;
}

// Better Approach:
// Time Complexity: O(n)
// Space Complexity: O(n)
function isValid(s){
  const stack = [];

  for(let char of s){
    if(char === "(" || char === "{" || char === "["){
      stack.push(char);
    }else {
      const top = stack.pop();
      if(char === ")" && top !== "(") return false;
      if(char === "}" && top !== "{") return false;
      if(char === "]" && top !== "[") return false;
    }
  }
  return stack.length === 0;
}

// Optimal Approach: Hash Map + Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
function isValid(s){
  const map = {
    ")" : "(",
    "}" : "{",
    "]" : "["
  }

  let stack = [];

  for(let char of s){
    if(char === "(" || char === "{" || char === "["){
      stack.push(char);
    }else {
      if(stack.pop() !== map[char]){
        return false;
      }
    }
  }
  return stack.length === 0;
}
