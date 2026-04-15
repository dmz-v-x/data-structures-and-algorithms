// Given array nums, where nums[i] = max jump length from index i.

// Return minimum number of jumps to reach last index.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

// Brute Force (Recursion)
// Time: O(k^n) (exponential) 
// Space: O(n) recursion stack
function jump(nums){

  function dfs(i){
    if(i >= n - 1) return;

    let minJumps = Infinity;

    for(let step = 1; step <= nums[i]; step++){
      minJumps = Math.min(minJumps, 1 + dfs(i + step))
    }
    
    return minJumps;
  }
  return dfs(0);
}


// Top - Down DP

// Time: O(n²)
// Space: O(n)

function jump(nums){
  const n = nums.length;

  const memo = new Array(n).fill(-1);

  function dfs(i) {
    if (i >= n - 1) return 0;
    if (memo[i] !== -1) return memo[i];
  
    let minJumps = Infinity;
  
    for (let step = 1; step <= nums[i]; step++) {
      minJumps = Math.min(minJumps, 1 + dfs(i + step));
    }
  
    return memo[i] = minJumps;
  }

  return dfs(0); 
}


// Greedy:
// Time: O(n) 
// Space: O(1)

function jump(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}
