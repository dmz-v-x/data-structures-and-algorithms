// House Robber Problem

// You are given an array:

// nums = [2, 7, 9, 3, 1]

// Each number = money in a house.

// Rule:

// You cannot rob 2 adjacent houses (alarm will trigger)

// Goal:

// Maximize the total money you steal

// Brute Force: Recursive Solution

function houseRobber(nums){

  function solve(i, nums){
    if(i < 0) return 0;

    let rob = nums[i] + solve(i - 2, nums);
    let skip = solve(i - 1, nums);

    return Math.max(rob, skip);
  }

  
  return solve(nums.length - 1, nums);
}


// Better Approach: Dynamic Programming + Memoization

function houseRobber(nums){

  function solve(i, dp){
    if(i < 0) return 0;
    if(dp[i] !== -1) return dp[i];

    let rob = nums[i] + solve(n-2, dp);
    let skip = solve(n-1, dp);

    dp[i] = Math.max(rob, skip);
    return dp[i];
  }
  
  let dp = new Array(nums.length).fill(-1);
  return solve(nums.length - 1, dp);
}














