// Example 1

// Input:
// "abcdef"

// Output:
// true

// Example 2

// Input:
// "hello"

// Output:
// false

// Naive Approach

// Time Complexity: O(n^2)

function hasUniqueCharacters(str){
  for(let i = 0; i<str.length; i++){
    for(let j = i+1; j<str.length; j++){
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}

// Better Approach: Using Set

// Time Complexity: O(n)
// Space Complextiy: O(k) k unique characters in the string

function hasUniqueCharacters(str){
  const seen = new Set();
  for(let char of str){
    if(seen.has(char)){
      return false;
    }

    seen.add(char);
  }
  return true;
}

// Alternate Approach: Using Objects

// Time Complexity: O(n)
// Space Complextiy: O(k) k unique characters in the string

function hasUniqueCharacters(str){
  const map = {};
  for(let char of str){
    if(map[char]){
      return false;
    }
    map[char] = true;
  }
  return true;
}


  





