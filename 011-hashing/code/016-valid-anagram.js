// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Naive Approach
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

function validAnagram(s1, s2){
  if(s1.length !== s2.length) return false

  const sortedS1 = [...s1].sort().join("");
  const sortedS2 = [...s2].sort().join("");

  for(let i = 0; i<sortedS1.length; i++){
    if(sortedS1[i] !== sortedS2[i]){
      return false;
    }
  }
  return true;
}

// Better Approach

// Time Complextity: O(n)
// Space Complexity: O(n)

function validAnagram(s, t){
    if(s.length !== t.length){
        return false;
    }

    let arr = new Array(256).fill(0);

    for(let i = 0; i<s.length; i++){
        arr[s.charCodeAt(i)]++;
    }

    for(let i = 0; i<t.length; i++){
        arr[t.charCodeAt(i)]--;
    }

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            return false;
        }
    }

    return true;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(n)

function validAnagram(s, t){
  if(s.length !== t.length) return false;

  const count = {};

  for(let char of s){
    count[char] = (count[char] || 0) + 1;
  }

  for(let char of t){
    if(!count[char]) return false;
    count[char]--;
  }
  return true;
}



