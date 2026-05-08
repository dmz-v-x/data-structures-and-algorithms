// Factorial of a number using recursion

// Find factorial of a number.

// Example:

// 5! = 5 × 4 × 3 × 2 × 1

// Answer:

// 120

// FIRST UNDERSTAND FACTORIAL PROPERLY

// Very important.

// WHAT IS FACTORIAL?
// n! = n × (n-1) × (n-2) ... × 1

// EXAMPLE
// 5! = 5 × 4 × 3 × 2 × 1

// MOST IMPORTANT RECURSION INSIGHT

// Look carefully:

// 5! = 5 × 4!

// because:

// 4! = 4 × 3 × 2 × 1

// Similarly:

// 4! = 4 × 3!
// 3! = 3 × 2!
// 2! = 2 × 1!

// CORE FORMULA
// factorial(n) = n × factorial(n-1)

// BASE CASE

// Where should recursion stop?

// Suppose:

// factorial(1)

// We know:

// 1! = 1

// So no more recursion needed.

// BASE CASE
// if(n === 1) return 1;

// VISUALIZATION

// Suppose:

// factorial(5)

// Think like this:

// Current function says:
// "I know answer is:
// 5 × factorial(4)"

// But:

// I don't know factorial(4)

// So recursion calculates it.

// Then:

// factorial(4)
// = 4 × factorial(3)

// Then:

// factorial(3)
// = 3 × factorial(2)

// Then:

// factorial(2)
// = 2 × factorial(1)

// Then:

// factorial(1)
// = 1

// STOP.

// RECURSION TREE
// factorial(5)
//     ↓
// 5 × factorial(4)
//          ↓
//     4 × factorial(3)
//              ↓
//         3 × factorial(2)
//                  ↓
//             2 × factorial(1)
//                          ↓
//                          1



// GOING DOWN

// Recursion keeps saying:

// "I need smaller answer first"

// So it keeps going deeper.

// COMING BACK UP

// Now values start returning.

// factorial(1)

// returns:

// 1
// factorial(2)

// gets:

// 2 × 1 = 2

// returns:

// 2
// factorial(3)

// gets:

// 3 × 2 = 6

// returns:

// 6
// factorial(4)

// gets:

// 4 × 6 = 24

// returns:

// 24
// factorial(5)

// gets:

// 5 × 24 = 120

// returns:

// 120

// THIS IS FUNCTIONAL RECURSION

// Because:

// Every call RETURNS something


// Time Complexity: O(n)
// Space Complexity: O(n)

function factorial(n){

  // base case
  if(n === 1) return 1;

  // recursive relation
  return n * factorial(n-1);
}

factorial(5);
