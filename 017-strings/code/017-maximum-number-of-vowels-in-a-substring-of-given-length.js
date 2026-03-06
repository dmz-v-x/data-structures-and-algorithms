// Given a string s and an integer k, return the maximum number of vowels
// in any substring of length k.

// Vowels are:

// a, e, i, o, u

// Example 1
// Input

// s = "abciiidef"
// k = 3

// Naive Approach:
// Time Complexity: O(n * k);
// Space Complexity: O(1);
function maxVowels(s, k){
  let max = 0;
  for(let i = 0; i<s.length - k; i++){
    let count = 0;
    for(let j = i; j<i+k; j++){
      if("aeiou".includes(s[j])){
        count++;
      }
    }
    max = Math.max(max, count);
  }
  return max;
}

// Better Approach: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxVowels(s, k){
  let max = 0;
  let count = 0;
  let vowels = "aeiou";
  for(let i = 0; i<k; i++){
    if(vowels.includes(s[i])){
      count++;
    }
  }

  max = count;

  for(let i = k; i<s.length; i++){
    if(vowels.includes(s[i])){
      count++;
    }

    if(vowels.includes(s[i-k])){
      count--;
    }

    max = Math.max(max, count);
  }
  return max;
}
