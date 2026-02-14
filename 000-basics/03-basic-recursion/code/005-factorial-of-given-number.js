// Iterative Approach:

// Time Complexity: O(n)
// Space Complexity: O(1)

function factorial(n){
  let factorial = 1;
  for(let i = 1; i<=n; i++){
    factorial *= i;
  }
  return factorial
}

// Recursive Approach

// Time Complexity: O(N)
// Space Complexity: O(N)

function factorial(n){
  if(n === 1) return 1;
  return n * factorial(n-1);
}

