// Convert a Roman numeral string into an integer.

// Roman Values

// I → 1
// V → 5
// X → 10
// L → 50
// C → 100
// D → 500
// M → 1000

// Special Rule 

// Normally we add, but sometimes we subtract:

// IV = 4   (5 - 1)
// IX = 9   (10 - 1)
// XL = 40
// XC = 90
// CD = 400
// CM = 900

// Rule:

// If smaller value comes before bigger → subtract
// Else → add

// Time Complexity: O(n)
// Space Complexity: O(1)

function romanToInt(s){
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let ans = 0;

  for(let i = 0; i< s.length; i++){
    let curr = map[s[i]];
    let next = map[s[i+1]];

    if(next && curr < next){
      ans += (next - curr);
      i++;
    }else{
      ans += curr;
    }
  }
  return ans;
}
