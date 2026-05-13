// Problem 1: Counting Words with a Given Prefix

// Given:

// words = ["pay","attention","practice","attend"]
// pref = "at"

// Count how many words start with:

// "at"

// Answer:

// 2

// because:

// "attention"
// "attend"

// start with "at".


// Another Example:

// Example

// Input:

// words = ["apple","ape","banana","app"]
// pref = "ap"

// Check one-by-one.

// "apple"

// Starts with "ap" ?

// YES.

// Count = 1

// "ape"

// YES.

// Count = 2

// "banana"

// NO.

// "app"

// YES.

// Count = 3

// Final Answer
// 3

// MOST IMPORTANT OBSERVATION

// We only care about:

// beginning characters

// Easiest JavaScript Method

// JavaScript already gives:

// startsWith()

// VERY important string method.


function prefixCount(words, pref){
  let count = 0;

  for(let word of words){
    if(word.startsWith(pref)){
      count++;
    }
  }
  return count;
}



// Manual Implementation

// Time Complexity: O(n * m); n = number of words, m = prefix length;
// Space Complexity: O(1)

function prefixCount(words, pref){
  let count = 0;
  for(let word of words){
    if(isPrefix(word, prefix)){
      count++;
    }
  }
  return count;
}

function isPrefix(word, pref){
  if(pref.length > word.length) return false;

  for(let i = 0; i<pref.length; i++){
    if(word[i] !== pref[i]){
      return false;
    }
  }
  return true;
}




//  --------------------------------------------------

Problem 2: Count prefixes of a given string

Problem:

Given:

words = ["a","b","c","ab","bc","abc"]
s = "abc"

Return:

3

because these words are prefixes of "abc":

"a"
"ab"
"abc"

Input:

words = ["a","b","c","ab","bc","abc"]
s = "abc"

We ask:

Which words can appear at START of "abc"?

String:

"abc"

Possible prefixes:

"a"
"ab"
"abc"

Only these count.



Code:

function countPrefixes(words, s){
  let count = 0;
  for(let word of words){
    if(s.startsWith(word)){
      count++;
    }
  }
  return count;
}


// Manual Implementation

function countPrefixes(words, s){


  function isPrefix(word, s){
    if(word.length > s.length) return false;

    for(let i = 0; i<word.length; i++){
      if(word[i] !== s[i]){
        return false;
      }
    }
    return true;
  }
  
  let count = 0;

  for(let word of words){
    if(isPrefix(word, s)){
      count++;
    }
  }
  return count;
}

// Time Complexity: O(n * m) n = number of words, m = average word length;
// Space Complexity: O(1)

























