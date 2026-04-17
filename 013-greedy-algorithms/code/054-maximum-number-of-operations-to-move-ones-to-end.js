// **Important**:
// If we want to minimize the number of operations then we traverse left to right,
// Since we need to maximize the number of operations we will move from right to left

// You are given a binary string s.

// You can perform the following operation on the string any number of times:

// Choose any index i from the string where i + 1 < s.length such that s[i] == '1' and s[i + 1] == '0'.
// Move the character s[i] to the right until it reaches the end of the string or another '1'. For example, for s = "010010", if we choose i = 1, the resulting string will be s = "000110".
// Return the maximum number of operations that you can perform.


// Example 1:

// Input: s = "1001101"

// Output: 4

// Explanation:

// We can perform the following operations:

// Choose index i = 0. The resulting string is s = "0011101".
// Choose index i = 4. The resulting string is s = "0011011".
// Choose index i = 3. The resulting string is s = "0010111".
// Choose index i = 2. The resulting string is s = "0001111".
  
// Example 2:

// Input: s = "00111"

// Approach:

// STEP 1: Understand the Operation (VERY CLEAR)

// You can pick:

// i such that s[i] = '1' and s[i+1] = '0'

// Then:

// That 1 moves right over consecutive 0s
// Stops at:

// end OR
// before next 1

// Key Meaning

// A 1 can only move if there is a 0 immediately after it

// And when it moves, it jumps over a block of zeros in one operation

// STEP 2: What are we maximizing?

// NOT number of swaps
// NOT distance moved

// We are maximizing:

// Number of times we can pick a "10" pattern

// STEP 3: Key Observation

// Each operation:

// Picks a 1
// Moves it across ALL consecutive zeros in one go

// Important consequence

// If a 1 has 3 zeros after it:

// 1 0 0 0

// It moves in ONE operation, not 3

// STEP 4: So what actually limits operations?

// Each operation requires a "10" boundary

// Think like this:

// Every time a 1 crosses a 0, eventually that contributes to operations
// BUT grouped cleverly

// REAL INSIGHT (CORE IDEA)

// Count:

// For each '1', how many zeros are to its right
// BUT only when it becomes movable

// STEP 5: Better Mental Model

// We process left → right

// Track:

// onesSeen = number of 1s seen so far

// Whenever we see a 0:

// That 0 will eventually be crossed by ALL previous 1s

// FINAL FORMULA

// For every 0:

// operations += number of 1s before it

function maxOperations(s){
  let ones = 0;
  let ops = 0;

  for(let i = 0; i<s.length; i++){
    if(s[i] === '1'){
      ones++;
    }else if(i > 0 && s[i - 1] === '1'){
      ops += ones;
    }
  }
  return ops;
}

















