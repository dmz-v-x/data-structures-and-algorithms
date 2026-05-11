// House Robber Problem

// This problem introduces:

// Take / Not Take DP Pattern

// This is one of the BIGGEST DP patterns.

// You are given houses.

// Each house contains money.

// Example:

// nums = [1,2,3,1]

// Meaning:

// House 0 → 1 money
// House 1 → 2 money
// House 2 → 3 money
// House 3 → 1 money

// The IMPORTANT RULE

// You CANNOT rob adjacent houses.

// Why?

// Because:

// security alarm triggers

// So:

// If you rob:

// house i

// You CANNOT rob:

// house i-1
// house i+1

// VERY important.

// The Goal

// Question asks:

// Maximum money you can rob

// NOT:

// total ways
// minimum cost

// This is:

// Maximization DP

// Understanding the Core Decision

// Suppose you are standing at:

// house i

// Now BIG question:

// Should I rob this house?
// OR
// skip this house?

// THIS is the ENTIRE problem.

// This creates:

// Take / Not Take DP

// Understanding Both Choices

// At every house,
// you have TWO choices.

// CHOICE 1 — TAKE Current House

// If you rob current house:

// cannot rob adjacent house

// So next possible house becomes:

// i + 2

// Money gained:

// nums[i]
// +
// best answer from i+2

// CHOICE 2 — SKIP Current House

// If you skip current house:

// you can move normally

// Next house:

// i + 1

// Money gained:

// best answer from i+1

// The HUGE DP REALIZATION

// Suppose:

// rob(i)

// means:

// maximum money we can rob starting from house i

// Then:

// At house i:

// we either:

// take
// OR
// skip

// Choose better option.

// This gives recurrence:

// rob(i)=max(nums[i]+rob(i+2), rob(i+1))

// Understanding the Formula Deeply

// This formula says:

// OPTION 1 — TAKE

// nums[i]+rob(i+2)

// Meaning:

// take current money
// +
// best future non-adjacent robbery
// OPTION 2 — SKIP

// rob(i+1)

// Meaning:

// ignore current house
// and continue

// Then choose:

// better option

// using:

// max

// because we want:
// maximum money.

// Visualizing Example

// Suppose:

// nums = [1,2,3,1]

// Start at:

// house 0

// Two choices:

// TAKE House 0

// Money:

// 1

// Then must jump to:

// house 2

// Future maximum from house 2:
// will be calculated recursively.

// SKIP House 0

// Ignore:

// 1

// Move to:

// house 1

// Then calculate best future answer.

// VERY IMPORTANT OBSERVATION

// Unlike previous DP problems:

// Earlier:

// no decisions
// recurrence automatically fixed

// Now:

// we must CHOOSE

// This is HUGE.

// This is where DP becomes much more interesting.

// Base Case Thinking

// Suppose:

// i >= nums.length

// Meaning:

// no houses left

// How much money can we rob?

// 0

// Because:
// nothing left to rob.

// So base case:

// rob(i)=0 if i≥n


Recursive Code:

function rob(nums){

  function solve(i, nums){
    if(i >= nums.length){
      return 0;
    }

    let take = nums[i] + solve(i+1, nums);
    let skip = solve(i+1, nums);

    return Math.max(take, skip);
  }

  return solve(0, nums);
}


// COMPLETE RECURSION TREE

// Suppose:

// nums = [1,2,3]

// Call:

// solve(0)

// Tree becomes:

// solve(0)
// |
// |---- TAKE → 1 + solve(2)
// |              |
// |              |---- TAKE → 3 + solve(4)
// |              |
// |              |---- SKIP → solve(3)
// |
// |---- SKIP → solve(1)
//                |
//                |---- TAKE → 2 + solve(3)
//                |
//                |---- SKIP → solve(2)


// ---------------------

// Memoization (Top Down DP)

// Recap the Main Recurrence

// We discovered:

// rob(i)=max(nums[i]+rob(i+2), rob(i+1))

// Meaning:

// At every house:

// OPTION 1 — TAKE
// rob current house
// then jump to i+2

// OPTION 2 — SKIP
// ignore current house
// move to i+1

// Then choose:

// better option

// using:

// max

// because we want maximum money.

// Identifying Repeated States

// Suppose:

// solve(0)

// creates:

// solve(2)
// solve(1)

// Then:

// solve(1)

// again creates:

// solve(3)
// solve(2)

// Now:

// solve(2)

// appears AGAIN.

// Repeated work exists.

// DP Thought Process

// DP asks:

// “If I already know the best robbery starting from house i,
// why calculate again?”

// Instead:

// store answer once
// reuse later

// This is memoization.

// What Will We Store?

// State is:

// rob(i)

// Meaning:

// maximum money we can rob
// starting from house i

// So:

// dp[i]

// stores:

// best robbery answer starting at house i

// Example:

// dp[0] = 4
// dp[1] = 3
// dp[2] = 3

// etc.

function rob(nums){
  function solve(i, dp){
    if(i >= nums.length){
      return 0;
    }

    if(dp[i] !== undefined){
      return dp[i];
    }

    let take = nums[i] + solve(i + 2, dp);
    let skip = solve(i + 1, dp);

    dp[i] = Math.max(take, skip);

    return dp[i];
  }
  let dp = [];
  return solve(0, dp);
}



// COMPLETE DRY RUN

// Suppose:

// nums = [1,2,3,1]

// Call:

// solve(0)

// Initially:

// dp = []
// solve(0)

// Two choices:

// TAKE
// 1 + solve(2)
// SKIP
// solve(1)

// First go into:

// solve(2)
// solve(2)

// Two choices:

// TAKE
// 3 + solve(4)
// SKIP
// solve(3)
// solve(4)

// Base case:

// 0
// solve(3)

// Choices:

// TAKE
// 1 + solve(5)
// SKIP
// solve(4)

// Both become:

// 0

// So:

// max(1,0)=1

// Store:

// dp[3] = 1

// dp:

// [empty, empty, empty, 1]
// Return to solve(2)

// TAKE:

// 3 + 0 = 3

// SKIP:

// dp[3] = 1

// Choose max:

// 3

// Store:

// dp[2] = 3

// dp:

// [empty, empty, 3, 1]
// Return to solve(0)

// Now compute:

// solve(1)
// solve(1)

// Choices:

// TAKE
// 2 + solve(3)

// BUT NOW WATCH CAREFULLY.

// dp[3]

// already exists.

// Immediately returns:

// 1

// No recursion.

// So TAKE becomes:

// 2 + 1 = 3
// SKIP
// solve(2)

// Again:

// dp[2]

// already exists.

// Immediately returns:

// 3

// No recursion.

// Finish solve(1)
// max(3,3)=3

// Store:

// dp[1] = 3

// dp:

// [empty, 3, 3, 1]
// Finish solve(0)

// TAKE:

// 1 + dp[2]
// =
// 1 + 3
// =
// 4

// SKIP:

// dp[1]
// =
// 3

// Choose max:

// 4

// Store:

// dp[0] = 4

// Final dp:

// [4,3,3,1]

// Answer:

// 4

// Correct.


// Time Complexity Transformation
// Pure Recursion

// Time:

// O(2^n)

// Very slow.

// Memoization

// Time:

// O(n)

// Because:
// each index solved once.

// Huge optimization.



// Tabulation (Botton UP Decision DP)

// Recap the Main Recurrence

// We discovered:

// rob(i)=max(nums[i]+rob(i+2), rob(i+1))

// Meaning:

// At house i:

// OPTION 1 — TAKE
// rob current house
// then move to i+2

// Money:

// nums[i]+rob(i+2)

// OPTION 2 — SKIP
// ignore current house
// move to i+1

// Money:

// rob(i+1)

// Choose better option using:

// max

// MOST IMPORTANT TABULATION INSIGHT

// Notice carefully.

// Current house:

// i

// depends on:

// i+1
// i+2

// VERY important.

// Unlike previous problems,
// dependency is FORWARD.

// This changes loop direction.

// Bottom-Up Thinking

// Instead of recursively asking:

// “What is best robbery from house 0?”

// we think:

// “If I already know future answers,
// I can calculate current answer.”

// This is:

// Bottom-Up DP


// Understanding Base Case in DP Table

// Recursive base case was:

// rob(i)=0if i≥n

// Meaning:

// No houses left
// =
// 0 money

// So in DP table:

// future beyond array
// =
// 0

// Example Setup

// Suppose:

// nums = [1,2,3,1]

// Indices:

// 0 1 2 3

// We create:

// dp[]

// Meaning:

// dp[i]
// =
// maximum money possible
// starting from house i

// Creating DP Array

// We create:

// let dp = new Array(nums.length + 2).fill(0);

// VERY IMPORTANT.

// Why:

// +2

// ?

// Because recurrence uses:

// i+1
// i+2

// We need safe future access.

// Visualizing Initial DP Table

// Initially:

// Index: 0 1 2 3 4 5
// Value: ? ? ? ? 0 0

// Why:

// dp[4]=0
// dp[5]=0

// ?

// Because:
// beyond last house →
// no money possible.

// These are tabulation base cases.

// MOST IMPORTANT OBSERVATION

// Current state depends on:

// future states

// Meaning:

// we must fill array backwards

// VERY important.

// This is one of the BIGGEST DP skills:

// dependency direction

// Starting From Last House

// Last house:

// i = 3

// House value:

// 1

// Formula:

// dp[3]=max(nums[3]+dp[5], dp[4])

// Substitute:

// max(1+0,0)
// =
// 1

// Store:

// dp[3]=1

// Table:

// [?,?,?,1,0,0]

// alculate dp[2]

// Formula:

// dp[2]=max(nums[2]+dp[4], dp[3])

// Substitute:

// max(3+0,1)
// =
// 3

// Store:

// dp[2]=3

// Table:

// [?,?,3,1,0,0]


// Calculate dp[1]

// Formula:

// dp[1]=max(nums[1]+dp[3], dp[2])

// Substitute:

// max(2+1,3)
// =
// 3

// Store:

// dp[1]=3

// Table:

// [?,3,3,1,0,0]

// Calculate dp[0]

// Formula:

// dp[0]=max(nums[0]+dp[2], dp[1])

// Substitute:

// max(1+3,3)
// =
// 4

// Store:

// dp[0]=4

// Final table:

// [4,3,3,1,0,0]

// Answer:

// dp[0]
// =
// 4

// Because:
// problem asks:
// best robbery starting from house 0.

function rob(nums){
  let n = nums.length;

  let dp = new Array(n + 2).fill(0);

  for(let i = n-1; i>=0; i--){
    let take = nums[i] + dp[i + 1];
    let skip = dp[i + 1];

    dp[i] = Math.max(take, skip);
  }

  return dp[0];
}


// HUGE DP REALIZATION

// Previous problems built:

// left → right

// because current depended on previous states.

// House Robber builds:

// right → left

// because current depends on future states.

// This dependency-direction skill is MASSIVE in DP.


// Time & Space Complexity

// Time:

// O(n)

// Because:
// each house processed once.

// Space:

// O(n)

// Because DP array used.


// ---------------------

// Space Optimization 


// Observe the Dependency Carefully

// Tabulation recurrence was:

// dp[i]=max(nums[i]+dp[i+2], dp[i+1])

// Now think VERY carefully.

// To calculate:

// dp[i]

// what do we actually need?

// Only:

// dp[i+1]
// dp[i+2]

// Do we need:

// dp[i+3] ?
// dp[i+4] ?
// older states?

// NO.

// Very important realization.

// The BIG Optimization Question

// If current state depends only on:

// next two states

// then why store:

// entire dp array?

// Huge memory waste.

// This creates:

// Space Optimization

// Visualizing the Waste

// Earlier DP table:

// Index: 0 1 2 3 4 5
// Value: 4 3 3 1 0 0

// But while calculating:

// dp[1]

// we only used:

// dp[2]
// dp[3]

// All other values unnecessary.

// Core Optimization Intuition

// Instead of storing ALL states:

// store only required future states

// In this problem:
// required states =
// next two robbery answers.

// Replacing DP Array with Variables

// Instead of:

// dp[i + 1]
// dp[i + 2]

// we use:

// next1
// next2

// Meaning:

// next1
// =
// best robbery starting at i+1

// next2
// =
// best robbery starting at i+2

// Initial Values

// Base case:

// beyond array = 0

// Meaning initially:

// next1 = 0;
// next2 = 0;

// Why?

// Because:
// at end of array:
// no houses left →
// 0 money.

// Calculating Current State

// Formula becomes:

// current=max(nums[i]+next2, next1)

// Meaning:

// TAKE
// nums[i] + next2
// SKIP
// next1

// Choose better option.

// MOST IMPORTANT PART (WINDOW SHIFTING)

// This is the HEART of optimization.

// Before shifting:

// next1 = dp[i+1]
// next2 = dp[i+2]
// current = dp[i]

// After shifting:

// next2 becomes old next1
// next1 becomes current

// Meaning:

// next2 = next1;
// next1 = current;

// Now:

// next1 = dp[i]
// next2 = dp[i+1]

// Ready for next iteration.


// Visualizing as Sliding Window

// This visualization is EXTREMELY important.

// Suppose:

// nums = [1,2,3,1]

// We move RIGHT → LEFT.

// Initially:

// [next1,next2]
// =
// [0,0]
// House 3
// max(1+0,0)
// =
// 1

// Move:

// [1,0]
// House 2
// max(3+0,1)
// =
// 3

// Move:

// [3,1]
// House 1
// max(2+1,3)
// =
// 3

// Move:

// [3,3]
// House 0
// max(1+3,3)
// =
// 4

// Move:

// [4,3]

// Answer:

// 4

// Correct.

Code:

function rob(nums){
  let next1 = 0;
  let next2 = 0;

  for(let i = nums.length - 1; i >= 0; i--){
    let current = Math.max(nums[i] + next2, next1);
    next2 = nex1;
    next1 = current;
  };

  return next1;
}


// COMPLETE DRY RUN

// Suppose:

// nums = [1,2,3,1]
// Initial
// next1 = 0
// next2 = 0

// Meaning:

// dp beyond array = 0
// i = 3

// Formula:

// max(1+0,0)=1

// Shift:

// next2 = 0
// next1 = 1
// i = 2

// Formula:

// max(3+0,1)=3

// Shift:

// next2 = 1
// next1 = 3
// i = 1

// Formula:

// max(2+1,3)=3

// Shift:

// next2 = 3
// next1 = 3
// i = 0

// Formula:

// max(1+3,3)=4

// Shift:

// next2 = 3
// next1 = 4

// Return:

// 4

// Correct.



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

// Space:

// O(1)

// because only variables used.

// Huge optimization.































































function houseRobber(nums){

  function solve(i, nums){
    if(i < 0) return 0;

    let rob = nums[i] + solve(i - 2, nums);
    let skip = solve(i - 1, nums);

    return Math.max(rob, skip);
  }

  
  return solve(nums.length - 1, nums);
}


// Better Approach: Dynamic Programming + Memoization

function houseRobber(nums){

  function solve(i, dp){
    if(i < 0) return 0;
    if(dp[i] !== -1) return dp[i];

    let rob = nums[i] + solve(n-2, dp);
    let skip = solve(n-1, dp);

    dp[i] = Math.max(rob, skip);
    return dp[i];
  }
  
  let dp = new Array(nums.length).fill(-1);
  return solve(nums.length - 1, dp);
}














