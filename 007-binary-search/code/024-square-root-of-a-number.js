// Given a number n, find:

// floor(√n)

// Example
// n = 28

// √28 ≈ 5.29
// Answer = 5


// Brute Force

function sqrt(n){
  let i = 1;
  while(i * i <= n){
    i++;
  }
  return i - 1;
}

// Time Complexity: O(n^1/2), Slow for large numbers

// Optimal Approach: Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)
function sqrt(n){
  let low = 1;
  let high = n;
  let ans = 0;

  while(low <= high){
    let mid = Math.floor((low + high)/2);

    if(mid <= Math.floor(n/mid)){
      ans = mid;
      low = mid+1;
    }else {
      high = mid - 1;
    }
  }
  return ans;
}

// We do mid <= n/mid becuase mid * mid <= n can overflow
