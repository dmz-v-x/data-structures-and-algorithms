// Naive Approach: Using Set

// Time Complexity: O(n)
// Space Complexity: O(n)

function missingNumber(nums){
  let n = nums.length;
  let set = new Set(nums);

  for(let i = 0; i<=n; i++){
    if(!set.has(i)){
      return i;
    }
  }
}

// Better Approach: Using Sum formula

// Time Complexity: O(n)
// Space Complexity: O(1)

function missingNumber(nums){
  let n = nums.length;
  let sum = n * (n + 1) / 2;

  for(let i = 0; i<n; i++){
    sum -= nums[i];
  }

  return sum;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

function missingNumber(nums) {
  let n = nums.length;
  let xor = 0;

  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }

  for (let num of nums) {
    xor ^= num;
  }

  return xor;
}

