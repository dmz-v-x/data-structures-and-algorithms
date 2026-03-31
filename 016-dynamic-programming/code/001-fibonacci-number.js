// Fibonacci Number

// Definition:
// fib(0) = 0  
// fib(1) = 1  
// fib(n) = fib(n-1) + fib(n-2)

// Memoization (Top-Down DP)

// Use recursion
// Store already computed results
// Avoid repeated work

// Time Complexity: O(n) 

// Why? Each value from 0 → n computed once

// Space Complexity: O(n)

// Memo object stores n values
// Recursion stack also goes up to n

function fib(n, memo = {}){
  if(n in memo) return memo[n];
  if(n <= 1) return n;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);

  return memo[n];
}


// LeetCode Version

var fib = function(n){
  function solve(n, memo){
    if(n in memo) return memo[n];
    if(n <= 1) return n;

    memo[n] = solve(n-1, memo) + solve(n-2, memo);
    return memo[n];
  }

  return solve(n, {});
}

// Bottom-Up Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function fib(n){
  if(n <= 1) return n;
  let dp = new Array(n+1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for(let i = 2; i<=n; i++){
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
}

// Space Optimized
// Time Complexity: O(n)
// Space Complexity: O(1)
function fib(n){
  if(n <= 1){
    return n;
  }

  let prev = 0;
  let curr = 1;

  for(let i = 2; i<=n; i++){
    let next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}


