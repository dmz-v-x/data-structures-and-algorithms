// Bitwise AND of Numbers Range

// Problem:

// Given two integers:

// left
// right

// Return:

// left & (left+1) & (left+2) & ... & right

// First Understand The Problem

// Example:

// left = 5
// right = 7

// Need:

// 5 & 6 & 7
// Convert To Binary
// 5 = 101
// 6 = 110
// 7 = 111

// Now AND:

// Step 1
// 101
// 110
// ---
// 100

// Result:

// 4
// Step 2
// 100
// 111
// ---
// 100

// Final answer:

// 4


// Brute Force

function rangeBitwiseAnd(left, right){
  let result = left;

  for(let i = left + 1; i<= right; i++){
    result &= i;
  }

  return result;

}


// Problem With Brute Force

// Suppose:

// left = 1
// right = 2147483647

// Loop runs billions of times.

// Too slow.



// MOST IMPORTANT Observation

// Bitwise AND becomes:

// 0 very easily

// Why?

// Because:

// 1 & 0 = 0

// So if ANY number in range has bit = 0:

// that bit becomes 0 in final answer.

// Key Insight

// The ONLY bits that survive are:

// common left prefix bits

// Everything after first differing bit becomes:

// 0

// Example
// 5 = 101
// 7 = 111

// Common prefix:

// 1

// Remaining bits differ:

// 01
// 11

// So remaining becomes:

// 00

// Final:

// 100

// which is:

// 4



// 26 = 11010
// 30 = 11110

// Common prefix:

// 11

// Remaining bits vary in range.

// So they become:

// 000

// Answer:

// 11000

// which is:

// 24

// Why Remaining Bits Become 0

// Because numbers between:

// 26 and 30

// contain BOTH:

// 0
// 1

// in those positions.

// AND across both gives:

// 0

// Core Idea

// Keep removing differing bits until:

// left === right

// Because common prefix remains same.

// How To Remove Bits

// Use right shift.

// Example
// 5 = 101
// 7 = 111
// Shift Once
// 101 >> 1 = 10
// 111 >> 1 = 11

// Still different.

// Shift Again
// 10 >> 1 = 1
// 11 >> 1 = 1

// Now equal.

// Common prefix:

// 1

// We shifted:

// 2 times

// So shift back:

// 1 << 2 = 100

// Answer:

// 4

// Correct.



// Optimal Approach

// Time Complexity: O(32 integer shifts) so => O(1)
// Space Complexity: O(1)

function rangeBitwiseAnd(left, right){
  let shift = 0;

  while(left !== right){
    left = left >> 1;
    right = right >> 1;

    shift++;
  }

  return left << shift;
}





