// Prefix to Postfix

// Algorithm

// -> Scan from righ to left
// -> Case 1: Operand -> Push to stack
// -> Case 2: Operator -> pop 2 element 
//    op1 = first pop
//    op2 = second pop
// -> form: op1 + op2 + operator
// -> push back

// Time Complexity: O(n)
// Space Complexity: O(n)
function prefixToPostfix(s){
  let stack = [];
  for(let i = s.length - 1; i>=0; i--){
    let ch = s[i];
    if(/[a-zA-Z0-0]/.test(ch)){
      stack.push(ch);
    }else {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let exp = op1 + op2 + ch;
      stack.push(exp);
    }
  }
  return stack.pop();
}
