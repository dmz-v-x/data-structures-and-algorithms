// Postfix to Prefix

// AB+CD-* -> *+AB-CD

// Process from: LEFT -> RIGHT

// Algorithm

// -> Use a stack of strings
// -> Scan from left to right
// -> CASE 1: Operand -> push to stack
// -> CASE 2: Operator -> pop 2 elements
//    op2 = first pop
//    op1 = second pop

// (Order Matters)

// -> form: operator + op1 + op2
// -> push back

// Time Complexity: O(n)
// Space Complexity: O(n)

function postfixToPrefix(s){
  let stack = [];
  for(let ch of s){
    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch);
    }else {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let exp = ch + op1 + op2;
      stack.push(exp)
    }
  }
  return stack.pop();
}



