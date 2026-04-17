// You are given an array:

// nums = [a, b, c, d, ...]
// Operation:

// Choose any adjacent pair (i, i+1)
// Replace one of them with:

// gcd(nums[i], nums[i+1])

// Goal

// Make all elements = 1
// using minimum operations

// STEP 1: VERY IMPORTANT OBSERVATION

// GCD only decreases or stays same
// gcd(x, y) ≤ min(x, y)

// So values only go down

// When is it IMPOSSIBLE?

// Key condition:

// If:

// gcd(all elements) > 1

// Then:

// You can NEVER reach 1 

// WHY?

// Because:

// gcd(a, b, c, ...) = k > 1

// Every operation will always be multiple of k

// So 1 is impossible

// STEP 3: BEST CASE

// If array already has 1:

// nums = [1, x, y, z]

// What happens?

// You can use that 1 to convert neighbors:

// gcd(1, x) = 1
// Cost:

// Each non-1 needs 1 operation

// Formula:
// operations = n - count_of_1s

// STEP 4: HARD CASE (No 1 present)

// Goal:

// First create ONE 1

// Then use it to convert others

// KEY QUESTION

// How to create the FIRST 1?

// Answer:

// Find smallest subarray whose GCD = 1

// Why?

// Because:

// gcd(subarray) = 1

// We can reduce that subarray to 1

// STEP 5: Cost to create first 1

// If subarray length = L

// It takes:

// L - 1 operations

// STEP 6: After creating first 1

// Now array has one 1

// Remaining elements = n - 1

// Each takes 1 operation

// TOTAL OPERATIONS
// (L - 1) + (n - 1)
// = L + n - 2

// STEP 7: FINAL STRATEGY

// Case 1:
// If gcd(all) > 1 → return -1

// Case 2:
// If at least one 1 exists:
// → answer = n - count_of_1s

// Case 3:
// No 1 present:
// → find smallest subarray with gcd = 1
// → answer = (L - 1) + (n - 1)

// Time Complexity: O(n^2 log M)
// Space O(1)


function minOperations(nums){
  let n = nums.length;

  // GCD Helper function

  function gcd(a, b){
    return b === 0 ? a : gcd(b, a%b);
  }

  // Case 1: Overall GCD

  let g = nums[0];
  for(let i = 1; i<n; i++){
    g = gcd(g, nums[i]);
  }

  if(g > 1) return -1;

  // Count Ones
  let ones = 0;
  for(let num of nums){
    if(num === 1){
      ones++;
    }
  }
  if(ones > 0){
    return n - ones;
  }

  let minLen = Infinity
  for(let i = 0; i<n; i++){
    let g = 0;
    for(let j = 0; j<n; j++){
      g = gcd(g, nums[j]);
      if(g === 1){
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }

  return (minLen - 1)  + (n - 1);
  
}









