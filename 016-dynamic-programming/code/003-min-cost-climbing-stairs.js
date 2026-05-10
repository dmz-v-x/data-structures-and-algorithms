// This problem is VERY important because now DP changes from:

// count total ways

// to:

// find minimum cost

// Understanding the Problem Properly

// You are given:

// cost = [10, 15, 20]

// Meaning:

// cost[i]
// =
// cost to step on stair i

// You can climb:

// 1 stair
// OR
// 2 stairs

// Goal:

// Reach the top with minimum total cost.

// VERY IMPORTANT:

// You pay ONLY when stepping ON a stair.

// Understanding "Top"

// This confuses MANY beginners.

// Suppose:

// cost = [10,15,20]

// Then stairs are:

// Index:  0   1   2
// Cost:  10  15  20

// But:

// TOP

// is NOT stair 2.

// Top is:

// AFTER the last stair

// Meaning:

// index 3

// You don't pay for top.

// Top is destination.

// VERY IMPORTANT RULE

// You can start from:

// stair 0
// OR
// stair 1

// This is VERY important.

// You are NOT forced to start at stair 0.


// Example Visualization

// Suppose:

// cost = [10,15,20]

// Possible paths:

// Path 1
// 0 → 1 → top

// Cost:

// 10 + 15 = 25
// Path 2
// 1 → top

// Cost:

// 15
// Path 3
// 0 → 2 → top

// Cost:

// 10 + 20 = 30

// Minimum:

// 15

// Answer:

// 15

// IMPORTANT OBSERVATION

// Earlier in Climbing Stairs:

// we were asking:

// How many ways?

// So recurrence used:

// +

// because we counted ALL possibilities.

// NOW question asks:

// minimum cost

// So our brain should think:

// MINIMUM

// NOT counting.

// This changes EVERYTHING.

// The MOST IMPORTANT QUESTION

// Suppose you are standing at stair:

// i

// How could you have reached here?

// Only TWO possibilities:

// POSSIBILITY 1

// You came from:

// i - 1

// by taking:
// 1 step.

// POSSIBILITY 2

// You came from:

// i - 2

// by taking:
// 2 steps.

// Again same stair movement logic.

// The HUGE DP THOUGHT

// Suppose:

// minCost(i)

// means:

// minimum cost to reach stair i

// Now think carefully.

// To reach stair:

// i

// we can come from:

// i-1
// i-2

// But we want:

// minimum cost

// So we choose smaller path.

// This gives recurrence:

// minCost(i)=cost[i]+min(minCost(i−1),minCost(i−2))

// This is your FIRST:

// Minimization DP recurrence

// VERY important.

// Understanding the Formula Deeply

// This formula says:

// To stand on stair i:

// you must:

// pay current stair cost
// come from cheaper previous path

// Meaning:

// current stair cost
// +
// best previous path
// STEP 9 — Visualizing Example

// Suppose:

// cost = [10,15,20]
// Stair 0

// Cost:

// 10
// Stair 1

// Cost:

// 15
// Stair 2

// Formula:

// minCost(2)=20+min(10,15)

// Because:

// coming from stair 0 costs 10
// coming from stair 1 costs 15

// Choose cheaper:

// 10

// So:

// 20 + 10 = 30

// VERY IMPORTANT FINAL STEP

// Question asks:

// minimum cost to reach TOP

// NOT last stair.

// To reach top:
// we can come from:

// last stair
// second last stair

// So final answer becomes:

// min(minCost(n−1),minCost(n−2))

// Recursive Thinking

// Now think recursively.

// Suppose:

// minCost(4)

// asks:

// minimum cost to reach stair 4

// It says:

// I can come from:
// minCost(3)
// OR
// minCost(2)

// Choose cheaper path.

// Then add current stair cost.

// Recursive breakdown begins.

// Finding Base Cases

// This is VERY important.

// Smallest solvable problems.

// Base Case 1
// minCost(0)

// What is minimum cost to stand on stair 0?

// Simply:

// cost[0]
// Base Case 2
// minCost(1)

// Minimum cost to stand on stair 1?

// Simply:

// cost[1]

// Because you can directly start there.

Recursive Code:

function minCostClimbingStairs(cost){
  function solve(i, cost){
    if(i === 0) return cost[0];
    if(i === 1) return cost[1];

    return cost[i] + Math.min(
      solve(i - 1, cost);
      solve(i - 2, cost);
    )
  }
  let n = cost.length;
  return Math.min(
    solve(n-1, cost);
    solve(n-2, cost);
  )
}

// Climbing Stairs
// Count all ways

// Transition:

// dp[i]=dp[i−1]+dp[i−2]

// Min Cost Climbing Stairs
// Choose best path

// Transition:

// dp[i]=cost[i]+min(dp[i−1],dp[i−2])

// This is your FIRST:

// Optimization DP

// Very important category.


// ---------------------------------


// Before moving to Memoization understands why Greedy fails here

// What Does Greedy Mean?

// Greedy means:

// Make the best decision RIGHT NOW
// hoping it leads to global best answer.

// Very important word:

// LOCAL optimum

// Greedy focuses on current step only.

// What Would Greedy Do Here?

// In Min Cost Climbing Stairs,
// a greedy brain would think:

// “At every step,
// choose cheaper next stair.”

// Seems logical.

// But this is dangerous.

// But Why Is Greedy Dangerous?

// Because:

// A locally cheap step

// may force expensive future steps.

// This is the KEY problem.

// Greedy only sees:

// current move

// DP sees:

// future consequences too

// The Core DP vs Greedy Difference

// Greedy asks:

// "What is cheapest NOW?"

// DP asks:

// "What leads to cheapest TOTAL path?"

// MOST IMPORTANT GREEDY FAILURE IDEA

// Greedy works ONLY when:

// Local optimum

// always leads to

// Global optimum

// This property is called:

// Greedy Choice Property

// Min Cost Climbing Stairs does NOT guarantee this.

// Because:
// choosing cheaper immediate stair
// can affect future path badly.

// The recurrence:

// cost[i]+min(dp[i−1],dp[i−2])

// does NOT mean:

// choose cheaper immediate stair

// It means:

// choose stair whose ENTIRE PATH COST
// is cheaper


//-------------------------- Top Down Approach (Memoization)

// Recap the Main Recurrence

// We discovered:

// minCost(i)=cost[i]+min(minCost(i−1),minCost(i−2))

// Meaning:

// minimum cost to stand on stair i
// =
// current stair cost
// +
// cheaper previous path

// Base cases:

// minCost(0)=cost[0],minCost(1)=cost[1]

// Understanding the Recursive Problem

// Suppose:

// solve(5)

// needs:

// solve(4)
// solve(3)

// Then:

// solve(4)

// again needs:

// solve(3)
// solve(2)

// Now:

// solve(3)

// is repeated.

// Same issue again.

// DP Thought Process

// DP asks:

// “If I already know minimum cost for stair i,
// why calculate again?”

// Instead:

// store answer once
// reuse later

// This is memoization.

// What Will We Store?

// State is:

// minCost(i)

// Meaning:

// minimum cost to reach stair i

// So:

// dp[i]

// will store:

// minimum cost for stair i

// Example:

// dp[2] = 30
// dp[3] = 16

// etc.


function minCostClimbingStairs(cost){

  function solve(i, cost, dp){
    if(i === 0) return cost[0];
    if(i === 1) return cost[1];

    if(dp[i] !== undefined){
      return dp[i];
    }

    dp[i] = cost[i] + Math.min(
      solve(i - 1, cost, dp),
      solve(i - 2, cost, dp)
    );

    return dp[i];
  }
  
  let n = cost.length;
  let dp = [];
  
  return Math.min(
    solve(n-1, cost, dp),
    solve(n-2, cost, dp)
  );
}



// Dry Run

// Suppose:

// cost = [10,15,20]

// We call:

// minCostClimbingStairs(cost)

// Which does:

// Math.min(
//     solve(2),
//     solve(1)
// )

// Why?

// Because:
// top can be reached from:

// last stair
// second last stair

// Very important.

// solve(2)

// Formula:

// solve(2)=cost[2]+min(solve(1),solve(0))

// Meaning:

// 20 + Math.min(
//     solve(1),
//     solve(0)
// )
// STEP 10 — solve(1)

// Base case:

// returns 15
// STEP 11 — solve(0)

// Base case:

// returns 10

// Now:

// Math.min(15,10)
// =
// 10

// So:

// 20 + 10 = 30

// Store:

// dp[2] = 30

// dp becomes:

// [empty, empty, 30]

// Return:

// 30

// Now outer function computes:

// Math.min(
//     solve(2),
//     solve(1)
// )

// Which becomes:

// Math.min(30,15)
// =
// 15

// Answer:

// 15

// Correct.

// VERY IMPORTANT REALIZATION

// In previous Climbing Stairs:

// we stored:

// number of ways

// Now we store:

// minimum total cost

// DP changes depending on:
// what state represents.

// This is HUGE.


// Time Complexity Transformation
// Pure Recursion

// Time:

// O(2^n)

// because repeated recursion tree.

// Memoization

// Time:

// O(n)

// because:
// each stair solved once.

// Huge optimization.

// THE MOST IMPORTANT DP TEMPLATE

// Again same universal framework appears.

// Step 1 — Define State
// dp[i]
// =
// minimum cost to reach stair i
// Step 2 — Define Transition

// dp[i]=cost[i]+min(dp[i−1],dp[i−2])

// Step 3 — Define Base Cases

// dp[0]=cost[0],dp[1]=cost[1]

// Step 4 — Store Answers

// Memoization array.

// Step 5 — Reuse Cached Results

// Optimization happens.


// ---------------------

// Tabulation (Bottom - UP Approach)

// Recap the Main Recurrence

// We discovered:

// dp[i]=cost[i]+min(dp[i−1],dp[i−2])

// Meaning:

// minimum cost to stand on stair i
// =
// current stair cost
// +
// cheaper previous path

// Base cases:

// dp[0]=cost[0],dp[1]=cost[1]

// Bottom-Up Thinking

// Instead of asking recursively:

// “What is minimum cost for stair 5?”

// we think:

// “I already know smaller stair costs.
// Let me build bigger answers gradually.”

// This is:

// Bottom-Up DP

// Example Setup

// Suppose:

// cost = [10,15,20]

// Meaning:

// Index: 0   1   2
// Cost: 10  15  20

// Remember:

// TOP

// is AFTER stair 2.

// Creating the DP Table

// We create:

// dp[]

// Initially:

// Index: 0 1 2
// Value: ? ? ?

// Now fill base cases.

// Fill Base Cases

// We know:

// dp[0]=cost[0]=10

// and:

// dp[1]=cost[1]=15

// Table becomes:

// Index: 0  1  2
// Value: 10 15 ?

// Meaning:

// minimum cost to stand on:
// stair 0 = 10
// stair 1 = 15

// Build dp[2]

// Using recurrence:

// dp[2]=20+min(dp[1],dp[0])

// Substitute values:

// 20 + min(15,10)

// Cheaper path:

// 10

// So:

// 20 + 10 = 30

// Store:

// dp[2] = 30

// Final table:

// Index: 0  1  2
// Value: 10 15 30

// MOST IMPORTANT FINAL STEP

// Question asks:

// minimum cost to reach TOP

// NOT last stair.

// To reach top:
// we can come from:

// last stair
// second last stair

// So answer becomes:

// min(dp[n−1],dp[n−2])

// Meaning:

// min(30,15)
// =
// 15

// Correct answer.

function minCostClimbingStairs(cost){

    let n = cost.length;

    let dp = new Array(n);

    dp[0] = cost[0];
    dp[1] = cost[1];

    for(let i = 2; i < n; i++){

        dp[i] = cost[i] + Math.min(
            dp[i - 1],
            dp[i - 2]
        );
    }

    return Math.min(
        dp[n - 1],
        dp[n - 2]
    );
}


// Memoization vs Tabulation
// Memoization
// Top Down
// Recursion
// Cache while returning

// Tabulation
// Bottom Up
// Iteration
// Build answers gradually

// Both solve SAME recurrence.


// -------------

// Space Optimization

// Observe the Dependency Carefully

// Tabulation recurrence was:

// dp[i]=cost[i]+min(dp[i−1],dp[i−2])

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


// The BIG Optimization Question

// If current stair only depends on:

// previous two answers

// then why store:

// entire dp array?

// Huge memory waste.

// This creates:

// Space Optimization

// Visualizing the Waste

// Earlier DP table:

// Index: 0   1   2   3
// Value: 1 100   2   3

// But while calculating:

// dp[3]

// we only use:

// dp[2]
// dp[1]

// Older states become useless.

// Replacing DP Array with Variables

// Instead of:

// dp[i - 1]
// dp[i - 2]

// we use:

// prev1
// prev2

// Meaning:

// prev1
// =
// minimum cost for previous stair

// prev2
// =
// minimum cost for second previous stair

// Initial Values

// Base cases:

// dp[0]=cost[0],dp[1]=cost[1]

// So initially:

// prev2 = cost[0];
// prev1 = cost[1];

// Meaning:

// prev2 = dp[0]
// prev1 = dp[1]

// Calculating Current Stair

// Suppose:

// i = 2

// Then:

// current=cost[i]+min(prev1,prev2)

// Example:

// current = 1 + Math.min(100,1)

// Which becomes:

// 2


// MOST IMPORTANT PART (WINDOW SHIFTING)

// This is the HEART of optimization.

// Before shifting:

// prev2 = dp[0]
// prev1 = dp[1]
// current = dp[2]

// After shifting:

// prev2 becomes old prev1
// prev1 becomes current

// Meaning:

// prev2 = prev1;
// prev1 = current;

// Now:

// prev2 = dp[1]
// prev1 = dp[2]

// Ready for next stair.


Code:

function minCostClimbingStairs(cost){
  let n = cost.length;

  let prev2 = cost[0];
  let prev2 = cost[1];

  for(let i = 2; i<n; i++){
    let current = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = current;
  }

  return Math.min(prev1, prev2);
}


// Complexity Analysis
// Before Optimization

// Tabulation:

// Time:

// O(n)

// Space:

// O(n)

// because DP array used.

// After Optimization

// Time:

// O(n)

// Still same.

// But space:

// O(1)

// because only variables used.

// Huge improvement.
























































  
