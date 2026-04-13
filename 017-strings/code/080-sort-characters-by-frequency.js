// Given a string s, return a new string where:

// Characters are sorted by frequency (highest first)

// Example:
// Input:  "tree"
// Output: "eert"  OR "eetr"

// Why?

// e → 2 times
// t → 1
// r → 1


// Brute Force

// 1. Count freq using map
// 2. While map not empty:
//    - Find max freq char
//    - Append it freq times
//    - Remove it

// Time Complexity: O(n^2);

function frequencySort(s){
  let map = new Map();
  for(let num of s){
    map.set(num, (map.get(num) || 0) + 1);
  }

  let ans = "";
  while(map.size > 0){
    let maxFreq = 0;
    let maxChar = null;

    for(let [char, freq] of map){
      if(freq > maxFreq){
        maxFreq = freq;
        maxChar = char;
      }
    }

    for(let i = 0; i<maxFreq; i++){
      ans += maxChar;
    }

    map.delete(maxChar);
  }
  return ans;
}















