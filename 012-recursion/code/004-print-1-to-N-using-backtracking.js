// Print 1 to N using Backtracking

// Example:

// N = 5

// Output:

// 1
// 2
// 3
// 4
// 5

// IMPORTANT DIFFERENCE

// Earlier we did:

// console.log(i);
// print(i + 1);

// Meaning:

// print BEFORE recursion

// NOW WE WILL DO:
// print(i - 1);
// console.log(i);

// Meaning:

// print AFTER recursion returns

// This changes everything.

// THINK VERY CAREFULLY

// Suppose:

// print(5)

// Instead of printing immediately:

// we go deeper FIRST

// FLOW

// print(5)
//     ↓
// print(4)
//     ↓
// print(3)
//     ↓
// print(2)
//     ↓
// print(1)
//     ↓
// print(0)

// THEN WHAT?

// At:

// print(0)

// base case hits.

// Now recursion starts:

// RETURNING BACK

// THIS IS THE MAGIC

// While coming back:

// print 1
// print 2
// print 3
// print 4
// print 5

// VISUALIZATION

// Think of recursion stack like stairs.

// Going DOWN
// 5
// ↓
// 4
// ↓
// 3
// ↓
// 2
// ↓
// 1
// ↓
// 0

// No printing yet.

// Coming BACK UP

// Now:

// 1
// ↑
// 2
// ↑
// 3
// ↑
// 4
// ↑
// 5

// Printing happens here.

// THIS IS CALLED
// Backtracking phase

// Because:

// work happens while returning back

// Time Complexity:O(n)
// Space Complexity: O(n)

function print1toN(n){ // Backtracking Pattern
  
  // base case
  if(n < 1) return 

  // recursive call
  print1toN(n-1);

  // current work after returning
  console.log(n);
}

print(5);
