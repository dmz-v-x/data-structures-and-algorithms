// Problem:

// Given a 32-bit unsigned integer:

// n

// Reverse all bits and return the new number.

// Suppose binary is:

// 00000010100101000001111010011100

// After reversing:

// 00111001011110000010100101000000

// Return decimal value of reversed binary.

// Small Example First

// Suppose:

// n = 13

// Binary:

// 1101

// Reverse:

// 1011

// which is:

// 11


// Core Idea

// We process bits one-by-one from RIGHT to LEFT.

// And build answer from LEFT to RIGHT.

// Important Bit Operations
// Get Last Bit
// n & 1

// Why?

// Because:

// AND with 1 extracts last bit

// Example:

// 1101 & 0001 = 0001

// Result:

// 1
// Remove Last Bit
// n >> 1

// Right shift removes last bit.

// Example:

// 1101 >> 1 = 0110
// Build Reversed Number

// We use:

// result << 1

// to make space for next bit.

// Step-by-Step Example

// Suppose:

// n = 13

// Binary:

// 1101

// Start:

// result = 0
// Iteration 1
// Extract last bit
// 1101 & 1 = 1
// Shift result left
// 0000 << 1 = 0000
// Add extracted bit
// 0000 | 1 = 0001

// result:

// 1
// Remove last bit
// 1101 >> 1 = 0110
// Iteration 2

// Current:

// n = 0110

// Extract bit:

// 0110 & 1 = 0

// Shift result:

// 0001 << 1 = 0010

// Add bit:

// 0010 | 0 = 0010

// result:

// 2

// Remove last bit:

// 0110 >> 1 = 0011
// Iteration 3

// Extract:

// 0011 & 1 = 1

// Shift result:

// 0010 << 1 = 0100

// Add:

// 0100 | 1 = 0101

// result:

// 5

// Remove bit:

// 0011 >> 1 = 0001
// Iteration 4

// Extract:

// 0001 & 1 = 1

// Shift result:

// 0101 << 1 = 1010

// Add:

// 1010 | 1 = 1011

// Result:

// 11

// Correct reversed bits.

// Time Complexity: O(1) Loop runs 32 times
// Space Complexity: O(1)

function reverseBits(n){
  let result = 0;
  for(let i = 0; i<32; i++){
    // shift result left
    result = result << 1;

    // add last bit of n
    result = result | (n & 1)

    // remove last bit from n
    n = n >> 1
  }

  return result >>> 0;
}

// Why >>> 0 ?

// VERY important JavaScript thing.

// Problem

// JavaScript bitwise operations use:

// 32-bit signed integers

// So result may become negative.

// Example

// Highest bit:

// 1xxxxxxx...

// means negative signed integer.

// But problem wants:

// unsigned integer
// Solution
// >>> 0

// converts result into:

// unsigned 32-bit integer














