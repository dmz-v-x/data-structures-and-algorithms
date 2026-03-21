// Postfix to Infix

// AB+CD-* --> ((A+B)*(C-D))

// Algorithm

-> Use a stack of strings
-> Scan from LEFT -> RIGHT
-> CASE 1: Operand: push to stack
-> CASE 2: Operator: pop two elements
   op2 = first pop
   op1 = second pop

Order matters

-> Combine: op1 operator op2
-> Push back to stack

// Time Complexity: O(n)
// Space Complexity: O(n)

function postfixToInfix(s){
  let stack = [];
  for(let ch of s){
    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch);
    }else{
      let op2 = stack.pop();
      let op1 = stack.pop();
      let exp = `(${op1}${ch}${op2})`;

      stack.push(exp);
    }
  }
  return stack.pop();
}
