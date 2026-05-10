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














