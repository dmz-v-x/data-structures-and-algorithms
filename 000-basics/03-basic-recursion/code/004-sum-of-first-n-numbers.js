// Brute Force

// Time Complexity: O(N)
// Space Complexity: O(1)

function sumOfNumber(n){
  let sum = 0;
  for(let i = 1; i<=n; i++){
    sum += i;
  }

  return sum;
}

// Using Formula

// Time Complexity: O(1)
// Space Complexity: O(1)

function sumOfNumber(n){
  let sum = n * (n + 1)/2;
  return sum
}

// Recursive Approach

// Time Complexity: O(N)
// Space Complexity: O(N)

function sumOfNumber(n){
  if(n === 1) return 1;
  return n + sumOfNumber(n-1)
}




