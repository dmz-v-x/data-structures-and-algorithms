// Factorial of a number using recursion

// Time Complexity: O(n)
// Space Complexity: O(n)

function factorial(n){
  if(n === 1) return 1;
  return n * factorial(n-1);
}

factorial(5);
