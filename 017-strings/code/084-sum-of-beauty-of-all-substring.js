// For a string s, define:

// beauty of substring = (max frequency - min frequency)

// Only consider characters that exist in the substring (ignore 0 frequency)

// Example
// s = "aabcb"

// Substring "aab":

// a → 2
// b → 1

// beauty = 2 - 1 = 1

// Goal

// Find sum of beauty of ALL substrings

// Brute Force: 

// Idea
// Generate all substrings
// For each:
// Count frequency
// Find max & min
// Add beauty


function beautySum(s){
  let n = s.length;
  let total = 0;

  for(let i = 0; i<n; i++){
    let freq = new Array(26).fill(0);
    for(let j = i; j<n; j++){
      freq[s.charCodeAt(j) - 97]++;

    let max = 0;
    let min = Infinity;

    for(let f of freq){
      if(f > 0){
        max = Math.max(max, f);
        min = Math.min(min, f);
      }
    }

      total += (max - min);
    }  
  }
  return total;
}
