// We are given:

// x → base
// n → power

// We need to compute: x^n

// Examples
// 2^10 = 1024
// 2.1^3 = 2.1 × 2.1 × 2.1
// 2^-2 = 1 / (2^2) = 1/4

// If n < 0:

// x^n = 1 / x^n
// 	​
// So:
// Convert problem into positive power

// Brute Force:

// Multiple x with itesel n times

// INTUITION

// For x = 2, n = 5

// result = 1
// result = 1 * 2 = 2
// result = 2 * 2 = 4
// result = 4 * 2 = 8
// result = 8 * 2 = 16
// result = 16 * 2 = 32

// Time Complexity: O(n)

function myPow(x, n){
  let N = n;

  // Handle negative power
  if(N < 0){
    x = 1 / x;
    N = -N;
  }

  let result = 1;

  for(let i = 0; i<N; i++){
    result *= x;
  }

  return result;
}

// Better Approach: Recursive Idea

// We use: 

// x^n = (x^n/2)^2 (if n is even)
// x^n = x . x^n-1 (if n is odd)

// Time complexity: O(n) in worst case (due to repeated calls)

function myPow(x, n){
  if(n === 0) return 1;

  if(n < 0){
    return 1 / myPow(x, -n);
  }

  if(n % 2 === 0){
    return myPow(x, n/2) * myPow(x, n/2);
  }else{
    return x * myPow(x, n-1);
  }
}





