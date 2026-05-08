// Print a name n times using recursion

// Example:

// name = "Alex"
// n = 3

// Output:

// Alex
// Alex
// Alex

// Using loop

// for(let i = 1; i <= 3; i++){
//     console.log("Alex");
// }

// WHAT DOES LOOP DO?

// Every iteration:

// 1. print
// 2. move to next iteration

// RECURSION DOES THE SAME THING

// But instead of:

// loop moving to next iteration

// we use:

// function calling itself

// CORE RECURSION IDEA

// Think like this:

// "Print once,
// then ask recursion to print remaining times."

// VERY IMPORTANT MINDSET

// Suppose:

// n = 3

// You can think:

// First call
// Print 1 time yourself

// Then:

// Ask recursion to print remaining 2 times
// Then recursion does:
// Print 1 time
// Ask recursion to print remaining 1 time
// Then:
// Print 1 time
// Ask recursion to print remaining 0 times
// Then stop.

// THIS IS THE ENTIRE RECURSION PHILOSOPHY
// Do small work yourself
// delegate remaining work to recursion

// WHEN SHOULD RECURSION STOP?

// This is called:

// BASE CASE

// Suppose:

// i = 4
// n = 3

// That means:

// We already printed 3 times

// So stop.

// BASE CASE
// if(i > n) return;

// Meaning:

// Stop recursion

// Time Complexity: O(n)
// Space Complexity: O(n)

function printNames(i, n){
  // Base Case
  if(i > n) return;

  // Current Work
  console.log("Alex");

  // recursive call
  printName(i + 1, n);
}

printName(1, 3);

// RECURSION TREE VISUALIZATION
// printName(1)
//     ↓
// printName(2)
//     ↓
// printName(3)
//     ↓
// printName(4) ← stop


// CORE RECURSION TEMPLATE

// Almost every recursion problem follows:

// function recursion(state){

//     // base case

//     // current work

//     // recursive call
// }
