// PROBLEM

// Given:

// nums = [1,2,3]

// Return all permutations.

// WHAT IS A PERMUTATION?

// Permutation means:

// Arrangement where ORDER matters

// EXAMPLE

// For:

// [1,2]

// Subsets were:

// []
// [1]
// [2]
// [1,2]

// But permutations are:

// [1,2]
// [2,1]

// VERY IMPORTANT DIFFERENCE

// In subsets:

// [1,2] and [2,1]

// were considered SAME logically.

// In permutations:

// [1,2] ≠ [2,1]

// because:

// POSITION matters

// CORE PERMUTATION THINKING

// This is THE biggest mindset shift.

// SUBSETS THINKING

// Subsets asked:

// Should I take this element or not?

// PERMUTATION THINKING

// Permutations ask:

// Which UNUSED element should I place next?

// THIS is the entire problem.

// VISUALIZATION

// Suppose:

// nums = [1,2,3]

// We build permutation ONE position at a time.

// POSITION 1

// Choices:

// 1
// 2
// 3

// Suppose we choose:

// 1

// Now permutation becomes:

// [1]

// POSITION 2

// Now we can ONLY use unused numbers:

// 2
// 3

// Suppose choose:

// 2

// Permutation:

// [1,2]

// POSITION 3

// Only unused number left:

// 3

// Permutation:

// [1,2,3]

// DONE.


// HOW DO WE KNOW USED/UNUSED?

// VERY important.

// We use:

// used[i]

// EXAMPLE

// Initially:

// used = [false,false,false]

// Meaning:

// No element used yet

// AFTER PICKING 1
// used = [true,false,false]

// Meaning:

// 1 already used

// WHAT SHOULD FUNCTION REPRESENT?

// Most important recursion question.

// We define:

// backtrack(currentPermutation)

// Meaning:

// Build permutation step-by-step

// VERY IMPORTANT

// Unlike subsets:

// No index needed

// because:

// At every level,
// we can choose ANY unused element

// BASE CASE

// When is permutation complete?

// Suppose:

// currentPermutation.length === nums.length

// Meaning:

// All positions filled

// So store answer.

// BASE CASE
// if(current.length === nums.length){
//     result.push([...current]);
//     return;
// }

// CHOICES

// At every level:

// Try every UNUSED number

// So:

// for(let i = 0; i < nums.length; i++)

// SKIP USED ELEMENTS
// if(used[i]) continue;

// Meaning:

// Already placed in permutation

// STEP 7: CHOOSE

// Suppose choosing nums[i].

// Mark used
// used[i] = true;
// Add to permutation
// current.push(nums[i]);

// STEP 8: EXPLORE
// backtrack(current);

// STEP 9: UNDO

// After recursion returns:

// Remove from permutation
// current.pop();
// Mark unused again
// used[i] = false;



function permute(nums){
  let result = [];

  let used = new Array(nums.length).fill(false);

  function backtrack(current){
    // base case
    if(current.length === nums.length){
      result.push([...current]);
      return;
    }

    for(let i = 0; i<nums.length; i++){
      // skip used elements

      if(used[i]) continue;


      // choose
      used[i] = true;
      current.push(nums[i]);

      // explore
      backtrack(current);

      // undo
      current.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}

// RECURSION TREE VISUALIZATION

// For:

// [1,2,3]
// LEVEL 1
//         []
//       /  |  \
//     [1] [2] [3]


// LEVEL 2

// From [1]:

//    [1]
//    / \
// [1,2] [1,3]

// LEVEL 3
// [1,2,3]
// [1,3,2]

// Similarly for branches starting with:

// [2]
// [3]

// FINAL ANSWERS
// [
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
// ]

// Dry Run

// INITIAL STATE
// current = []
// used = [F,F,F]

// Call:

// backtrack([])

// VERY IMPORTANT

// At this level:

// Loop decides:
// Which number should go FIRST?

// LOOP STARTS
// for(i = 0 → 2)

// ITERATION 1 → i = 0
// nums[0] = 1
// used[0] = false

// Allowed.

// CHOOSE 1
// used[0] = true
// current.push(1)

// Now:

// current = [1]
// used = [T,F,F]

// GO DEEP

// Call:

// backtrack([1])

// IMPORTANT

// Now recursion stack is:

// backtrack([])
//     ↓
// backtrack([1])

// CURRENT QUESTION

// Inside this new call:

// Which number should go SECOND?

// LOOP STARTS AGAIN
// for(i = 0 → 2)

// IMPORTANT:

// This is a BRAND NEW LOOP

// Every recursive call has its OWN loop.

// ITERATION 1 → i = 0

// Check:

// used[0] = true

// So:

// continue;

// Skip 1.

// ITERATION 2 → i = 1
// nums[1] = 2
// used[1] = false

// Allowed.

// CHOOSE 2
// used[1] = true
// current.push(2)

// Now:

// current = [1,2]
// used = [T,T,F]

// GO DEEP AGAIN

// Call:

// backtrack([1,2])

// STACK NOW
// backtrack([])
//     ↓
// backtrack([1])
//     ↓
// backtrack([1,2])

// CURRENT QUESTION
// Which number should go THIRD?


// LOOP STARTS
// i = 0
// used[0] = true

// Skip.

// i = 1
// used[1] = true

// Skip.

// i = 2
// used[2] = false

// Allowed.

// CHOOSE 3
// used[2] = true
// current.push(3)

// Now:

// current = [1,2,3]
// used = [T,T,T]

// GO DEEP AGAIN

// Call:

// backtrack([1,2,3])

// BASE CASE

// Check:

// current.length === nums.length
// 3 === 3

// YES.

// STORE ANSWER
// result.push([1,2,3])

// NOW THE MOST IMPORTANT PART

// Function finishes.

// So:

// We RETURN BACK

// to previous call.

// WHERE DO WE RETURN?

// We return to:

// backtrack([1,2])

// EXACTLY after this line:

// backtrack(current);

// THIS IS THE MOST IMPORTANT RECURSION INSIGHT

// Execution resumes:

// RIGHT AFTER recursive call

// NOT from beginning.

// NOW THESE LINES EXECUTE
// current.pop();
// used[2] = false;

// BACKTRACKING HAPPENS

// Before pop:

// [1,2,3]

// After pop:

// [1,2]

// Used becomes:

// [T,T,F]

// WHY UNDO?

// Because:

// We finished exploring all permutations starting with:
// [1,2,3]

// Now we want OTHER possibilities.

// NOW THE LOOP CONTINUES

// We are STILL inside:

// backtrack([1,2])

// Loop was:

// for(i = 0 → 2)

// We already finished:

// i = 2

// No more iterations.

// So function ends.

// RETURN AGAIN

// We go back to:

// backtrack([1])

// Again EXACTLY after recursive call.

// NOW THESE EXECUTE
// current.pop();
// used[1] = false;

// Before:

// [1,2]

// After:

// [1]

// Used:

// [T,F,F]

// LOOP CONTINUES

// We are STILL inside:

// backtrack([1])

// Loop:

// for(i = 0 → 2)

// We already did:

// i = 1

// Now loop moves to:

// i = 2

// THIS CREATES NEW BRANCH

// Choose 3:

// [1,3]

// Then eventually:

// [1,3,2]

// ULTRA IMPORTANT VISUALIZATION

// Think:

// choose 1
//     choose 2
//         choose 3
//         DONE
//         undo 3
//     continue loop
//     choose 3
//         choose 2

// This is EXACTLY what backtracking means.







