// Problem:

// Given a string, count how many times each character appears.

// Example:

// Input:  "banana"
// Output: b → 1
//         a → 3
//         n → 2

// Naive Approach
// Promblem: Print Duplicates (Multiple Times)
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function countCharacters(str){
  for(let i = 0; i<str.length; i++){
    let count = 0;
    for(let j = 0; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    console.log(str[i]+" -> "+count);
  }
}


// Better Approach: Using Object

// Time Complexity: O(n^2)
// Space Complexity: O(n) // All Characters Unique

function countCharacters(str){
  let freq = {};
  for(let i = 0; i<str.length; i++){
    if(freq[str[i]]){
      freq[str[i]]++;
    }else{
      freq[str[i]] = 1;
    }
  }
  console.log(freq);
}


// Optimal Approach: Using Fixed Size Array

// Time Complexity: O(n)
// Space Complexity: O(1)
// Printing in Order
function countCharacters(str){
  let array = new Array(26).fill(0);
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    array[index]++;
  }
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    if(array[index] > 0){
      console.log(str[i]+" -> "+array[index]);
      array[index] = -1;
    }
  }
}

// Printing alphabetically

function countCharacters(str){
  let array = new Array(26).fill(0);
  for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i) - 97;
    array[index]++;
  }

  for(let i = 0; i<array.length; i++){
    if(array[i] > 0){
      let char = String.fromCharCode(i + 97);
      console.log(char+" -> "+array[index]);
    }
  }
}

