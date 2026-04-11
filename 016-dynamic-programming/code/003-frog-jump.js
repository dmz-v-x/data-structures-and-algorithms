// You are given an array:

// heights = [h0, h1, h2, ..., hn-1]

// A frog starts at index 0 and wants to reach index n-1.

// Frog can:

// Jump 1 step
// Jump 2 steps
// Cost of a jump:

// |height[i] - height[j]|
  
// Goal:

// Minimize total cost to reach last index


// Brute Force: Recursion

// To reach index i, frog has only 2 options:

// Come from i-1
// Come from i-2

// So:

// cost(i) = min(
//   cost(i-1) + |h[i] - h[i-1]|,
//   cost(i-2) + |h[i] - h[i-2]|
// )

// Brute Force: 
// Time Complexity: O(2^n)
// Space Complexity: Recursion Stack

function frogJump(i, heights){
  // base case
  if(i === 0) return 0;

  // 1 Step
  let left = frogJump(i-1, heights) + Math.abs(heights[i] - heights[i - 1]);

  // 2 Steps
  let right = Infinity
  if(i > 1){
    right = frogJump(i - 2, heights) + Math.abs(heights[i], heights[i-2]);
  }

  return Math.min(left, right);
}

let heights = [10, 20, 30, 10];
console.log(frogJump(heights.length - 1, heights));


// Better Approach: Memoization - Top Down DP

// Time Complexity: O(n)
// Space Complexity: 
  // DP array: O(n)
  // Recursion Stack: O(n)

function frogJump(i, heights, dp){
  if(i === 0) return 0;

  if(dp[i] !== -1) return dp[i];

  let left = frogJump(i-1, heights, dp) + Math.abs(heights[i] - heights[i-1]);

  let right = Infinity
  if(i > 1){
    right = frogJump(i-2, heights, dp) + Math.abs(heights[i] - heights[i - 2]);
  }

  return dp[i] = Math.min(left, right);
}

let heights = [10, 20, 30, 10];
let n = heights.length;
let dp = new Array(n).fill(-1);

console.log(frogJump(n-1, heights, dp));

// Optimal (Tabulation - Bottom UP)
// Time Complexity: O(n)
// Space Complexity: O(n)
function frogJump(heights){
  let n = heights.length;
  let dp = new Array(n).fill(0);

  dp[0] = 0;

  for(let i = 0; i<n; i++){
    let left = dp[i-1] + Math.abs(height[i] - height[i - 1]);

    let right = Infinity
    if(i > 1){
      right = dp[i-2] + Math.abs(height[i] - height[i - 2]);
    }

    dp[i] = Math.min(left, right);
  }
  return dp[n - 1];
}


// Most Optimal (Space Optimization)


// We only use:

// dp[i-1]
// dp[i-2]

// So no need for full array

// Time Complexity: O(n)
// Space Complexity: O(1)

function frogJump(heights){
  let n = heights.length;

  let prev = 0;
  let prev2 = 0;

  for(let i = 1; i<n; i++){
    let left = prev + Math.abs(height[i] - height[i - 1]);

    let right = Infinity
    if(i > 1){
      right = prev2 + Math.abs(height[i] - height[i - 2]);
    }

    let curr = Math.min(left, right);

    prev2 = prev;
    prev = curr;
  }

  return prev;
}

