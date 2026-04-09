// You are given an array nums of size n + 1:

// Numbers are in range: [1, n]
// Only one number is duplicated
// You must return that duplicate
// You cannot modify the array

// Input:  [1, 3, 4, 2, 2]
// Output: 2


// Brute Force
// Time Complexity: O(N^2)
// Space Complexity: O(1)
function findDuplicate(nums){
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      if(nums[i] === nums[j]){
        return nums[i];
      }
    }
  }
}

// Better Approach Using Set
// Time Complexity: O(N)
// Space Complexity: O(N)
function findDuplicate(nums){
  const seen = new Set();
  for(let num of nums){
    if(seen.has(num)){
      return num;
    }
    seen.add(num);
  }
}

// Optimal Solution: Using Floyd Detection Cycle

// We treat:

// index → node
// value → next pointer

// So:

// next = nums[current]

// nums = [1, 3, 4, 2, 2]

// | Index | Value | Meaning |
// | ----- | ----- | ------- |
// | 0     | 1     | 0 → 1   |
// | 1     | 3     | 1 → 3   |
// | 2     | 4     | 2 → 4   |
// | 3     | 2     | 3 → 2   |
// | 4     | 2     | 4 → 2   |

// Time Complexity: O(N)
// Space Complexity: O(1)
function findDuplicate(nums){
  let slow = nums[0];
  let fast = nums[0];

  slow = nums[slow];
  fast = nums[nums[fast]];

  while(slow !== fast){
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = nums[0];
  while(slow !== fast){
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
