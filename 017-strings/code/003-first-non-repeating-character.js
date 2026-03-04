// Problem:

// Given a string, find the first character that appears exactly once.

// Example:

// Input:  "leetcode"
// Output: l

// Because:

// l → 1
// e → 3
// t → 1
// c → 1
// o → 1
// d → 1

// The first character with frequency = 1 is l.

// Naive Approach: Using Nested Loops

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function firstNonRepeatingCharacter(str){
  for(let i = 0; i<str.length; i++){
    let count = 0;
    for(let j = 0; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    if(count === 1){
      retrun str[i];
    }
  }
  return null;
}

// Better Approach: Using Object/Hash Map

// Time Complexity: O(n)
// Space Complexity: O(n)
function firstNonRepeatingCharacter(str){
  let freq = {};
  for(let i = 0; i<str.length; i++){
    if(freq[str[i]]){
      freq[str[i]]++;
    }else{
      freq[str[i]] = 1;
    }
  }

  for(let i = 0; i<str.length; i++){
    if(freq[str[i]] === 1){
      return str[i];
    }
  }

  return null;
}


// Optimal Approach: Array Frequency Table
// Time Complexity: O(n);
// Space Complexity: O(1);

function firstNonRepeatingCharacter(str){
  let freqArr = new Array(26).fill(0);
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    freqArr[index]++;
  }
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    if(freqArr[index] === 1){
      return str[i];
    }
  }
  return null;
}












