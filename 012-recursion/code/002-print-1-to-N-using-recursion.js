// Print 1 to N using recursion
// This uses backtracking pattern inside recursion

function print1toN(n){ // This uses backtracking pattern
  if(n === 0) return
  print1toN(n-1)
  console.log(n); 
}

print1toN(10);

// What is Backtracking?

// Do something while returning from recursive calls

// Where is backtracking happening here?

// print1toN(n-1);  // go deeper
// console.log(n);  // happens while coming back

// So:

// First → recursion goes down
// Then → work happens while coming back

// That “coming back phase” = backtracking

// If function calls itself → recursion
// If work is done after recursive call → backtracking pattern

// All backtracking uses recursion, but not all recursion is backtracking.


function print1toN(i, n){ // No Backtracking (Parameterized Recursion)
  if(i > n) return;
  console.log(i);
  print1toN(i+1, n);
}

print1toN(1, 5);

// Backtracking vs Parameterized Recursion

// | Type                    | Pattern        | Use case                           |
// | ----------------------- | -------------- | ---------------------------------- |
// | Backtracking            | recurse → work | when result depends on return path |
// | Parameterized recursion | work → recurse | when you can carry state forward   |
