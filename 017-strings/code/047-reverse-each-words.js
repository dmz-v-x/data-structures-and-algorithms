// Reverse Each Word

// Problem:

// Given a string:

// "hello world"

// Reverse EACH word individually.

// Result:

// "olleh dlrow"

// Important:

// word positions remain same

// ONLY characters inside each word reverse.

// First Understand Carefully

// Input:

// "hello world"

// NOT:

// "world hello"

// We are NOT reversing word order.

// We are reversing characters INSIDE each word.

// Visual Understanding
// hello -> olleh
// world -> dlrow

// Final:

// olleh dlrow

// MOST IMPORTANT OBSERVATION

// Spaces separate words.

// So we process:

// one word at a time


// Code:

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseWords(s){
  return s.split("").map(word => word.split("").reverse().join("")).join(" ");
}

// Complete Dry Run

// Input:

// "hello world"

// split(" ")
  
// ["hello", "world"]

// map()

// Each word processed.

// First Word
// "hello".split("")

// becomes:

// ['h','e','l','l','o']
// reverse()
// ['o','l','l','e','h']
// join("")
// "olleh"


// Second Word
// world -> dlrow
// Final Array
// ["olleh", "dlrow"]
// join(" ")
// "olleh dlrow"

// Done.


// In Place Reversal

function reverseEachWord(s){

  let arr = s.split("");

  let start = 0;

  for(let end = 0; end <= arr.length; end++){
    if(end === arr.length || arr[end] === " "){
      reverse(arr, start, end-1);
      start = end+1;
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





























  
