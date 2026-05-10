// Fibonacci Number

// Definition:
// fib(0) = 0  
// fib(1) = 1  
// fib(n) = fib(n-1) + fib(n-2)

// Understanding Fibonacci Properly

// Fibonacci says:

// Every number is formed using previous two numbers.

// Sequence:

// 0 1 1 2 3 5 8 13 21 ...

// How?

// 0
// 1
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8

// Mathematically:

// F(n)=F(n−1)+F(n−2)

// Base cases:

// F(0)=0,F(1)=1

// What Does This Formula REALLY Mean?

// This formula means:

// To calculate current Fibonacci number,
// you NEED:

// previous Fibonacci number
// second previous Fibonacci number

// Example:

// To calculate:

// F(5)

// We need:

// F(4) and F(3)

// To calculate:

// F(4)

// We need:

// F(3) and F(2)

// Notice something important:

// F(3)

// is needed AGAIN.

// This is the seed of DP.

// Thinking Like Recursion

// Now we think:

// “If I know how to solve smaller Fibonacci,
// I can solve bigger Fibonacci.”

// This is recursive thinking.




// Recursive Solution


function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

// What Happens Internally?

// Suppose:

// fib(5)

// gets called.

// It says:

// I cannot directly calculate F(5)

// So I need:
// F(4) + F(3)

// So function pauses itself.

// Then calls:

// fib(4)

// // Recursion Tree:

// fib(5)
// |
// |---- fib(4)
// |      |
// |      |---- fib(3)
// |      |      |
// |      |      |---- fib(2)
// |      |      |      |
// |      |      |      |---- fib(1) = 1
// |      |      |      |
// |      |      |      |---- fib(0) = 0
// |      |      |
// |      |      |---- fib(1) = 1
// |      |
// |      |---- fib(2)
// |             |
// |             |---- fib(1) = 1
// |             |
// |             |---- fib(0) = 0
// |
// |---- fib(3)
//        |
//        |---- fib(2)
//        |      |
//        |      |---- fib(1) = 1
//        |      |
//        |      |---- fib(0) = 0
//        |
//        |---- fib(1) = 1

// The BIG PROBLEM

// Look carefully:

// How many times is:

// fib(3)

// calculated?

// TWO TIMES.

// How many times is:

// fib(2)

// calculated?

// THREE TIMES.

// How many times is:

// fib(1)

// calculated?

// MANY TIMES.

// This repeated work is called:

// Overlapping Subproblems

// This is the HEART of dynamic programming.

// Visualizing the Waste

// Imagine:

// You solve:

// fib(3)

// once.

// You already know answer is:

// 2

// But recursion AGAIN solves entire subtree.

// Again:

// fib(3)
// → fib(2)
// → fib(1)
// → fib(0)

// Same work repeated.

// This is waste.

// Why Recursive Fibonacci is Slow

// Each function creates MORE functions.

// Those create MORE functions.

// This becomes explosive.

// Approximate growth:

// 2^n

// Very huge.

// Example:

// fib(40)

// can create millions of calls.

// Even though only 41 answers actually exist:

// fib(0) to fib(40)

// This realization creates DP.

// The Core DP Intuition

// DP says:

// “Why calculate same thing again and again?”

// Instead:

// Store answer once.
// Reuse later.

// That is ALL DP fundamentally is.

// IMPORTANT MINDSET

// Dynamic Programming is NOT:

// magic
// formulas
// memorization

// It is simply:

// 1. Break into smaller problems
// 2. Solve once
// 3. Store result
// 4. Reuse result

// That’s it.

// VERY IMPORTANT OBSERVATION

// In Fibonacci:

// What changes?

// Only:

// n

// That means:

// State is:

// fib(n)

// This idea becomes HUGE later in DP.

// Future DP problems become:

// dp(index)
// dp(index, target)
// dp(i, j)
// dp(row, col)

// But Fibonacci teaches the first state:
// just one changing variable.

//-------------------- Top Down DP

// The Main Problem Recap

// Earlier we saw:

// fib(3)

// was calculated multiple times.

// Same for:

// fib(2)
// fib(1)

// This repeated calculation is waste.

// So we ask:

// “Can we remember already computed answers?”

// YES.

// That idea is called:

// Memoization

// What is Memoization REALLY?

// Memoization means:

// Store answer after solving.
// If needed again,
// reuse stored answer.

// That’s it.

// Real Life Analogy

// Imagine:

// Your friend asks:

// "What is 523 × 918?"

// You calculate it once.

// Now if 5 people ask same question again,
// will you recalculate from scratch?

// No.

// You remember answer.

// DP does same thing.

// What Will We Store?

// Earlier we said:

// State is:

// fib(n)

// So we store:

// answer for each n

// Example:

// fib(0) = 0
// fib(1) = 1
// fib(2) = 1
// fib(3) = 2
// fib(4) = 3

// We can store these in array.


// First Memoization Code

function fib(n, dp = []){
  if(n === 0) return 0;
  if(n === 1) return 1;

  if(dp[n] !== undefined){
    return dp[n];
  }

  dp[n] = fib(n-1, dp) + fib(n-2, dp);

  retrun dp[n];
}

// Understanding the dp Array
// dp = []

// This array stores answers.

// Example after some calculations:

// Index:  0 1 2 3 4 5
// Value:  0 1 1 2 3 5

// Meaning:

// dp[4] = 3

// means:

// fib(4) already solved
// answer is 3

// Understanding Base Cases
// if(n === 0) return 0;
// if(n === 1) return 1;

// These stop recursion.

// Otherwise recursion never ends.

// These are smallest solvable problems.

// MOST IMPORTANT LINE

// This line is the HEART of memoization:

// if(dp[n] !== undefined){
//     return dp[n];
// }

// Meaning:

// "Have I already solved fib(n)?"

// If YES:

// return stored answer immediately

// No recursion.

// No repeated work.

// THIS is optimization.

// Understanding Storage Line
// dp[n] = fib(n - 1, dp) + fib(n - 2, dp);

// Meaning:

// 1. Solve smaller problems
// 2. Add answers
// 3. Store result

// VERY IMPORTANT:

// We are NOT storing before solving.

// We first solve smaller problems,
// then store final answer.

// COMPLETE DRY RUN OF fib(5)

// Initial Call
// fib(5)

// Current dp:

// []
// fib(5)

// Needs:

// fib(4) + fib(3)

// So first goes to:

// fib(4)
// fib(4)

// Needs:

// fib(3) + fib(2)

// Goes to:

// fib(3)
// fib(3)

// Needs:

// fib(2) + fib(1)

// Goes to:

// fib(2)
// fib(2)

// Needs:

// fib(1) + fib(0)
// fib(1)

// Base case:

// returns 1
// fib(0)

// Base case:

// returns 0

// Now:

// fib(2) = 1 + 0 = 1

// Store:

// dp[2] = 1

// dp becomes:

// [empty, empty, 1]
// Return to fib(3)

// Now needs:

// fib(1)

// Base case returns:

// 1

// Now:

// fib(3) = 1 + 1 = 2

// Store:

// dp[3] = 2

// dp:

// [empty, empty, 1, 2]
// Return to fib(4)

// Now needs:

// fib(2)

// BUT NOW WATCH CAREFULLY.

// This time:

// if(dp[2] !== undefined)

// TRUE.

// So immediately:

// return 1

// NO recursion happens.

// This is memoization magic.

// Continue fib(4)

// Now:

// fib(4) = 2 + 1 = 3

// Store:

// dp[4] = 3

// dp:

// [empty, empty, 1, 2, 3]
// Return to fib(5)

// Now needs:

// fib(3)

// Again:

// dp[3]

// already exists.

// Immediately returns:

// 2

// Again no recursion.

// Finish fib(5)
// fib(5) = 3 + 2 = 5

// Store:

// dp[5] = 5

// Final dp:

// [empty, empty, 1, 2, 3, 5]

// The BIG REALIZATION

// Without memoization:

// fib(3)
// fib(2)
// fib(1)

// were recalculated many times.

// With memoization:

// Each state solved ONLY ONCE.

// That is why complexity improves massively.

// Time Complexity Transformation

// Without memoization:

// O(2^n)

// Very slow.

// With memoization:

// O(n)

// Because:
// each fib(n) computed once.

// Huge optimization.


// Core DP Formula

// This is the FIRST REAL DP TEMPLATE you are learning:

// 1. Define state
// 2. Define recurrence
// 3. Store answers
// 4. Reuse answers

// Fibonacci teaches entire DP foundation.

// -------------------------

// Botton Up DP (Tabulation)

// First Understand the Big Difference

// Earlier:

// Memoization

// worked like this:

// Big problem
// ↓
// Break into smaller problems
// ↓
// Store answers while returning back

// This is:

// Top Down

// because we started from:

// fib(5)

// and moved downward.

// Now:

// Tabulation

// does opposite.

// It says:

// I already know smallest answers.
// Let me build bigger answers gradually.

// This is:

// Bottom Up

// The BIG Intuition

// Look again at Fibonacci:

// F(n)=F(n−1)+F(n−2)

// Suppose we want:

// F(5)

// If somehow we already know:

// F(4)
// F(3)

// then calculating:

// F(5)

// is easy.

// Similarly:

// If we know:

// F(3)
// F(2)

// we can calculate:

// F(4)

// This suggests:

// Start from smallest known values
// and build upward.

// This is tabulation intuition.

// What Smallest Answers Already Exist?

// Base cases:

// F(0)=0,F(1)=1

// These are already known.

// Now we can build everything else.

// Visualizing Table Building

// We create array:

// dp[]

// Initially:

// Index: 0 1 2 3 4 5
// Value: ? ? ? ? ? ?

// Now fill known values:

// Index: 0 1 2 3 4 5
// Value: 0 1 ? ? ? ?

// Now compute one by one.

// Build F(2)

// Using:

// F(2)=F(1)+F(0)

// We already know:

// F(1)=1
// F(0)=0

// So:

// F(2)=1

// Store:

// dp[2]=1

// Table becomes:

// Index: 0 1 2 3 4 5
// Value: 0 1 1 ? ? ?

// Build F(3)

// Using:

// F(3)=F(2)+F(1)

// Already known:

// F(2)=1
// F(1)=1

// So:

// F(3)=2

// Store:

// dp[3]=2

// Table:

// Index: 0 1 2 3 4 5
// Value: 0 1 1 2 ? ?

// Build Remaining Values

// Similarly:

// F(4)=F(3)+F(2)=2+1=3
// F(5)=F(4)+F(3)=3+2=5

// Final table:

// Index: 0 1 2 3 4 5
// Value: 0 1 1 2 3 5

// Answer:

// dp[5]=5

// IMPORTANT OBSERVATION

// Notice something HUGE.

// No recursion happened.

// No call stack.

// No repeated function calls.

// Only:

// simple iteration

// This is why tabulation is often faster.

Code:

function fib(n){
  let dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;

  for(let i = 2; i<=n; i++){
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
}

// Understanding Array Creation
// let dp = new Array(n + 1);

// Why:

// n + 1

// ?

// Because:

// If:

// n = 5

// we need indices:

// 0 1 2 3 4 5

// Total 6 spaces.

// Base Case Initialization
// dp[0] = 0;
// dp[1] = 1;

// These are smallest solved subproblems.

// Everything builds from these.

// MOST IMPORTANT LOOP
// for(let i = 2; i <= n; i++)

// Meaning:

// Start building from smallest unknown answer.

// We already know:

// dp[0]
// dp[1]

// So start from 2.

// MOST IMPORTANT TRANSITION

// This line is the HEART of DP:

// dp[i] = dp[i - 1] + dp[i - 2];

// This is called:

// Transition Relation

// Meaning:

// Current answer depends on previous answers.

// THIS idea appears in almost EVERY DP problem.

// COMPLETE DRY RUN

// Suppose:

// fib(5)

// Initial:

// dp = [0,1,_,_,_,_]
// i = 2
// dp[2] = dp[1] + dp[0]
//       = 1 + 0
//       = 1

// Array:

// [0,1,1,_,_,_]
// i = 3
// dp[3] = dp[2] + dp[1]
//       = 1 + 1
//       = 2

// Array:

// [0,1,1,2,_,_]
// i = 4
// dp[4] = dp[3] + dp[2]
//       = 2 + 1
//       = 3

// Array:

// [0,1,1,2,3,_]
// i = 5
// dp[5] = dp[4] + dp[3]
//       = 3 + 2
//       = 5

// Final:

// [0,1,1,2,3,5]

// Return:

// 5


// The BIG DP REALIZATION

// Memoization and Tabulation solve SAME problem.

// Difference:

// Memoization:

// Recursion
// Top Down
// Uses call stack
// Solves only needed states

// Tabulation:

// Iteration
// Bottom Up
// No recursion
// Builds all states

// Which is Better?

// Depends.

// Memoization Advantages
// easier to think
// natural recursion
// solves only needed states

// Tabulation Advantages
// no recursion overhead
// often faster
// avoids stack overflow
// easier space optimization


// -------------------

// Space Optimization

// First Observe the Dependency Carefully

// Earlier we had:

// dp[i]=dp[i−1]+dp[i−2]

// Now think VERY carefully.

// To calculate:

// dp[5]

// what do we need?

// Only:

// dp[4]
// dp[3]

// Do we need:

// dp[0] ?
// dp[1] ?
// dp[2] ?

// NO.

// Very important realization.

// The BIG QUESTION

// If we only need:

// previous two values

// then why are we storing:

// entire array?

// That is wasted memory.

// This realization creates:

// Space Optimization

// Visualizing the Waste

// Earlier:

// Index: 0 1 2 3 4 5
// Value: 0 1 1 2 3 5

// But while calculating:

// dp[5]

// we only actually use:

// dp[4]
// dp[3]

// Everything older becomes useless.

// Core Optimization Intuition

// Instead of storing ALL answers:

// Store ONLY necessary answers.

// In Fibonacci:
// necessary answers =
// previous two numbers.

// Replacing Array with Variables

// Instead of:

// dp[i - 1]
// dp[i - 2]

// we can use:

// prev1
// prev2

// Meaning:

// prev1 = previous Fibonacci
// prev2 = second previous Fibonacci

// Building the Logic Slowly

// We know:

// F(0)=0
// F(1)=1

// So initially:

// prev2 = 0
// prev1 = 1

// Now calculate next Fibonacci.

// Calculating Current Value

// For:

// F(2)

// we do:

// current=prev1+prev2

// Meaning:

// current = 1 + 0 = 1

// Now update variables.



// MOST IMPORTANT PART (VARIABLE SHIFTING)

// After calculating current value:

// current = F(2)

// we must move window forward.

// This is the MOST IMPORTANT visualization.

// Before shifting:

// prev2 = F(0)
// prev1 = F(1)
// current = F(2)

// After shifting:

// prev2 becomes old prev1
// prev1 becomes current

// Meaning:

// prev2 = prev1
// prev1 = current

// Now:

// prev2 = F(1)
// prev1 = F(2)

// Ready for next iteration.

// function fib(n, memo = {}){
//   if(n in memo) return memo[n];
//   if(n <= 1) return n;
//   memo[n] = fib(n-1, memo) + fib(n-2, memo);

//   return memo[n];
// }

// Visualizing Like Sliding Window

// This is extremely important.

// Imagine moving window:

// Initially:

// [0, 1]

// Calculate next:

// 0 + 1 = 1

// Move window:

// [1, 1]

// Calculate next:

// 1 + 1 = 2

// Move:

// [1, 2]

// Calculate next:

// 1 + 2 = 3

// Move:

// [2, 3]

// This continues.

// This “moving dependency window” appears in MANY DP optimizations later.


function fib(n){
  if(n === 0) return 0;
  if(n === 1) return 1;

  let prev2 = 0;
  let prev1 = 1;

  for(let i = 2; i<=n; i++){
    let current = prev2 + prev1;

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// Time and Space Complexity
// Before Optimization

// Tabulation:

// Time:

// O(n)

// Space:

// O(n)

// because array used.

// After Optimization

// Time:

// O(n)

// Still same.

// But space:

// O(1)

// because only variables used.

// Huge improvement.


// We learned: Pure Recursion -> Memoization -> Tabulation -> Space Optimization
