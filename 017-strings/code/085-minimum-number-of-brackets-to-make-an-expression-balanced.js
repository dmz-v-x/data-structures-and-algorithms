// Given a string of brackets like:

// "(()"
// ")()("

// Find minimum number of brackets to add to make it balanced

// What is “balanced”?

// A string is balanced if:

// 1. Every '(' has a matching ')'
// 2. Order is correct

// Examples
// "()"     → 0
// "(()"    → 1  (need one ')')
// ")("     → 2  (need one '(' + one ')')

// Time Complexity: O(n)
// Space Complexity: O(1)
function minAddToMakeValid(s){
  let open = 0;
  let insertion = 0;

  for(let ch of s){
    if(ch === '('){
      open++;
    }else{
      if(open > 0){
        open--;
      }else{
        insertion++;
      }
    }
  }
  return open + insertion;
}


// Using Stack
// Time Complexity: O(n)
// Space Complexity: O(n)
function minAddToMakeValid(s){
  let stack = [];

  for(let ch of s){
    if(ch === '('){
      stack.push(ch);
    }else {
      if(stack.length && stack[stack.length - 1] === '('){
        stack.pop();
      }else{
        stack.push(ch);
      }
    }
  }
  return stack.length;
}







