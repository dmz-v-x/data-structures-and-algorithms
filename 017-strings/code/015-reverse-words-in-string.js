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
  let words = s.trim().split(/\s+\);
  word.reverse();
  return words.join(" ");
}

// Better Approach
// Time Complexity: O(n);
// Space Complexity: O(n)
function reverseWords(s){
 let words = [];
 let word = "";

 for(let char of s){
  if(char !== " "){
   word += char;
  }else if(word.length > 0){
   words.push(word);
   word = "";
  }
 }

 if(word.length > 0){
  words.push(word)
 }

 words.reverse();
  
 return words.join(" ");
}


// Optimal Approach: Two Pointers using extra space
// Time complexity: O(n)
// Space Complexity: O(n)
function reverseWords(s){
 let arr = s.trim().split(/\s+\).join(" ").split("");
 arr.reverse();
 let start = 0;
 for(let i = 0; i<=arr.length; i++){
  if(i === arr.length || arr[i] === " "){
   reverse(arr, start, i - 1);
   start = i+1;
  }
 }
 return arr.join("");
}

function reverse(arr, l, r){
 while(l < r){
  [arr[l], arr[r]] = [arr[r], arr[l]];
  l++;
  r--;
 }
}

// Optimal Approach: Two Pointer without using extra space
// Time Complexity: O(n)
// Space Complexity: O(n) in js string are immutable in c++ it becomes O(1)
function reverseWords(s){
 // 1. remove extra spaces
 s = s.trim().split(/\s+/).join(" ");

 // 2. convert to character array
 let arr = s.split("");

 // 3. reverse whole string
 reverse(arr, 0, arr.length - 1);

 // 4. reverse each word.
 for(let i = 0; i<=arr.length; i++){
  if(i === arr.length || arr[i] === " "){
   reverse(arr, start, i-1);
   start = i+1;
  }
 }

 return arr.join(" ");
}

function reverse(arr, l, r){
 while(l < r){
  [arr[l], arr[j]] = [arr[r], arr[l]];
  l++;
  r--;
 }
}
