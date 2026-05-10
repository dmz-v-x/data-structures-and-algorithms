// Problem says:

// You are climbing stairs.

// You can:

// climb 1 stair
// OR
// climb 2 stairs

// Question:

// How many different ways can you reach the top?

// Example Visualization

// Suppose:

// n = 3

// Meaning:

// 3 stairs

// You can climb:

// Way 1
// 1 → 1 → 1
// Way 2
// 1 → 2
// Way 3
// 2 → 1

// Total ways:

// 3

// IMPORTANT OBSERVATION

// Question is NOT asking:

// minimum steps

// Question asks:

// TOTAL NUMBER OF WAYS

// Very important.

// So our brain should think:

// counting problem

// The MOST IMPORTANT QUESTION

// Suppose you are standing at stair:

// n

// How could you have reached here?

// Think carefully.

// Only TWO possibilities exist.

// POSSIBILITY 1

// You came from:

// n - 1

// by taking:

// 1 step

// POSSIBILITY 2

// You came from:

// n - 2

// by taking:

// 2 steps

// THAT'S IT.

// No other possibilities.

// This is the ENTIRE problem.

// The HUGE DP REALIZATION

// Suppose:

// ways(n)

// means:

// number of ways to reach stair n

// Then:

// To reach stair:

// n

// we can:

// come from n-1
// come from n-2

// So total ways become:

// ways(n)=ways(n−1)+ways(n−2)

// STOP HERE.

// Look carefully.

// Does this formula look familiar?

// Hidden Fibonacci Pattern

// Fibonacci formula was:

// F(n)=F(n−1)+F(n−2)

// Climbing stairs formula is:

// ways(n)=ways(n−1)+ways(n−2)

// EXACT SAME STRUCTURE.

// This is one of the BIGGEST DP lessons:

// Many DP problems are hidden Fibonacci patterns.

// Problem story changes.

// Recurrence stays same.

// Understanding WHY Addition Happens

// Very important.

// Why PLUS?

// Why not:

// multiply?
// max?
// min?

// Because:

// All ways from (n-1)
// AND
// all ways from (n-2)
// can reach n.

// We are counting ALL possibilities.

// So we ADD.



// Finding Base Cases

// This is VERY IMPORTANT in DP.

// We must know smallest solvable problems.

// Base Case 1

// Suppose:

// n = 0

// How many ways to stay at ground?

// Exactly:

// 1 way

// Why?

// Because:
// doing nothing is also one valid way.

// So:

// ways(0)=1

// Base Case 2

// Suppose:

// n = 1

// Ways?

// Only:

// 1

// Just take one step.

// So:

// ways(1)=1


// Building Small Values Manually

// Now let us build intuition manually.

// n = 0
// 1 way
// n = 1
// 1
// n = 2

// Possible:

// 1 + 1
// 2

// Total:

// 2
// n = 3

// Possible:

// 1+1+1
// 1+2
// 2+1

// Total:

// 3
// n = 4

// Possible ways:

// 1+1+1+1
// 1+1+2
// 1+2+1
// 2+1+1
// 2+2

// Total:

// 5

// Sequence becomes:

// 1 1 2 3 5

// Again Fibonacci.


// Recursive Thinking

// Now think recursively.

// Suppose:

// ways(4)

// asks:

// “How many ways to reach stair 4?”

// It says:

// I can come from:
// ways(3)
// ways(2)

// So:

// ways(4)=ways(3)+ways(2)

// Similarly:

// ways(3)

// needs:

// ways(2)
// ways(1)

// Again recursive breakdown.

Recursive Solution:

function climbStairs(n){
  if(n === 0) return 1;
  if(n === 1) return 1;

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// Notice:

// Structure almost identical to Fibonacci.

// Only base cases changed.

// COMPLETE RECURSION TREE

// Suppose:

// climbStairs(4)

// Tree becomes:

// climbStairs(4)
// |
// |---- climbStairs(3)
// |      |
// |      |---- climbStairs(2)
// |      |      |
// |      |      |---- climbStairs(1)
// |      |      |
// |      |      |---- climbStairs(0)
// |      |
// |      |---- climbStairs(1)
// |
// |---- climbStairs(2)
//        |
//        |---- climbStairs(1)
//        |
//        |---- climbStairs(0)


// SAME DP PROBLEM RETURNS

// Again:

// climbStairs(2)

// calculated multiple times.

// Repeated work again.

// Meaning:

// Overlapping Subproblems exist.

// This confirms:

// Dynamic Programming applies.

// SIGNAL 1

// Problem can break into smaller same problems.

// ways(n)
// depends on
// ways(n-1), ways(n-2)
// SIGNAL 2

// Repeated calculations exist.

// SIGNAL 3

// Question asks:

// count ways
// min/max
// possible/impossible

// These often indicate DP.

// --------------

// Recap the Recursive Formula

// We discovered:

// ways(n)=ways(n−1)+ways(n−2)

// Base cases:

// ways(0)=1,ways(1)=1

// Recursive code was:

// function climbStairs(n){

//     if(n === 0) return 1;
//     if(n === 1) return 1;

//     return climbStairs(n - 1) + climbStairs(n - 2);
// }

// Problem:

// Repeated calculations.


// Identifying Repeated States

// Suppose:

// climbStairs(5)

// Recursion tree creates:

// climbStairs(4)
// climbStairs(3)

// Then:

// climbStairs(3)

// again creates:

// climbStairs(2)
// climbStairs(1)

// But later:

// climbStairs(2)

// gets calculated AGAIN.

// Repeated work.

// Same problem as Fibonacci.

// The DP Thought Process

// DP asks:

// “If I already know answer for stair n,
// why calculate again?”

// Instead:

// store it once
// reuse later

// This is memoization.

// What Will We Store?

// State is:

// ways(n)

// So we store:

// answer for every stair n

// Example:

// dp[2] = 2
// dp[3] = 3
// dp[4] = 5

// Meaning:

// number of ways already computed

Code:

function climbStairs(n, dp = []){
  if(n === 0) return 1;
  if(n === 1) return 1;

  if(dp[n] !== undefined){
    return dp[n];
  }

  dp[n] = climbStairs(n - 1, dp) + climbStairs(n - 2, dp);
  return dp[n];
}

// Understanding the dp Array

// Suppose after some calculations:

// Index: 0 1 2 3 4 5
// Value: - - 2 3 5 8

// Meaning:

// dp[4] = 5

// means:

// 5 ways exist to reach stair 4

// The MOST IMPORTANT LINE

// Again the heart of memoization:

// if(dp[n] !== undefined){
//     return dp[n];
// }

// Meaning:

// “Did I already solve this stair?”

// If YES:

// reuse answer immediately

// No recursion.

// No repeated subtree.

// COMPLETE DRY RUN

// Now comes the MOST IMPORTANT PART.

// Suppose:

// climbStairs(5)

// Initially:

// dp = []
// climbStairs(5)

// Needs:

// climbStairs(4)
// +
// climbStairs(3)

// Go to:

// climbStairs(4)
// climbStairs(4)

// Needs:

// climbStairs(3)
// +
// climbStairs(2)

// Go to:

// climbStairs(3)
// climbStairs(3)

// Needs:

// climbStairs(2)
// +
// climbStairs(1)

// Go to:

// climbStairs(2)
// climbStairs(2)

// Needs:

// climbStairs(1)
// +
// climbStairs(0)
// climbStairs(1)

// Base case:

// returns 1
// climbStairs(0)

// Base case:

// returns 1

// Now:

// ways(2)=1+1=2

// Store:

// dp[2] = 2

// dp becomes:

// [empty, empty, 2]
// Return to climbStairs(3)

// Now needs:

// climbStairs(1)

// Base case returns:

// 1

// Now:

// ways(3)=2+1=3

// Store:

// dp[3] = 3

// dp:

// [empty, empty, 2, 3]
// Return to climbStairs(4)

// Now needs:

// climbStairs(2)

// BUT NOW WATCH CAREFULLY.

// This time:

// dp[2]

// already exists.

// So immediately:

// return 2

// NO recursion happens.

// Entire subtree skipped.

// THIS is DP optimization.

// Continue climbStairs(4)

// Now:

// ways(4)=3+2=5

// Store:

// dp[4] = 5

// dp:

// [empty, empty, 2, 3, 5]
// Return to climbStairs(5)

// Now needs:

// climbStairs(3)

// Again:

// dp[3]

// already exists.

// Immediately returns:

// 3

// No recursion again.

// Finish climbStairs(5)

// ways(5)=5+3=8

// Store:

// dp[5] = 8

// Final dp:

// [empty, empty, 2, 3, 5, 8]

// Answer:

// 8

// HUGE DP REALIZATION

// Without memoization:

// same stairs solved repeatedly

// With memoization:

// each stair solved ONLY ONCE

// This is the essence of DP.


// Complexity Transformation
// Pure Recursion

// Time:

// O(2^n)

// Very slow.

// Memoization

// Time:

// O(n)

// Why?

// Because:
// each stair computed once.


// THE MOST IMPORTANT DP TEMPLATE

// This template appears EVERYWHERE.

// Step 1

// Define state.

// Example:

// ways(n)
// Step 2

// Find recurrence.

// ways(n)=ways(n−1)+ways(n−2)

// Step 3

// Find base cases.

// ways(0)=1,ways(1)=1

// Step 4

// Store repeated states.

// dp[n]
// Step 5

// Reuse cached answers.



// ----------------------


// Tabulation for Climbing Stairs (Bottom Up DP)


// Recap the Recurrence

// We discovered:

// ways(n)=ways(n−1)+ways(n−2)

// Base cases:

// ways(0)=1,ways(1)=1

// Memoization solved this recursively.

// Now we will solve:
// WITHOUT recursion.


// The BIG Bottom-Up Intuition

// Instead of asking:

// “How do I solve ways(5)?”

// we think:

// “I already know smallest answers.
// Let me build bigger answers gradually.”

// This is:

// Bottom-Up Thinking

// What Answers Already Exist?

// Base cases already known:

// ways(0) = 1
// ways(1) = 1

// Now we can build:

// ways(2)
// ways(3)
// ways(4)
// ways(5)

// step by step.

// Creating the DP Table

// Suppose:

// n = 5

// We create:

// dp[]

// Initially:

// Index: 0 1 2 3 4 5
// Value: ? ? ? ? ? ?

// Now fill base cases:

// Index: 0 1 2 3 4 5
// Value: 1 1 ? ? ? ?


// Building ways(2)

// Using recurrence:

// ways(2)=ways(1)+ways(0)

// Already known:

// ways(1)=1
// ways(0)=1

// So:

// ways(2)=2

// Store:

// dp[2]=2

// Table becomes:

// Index: 0 1 2 3 4 5
// Value: 1 1 2 ? ? ?

// Building ways(3)

// Using:

// ways(3)=ways(2)+ways(1)

// Known:

// ways(2)=2
// ways(1)=1

// So:

// ways(3)=3

// Store:

// dp[3]=3

// Table:

// Index: 0 1 2 3 4 5
// Value: 1 1 2 3 ? ?

// Continue Building

// Similarly:

// ways(4)

// ways(4)=ways(3)+ways(2)=3+2=5

// ways(5)

// ways(5)=ways(4)+ways(3)=5+3=8

// Final table:

// Index: 0 1 2 3 4 5
// Value: 1 1 2 3 5 8

// Answer:

// dp[5]=8


// MOST IMPORTANT OBSERVATION

// Notice:

// No recursion happened.

// No recursive tree.

// No call stack.

// Only:

// iterative building

// This is tabulation.


Code:

function climbingStairs(n){
  let dp = new Array(n + 1);

  dp[0] = 1;
  dp[1] = 1;

  for(let i = 2; i<=n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}


// Understanding Array Creation
// let dp = new Array(n + 1);

// If:

// n = 5

// we need indices:

// 0 1 2 3 4 5

// So total:

// 6 spaces

// Hence:

// n + 1


// Memoization vs Tabulation

// Memoization
// Top Down
// Recursion
// Cache while returning


// Tabulation
// Bottom Up
// Iteration
// Build from smallest states

// Both solve SAME recurrence.


// ---------------------------

// Space Optimized

// First Observe the Transition Carefully

// Tabulation transition was:

// dp[i]=dp[i−1]+dp[i−2]

// Now think VERY carefully.

// To calculate:

// dp[5]

// what do we actually need?

// Only:

// dp[4]
// dp[3]

// Do we need:

// dp[0] ?
// dp[1] ?
// dp[2] ?

// NO.

// Very important realization.

// The BIG Optimization Question

// If current answer only depends on:

// previous two answers

// then why store:

// entire dp array?

// Huge wasted memory.

// This creates:

// Space Optimization

// Visualizing the Waste

// Earlier DP table:

// Index: 0 1 2 3 4 5
// Value: 1 1 2 3 5 8

// But while calculating:

// dp[5]

// we only use:

// dp[4]
// dp[3]

// Older values become useless.

// Core Optimization Intuition

// Instead of storing ALL answers:

// store only required states

// In this problem:
// required states =
// previous two stairs.

// Replacing DP Array with Variables

// Instead of:

// dp[i - 1]
// dp[i - 2]

// we can use:

// prev1
// prev2

// Meaning:

// prev1 = ways for previous stair
// prev2 = ways for second previous stair

// Initial Values

// Base cases:

// ways(0)=1,ways(1)=1

// So initially:

// prev2 = 1
// prev1 = 1

// Meaning:

// prev2 = ways(0)
// prev1 = ways(1)

// Calculating Current Stair

// For:

// ways(2)

// we calculate:

// current=prev1+prev2

// Meaning:

// current = 1 + 1 = 2

// Now we must move dependency window forward.

// MOST IMPORTANT PART (WINDOW SHIFTING)

// This is the HEART of optimization.

// Before shifting:

// prev2 = ways(0)
// prev1 = ways(1)
// current = ways(2)

// After shifting:

// prev2 becomes old prev1
// prev1 becomes current

// Meaning:

// prev2 = prev1
// prev1 = current

// Now:

// prev2 = ways(1)
// prev1 = ways(2)

// Ready for next stair.

// Visualizing as Sliding Window

// This visualization is EXTREMELY important.

// Initially:

// [1, 1]

// Calculate next:

// 1 + 1 = 2

// Move window:

// [1, 2]

// Calculate next:

// 1 + 2 = 3

// Move:

// [2, 3]

// Calculate next:

// 2 + 3 = 5

// Move:

// [3, 5]

// Calculate next:

// 3 + 5 = 8

// Move:

// [5, 8]

// This moving dependency window appears in MANY DP optimizations later.


Code:

function climbingStairs(n){
  if(n === 0) return 1;
  if(n === 1) return 1;

  let prev2 = 1;
  let prev1 = 1;

  for(let i = 2; i<=n; i++){
    let current = prev1 + prev2;

    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}


// Complexity Analysis
// Before Optimization

// Tabulation:

// Time:

// O(n)

// Space:

// O(n)

// because dp array used.

// After Optimization

// Time:

// O(n)

// Still same.

// But space:

// O(1)

// because only variables used.

// Huge optimization.


// COMPLETE CLIMBING STAIRS JOURNEY

// You have now completed FULL DP journey for a real problem.

// Stage 1 — Recursive Thinking
// Break problem into smaller same problems

// Stage 2 — Recurrence Relation
// ways(n)=ways(n−1)+ways(n−2)

// Stage 3 — Overlapping Subproblems
// Repeated states appear

// Stage 4 — Memoization
// Store and reuse answers
// Top Down DP

// Stage 5 — Tabulation
// Bottom Up DP
// Build answers iteratively

// Stage 6 — Space Optimization
// Keep only required dependencies



























































































