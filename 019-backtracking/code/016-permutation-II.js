// Given:

// nums = [1,1,2]

// Return ALL UNIQUE permutations.

// WHY NORMAL PERMUTATION CODE FAILS?

// Normal permutation algorithm says:

// Try every unused number

// BUT NOW THERE ARE TWO 1s

// So recursion may generate:

// [1,1,2]

// multiple times.

// HOW?
// First branch

// Choose:

// first 1
// then second 1
// then 2
// Second branch

// Choose:

// second 1
// then first 1
// then 2

// BUT RESULT IS SAME
// [1,1,2]

// duplicate permutation.

// MOST IMPORTANT INSIGHT

// We must avoid:

// Choosing duplicate values in SAME decision position

// VERY IMPORTANT

// We are NOT banning duplicates completely.

// Example:

// [1,1,2]

// is VALID.

// THE REAL RULE

// At SAME LEVEL:

// Only first duplicate should be allowed

// WHY DO WE SORT?

// VERY important.

// We first do:

// nums.sort((a,b)=>a-b)

// WHY?

// Because:

// duplicates become adjacent

// Example:

// [1,2,1]

// becomes:

// [1,1,2]

// THIS MAKES DUPLICATE CHECK EASY

// We can compare:

// nums[i] === nums[i-1]

// NORMAL USED ARRAY STILL NEEDED

// We still need:

// used[i]

// because:

// Permutation cannot reuse same index twice

// THE MOST IMPORTANT LINE

// This is the HEART of the problem:

// if(
//     i > 0 &&
//     nums[i] === nums[i-1] &&
//     !used[i-1]
// ){
//     continue;
// }

// CONDITION 1
// i > 0

// Means:

// There exists previous element

// CONDITION 2
// nums[i] === nums[i-1]

// Means:

// Current element is duplicate

// CONDITION 3 (MOST IMPORTANT)
// !used[i-1]

// Means:

// Previous duplicate was NOT chosen in current branch

// WHAT DOES THAT MEAN?

// Suppose:

// nums = [1,1,2]

// At root level:

// i = 0

// First 1.

// Allowed.

// i = 1

// Second 1.

// Check:

// nums[1] === nums[0]

// YES.

// Now:

// used[0] = false

// because first 1 was NOT chosen in this branch.

// So:

// SKIP second 1

// WHY SKIP?

// Because:

// Choosing second 1 first
// creates SAME permutations
// as choosing first 1 first

// THE REAL INTERPRETATION

// This condition means:

// "Only use duplicates in a fixed order"

// IMPORTANT

// If previous duplicate IS already used:

// used[i-1] === true

// then current duplicate is ALLOWED.

// WHY?

// Because now duplicates belong to DIFFERENT recursion levels.

// Example:

// [1,1]

// This is valid.

function permuteUnique(nums){
  nums.sort((a, b) => a - b);

  let result = [];

  let used = new Array(nums.length).fill(false);

  function backtrack(subset){
    // base case
    if(subset.length === nums.length){
      result.push([...subset]);
    }

    for(let i = 0; i<nums.length; i++){
      // already used
      if(used[i]) continue;

      // duplicate pruning
      if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;

      // choose
      used[i] = true;
      subset.push(nums[i]);

      // explore
      backtrack(subset);

      // undo
      subset.pop();
      used[i] = false;
    }
      
  }

  backtrack([]);

  return result;
}



// Using Set

function permuteUnique(nums){

  let result = [];

  let used = new Array(nums.length).fill(false);

  function backtrack(current){

  if(current.length === nums.length){
      result.push([...current]);
      return;
  }

  let levelSet = new Set();

  for(let i = 0; i < nums.length; i++){

      if(used[i]) continue;

      // duplicate prevention at same level
      if(levelSet.has(nums[i])) continue;

      levelSet.add(nums[i]);

      used[i] = true;

      current.push(nums[i]);

      backtrack(current);

      current.pop();

      used[i] = false;
    }
  }

  backtrack([]);

  return result;
}















