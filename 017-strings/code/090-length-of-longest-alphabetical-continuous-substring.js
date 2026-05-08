// We are given a string.

// We need to find:

// the length of the longest substring where characters are in continuous alphabetical order.

// Meaning:

// 'abcd' ✅
// 'xyz'  ✅
// 'ace'  ❌
// 'abd'  ❌

// Because each next character must be exactly +1 from previous.

// Example:

// Input:  "abacaba"
// Output: 2

// Why?
// 'ab' is valid
// 'ba' is not
// 'ac' is not

// Another example:

// Input: "abcde"
// Output: 5

// VERY IMPORTANT UNDERSTANDING

// We are checking:

// s[i] follows s[i-1]

// How?

// Characters in JS have ASCII/Unicode values.

// Example:

// 'a' -> 97
// 'b' -> 98
// 'c' -> 99

// So:

// 'b'.charCodeAt(0) - 'a'.charCodeAt(0) === 1

// means:

// b comes immediately after a






// Brute Force

// KEY OBSERVATION

// Suppose:

// abcdx

// When checking:

// a -> b ✅
// b -> c ✅
// c -> d ✅
// d -> x ❌

// The moment we fail:

// curr - prev !== 1

// there is no need to continue further.

// So instead of generating substring and validating separately:

// We can extend while valid.

// INTUITION

// Fix starting point i.

// Move forward until sequence breaks.

// Track length.

// VISUALIZATION
// s = "abcde"

// Start:

// i = 0

// a -> b ✅
// b -> c ✅
// c -> d ✅
// d -> e ✅

// length = 5

// Now:

// i = 1

// b -> c ✅
// c -> d ✅
// d -> e ✅

// length = 4

// etc.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function longestContinousSubstring(s){
  let n = s.length;
  let longest = 1;

  for(let i = 0; i<n; i++){
    let length = 1;
    for(let j = i+1; j<n; j++){
      let prev = s.charCodeAt(j - 1);
      let curr = s.charCodeAt(j);

      if(curr - prev === 1){
        length++;
        longest = Math.max(longest, length);
      }else{
        break;
      }
    }
  }
  return longest;
}




// Better Approach: Sliding Window

// CORE IDEA

// Maintain:

// currentLength

// If:

// curr - prev === 1

// then:

// currentLength++

// Else:

// reset to 1

// Track maximum.

// Time Complexity: O(n)
// Space Complexity: O(1)

function longestContinuousSubstring(s){
  if(s.length === 0) return 0;
  let longest = 1;
  let current = 1;
  for(let i = 1; i<s.length; i++){
    if(s.charCodeAt(i) - s.charCodeAt(i-1) === 1){
      current++;
    }else{
      current = 1;
    }
    longest = Math.max(longest, current);
  }
  return longest;
}







