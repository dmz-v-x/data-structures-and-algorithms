You are given an array:

nums = [2,3,1,1,4]

Each element = max jump length from that index

Start at index 0
Can you reach the last index?

Return:

true if reachable
false otherwise

// Brute Force:
// Time Complexity: O(2^n)
function canJump(nums) {
  function dfs(i) {
    if (i >= nums.length - 1) return true;

    for (let jump = 1; jump <= nums[i]; jump++) {
      if (dfs(i + jump)) return true;
    }

    return false;
  }

  return dfs(0);
}

// Greedy Approach
// Time Complexity: O(n)
// Space Complexity: O(1)
function canJump(nums){
  let maxReach = 0;

  for(let i = 0; i<nums.length; i++){
    if(i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}
