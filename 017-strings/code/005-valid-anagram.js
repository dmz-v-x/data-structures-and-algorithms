// Given two strings s and t, return true if t is an anagram of s, otherwise return false.

// Two strings are anagrams if:

// They contain the same characters

// Each character appears same number of times

// Order does not matter

// Example:

// Input:  s = "anagram", t = "nagaram"
// Output: true

// Example:

// Input: s = "rat", t = "car"
// Output: false

// Naive approach: Using Sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)

function isAnagram(s, t){
  if(s.length !== t.length){
    return false;
  }

  let sortedS = s.split('').sort().join('');
  let sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}

// Better Approach: Using Frequency Object

// Time Complexity: O(n)
// Space Complexity: O(n)
function isAnagram(s, t){
  if(s.length !== t.length) return false;

  let freq = {};
  for(let i = 0; i<s.length; i++){
    if(freq[s[i]]){
      freq[s[i]]++;
    }else{
      freq[s[i]] = 1;
    } 
  }

  for(let i = 0; i<s.length; i++){
    if(!freq[t[i]]){
      return false;
    }else{
      freq[t[i]]--;
    }
  }
  return true;  
}

// Optimal Appraoch: Frequency Array
// Time Complexity: O(n)
// Space Complexity: O(1)
function isAnagram(s, t){
  if(s.length !== t.length){
    return false;
  }

  let freq = new Array(26).fill(0);
  for(let i = 0; i<s.length; i++){
    freq[s.charCodeAt(i) - 97]++;
    freq[t.charCodeAt(i) - 97]--;
  }

  for(let i = 0; i<26; i++){
    if(freq[i] !== 0){
      return false;
    }
  }
  return true;
}



