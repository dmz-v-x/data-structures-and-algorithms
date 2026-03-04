// Problem:

// Given two strings, check if they are anagrams of each other.

// Two strings are anagrams if:

// They contain exactly the same characters

// The same number of times

// Order does not matter

// Example:

// listen
// silent

// Both contain the same characters:

// l i s t e n

// So they are anagrams.

// Naive Approach: Sorting the two strings 
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function checkAnagram(s1, s2){
  if(s1.length !== s2.length){
    return false;
  }

  let sorted1 = s1.split('').sort().join('');
  let sorted2 = s2.split('').sort().join('');

  return sorted1 === sorted2;
}

// Using Frequency Object
function checkAnagram(s1, s2){
  if(s1.length !== s2.length) return false;
  let freq = {};
  for(let i = 0; i<s1.length; i++){
    if(freq[s1[i]]){
      freq[s1[i]]++;
    }else {
      freq[s1[i]] = 1;
    }
  }

  for(let i = 0; i<s2.length; i++){
    if(!freq[s2[i]]){
      return false;
    }
    freq[s2[i]]--;
  }
  return true;
}

// Optimal Approach: Using Array Frequency

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function checkAnagram(s1, s2){
  if(s1.length !== s2.length) return false;
  let array = new Array(26).fill(0);
  for(let i = 0; i<s1.length; i++){
    let index = s1.charCodeAt(i) - 97;
    array[index]++;
  }
  for(let i = 0; i<s2.length; i++){
    let index = s2.charCodeAt(i) - 97;
    if(array[index] === 0){
      return false;
    }
    freq[index]--;
  }
  return true;
}




