// Infix to Postfix
// Time Complexity: O(n)
// Space Complexity: O(n)

function infixToPostfix(s){
  let stack = [];
  let result = "";

  const precedence = (op) => {
    if(op === '+' || op === '-') return 1;
    if(op === '*' || op === '/') return 2;
    return 0;
  }

  for(let ch of s){
    if(/[a-zA-Z0-9]/.test(ch)){
      result += ch
    }

    // Opening Bracket
    else if(ch === '('){
      stack.push(ch);
    }

    else if(ch === ')'){
      while(stack.length && stack[stack.length - 1] === '('){
        result += stack.pop();
      }
      stack.pop();
    }

    else {
      while(stack.length && precedence(stack[stack.length - 1] >= precedence[ch])){
        result += stack.pop();
      }
      stack.push(ch);
    }
  }

  while(stack.length){
    result += stack.pop();
  }
  return result;
}
