// Fibonacci Number

// Iterative Approach

function Nthfibonaaci(n){
  let f0 = 0;
  let f1 = 1;
  let nthFib = 0;
  for(let i = 2; i<=n; i++){
    nthFib = f0 + f1;
    f0 = f1;
    f1 = nthFib;
  }
  return nthFib;
}

console.log(NthFibonacci(10));

// Recursive Approach

// Time Complexity: O(2^n) Not exactly 2^n but nearly exponential
function NthFibonacci(n){
  if(n <= 1) return n;
  return NthFibonacci(n-1) + NthFibonacci(n - 2);
}








