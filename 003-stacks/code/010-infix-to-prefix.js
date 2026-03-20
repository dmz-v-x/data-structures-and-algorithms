// Infix to Prefix

// Approach: (A + B) * C
// Reverse the infix expression: C * )B + A(
// Swap brackets: C * (B + A)
// Convert to postfix: CBA+*
// Reverse result -> *+ABC

// Time complexity: O(n)
// Space Complexity: O(n)
function infixToPrefix(s) {
  // 1. reverse string
  let reversed = s.split('').reverse().join('');

  // 2. Swap brackets
  reversed = reversed.
              split('').
              map(ch => {
                if(ch === '(') return ')';
                if(ch === ')') return '('
                return ch;
              }).
              join('');

  function infixToPostfix(s){
    let stack = [];
    let result = "";

    const precedence = (op) => {
      if(op === '+' || op === '-') return 1;
      if(op === '*' || op === '/') return 2;
      return 0;
    }

    for(let ch of s){
      if(/[a-zA-Z]/.test(ch)){
        result += ch;
      }else if(ch === '('){
        stack.push(ch)
      }else if(ch === ')'){
        while(stack.length && stack.length[stack.length -1] !== '('){
          result += stack.pop();
        }
        stack.pop();
      }else{
        while(stack.length && precedence(stack[stack.length - 1] >=precednece(ch))){
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

  let postfix = infixToPostfix(reversed);

  // reverse postfix -> prefix
  return postfix.split('').reverse().join('');
}
