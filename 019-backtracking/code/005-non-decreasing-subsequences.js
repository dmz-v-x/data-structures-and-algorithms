// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

// Example 1:

// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

// Example 2:

// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]

// Why Backtracking in this question: We are asked to print all subsequences so that's a hint, whenever asked about all subsets, subarrays, subsequences.


// Brute Force: 
// -> Generate all subsequences 2^n
// -> Find valid ones
// -> Remove duplicates

function findSubsequences(nums){
  let result = [];

  function backtrack(index, path){
    if(path.length >= 2){
      res.push([...path]);
    }

    let used = new Set(); // prevent duplicates at same level

    for(let i = index; i<nums.length; i++){
      // skip duplicates at same recursion level

      if(used.has(nums[i])) continue;

      // enforce non-decreasing condition
      if(path.length === 0 || nums[i] >= path[path.length - 1]){
        used.add(nums[i]);
        path.push(nums[i]);
        backtrack(i+1, path);
        path.pop(); // undo
      }
    }
  }

  backtrack(0, []);
  return result;
}


// Dry Run

// Step 1: 

// -> CURRENT STATE

// Input:

// nums = [4, 6, 7, 7]

// We start:

// backtrack(0, [])

// -> ENTER FIRST CALL
// index = 0
// path = []
// used = {}

// -> LOOP STARTS
// for (i = 0; i < 4; i++)
// We are at:

// i = 0
// nums[i] = 4

// -> CHECK "used" SET
// used.has(4) → false

// So we are allowed to use 4

// -> CHECK NON-DECREASING CONDITION
// path.length === 0 → true

// Always allowed when path is empty

// -> MARK USED
// used.add(4)

// Now:

// used = {4}

// -> CHOOSE ELEMENT
// path.push(4)

// Now:

// path = [4]

// -> GO DEEP
// backtrack(1, [4])

// -> CURRENT STATE
// We chose: 4
// Now we are exploring all subsequences that START with 4

// -> VERY IMPORTANT INSIGHT
// used = {4} only applies to THIS LEVEL (index = 0)

// It prevents:

// Picking another "4" again at this same level

// WHAT DOES “LEVEL” MEAN?

// When we call:

// backtrack(0, [])

// This is LEVEL 0

// Inside this call:

// let used = new Set();

// This used belongs ONLY to this call




// Step 2: 

// -> We already did:

// Picked 4

// Now we are inside:

// backtrack(1, [4])

// -> ENTER THIS CALL
// index = 1
// path = [4]
// used = {}

// -> LOOP STARTS
// for (i = 1; i < 4; i++)

// -> i = 1
// nums[1] = 6

// -> CHECK used
// used.has(6) → false

// Not used yet → allowed

// -> CHECK NON-DECREASING

// nums[i] >= last element
// 6 >= 4 → true

// Valid choice

// -> MARK USED
// used.add(6)

// Now:

// used = {6}

// -> CHOOSE
// path.push(6)

// Now:

// path = [4, 6]

// -> VALID SUBSEQUENCE
// path.length >= 2 → true

// Add to result:

// result = [[4,6]]


// Step 3:

// backtrack(2, [4,6])

// CURRENT STATE
// index = 2
// path = [4,6]
// used = {}

// We now want to build:

// [4,6, ?]

// -> LOOP STARTS
// for (i = 2; i < 4; i++)

// -> i = 2
// nums[2] = 7

// -> CHECK used
// used.has(7) → false

// Not used at this level → allowed

// -> CHECK NON-DECREASING
// 7 >= 6 → true

// Valid

// -> MARK USED
// used.add(7)

// Now:

// used = {7}

// -> CHOOSE
// path.push(7)

// Now:

// path = [4,6,7]

// -> VALID SUBSEQUENCE
// path.length >= 2 → true

// Add:

// result = [[4,6], [4,6,7]]

// -> GO DEEP
// backtrack(3, [4,6,7])


// Step 4: 

// -> CURRENT STATE
// index = 3
// path = [4,6,7]
// used = {}


// -> Goal:

// Try to build: [4,6,7, ?]

// -> LOOP
// for (i = 3; i < 4; i++)

// -> i = 3
// nums[3] = 7   (second 7)

// -> CHECK used
// used.has(7) → false

// Important:

// This is a NEW level → used is empty again

// So this 7 is allowed.

// -> CHECK NON-DECREASING
// 7 >= 7 → true

// Allowed

// -> MARK USED
// used.add(7)

// Now:

// used = {7}

// -> CHOOSE
// path.push(7)

// Now:

// path = [4,6,7,7]

// -> VALID SUBSEQUENCE
// length >= 2 → YES

// Add:

// result = [[4,6], [4,6,7], [4,6,7,7]]

// -> GO DEEP
// backtrack(4, [4,6,7,7])

// -> BASE SITUATION
// index = 4

// Loop:

// for (i = 4; i < 4; i++) → doesn't run

// Function ends → returns automatically

// -> BACKTRACK
// path.pop()

// Now:

// path = [4,6,7]

// -> So We just finished:

// backtrack(4, [4,6,7,7])

// Then:

// path.pop()

// Now:

// path = [4,6,7]

// -> CHECK THE LOOP AT THIS LEVEL

// We are inside:

// backtrack(3, [4,6,7])

// Loop:

// for (i = 3; i < 4; i++)

// Only ONE iteration existed:

// i = 3

// We already finished it.

// -> AFTER LOOP FINISHES

// Now:

// No more i values left

// So:

// Function ends → returns automatically

// -> WHERE DO WE RETURN TO?

// We go back to the previous call:

// backtrack(2, [4,6])

// -> IMPORTANT VISUAL

// Think stack like this:

// backtrack(2, [4,6])
//     ↓
// backtrack(3, [4,6,7])
//     ↓
// backtrack(4, [4,6,7,7])

// Now we finished bottom → we go UP:

// backtrack(4) done
// → backtrack(3) continues
// → backtrack(3) done
// → backtrack(2) continues ← YOU ARE HERE

// -> WHAT HAPPENS IN backtrack(2, [4,6]) NOW?

// We were here:

// for (i = 2; i < 4; i++)

// We already did:

// i = 2 → picked first 7

// -> NOW LOOP CONTINUES

// Next:

// i = 3
// nums[3] = 7

// -> THIS IS THE MOST IMPORTANT MOMENT

// Now check:

// used.has(7)

// What is used here?

// From earlier:

// used = {7}

// -> RESULT
// used.has(7) → true

// So:

// SKIP this iteration

// -> WHY SKIP?

// Because:

// We already used 7 at THIS LEVEL

// Prevents duplicate:

// [4,6,7] from index 2
// [4,6,7] from index 3  ❌ duplicate

// -> LOOP ENDS

// Now:

// No more i left

// So:

// backtrack(2, [4,6]) finishes

// And so on...
