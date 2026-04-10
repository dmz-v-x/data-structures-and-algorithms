// Find nth root of a number m

// Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.

// Input: N = 3, M = 27
// Output: 3
// Explanation: The cube root of 27 is equal to 3.

// Input : N = 4, M = 69
// Output: -1
// Explanation : The 4th root of 69 does not exist. So, the answer is -1.


// Brute Force

// Loop from i = 1 -> m
// Compute i ^ n if equals i return i

// Time Complexity: O(m), Slow

function nthRoot(n, m){
  for(let i = 1; i<=m; i++){
    if(Math.pow(i, n) === m){
      return i;
    }
  }
  return -1;
}


// Optimal Approach
// Time Complexity: O(n * log m)
function nthRoot(n, m){
  let low = 1;
  let high = m;

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    let check = power(mid, n, m);

    if(check === 1) return mid;
    else if(check === 0) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

function power(mid, n, m){
  let result = 1;
  for(let i = 0; i<m; i++){
    result *= mid;

    if(result > m) return 2;
  }

  if(result === m) return 1;
  return 0;
}
