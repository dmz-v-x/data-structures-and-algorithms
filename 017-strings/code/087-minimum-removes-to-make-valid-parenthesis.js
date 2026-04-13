// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
  
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.


// Approach 1:

function minRemoveToMakeValid(s){
  let n = s.length;
  let stack = [];

  for(let i = 0; i<n; i++){
    if(s[i] === '('){
      stack.push(i);
    }else if(s[i] === ')' && stack.length > 0 && s[stack[stack.length - 1]] === '('){
      stack.pop();
    }else if(s[i] === ')'){
      stack.push(i);
    }
  }

  let set = new Set(stack);

  let ans = "";

  for(let i = 0; i<n; i++){
    if(!set.has(i)){
      ans += s[i];
    }
  }
  return ans;
}


// Approach 2

function minRemoveToMakeValid(s){
  let res = "";
  let open = 0;

  for(let char of s){
    if(char === '('){
      open++;
    }else if(char === ')'){
      if(open > 0) continue;
      open--;
    }
    res += char;
  }

  let final = "";
  open = 0;

  for(let i = s.length - 1; i>= 0; i--){
    if(res[i] === '(' && open > 0){
      open--;
      continue;
    }
    if(res[i] === ')') open++;
    final += res[i];
  }

  return final.split('').reverse().join();
}

// Order matters for conditions 
