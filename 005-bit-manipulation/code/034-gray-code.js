// Problem:

// Given an integer:

// n

// Generate a Gray code sequence of:

// 2^n

// integers.

// First Understand Gray Code

// Gray code means:

// Adjacent numbers differ by ONLY ONE BIT

// Example

// For:

// n = 2

// One valid answer:

// [0,1,3,2]

// Binary:

// 0 -> 00
// 1 -> 01
// 3 -> 11
// 2 -> 10

// Check neighbors:

// 00 → 01

// Only last bit changed.

// GOOD.

// 01 → 11

// Only first bit changed.

// GOOD.

// 11 → 10

// Only last bit changed.

// GOOD.

// Important Observation

// Normal binary counting:

// 00
// 01
// 10
// 11

// does NOT always change one bit.

// Example:

// 01 -> 10

// Two bits changed.

// So normal binary is NOT Gray code.

// Core Formula

// The magic formula:

// Gray(i)=i⊕(i≫1)

// Where:

// ⊕ means XOR
// >> 1 means right shift

// First Understand WHY This Works

// This is the MOST important part.

// Example

// Take:

// i = 5

// Binary:

// 101

// Now shift right:

// 101 >> 1 = 010

// Now XOR:

// 101
// 010
// ---
// 111

// Result:

// 7

// So Gray code of 5 is:

// 7

// The Big Intuition

// When binary numbers increase:

// some consecutive bits flip together

// Example:

// 0111 -> 1000

// Many bits changed.

// Gray code fixes this by encoding differences between neighboring bits.

// That is exactly what:

// i ^ (i >> 1)

// does.

// Let's Generate Sequence Step By Step

// Suppose:

// n = 3

// Need:

// 2^3 = 8 numbers

// So:

// 0 to 7
// Step 1
// i = 0

// Binary:

// 000

// Shift:

// 000

// XOR:

// 000 ^ 000 = 000

// Result:

// 0
// Step 2
// i = 1

// Binary:

// 001

// Shift:

// 000

// XOR:

// 001 ^ 000 = 001

// Result:

// 1
// Step 3
// i = 2

// Binary:

// 010

// Shift:

// 001

// XOR:

// 010 ^ 001 = 011

// Result:

// 3
// Step 4
// i = 3

// Binary:

// 011

// Shift:

// 001

// XOR:

// 011 ^ 001 = 010

// Result:

// 2
// Final Sequence
// [0,1,3,2,6,7,5,4]

// Every adjacent pair differs by ONE bit.

function grayCode(n){
  let result = [];

  for(let i = 0; i < (i << n); i++){
    result.push(i ^ (i >> 1));
  }

  return result;
}

// Time Complexity: O(2^n)
// Space Complexity: O(2^n)
