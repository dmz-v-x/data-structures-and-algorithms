// Given:

// arr1
// arr2

// Need to find:

// (arr1[i] & arr2[j]) XOR for all pairs
// First Understand The Problem

// Suppose:

// arr1 = [1,2]
// arr2 = [3,4]

// All pairs:

// Pair 1
// 1 & 3

// Binary:

// 01
// 11
// --
// 01

// Result:

// 1
// Pair 2
// 1 & 4
// 001
// 100
// ---
// 000

// Result:

// 0
// Pair 3
// 2 & 3
// 10
// 11
// --
// 10

// Result:

// 2
// Pair 4
// 2 & 4
// 010
// 100
// ---
// 000

// Result:

// 0
// XOR All Results
// 1 ^ 0 ^ 2 ^ 0
// 1 ^ 2 = 3

// Answer:

// 3


// Brute Force

// Time Complexity: O(n * m)

function getXORSum(arr1, arr2){
  let xor = 0;
  for(let a of arr1){
    for(let b of arr2){
      xor ^= (a & b);
    }
  }
  return xor;
}


// Optimal Approach

// Final Magical Simplification

// The entire problem becomes:

// (arr1 XOR) & (arr2 XOR)


// WHY Does This Work?

// This is the MOST important part.

// Suppose:

// arr1 = [a,b]
// arr2 = [x,y]

// Problem asks:

// (a&x) ^ (a&y) ^ (b&x) ^ (b&y)

// Rearrange:

// [(a&x) ^ (a&y)] ^ [(b&x) ^ (b&y)]

// Use distributive property:

// So:

// = [a & (x ^ y)] ^ [b & (x ^ y)]

// Result:

// (a ^ b) & (x ^ y)

function getXORSum(arr1, arr2){
  let xor1 = 0;
  let xor2 = 0;

  for(let num of arr1){
    xor1 ^= num;
  }

  for(let num of arr2){
    xor2 ^= num;
  }

  return xor1 & xor2;
}


// Time Complexity: O(n + m)
// Space Complexity: O(1)
