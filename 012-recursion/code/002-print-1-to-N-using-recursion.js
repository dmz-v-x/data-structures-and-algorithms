// Print 1 to N using recursion
// This uses backtracking pattern inside recursion

// Print numbers from 1 to N

// This introduces an extremely important idea:

// Parameterized recursion

// Print numbers from 1 to N.

// Example:

// N = 5

// Output:

// 1
// 2
// 3
// 4
// 5

// Loop solution

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// RECURSION SHOULD DO SAME THING

// Instead of:

// loop incrementing i

// we use:

// recursive call with i + 1

// WHAT SHOULD FUNCTION REPRESENT?

// MOST important recursion question.

// We define:

// print(i, n)

// Meaning:

// "I am currently at number i
// and I must print until n"

// EXAMPLE
// print(1, 5)

// Meaning:

// Start from 1 and print till 5

// WHAT IS THE BASE CASE?

// When should recursion stop?

// Suppose:

// i = 6
// n = 5

// Meaning:

// We already printed all numbers

// So stop recursion.

// BASE CASE
// if(i > n) return;

// WHAT SHOULD CURRENT FUNCTION DO?

// Suppose:

// print(1,5)

// Current function should:

// 1. Print current number
// console.log(i);

// 2. Ask recursion to print remaining numbers
// print(i + 1, n);

// THINK VERY CAREFULLY
// Current function prints ONE number
// Recursion handles remaining numbers


function print(i, n){

  // base case
  if(i > n) return;

  // current work
  console.log(i);

  // recursive call
  print(i+1, n);
}

print(1, 5);

// RECURSION TREE
// print(1)
//    ↓
// print(2)
//    ↓
// print(3)
//    ↓
// print(4)
//    ↓
// print(5)
//    ↓
// print(6) ← stop


// VERY IMPORTANT TERM

// This is called:

// Parameterized recursion

// Why?

// Because:

// State is passed using parameters

// Example:

// print(i, n)



// ---------------------------------------------------------------------------------------
  

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


// Backtracking vs Parameterized Recursion

// | Type                    | Pattern        | Use case                           |
// | ----------------------- | -------------- | ---------------------------------- |
// | Backtracking            | recurse → work | when result depends on return path |
// | Parameterized recursion | work → recurse | when you can carry state forward   |
