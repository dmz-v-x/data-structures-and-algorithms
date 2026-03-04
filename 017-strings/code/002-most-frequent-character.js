// Problem:

// Given a string, find the character that appears the most times.

// Example:

// Input:  "banana"
// Output: a
// Reason: a appears 3 times (highest frequency)

// Another example:

// Input: "mississippi"
// Output: i
// Reason: i appears 4 times

// Naive Solution: Using Nested Loop
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function mostFrequentCharacter(str){
  let result = '';
  let maxCount = 0;

  for(let i = 0; i<str.length; i++){
    let count = 0;
    for(let j = 0; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    if(count > maxCount){
      maxCount = count;
      result = str[i];
    }
  }
  return result;
}

// Better Approach: Using Object
// Time Complexity: O(n)
// Space Complexity: O(n)

function mostFrequentCharacter(str){
  let freq = {};
  let maxCount = 0;
  let result = '';
  for(let i = 0; i<str.length; i++){
    if(freq[str[i]]){
      freq[str[i]]++;
    }else{
      freq[str[i]] = 1;
    }

    if(freq[str[i]] > maxCount){
      maxCount = freq[str[i]];
      result = str[i];
    }
  }
  return result;
}

// Optimal Approach: Using Array Frequency Table

// Time Complexity: O(n);
// Space Complexity: O(1)

function mostFrequentCharacter(str){
  let maxFreq = 0;
  let result = '';
  let array = new Array(26).fill(0);
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    array[index]++;

    if(array[index] > maxFreq){
      maxFreq = array[index];
      result = str[i];
    }
  }
  return result;
}

