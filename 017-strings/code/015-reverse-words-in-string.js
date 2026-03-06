// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Naive Approach: Using Built in Methods
// Time Complexity: O(n)
// Space Complexity: O(n)
function reverseWords(s){
  return s.trim().split()
}

// Better Approach
// Time Complexity: O(n);
// Space Complexity: O(n)
function reverseWords(s){
 let stack = [];
 let word = "";

 for(let char of s){
  if(char !== " "){
   word += char;
  }else if(word.length > 0){
   stack.push(word);
   word = "";
  }
 }

 if(word.length > 0){
  stack.push(word)
 }

 for(let i = stack.length - 1; i>=0; i--){
  if(i === 0){
   word += stack[i];
  }else {
   word += stack[i]+" ";
  }
  
 }
 return word;
}


// Optimal Approach: Two Pointers

function reverseWords(s){
 
}
