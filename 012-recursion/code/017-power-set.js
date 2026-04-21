// Given an array:

// nums = [1, 2, 3]

// We need to generate:

// ALL possible subsets

// []
// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]

// Key Observation

// For each element:

// You have 2 choices:
// → Include it
// → Exclude it

// Total subsets
// 2^n



// Brute Force: Binary Representation

// Every subset corresponds to a binary number:

// 0 → exclude
// 1 → include

// Example
// nums = [1,2,3]

// Binary from 0 → 7:

// 000 → []
// 001 → [3]
// 010 → [2]
// 011 → [2,3]
// 100 → [1]
// 101 → [1,3]
// 110 → [1,2]
// 111 → [1,2,3]

// Complexity
// Time: O(n * 2^n)
// Space: O(1) (excluding output)

function subsets(nums){
  let result = [];
  let n = nums.length;

  for(let i = 0; i< (1 << n); i++){
    let subset = [];

    for(let j = 0; j<n; j++){
      if(i & (1 << j) !== 0){
        subset.push(nums[j]);
      }
    }

    result.push(subset);
  }

  return result;
}



// Better Appraoch: Recursion

// Complexity
// Time: O(n * 2^n)
// Space: O(n)

function subsets(nums){
  let result = [];

  function helper(index, path){
    if(index === nums.length){
      result.push([...path]);
      return;
    }

    // include
    path.push(nums[index]);
    helper(index + 1, path);
    path.pop();

    // exclude
    helper(index + 1, path);
  }

  helper(0, []);
  return result;
}


// Backtracking

// Complexity:
// Time: O(n * 2^n)
// Space: O(n)

function subsets(nums){
  let result = [];
  let path = [];

  function backtrack(start){
    result.push([...path]);

    for(let i =  start; i<nums.length; i++){
      path.push(nums[i]);
      backtrack(i+1);
      path.pop();
    }
  }

  backtrack(0);
  return result;
}












