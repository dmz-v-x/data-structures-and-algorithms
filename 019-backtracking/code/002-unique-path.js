// You are given a grid:

// m rows, n columns

// You start at:

// Top-left (0,0)

// You want to reach:

// Bottom-right (m-1, n-1)

// You can only move:

// Right 
// Down 

// Goal: How many different ways can you reach the end?

// Time Complexity: 

// At every step you have 2 choices:

// RIGHT or DOWN

// So:

// Branching factor = 2

// To reach from (0,0) to (m-1,n-1):

// You must make:

// (m-1) downs
// (n-1) rights

// Total moves:

// (m-1) + (n-1) = m + n - 2

// So recursion depth ≈ m + n

// At every step we have 2 choices so it builds kind of binary tree, every level each node creates 2 children

// binary tree with height h has 2^h nodes

// our height is h = m + n

// so total calls: 2 ^ (m + n)

// Not all branches go full depth (some hit boundary early)

// So exact complexity is:

// O(2^(m+n))  (upper bound)

// Time Complexity: O(2^(m+n))
// Space Complexity: O(m + n)

// You might think:

// "Time is O(2^(m+n)), so space also same?"

// ❌ WRONG

// Why?

// Because:

// We don’t store all calls at once
// Only one path at a time is in memory

function uniquePaths(m, n){
  function paths(i, j){
    // Base Case: Destination Reached
    if(i === m-1 && j === n-1) return 1;

    // out of bound
    if(i >= m || j >= n) return 0;

    let right = paths(i, j+1);
    let down = paths(i+1, j);

    return right + down;
    
  }
  return paths(0, 0);
}

// Backtracking approach

function uniquePaths(m, n){
  let count = 0;
  function backtrack(i, j){
    if(i === m - 1 && j === n - 1){
      count++;
      return;
    }

    if(i >= m || j >= m) return;

    backtrack(i, j+1);
    backtrack(i+1, j);
  }

  backtrack(0, 0);
  return count;
}
