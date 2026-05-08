// Reverse an array using recursion

// PROBLEM

// Reverse:

// [1,2,3,4,5]

// Output:

// [5,4,3,2,1]

// FIRST THINK NORMALLY

// Before recursion, think iterative.

// HOW DO WE REVERSE NORMALLY?

// We use:

// Two pointers
// Example
// [1,2,3,4,5]
//  ↑       ↑
//  left   right

// Swap:

// 1 ↔ 5

// Array becomes:

// [5,2,3,4,1]

// Move pointers inward:

// [5,2,3,4,1]
//    ↑   ↑

// Swap:

// 2 ↔ 4

// Result:

// [5,4,3,2,1]

// Done.

// HOW TO THINK RECURSIVELY?

// MOST important part.

// Think:

// Current function handles ONE swap

// Then recursion handles:

// remaining smaller array

// EXAMPLE
// [1,2,3,4,5]

// Current function:

// Swap first and last

// Result:

// [5,2,3,4,1]

// Then recursion handles:

// [2,3,4]

// THIS IS THE RECURSION PHILOSOPHY

// Do one small task yourself
// delegate smaller remaining problem

// WHAT SHOULD FUNCTION REPRESENT?

// Very important recursion question.

// We define:

// reverse(arr, left, right)

// Meaning:

// Reverse array between left and right

// INITIAL CALL
// reverse(arr, 0, arr.length - 1)

// Example:

// reverse(arr, 0, 4)

// WHAT IS THE BASE CASE?

// When should recursion stop?

// Suppose:

// left >= right

// Meaning:

// Pointers crossed

// Array already reversed.

// BASE CASE
// if(left >= right) return;

// CURRENT WORK

// Current function swaps:

// [arr[left], arr[right]] = [arr[right], arr[left]];

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseArray(arr, i, j){
  if(i >= j) return
  [arr[i], arr[j]] = [arr[j], arr[i]];
  reverseArray(arr, i+1, j-1);
}





// Reverse an array using one pointer
// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseArray(arr, i){
  let n = arr.length;

  if(i >= Math.floor(n/2)) return;

  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

  reverseArray(arr, i + 1);
}




// RECURSION TREE
// reverse(0,4)
//       ↓
// reverse(1,3)
//       ↓
// reverse(2,2) ← stop

