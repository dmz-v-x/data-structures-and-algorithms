// Reverse Words in a Sentence

// Usually this problem means:

// Input:

// "the sky is blue"

// Output:

// "blue is sky the"

// IMPORTANT:

// We reverse:

// word order

// NOT characters inside words.

// Understand Carefully

// Input:

// "the sky is blue"

// Words:

// ["the", "sky", "is", "blue"]

// Reverse word positions:

// ["blue", "is", "sky", "the"]

// Final:

// "blue is sky the"

// Difference Between Two Problems
// Reverse Each Word
// "hello world"

// ↓

// "olleh dlrow"

// Characters reversed.

// Reverse Sentence
// "hello world"

// ↓

// "world hello"

// Word order reversed.


// Simplest Approach

function reverseSentence(s){
  return s.split(" ").reverse().join(" ");
}

// Dry Run

// Input:

// "the sky is blue"
// split(" ")
// ["the", "sky", "is", "blue"]
// reverse()
// ["blue", "is", "sky", "the"]
// join(" ")
// "blue is sky the"

// Done.



// Problem With Extra Spaces

// Suppose input:

// "  hello   world  "

// Now:

// .split(" ")

// creates:

// ["", "", "hello", "", "", "world", "", ""]

// because multiple spaces create empty strings.

// This becomes a common interview twist.

// Correct Handling of Spaces

// We usually want:

// "world hello"

// with:

// no leading spaces
// no trailing spaces
// single space between words

// Better Approach

// Use:

// .trim()

// and regex split.

Better Code:

// Time Complexity: O(n)
// Space Complexity: O(n)

function reverseSentence(s){
  return s.trim().split(/\s+/)
}


// Understanding /\s+/

// VERY IMPORTANT.

// \s

// means:

// whitespace

// like:

// space
// tab
// newline
// +

// means:

// one or more

// So:

// split(/\s+/)

// means:

// split by one or more spaces



// In-Place Solution

// Very famous interview version:

// Reverse sentence in-place.

// MOST IMPORTANT TRICK

// To reverse word order in-place:

// STEP A

// Reverse ENTIRE string.

// STEP B

// Reverse EACH word individually.

// MAGIC happens.


// Visual Understanding

// Input:

// "the sky"
// Reverse Entire String
// "yks eht"

// Now word order reversed,
// BUT characters also reversed.

// Reverse Each Word
// "sky the"

// Correct answer.

function reverseSentence(s){


  function reverse(arr, left, right){
    while(left < right){
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  
  let arr = s.split("");

  // reverse whole string
  reverse(arr, 0, arr.length - 1);

  let start = 0;

  for(let end = 0; end <= arr.length; end++){
    if(end === arr.length || arr[end] === " "){
      reverse(arr, start, end - 1);
      start = end + 1;
    }
  }
  return arr.join("");
}




// Reverse Sentences with trailing spaces

function reverseWords(s){

  // convert to array
  let arr = s.split("");

  // Step 1: clean spaces
  let cleaned = cleanSpaces(arr);

  // Step 2: reverse whole string
  reverse(cleaned, 0, cleaned.length - 1);

  // Step 3: reverse each word
  reverseEachWord(cleaned)

  return cleaned.join("");
}

function cleanSpaces(arr){
  let result = [];
  let i = 0;

  while(i < arr.length){
    // skip spaces
    while(i < arr.length && arr[i] === " "){
      i++;
    }

    // copy word
    while(i < arr.length && arr[i] !== " "){
      result.push(arr[i]);
      i++;
    }

    // skip spaces between words
    while(i < arr.length && arr[i] === " "){
      i++;
    }

    // add one space if more words exists
    if(i < arr.length){
      result.push(" ");
    }

    
  }
  return result;
}

function reverse(arr, left, right){
  while(left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
}

function reverseEachWord(arr){
  let start = 0;
  for(let end = 0; end <= arr.length; end++){
    if(end === arr.length || end === " "){
      reverse(arr, start, end - 1);
      start = end + 1;
    }
  }
}











