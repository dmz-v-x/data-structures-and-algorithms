// Leetcode 50: Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Approach 1: Using Built in Methods

// 1. Using Math.pow

var myPow = function(x, n){
  return Math.pow(x, n)
}

// 2. Using Exponent Operator (**)

var myPow = function(x, n){
  return x ** n;
};



// Approach 2: Naive Approach

var myPow = function(x, n){
  if (n === 0) return 1;

  let result = 1;
  let power = Math.abs(n);

  for(let i = 0; i<power; i++){
    result *= x;
  }

  return n < 0 ? 1/result : result;
    
}

// Approach 3: Iterative Binary Exponentiation

var myPow = function(x, n){
  if(n === 0) return 1;

  let N = n
  if(N < 0){
    x = 1/x
    N = -N;
  }

  let result = 1;
  while(N > 0){
    if(N%2 === 1){
      result *= x;
    }

    x *= x;
    N = Math.floor(N/2);
  }

  return result;
}



















