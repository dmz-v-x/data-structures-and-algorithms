// This problem usually means:

// Input:

// "the sky is blue"

// Output:

// "blue is sky the"

// We reverse:

// word order

// NOT characters inside words.


// Understand the Problem Properly

// Input:

// "the sky is blue"

// Words are:

// ["the", "sky", "is", "blue"]

// Reverse word positions:

// ["blue", "is", "sky", "the"]

// Final:

// "blue is sky the"

// VERY IMPORTANT

// We are NOT doing:

// "eht yks si eulb"

// That would mean reversing characters.

// We only move whole words.

// Main Observation

// Words are separated by spaces.

// So we can:

// Extract words
// Reverse their order
// Join again


Brute Force:

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseWords(s){
  return s.trim().split(\/s+\).reverse().join(" ");
}

// Interview follow up: Do it in place: (Double Reversal Technique)


function reverseWords(s){
  let arr = s.trim().split(\/s+\).join(" ").split(" ");

  reverse(arr, 0, arr.length - 1);

  let start = 0;
  for(let end = 0; end <= arr.length; end++){
    if(end === arr.length || end === " "){
      reverse(arr, start, end - 1);
      start = end + 1;
    }
  }
  return arr.join("");
}

function reverse(arr, left, right){
  while(left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}








