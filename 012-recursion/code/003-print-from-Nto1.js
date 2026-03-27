// Print from N to 1 using recursion

// Time Complexity: O(N)
// Space Complexity: O(N)

function printNto1(n){ // Only Recursion no backtracking
  if(n === 0) return;
  console.log(n);
  printNto1(n-1);
}
