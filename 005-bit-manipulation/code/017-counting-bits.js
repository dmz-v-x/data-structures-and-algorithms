// Naive Solution
// Time Complexity: O(nlogn)

var countBits = function(n){
  let ans = [];
  ans[0] = 0;
  for(let i = 0; i<=n; i++){
    let index = i;
    let count = 0;
    while(index > 0){
      index = index & (index - 1);
      count++;
    }
    ans[i] = count;
  }
  return ans;
}

// Better Solution

var countBits = function(n){
  let ans = [];
  ans[0] = 0;
  for(let i = 1; i<=n; i++){
    if(i % 2 === 0){
      ans[i] = ans[i >> 1];
    }else {
      ans[i] = ans[i >> 1] + 1;
    }
  }
  return ans;
}

// Optimal Solution

var countBits = function(n){
  let ans = [];
  ans[0] = 0;
  for(let i = 1; i<=n; i++){
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}
