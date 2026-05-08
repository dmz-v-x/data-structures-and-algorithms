// Print from N to 1 using recursion

// Print numbers from:

// N → 5 to 1

// Example:

// N = 5

// Output:

// 5
// 4
// 3
// 2
// 1

// THINK NORMALLY FIRST

// Loop solution:

// for(let i = 5; i >= 1; i--){
//     console.log(i);
// }

// WHAT CHANGED FROM PREVIOUS PROBLEM?

// Earlier:

// 1 → N

// Now:

// N → 1

// HOW SHOULD WE THINK RECURSIVELY?

// Very important.

// Suppose:

// print(5)

// Current function should:

// 1. print current number
// 2. ask recursion to print remaining smaller numbers

// EXAMPLE THINKING

// print 5 yourself
// then ask recursion to print 4 → 1

// Then recursion does:

// print 4
// then ask recursion to print 3 → 1

// FUNCTION MEANING

// We define:

// print(i, n)

// Meaning:

// "I am currently at number i

// FOR THIS PROBLEM

// We start from:

// print(5)

// BASE CASE

// When should recursion stop?

// Suppose:

// i < 1

// Meaning:

// Nothing left to print

// BASE CASE
// if(i < 1) return;

// CURRENT WORK

// Current function prints:

// console.log(i);

// RECURSIVE CALL

// Ask recursion to handle smaller problem:

// print(i - 1, n);


// Time Complexity: O(N)
// Space Complexity: O(N)


function print(i){

  // Base case
  if(i < 1) return;

  console.log(i);

  print(i - 1);
}

print(5);

