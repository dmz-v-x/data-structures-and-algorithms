// Climbing Stairs

// You can climb:

// 1 step
// 2 steps

// Find total ways to reach step n.

// If you are at step n, how did you reach there?

// Only 2 possibilities:

// From n-1 (took 1 step)
// From n-2 (took 2 steps)

// ways(n) = ways(n-1) + ways(n-2)



// Brute Force (Recursion)
// Time Complexity: O(2^n)
function climbStairs(n){
  function solve(n){
    if(n === 0) return 1;
    if(n < 0) return 0;

    return solve(n - 1) + solve(n -2);
  }
}


// Memoization (Top-Down DP)
// Time Complexity: O(n)
// Space Complexity: O(n)

function climbStairs(n){
  let memo = {};

  function solve(n){
    if(n in memo) return memo[n];

    if(n === 0) return 1;
    if(n < 0) return 0;

    memo[n] = solve(n-1) + solve(n-2);
    return memo[n];
  }
  return solve(n);
}

function climbStairs(n){
  function solve(n, memo){
      if(n in memo) return memo[n];
      if(n === 0) return 1;
      if(n < 0) return 0;

      memo[n] = solve(n-1, memo) + solve(n-2, memo);
      return memo[n];

    }
    return solve(n, {});
}


// Tabulation (Bottom UP)

// Time Complexity: O(n)
// Space Complexity: O(n)

function climbStairs(n){
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i<=n; i++){
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

// Space Optimized

// Time Complexity: O(n)
// Space Complexity: O(1)

function climbStairs(n){
  if(n <= 1) return 1;
  let prev = 1;
  let curr = 1;

  for(let i = 2; i<= n; i++){
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
























