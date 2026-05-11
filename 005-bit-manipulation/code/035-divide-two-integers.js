// Problem:

// Given two integers:

// dividend
// divisor

// Return:

// dividend / divisor

// BUT:

// Do NOT use:
// multiplication *
// division /
// modulus %

// Also:

// truncate toward zero
// handle overflow





// Brute Force

// Brute Force Idea
// Thinking
// 10 / 3

// means:

// How many times can I subtract 3 from 10?
// Dry Run
// 10 - 3 = 7   count = 1
// 7 - 3 = 4    count = 2
// 4 - 3 = 1    count = 3

// cannot subtract anymore.

// Answer:

// 3


function divide(dividend, divisor){
  let count = 0;

  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);

  while(dvd >= dvs){
    dvd -= dvs
    count++;
  }

  // Sign Handling
  if((dividend < 0 && divisor > 0) || 
      dividend > 0 && divisor < 0)){
        count = -count;
  }

  return count;
}

// Problem With Brute Force

// Suppose:

// dividend = 1,000,000,000
// divisor = 1

// Then loop runs:

// 1 billion times

// Too slow.

// Optimal Approach

// Core Idea

// Find the largest multiple of divisor we can subtract.

// Example Step By Step
// Example
// dividend = 43
// divisor = 3
// Step 1

// Start:

// 43 / 3

// Try doubling divisor.

// Doubling
// 3    -> 2^0
// 6    -> 2^1
// 12   -> 2^2
// 24   -> 2^3
// 48   -> too big

// Largest valid:

// 24

// which is:

// 3 * 8

// So:

// quotient += 8

// Remaining:

// 43 - 24 = 19
// Step 2

// Now:

// 19 / 3

// Again double:

// 3
// 6
// 12
// 24 -> too big

// Take:

// 12

// which is:

// 3 * 4

// So:

// quotient += 4

// Remaining:

// 19 - 12 = 7

// Current quotient:

// 8 + 4 = 12
// Step 3

// Now:

// 7 / 3

// Double:

// 3
// 6
// 12 -> too big

// Take:

// 6 = 3 * 2
// quotient += 2

// Remaining:

// 7 - 6 = 1

// Current quotient:

// 14
// Final

// Remaining:

// 1 < 3

// Stop.

// Answer:

// 14

// Correct because:

// 43 / 3 = 14

function divide(dividend, divisor){
  // overflow case
  if(dividend === -(2 ** 31) && divisor === -1){
    return 2 ** 31 - 1;
  }

  // determine sign
  let negative = (dividend < 0) !== (divisor < 0)

  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);

  let quotient = 0;

  while(dvd >= dvs){
    let temp = dvs;
    let multiple = 1;

    while(dvd >= temp + temp){
      temp = temp + temp;
      multiple = multiple + multiple;
    }

    dvd -= temp;
    quotient += nultiple;
  }

  return negative ? -quotient : quotient;
}




// Optimal

// Each time we double.

// So complexity becomes approximately:

// O(log n * log n)


// In JavaScript:

// Bitwise operators work on 32-bit signed integers

// NOT normal large JavaScript numbers.

// What Happens

// Suppose:

// temp becomes very large

// Eventually:

// temp << 1

// causes overflow into negative numbers.

// Then condition becomes weird:

// dvd >= (temp << 1)

// because shifted value may become negative.

// Now loop may never stop correctly.

// This causes TLE.

// Example

// JavaScript bitwise operations convert numbers internally to:

// 32-bit signed integer

// Range:

// -2147483648 to 2147483647

// If value exceeds this:

// overflow happens.

// Safer Solution

// Instead of:

// temp << 1

// use:

// temp + temp

// And instead of:

// multiple << 1

// use:

// multiple + multiple
