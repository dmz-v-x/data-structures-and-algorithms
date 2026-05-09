// PROBLEM

// Given:

// nums = [1,2,3]

// Modify array into:

// next lexicographically greater permutation

// WHAT DOES “NEXT PERMUTATION” MEAN?

// Suppose all permutations are sorted dictionary-style.

// For:

// [1,2,3]

// all permutations are:

// [1,2,3]
// [1,3,2]
// [2,1,3]
// [2,3,1]
// [3,1,2]
// [3,2,1]

// NEXT PERMUTATION

// For:

// [1,2,3]

// next is:

// [1,3,2]

// For:

// [1,3,2]

// next is:

// [2,1,3]


// MOST IMPORTANT INSIGHT

// We want:

// SMALLEST possible number
// that is still GREATER than current

// This is THE key idea.

// MOST IMPORTANT INSIGHT

// We want:

// SMALLEST possible number
// that is still GREATER than current

// This is THE key idea.

// EXAMPLE

// Current:

// [1,2,3]

// Next greater permutations:

// [1,3,2]
// [2,1,3]
// [2,3,1]
// ...

// We want:

// smallest among these greater ones

// which is:

// [1,3,2]

// OBSERVE FROM RIGHT SIDE

// VERY important.

// Permutation changes happen from:

// RIGHT side

// EXAMPLE
// [1,2,3]

// Can we increase last digit?

// YES.

// Replace:

// 3

// with something bigger?

// No bigger exists.

// Move left.

// At 2:

// Can we make array slightly bigger?

// YES.

// By swapping with:

// 3

// THIS IS THE KEY

// We search from RIGHT for first increasing pair.

// FIND PIVOT

// We find first index from right where:

// nums[i] < nums[i+1]

// This is called:

// pivot

// EXAMPLE
// [1,2,3]

// Check from right:

// 2 < 3 ✅

// Pivot index:

// i = 1

// Pivot value:

// 2

// WHAT DOES PIVOT MEAN?

// Pivot means:

// This is the place where we can increase permutation

// FIND JUST GREATER ELEMENT

// Now find:

// smallest number > pivot

// from RIGHT side.

// WHY RIGHT SIDE?

// Because suffix after pivot is:

// already decreasing

// Very important property.

// EXAMPLE

// Pivot:

// 2

// Right side:

// [3]

// Smallest greater than 2:

// 3

// STEP 5: SWAP

// Swap:

// 2 ↔ 3

// Array becomes:

// [1,3,2]

// Suffix after pivot:

// [2]

// Reverse:

// [2]

// Same.

// Final:

// [1,3,2]

// IMPORTANT HARDER EXAMPLE

// Input:

// [1,3,5,4,2]

// FIND PIVOT

// From right:

// 4 < 2 ❌
// 5 < 4 ❌
// 3 < 5 ✅

// Pivot:

// 3

// FIND NEXT GREATER

// Right side:

// [5,4,2]

// Smallest greater than 3:

// 4

// SWAP
// [1,4,5,3,2]

// REVERSE SUFFIX

// Reverse after pivot:

// [5,3,2]

// becomes:

// [2,3,5]

// Final:

// [1,4,2,3,5]

// WHY THIS WORKS

// We made:

// smallest possible increase

// at pivot.

// Then:

// smallest possible suffix

// after it.

// That guarantees:

// immediate next permutation

// EDGE CASE

// Suppose:

// [3,2,1]

// No pivot exists.

// Meaning:

// already largest permutation

// Next permutation becomes:

// smallest permutation

// So reverse entire array:

// [1,2,3]

// Time Complexity: O(n)
// Space Complexity: O(1)


function nextPermutation(nums){
  let n = nums.length;

  let pivot = -1;

  // find pivot
  for(let i = n - 2; i>= 0; i--){
    if(nums[i] < nums[i+1]){
      pivot = i;
      break;
    }
  }

  if(pivot !== -1){
    // find next greater element

    for(let i = n - 1; i>pivot; i--){
      if(nums[i] > nums[pivot]){
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]];

        break;
      }
    }

    // reverse suffix
    let left = pivot + 1;
    let right = n - 1;

    while(left < right){
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
}







