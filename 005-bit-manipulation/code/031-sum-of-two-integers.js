// Given two integers:

// a
// b

// Return:

// a + b

// BUT:

// Do NOT use:

// +
// -

// operators.

// First Important Question

// If we cannot use:

// +

// then how can we add?

// Answer:

// Using:

// XOR
// AND
// bit shifting

// Core Idea

// Normal addition has TWO things:

// Sum without carry
// Carry

// Example:

// 5 + 3

// Binary:

// 0101
// 0011
// Step 1 — Sum Without Carry

// XOR does this.

// Because:

// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

// This is exactly binary addition WITHOUT carry.

// So:

// a⊕b

// gives partial sum.

// Example
// 0101
// 0011
// ----
// 0110

// Result:

// 6

// But actual answer is:

// 8

// Why wrong?

// Because we ignored carry.

// Step 2 — Find Carry

// Carry happens when BOTH bits are 1.

// AND detects this.

// Because:

// 1 & 1 = 1

// So:

// a&b

// finds carry positions.

// Example
// 0101
// 0011
// ----
// 0001

// Carry exists at last bit.

// But carry should affect NEXT position.

// So shift left.

// Step 3 — Shift Carry
// 0001 << 1 = 0010

// Now carry becomes:

// 2
// Important Formula

// So:

// Partial Sum

// a⊕b

// Carry

// (a&b)≪1

// Then Repeat

// Now we add:

// sum = 6
// carry = 2

// Again:

// Iteration 2
// XOR
// 0110
// 0010
// ----
// 0100

// Result:

// 4
// Carry
// 0110
// 0010
// ----
// 0010

// Shift:

// 0100

// carry = 4

// Iteration 3

// Add:

// 4 + 4
// XOR
// 0100
// 0100
// ----
// 0000
// Carry
// 0100
// 0100
// ----
// 0100

// Shift:

// 1000
// Iteration 4
// 0000
// 1000
// ----
// 1000

// Carry becomes:

// 0

// STOP.

// Answer:

// 8

// Correct.

// The Big Idea

// We repeatedly do:

// XOR → sum without carry
// AND + shift → carry
// Add again

// Until carry becomes zero.

function getSum (a, b){
  while(b !== 0){
    let carry = (a & b) << 1;

    a = a ^ b;

    b = carry;
  }

  return a;
}

Time Complexity: O(32 bit integer) so : O(1)
Space Complexity: O(1)
