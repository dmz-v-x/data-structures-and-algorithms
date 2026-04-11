// Two strings s and t are isomorphic if:

// Each character in s can be replaced to get t
// Mapping must be:
// Consistent (same char → same mapping)
// One-to-one (no two chars map to same char)

// Example:
// s = "egg"
// t = "add"   true

// Mapping:
// e → a
// g → d
// s = "foo"
// t = "bar"   false

// f → b
// o → a (first)
// o → r (second) inconsistent

// We need to ensure:

// s[i] → t[i] is always same
// No two chars in s map to same char in t

// Brute Force:

// Loop through both strings
// if mapping does not satisfies return false else return true

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function isIsomorphic(s, t){
  if(s.length !== t.length) return false;

  for(let i = 0; i<s.length; i++){
    for(let j = i+1; j<s.length; j++){
      if(s[i] === s[j] && t[i] !== t[j]) return false;
      if(s[i] !== s[j] && t[i] === t[j]) return false;
    }
  }
  return true;
}


// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function isIsomorphic(s, t){
  if(s.length !== t.length) return false;

  let mapST = new Map();
  let mspTS = new Map();

  for(let i = 0; i<s.length; i++){
    let c1 = s[i];
    let c2 = t[i];

    if(mapST.has(c1)){
      if(mapST.get(c1) !== c2) return false
    }else {
      mapST.set(c1, cs);
    }

    if(mapTS.has(c2)){
      if(mapTS.get(c2) !== c1) return false;
    }else{
      mapTS.set(c2, c1);
    }
  }
  return false;
}




