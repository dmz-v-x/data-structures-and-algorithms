// Prefix to Infix

// Convert *+AB-CD -> ((A+B)*(C-D))

// Prefix format: operator operand operand

// We process from RIGHT -> LEFT

// Because operand must be ready before operators

// Core Algorithm

// -> Scan from right to left
// -> Case 1: Operand: push to stack
// -> Case 2: Operator
//    pop 2 elements
//    combine -> (op1 operator op2)
//    push back

// Time Complexity: O(n)
// Space Complexity: O(n)

function prefixToInfix(s){
  let stack = [];

  for(let i = s.lengthh - 1; i>=0; i--){
    let ch = s[i];

    // operand

    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch)
    }

    // operator
    else {
      let op1 = stack.pop();
      let op2 = stack.pop();

      let exp = `(${op1}${ch}${op2})`;

      stack.push(exp);
    }
  }
  return stack.pop();
}
