// We are given:

// A number n → length of string
// We need to count how many good digit strings exist

// What is a “Good Number”?

// A number is good if:

// Even index (0-based):
// digits allowed: 0, 2, 4, 6, 8 → 5 choices

// Odd index:
// digits allowed: 2, 3, 5, 7 → 4 choices

// Example

// For n = 3

// Indexes:

// Index:   0   1   2
// Type:   even odd even

// Choices:

// Index 0 → 5 choices
// Index 1 → 4 choices
// Index 2 → 5 choices

// Total:

// 5 × 4 × 5 = 100

// No. of even indices = (n + 1) / 2;
// No. of odd indices = n / 2;

// -----------------------------------------------------------------

// Fast Exponentiation Concept

// We want to compute:

// a^b   (a raised to power b)

// Example:

// 2^10 = 1024

// The naive (slow) way

// let result = 1;

// for (let i = 0; i < b; i++) {
//   result *= a;
// }

// Problem
// If b = 1,000,000,000 → loop runs 1 billion times

// Time complexity:
// O(b)

// This is too slow.

// Core Idea of Fast Exponentiation

// Instead of multiplying again and again,
// we reuse previous work.

// Key observation

// Case 1: Even exponent
// a^10 = (a^5)^2

// We reduced problem size from 10 → 5

// Case 2: Odd exponent
// a^5 = a × a^4
//     = a × (a^2)^2

// We separate one a, then reduce

// The Strategy

// We repeatedly:

// Check if exponent is odd
// Square the base
// Halve the exponent


// Let’s compute:

// 3^5

// Initial:
// result = 1
// base = 3
// exp = 5

// Iteration 1
// exp = 5 (odd)

// Take base:

// result = 1 × 3 = 3

// Square base:

// base = 3 × 3 = 9

// Halve exp:

// exp = 2

// Iteration 2
// exp = 2 (even)

// Skip multiply

// Square base:

// base = 9 × 9 = 81

// Halve exp:

// exp = 1

// Iteration 3
// exp = 1 (odd)

// Multiply:

// result = 3 × 81 = 243

// Square base:

// base = 81 × 81 (not needed further)

// Halve:

// exp = 0 → STOP

// Answer:
// 243

// Why this is FAST

// Each time:

// exp → exp / 2

// So:

// 10 → 5 → 2 → 1 → 0

// Only ~log₂(n) steps

// Time Complexity
// O(log b)

function fastPower(base, exp){
  let result = 1;
  if (exp < 0) {
    base = 1 / base;
    exp = -exp;
  }

  while(exp > 0){
    if(exp % 2 === 1){
      result = result * base;
    }

    base = base * base;
    exp = Math.floor(exp / 2);
  }

  return result;
}


// -----------------------------------------------

// Count even positions

// Formula:

// evenCount = (n + 1) // 2

// Why?

// Example:

// n = 5 → indices: 0,1,2,3,4

// even → 0,2,4 → 3 positions

// Count odd positions
// oddCount = n // 2


const MOD = 1e9 + 7;

function power(base, exp) {
  let result = 1n;
  let b = BigInt(base);
  let e = BigInt(exp);
  let mod = BigInt(MOD);

  while (e > 0n) {
    if (e % 2n === 1n) {
      result = (result * b) % mod;
    }
    b = (b * b) % mod;
    e = e / 2n;
  }

  return result;
}

function countGoodNumbers(n) {
  const MOD = 1e9 + 7;

  let evenCount = Math.floor((n + 1) / 2);
  let oddCount = Math.floor(n / 2);

  let evenPart = power(5, evenCount);
  let oddPart = power(4, oddCount);

  return Number((evenPart * oddPart) % BigInt(MOD));
}





