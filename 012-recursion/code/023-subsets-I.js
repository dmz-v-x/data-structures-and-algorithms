// Given:

// nums = [1,2,3]

// Return ALL subsets.

// WHAT IS A SUBSET?

// A subset means:

// Any combination of elements

// including:

// []
// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]

// STEP 1: MOST IMPORTANT INSIGHT

// For EVERY element:

// We have TWO choices

// CHOICES

// For element 1:

// 1. Pick it
// 2. Do not pick it

// For element 2:

// 1. Pick it
// 2. Do not pick it

// For element 3:

// 1. Pick it
// 2. Do not pick it

// THIS IS THE ENTIRE PROBLEM
// Every element creates two branches

// This is why subsets use:

// pick / not pick recursion

// STEP 2: VISUALIZATION

// Take:

// nums = [1,2]

// For 1:

// pick 1
// don't pick 1

// Then for 2:

// Again:

// pick 2
// don't pick 2

// COMPLETE TREE
//                     []
//                  /      \
//              pick1     not pick1
//               /             \
//            [1]              []
//           /   \            /    \
//       [1,2]  [1]       [2]      []

// FINAL SUBSETS
// [1,2]
// [1]
// [2]
// []

// MOST IMPORTANT OBSERVATION

// At every step:

// We make a decision about ONE element

// HOW SHOULD FUNCTION REPRESENT STATE?

// MOST important recursion question.

// We define:

// subsets(index, currentSubset)

// Meaning:

// "I am currently deciding for nums[index]
// Current chosen subset is currentSubset"

// EXAMPLE
// subsets(0, [])

// Meaning:

// Start from index 0
// Current subset is empty

// WHAT IS THE BASE CASE?

// When should recursion stop?

// Suppose:

// index === nums.length

// Meaning:

// We already made decisions for all elements

// THEN WHAT?

// Current subset becomes a COMPLETE answer.

// So:

// result.push([...currentSubset]);

// VERY IMPORTANT

// We use:

// [...currentSubset]

// because:

// arrays are reference types

// STEP 5: THE TWO CHOICES

// Suppose:

// nums[index] = 1

// We have:

// CHOICE 1 → PICK

// Add element:

// currentSubset.push(nums[index]);

// Then recurse:

// subsets(index + 1, currentSubset);

// After recursion:

// currentSubset.pop();

// UNDO choice.

// CHOICE 2 → NOT PICK

// Simply recurse:

// subsets(index + 1, currentSubset);

// without adding element.

// THIS IS THE COMPLETE BACKTRACKING FLOW

// pick
// explore
// undo
// not pick

function subset(nums){
  let result = [];

  function backtrack(index, currentSubset){
    if(index === nums.length){
      result.push([...currentSubset]);
      return;
    }

    // pick + backtrack
    currentSubset.push(nums[index]);

    backtrack(index+1, currentSubset);

    // undo
    currentSubset.pop();

    // not pick + backtrack
    backtrack(index+1, currentSubset);
  }

  backtrack(0, []);
  return result;
}





















