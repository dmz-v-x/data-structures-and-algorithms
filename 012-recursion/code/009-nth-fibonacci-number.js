// Fibonacci Number

// WHAT IS FIBONACCI?

// Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13...

// RULE

// Every number is:

// sum of previous two numbers

// EXAMPLE
// fib(5)

// = fib(4) + fib(3)

// because:

// 3 + 2 = 5

// VISUALIZE THE PATTERN

// Let’s write first few values.

// Base values
// fib(0) = 0
// fib(1) = 1

// Next values
// fib(2) = fib(1) + fib(0)
//        = 1 + 0
//        = 1
// fib(3) = fib(2) + fib(1)
//        = 1 + 1
//        = 2
// fib(4) = fib(3) + fib(2)
//        = 2 + 1
//        = 3
// fib(5) = fib(4) + fib(3)
//        = 3 + 2
//        = 5

// MOST IMPORTANT OBSERVATION

// Unlike factorial:

// factorial had ONE recursive call

// Example:

// n * factorial(n-1)


// FIBONACCI HAS TWO RECURSIVE CALLS
// fib(n-1) + fib(n-2)

// This changes EVERYTHING.

// CORE RECURSIVE THINKING

// Suppose:

// fib(5)

// Current function says:

// "I can calculate fib(5)
// if I know fib(4) and fib(3)"

// So recursion calculates them.

// THIS IS THE RECURSIVE FORMULA
// fib(n) = fib(n-1) + fib(n-2)


// BASE CASE

// When should recursion stop?

// We already know:

// fib(0) = 0
// fib(1) = 1

// So:

// if(n <= 1) return n;


// WHY return n?

// Because:

// If n = 0
// return 0
// If n = 1
// return 1

// Works perfectly.










// Iterative Approach

function Nthfibonaaci(n){
  let f0 = 0;
  let f1 = 1;
  let nthFib = 0;
  for(let i = 2; i<=n; i++){
    nthFib = f0 + f1;
    f0 = f1;
    f1 = nthFib;
  }
  return nthFib;
}

console.log(NthFibonacci(10));

// Recursive Approach

// Time Complexity: O(2^n) Not exactly 2^n but nearly exponential
function NthFibonacci(n){
  // base case
  if(n <= 1) return n;

  // recursive relation
  return NthFibonacci(n-1) + NthFibonacci(n - 2);
}

console.log(fib(5));

// RECURSION TREE

// fib(5)
//                 fib(5)
//                /      \
//           fib(4)      fib(3)
//           /    \       /    \
//       fib(3) fib(2) fib(2) fib(1)
//        /   \    / \    / \
//    fib(2) fib(1)...


// NOTICE SOMETHING VERY IMPORTANT
// fib(3) computed multiple times
// fib(2) computed multiple times

// This is HUGE.

// THIS IS CALLED
// Overlapping subproblems

// This is the foundation of:

// Dynamic Programming



// COMPLEXITY INSIGHT

// This solution is VERY slow.

// Why?

// Because:

// same subproblems repeat many times

// Example:

// fib(3)
// fib(2)

// computed again and again.

// TIME COMPLEXITY
// O(2^n)

// Exponential.
