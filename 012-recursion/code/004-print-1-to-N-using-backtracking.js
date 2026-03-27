// Print 1 to N using Backtracking

// Time Complexity:O(n)
// Space Complexity: O(n)

function print1toN(n){ // Backtracking Pattern
  if(n === 0) return 
  print1toN(n-1);
  console.log(n);
}
