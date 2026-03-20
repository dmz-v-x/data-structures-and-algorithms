// Given a string:

// "()[]{}"

// Return true if valid, else false

// A string is valid if:

// Every opening has a closing

// Order is correct

// Types match

// Brute Force Approach: Repeatedly remove pairs (), [], {}
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function isValid(s){
  while(s.includes("()") || s.includes("[]") || s.includes("{}")){
    s = s.replace("()", "")
         .replace("[]", "")
         .replace("{}", "")
  }
  return s.length === 0;
}


// Better Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isValid(s){
  let arr = [];
  for(let ch of s){
    if(ch === '(' || ch === '{' || ch === '['){
      arr.push(ch);
    }else {
      if(arr.length === 0) return false;
      let top = arr[arr.length - 1];

      if(
        (ch === ')' && top === '(') ||
        (ch === ']' && top === '[') ||
        (ch === '}' && top === '{')
      ){
        arr.pop();
      }else{
        return false;
      }
    }
  }
  return arr.length === 0;
}

  // Optimal Approach: Map + Stack
// Time complexity: O(n)
// Space Complexity: O(n)
function isValid(s){
  let stack = [];
  let map = {
    ')':'(',
    '}':'{'
    ']':'['
  }
  for(let ch of s){
    if(ch === '(' || ch === '{' || ch === '['){
      stack.push(ch);
    }else {
      if(stack.length === 0) return false;
      let top = stack.pop();
      if(top !== map[ch]){
        return false;
      }
    }
  }
  return stack.length === 0;
}
