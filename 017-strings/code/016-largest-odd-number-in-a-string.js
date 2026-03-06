// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

 

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

// Naive Solution: Generate all substring and check if they are odd track the largest one
// Time Complexity: O(n^3)
function largestOddNumber(num){
  let result = "";

  for(let i = 0; i<num.length; i++){
    for(let j = i; j<num.length; j++){
      let sub = num.slice(i, j+1);

      if(parseInt(sub) % 2 === 1){
        if(sub.length > result.length){
          result = sub;
        }
      }
    }
  }
  return result;
}

// Better Solution: Iterating from last and finding the odd number
// Time Complexity: O(n);
// Space Complexity: O(n);

function largestOddNumber(num){
  for(let i = num.length - 1; i>=0; i--){
    if(parseInt(num[i]) % 2 === 1){
      return num.slice(0, i+1);
    }
  }
  return "";
}
















