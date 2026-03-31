## Introduction to Dynamic Programming (DP) 

### 1. What is Dynamic Programming?

Dynamic Programming (DP) is a technique used to:
- Avoid solving the same subproblem multiple times
- Store results and reuse them when needed

In simple terms:
Dynamic Programming = Recursion + Memory

---

### 2. Why Do We Need Dynamic Programming?

Consider this recursive Fibonacci example:

    function fib(n){
      if(n <= 1) return n;
      return fib(n-1) + fib(n-2);
    }

Problem:
- fib(3), fib(2), etc. are computed multiple times
- Leads to exponential time complexity: O(2^n)

Core issue:
Repeated subproblems

---

### 3. Two Conditions for DP

A problem can be solved using DP if it satisfies:

#### 3.1 Overlapping Subproblems
- Same subproblems are solved repeatedly

Example:
fib(3) appears multiple times in recursion tree

#### 3.2 Optimal Substructure
- A problem can be solved using solutions of smaller subproblems

Example:
fib(n) = fib(n-1) + fib(n-2)

---

### 4. Core Idea of DP

Instead of recomputing:
- Store the result the first time
- Reuse it later

This improves performance from exponential to polynomial time

---

### 5. Two Approaches to DP

#### 5.1 Memoization (Top-Down)

- Uses recursion
- Stores results in a cache

    function fib(n, memo = {}){
      if(n in memo) return memo[n];
      if(n <= 1) return n;

      memo[n] = fib(n-1, memo) + fib(n-2, memo);
      return memo[n];
    }

Time Complexity: O(n)

---

#### 5.2 Tabulation (Bottom-Up)

- Uses iteration
- Builds solution step by step

    function fib(n){
      let dp = new Array(n+1).fill(0);
      dp[1] = 1;

      for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
      }

      return dp[n];
    }

---

### 6. Key Terminology

#### 6.1 State
Represents a subproblem

Example:
dp[i] = answer for index i

---

#### 6.2 Transition
How current state depends on previous states

Example:
dp[i] = dp[i-1] + dp[i-2]

---

#### 6.3 Base Case
Initial known values

Example:
dp[0] = 0  
dp[1] = 1

---

### 7. How to Think in DP

Follow these steps:

#### Step 1: Define State
What does dp[i] represent?

Example:
dp[i] = number of ways to reach step i

---

#### Step 2: Define Transition
How to compute dp[i]?

Example:
dp[i] = dp[i-1] + dp[i-2]

---

#### Step 3: Define Base Case

---

#### Step 4: Decide Computation Order

---

### 8. Example: Climbing Stairs

Problem:
You can climb 1 or 2 steps at a time. Find number of ways to reach the top.

#### Step 1: State
dp[i] = ways to reach step i

---

#### Step 2: Transition
dp[i] = dp[i-1] + dp[i-2]

---

#### Step 3: Code

    function climbStairs(n){
      let dp = new Array(n+1).fill(0);

      dp[0] = 1;
      dp[1] = 1;

      for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
      }

      return dp[n];
    }

---

### 9. Types of DP Problems

#### 9.1 1D DP
- Uses single array

Examples:
- Fibonacci
- Climbing Stairs
- House Robber

---

#### 9.2 2D DP
- Uses matrix

Examples:
- Unique Paths
- Minimum Path Sum

---

#### 9.3 String DP

Examples:
- Longest Common Subsequence
- Edit Distance

---

#### 9.4 Subset / Knapsack DP

Examples:
- Subset Sum
- Coin Change

---

### 10. Common Patterns

#### 10.1 Linear DP
dp[i] depends on dp[i-1]

---

#### 10.2 Choice DP
Choose best among options

Example:
dp[i] = max(dp[i-1], nums[i] + dp[i-2])

---

#### 10.3 Grid DP
dp[i][j] depends on neighbors

---

#### 10.4 Include / Exclude
Take it or skip it

---

### 11. Space Optimization

Instead of storing full dp array:

    function fib(n){
      let prev = 0, curr = 1;

      for(let i = 2; i <= n; i++){
        let temp = prev + curr;
        prev = curr;
        curr = temp;
      }

      return curr;
    }

Idea:
Store only necessary previous states

---

### 12. Common Mistakes

- Not defining state clearly
- Incorrect base cases
- Wrong iteration order
- Using DP unnecessarily

---

### 13. When to Use DP

Use DP when problem involves:
- Minimum or maximum values
- Counting number of ways
- Optimal decisions

---

### 14. Advanced DP Topics

- DP on Trees
- Bitmask DP
- Digit DP
- DP with Binary Search
- State Compression

---

### 15. Final Mental Model

Dynamic Programming is about:
- Breaking problems into smaller subproblems
- Storing their results
- Reusing them efficiently

---

### 16. Summary

You now understand:
- What DP is
- Why recursion can be inefficient
- Memoization and tabulation
- State, transition, and base case
- Common DP patterns
- Optimization techniques

