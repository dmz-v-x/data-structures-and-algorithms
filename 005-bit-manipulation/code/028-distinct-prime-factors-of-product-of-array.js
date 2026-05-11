// Distinct Prime Factors of Product of Array

// Problem:

// Given:

// nums

// Need to find:

// number of distinct prime factors

// of the product of all elements.

// First Understand The Problem

// Suppose:

// nums = [2,4,3,7,10,6]

// Product:

// 2 × 4 × 3 × 7 × 10 × 6

// We do NOT actually multiply.

// Instead find all prime factors.

// Prime Factors
// 2

// Prime factors:

// 2
// 4
// 4 = 2 × 2

// Prime factor:

// 2
// 3

// Prime factor:

// 3
// 7

// Prime factor:

// 7
// 10
// 10 = 2 × 5

// Prime factors:

// 2,5
// 6
// 6 = 2 × 3

// Prime factors:

// 2,3
// Distinct Prime Factors

// Unique primes:

// 2,3,5,7

// Count:

// 4

// Answer:

// 4
// Important Observation

// We NEVER need actual product.

// Why?

// Because:

// Prime factors of product
// =
// union of prime factors of all numbers

// Example:

// 6 × 10

// Prime factors:

// 6  -> 2,3
// 10 -> 2,5

// Combined:

// 2,3,5
// Core Task

// For every number:

// extract prime factors

// Store in set.

// How To Find Prime Factors

// Suppose:

// n = 12

// We try dividing from:

// 2 onwards
// Step 1
// 12 % 2 == 0

// So:

// 2 is prime factor

// Add:

// 2

// Now divide fully:

// 12 / 2 = 6
// 6 / 2 = 3

// Remaining:

// 3
// Step 2

// Now try:

// 3
// 3 % 3 == 0

// Add:

// 3

// Divide:

// 3 / 3 = 1

// Done.

// Prime factors:

// 2,3
// Important Optimization

// We only need to check up to:

// n
// 	​


// Why?

// If larger factor exists:

// smaller paired factor already found earlier
// Example
// 36

// Factor pairs:

// 1 × 36
// 2 × 18
// 3 × 12
// 4 × 9
// 6 × 6

// After sqrt:

// pairs repeat.

// Algorithm

// For every number:

// Try dividing by 2,3,4...
// Whenever divisible:
// add factor to set
// divide completely
// If remaining number > 1:
// it itself is prime

// Dry Run

// Suppose:

// nums = [12,15]
// Process 12

// Prime factors:

// 2,3

// Set:

// {2,3}
// Process 15

// Prime factors:

// 3,5

// Set:

// {2,3,5}

// Answer:

// 3
// Why while Not if

// VERY important.

// Suppose:

// 12

// If we use only:

// if (n % 2 === 0)

// we divide once:

// 12 -> 6

// Still divisible by 2.

// Need to remove ALL copies.

// So use:

// while
// Why Final if (n > 1) ?

// Example:

// n = 13

// Loop checks up to:

// 13
// 	​


// No divisors found.

// But:

// 13 itself is prime

// So add remaining number.



// Time Complexity:

// Prime factorization of one number:

// approximately:

// O(n^1/2)

// For all numbers:

// O(m * n^1/2)

// where:

// m = nums.length
// n = max value


// Space Complexity: O(k)





// this loop automatically guarantees i is prime

// EVEN THOUGH we never explicitly check:

// "is i prime?"

// Now let's understand WHY carefully.

// Your Doubt

// You are asking:

// Suppose:

// i = 4

// 4 is NOT prime.

// Then why don't we accidentally add:

// 4

// to set?

// Very good doubt.

// The Secret

// By the time we reach:

// i = 4

// all smaller prime factors have ALREADY been removed.

// So:

// n can no longer be divisible by 4
// Let's Prove It

// Suppose:

// n = 12

// Start loop:

// i = 2
// 12 % 2 == 0

// Add:

// 2

// Now divide fully:

// 12 -> 6 -> 3

// Now:

// n = 3
// Next i = 3
// 3 % 3 == 0

// Add:

// 3

// Now:

// n = 1

// Done.

// What About i = 4 ?

// Loop never reaches meaningful:

// n % 4 == 0

// because:

// all 2s already removed earlier

// And:

// 4 = 2 × 2

// So composite numbers lose their divisibility after smaller primes are removed.

// MOST Important Insight

// Every composite number has:

// some smaller prime factor

// Example:

// 4
// 4 = 2 × 2

// smaller prime:

// 2
// 6
// 6 = 2 × 3

// smaller prime:

// 2
// 8
// 8 = 2 × 2 × 2

// smaller prime:

// 2
// 9
// 9 = 3 × 3

// smaller prime:

// 3
// So What Happens In The Loop?

// When smaller primes are processed:

// they completely remove their multiples from n.

// Therefore composite numbers stop being divisors later.

// Another Example

// Suppose:

// n = 72

// Prime factorization:

// 72 = 2 × 2 × 2 × 3 × 3
// i = 2

// Remove ALL 2s:

// 72 -> 36 -> 18 -> 9

// Now:

// n = 9
// i = 3

// Remove ALL 3s:

// 9 -> 3 -> 1

// Done.

// What About i = 4, 6, 8, 9 ?

// Never divisible anymore.

// Because their prime building blocks already removed.

// Deep Mathematical Reason

// Suppose composite number:

// c

// is divisible into n.

// Then:

// c = a × b

// At least one of:

// a or b

// must be smaller than:

// c
// 	​


// And eventually one of its prime factors was already processed earlier.

// So composite divisibility disappears automatically.

// Ultimate Conclusion

// We do NOT need:

// isPrime(i)

// because:

// composite numbers automatically become impossible divisors
// after smaller primes are removed

// So whenever:

// n % i === 0

// inside this algorithm,

// that i is effectively guaranteed to behave like a prime factor.


function distinctPrimeFactors(nums){
  let set = new Set();
  for(let num of nums){
    for(let i = 2; i * i <= num; i++){
      while(num % i === 0){
        set.add(i);
        num = num / i;
      }
    }

    if(num > 1){
      set.add(num);
    }
  }

  return set.size;
}
