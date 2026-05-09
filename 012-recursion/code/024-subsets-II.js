// PROBLEM

// Given:

// nums = [1,2,2]

// Return ALL UNIQUE subsets.

// WHY IS THIS PROBLEM HARDER?

// Normal subsets problem had:

// all unique elements

// Now:

// duplicates exist

// WHAT GOES WRONG?

// If we use normal subsets algorithm:

// We may generate:

// [2]

// multiple times.

// HOW?

// Because there are TWO different 2s.

// First 2
// Pick nums[1]
// → [2]

// Second 2
// Pick nums[2]

// DUPLICATE ANSWER

// Now result contains:

// [2]
// [2]

// which is invalid.

// MOST IMPORTANT INSIGHT

// Duplicates happen ONLY when:

// same value is chosen at SAME LEVEL

// This is THE key insight.

// VERY IMPORTANT

// We are NOT banning duplicates completely.

// Example:

// [2,2]

// IS VALID.

// WHY?

// Because:

// those 2s are chosen at DIFFERENT recursion levels

// THE REAL RULE
// At SAME LEVEL:
// skip duplicate values

// WHY DO WE SORT?

// VERY important.

// Input:

// [1,2,2]

// already sorted.

// But generally we do:

// nums.sort((a,b) => a-b);

// WHY SORT?

// Because:

// duplicates become adjacent

// Example:

// [2,1,2]

// becomes:

// [1,2,2]

// THIS ALLOWS EASY SKIPPING

// We can check:

// nums[i] === nums[i-1]

// WHICH SUBSET APPROACH DO WE USE?

// For Subsets II:

// Most natural approach is:

// FOR LOOP BACKTRACKING

// NOT pick/not-pick style.


// WHY?

// Because duplicate skipping becomes much easier.

// TEMPLATE
// for(let i = start; i < nums.length; i++)


// THE MOST IMPORTANT LINE
// if(i > start && nums[i] === nums[i-1]) continue;

// This is the HEART of the problem.

// LET’S UNDERSTAND IT SLOWLY

// Suppose:

// nums = [1,2,2]

// At some recursion level:

// start = 1

// Loop:

// i = 1 → first 2
// i = 2 → second 2

// FIRST 2

// Allowed.

// SECOND 2

// Check:

// i > start && nums[i] === nums[i-1]

// becomes:

// 2 > 1 → true
// 2 === 2 → true

// SKIP.

// WHY SKIP?

// Because:

// At THIS level,
// we already explored subsets starting with 2

// Exploring another 2 creates duplicates.


function subsetsWithDup(nums){

  nums.sort((a,b) => a-b);

  let result = [];

  function backtrack(start, subset){

    result.push([...subset]);

    for(let i = start; i < nums.length; i++){

        // skip duplicates at same level
        if(i > start && nums[i] === nums[i-1]){
            continue;
        }

        // choose
        subset.push(nums[i]);

        // explore
        backtrack(i + 1, subset);

        // undo
        subset.pop();
    }
  }

  backtrack(0, []);

  return result;
}



// Using Sorting + Set

function subsetsWithDup(nums){
  nums.sort((a, b) => a - b);
  let result = [];

  function backtrack(index, currentSubset){
    result.push([...currentSubset]);

    let set = new Set();

    for(let i = index; i<nums.length; i++){
      if(set.has(nums[i])) continue;

      set.add(nums[i]);

      currentSubset.push(nums[i]);

      backtrack(i + 1, currentSubset);

      currentSubset.pop();
    }
  }


  backtrack(0, []);
  return result;
}


  









  
