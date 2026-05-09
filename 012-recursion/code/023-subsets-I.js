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


// Complete Flow:

// INPUT
// nums = [1,2]

// Code:

// function backtrack(index, currentSubset)

// INITIAL CALL
// backtrack(0, [])

// Meaning:

// We are deciding for nums[0]
// Current subset is []

// STEP 1: CURRENT ELEMENT
// nums[0] = 1

// For every element we have TWO choices:

// 1. Pick it
// 2. Not pick it

// STEP 2: PICK 1

// We do:

// currentSubset.push(1)

// Now:

// currentSubset = [1]

// STEP 3: GO DEEP

// Call:

// backtrack(1, [1])

// Meaning:

// We already picked 1
// Now we are deciding for nums[1]

// STOP HERE

// VERY IMPORTANT.

// Current recursion stack:

// backtrack(0, [])
//     ↓
// backtrack(1, [1])

// CURRENT STATE
// Subset currently = [1]

// We are exploring:

// All subsets that START with 1

// backtrack(1, [1])

// Meaning:

// We already picked 1
// Now deciding whether to pick 2 or not

// TWO CHOICES FOR 2
// 1. Pick 2
// 2. Not pick 2

// PICK 2

// We do:

// currentSubset.push(2)

// Now:

// currentSubset = [1,2]

// GO DEEP AGAIN

// Call:

// backtrack(2, [1,2])

// VERY IMPORTANT

// Now:

// index = 2
// nums.length = 2

// So:

// index === nums.length

// BASE CASE HIT.

// STORE ANSWER

// We do:

// result.push([...currentSubset])

// So:

// result = [[1,2]]

// VERY IMPORTANT UNDERSTANDING

// Why did we store [1,2]?

// Because:

// We made decisions for ALL elements

// Decision summary:

// 1 → picked
// 2 → picked

// So subset becomes:

// [1,2]

// RETURN

// Function finishes.

// We return to:

// backtrack(1, [1])

// NOW THE MOST IMPORTANT MOMENT

// We came back from recursion.

// Now THIS line executes:

// currentSubset.pop()

// UNDO

// Remove last picked element.

// Before pop:

// [1,2]

// After pop:

// [1]

// WHY DO WE UNDO?

// Because:

// Now we want to explore the OTHER choice

// for element 2.

// CURRENT STATE NOW
// currentSubset = [1]

// We already explored:

// pick 2

// Now next branch will explore:

// NOT pick 2

// We are back inside:

// backtrack(1, [1])

// Current subset:

// [1]

// We already explored:

// pick 2

// Now we explore:

// NOT pick 2

// NOT PICK 2

// We do NOT add anything.

// Subset stays:

// [1]

// GO DEEP

// Call:

// backtrack(2, [1])

// BASE CASE AGAIN

// Now:

// index = 2
// nums.length = 2

// So:

// index === nums.length

// BASE CASE HIT.

// TORE ANSWER

// We store:

// [1]

// Now:

// result = [[1,2], [1]]

// DECISION SUMMARY

// How did we get [1]?

// Decisions:

// 1 → picked
// 2 → NOT picked

// So subset becomes:

// [1]

// RETURN AGAIN

// Now:

// backtrack(2, [1])

// finishes.

// We return to:

// backtrack(0, [])

// VERY IMPORTANT

// We are now back at ROOT LEVEL.

// Current recursion stack becomes:

// backtrack(0, [])

// WHAT HAPPENS NEXT?

// At root level:

// We already explored:

// PICK 1

// Now we must explore:

// NOT PICK 1

// UNDO PICK 1

// This line executes:

// currentSubset.pop()

// Before:

// [1]

// After:

// []

// WHY DID WE REMOVE 1?

// Because:

// Now we are exploring subsets WITHOUT 1

// YOUR CHECKPOINT

// Current state:

// currentSubset = []

// We are about to explore:
// NOT PICK 1

// And inside that branch:

// we will later make decision for 2

// We are back at:

// backtrack(0, [])

// Current subset:

// []

// IMPORTANT

// At root level for element 1:

// We already explored:

// PICK 1

// Now we explore:

// NOT PICK 1

// NOT PICK 1

// We do NOT add anything.

// Subset stays:

// []

// GO DEEP

// Call:

// backtrack(1, [])

// Meaning:

// We skipped 1
// Now deciding for 2

// CURRENT STATE
// subset = []
// current element = 2

// Again TWO choices:

// 1. Pick 2
// 2. Not pick 2

// PICK 2

// We do:

// currentSubset.push(2)

// Now:

// [2]

// GO DEEP

// Call:

// backtrack(2, [2])

// BASE CASE
// index === nums.length

// Store:

// [2]

// Now:

// result = [[1,2], [1], [2]]

// RETURN + UNDO

// Return to:

// backtrack(1, [])

// Execute:

// pop()

// Now:

// []

// NOW WHAT?

// We already explored:

// PICK 2

// Now we explore:

// NOT PICK 2

// Decision summary becomes:

// 1 → NOT picked
// 2 → NOT picked

// So subset becomes:

// []

// NOT PICK 2

// We do NOT add anything.

// Subset stays:

// []

// GO DEEP

// Call:

// backtrack(2, [])

// BASE CASE

// Now:

// index === nums.length

// Store current subset.

// So:

// result.push([])

// FINAL RESULT
// [
//   [1,2],
//   [1],
//   [2],
//   []
// ]

// COMPLETE RECURSION TREE
//                           []
//                     /             \
//                pick1             not pick1
//                 [1]                  []
//               /      \             /     \
//          pick2      not2      pick2     not2
//          [1,2]       [1]        [2]       []

// MOST IMPORTANT INSIGHT

// Each level represents:

// Decision for ONE element

// FOR ELEMENT 1

// Two branches:

// pick 1
// not pick 1

// FOR ELEMENT 2

// Again:

// pick 2

// THIS IS WHY TOTAL SUBSETS ARE

// For every element:

// 2 choices

// So:

// Total subsets = 2^n


// Backtracking version

function subsets(nums){
  let result = [];

  function backtrack(start, currentSubset){

    // every state is valid subset
    result.push([...currentSubset])

    for(let i = start; i<nums.length; i++){

      // choose
      currentSubset.push(nums[i]);

      // explore
      backtrack(i + 1, currentSubset);

      // undo
      currentSubset.pop();
    }
  }
  backtrack(0, []);
  return result;
}
