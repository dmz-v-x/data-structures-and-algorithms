// You are given two strings:

// s and goal

// You need to check:

// Can s become goal by rotating it?

// What is rotation?

// Take first character → move it to end

// Example:
// s = "abcde"

// 1 rotation → "bcdea"
// 2 rotation → "cdeab"
// 3 rotation → "deabc"
// 4 rotation → "eabcd"

// s = "abcde"
// goal = "cdeab"  true

// Brute Force
// Try all rotations of s and compare with goal
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function rotateString(s, goal){
  if(s.length !== goal.length) return false;

  for(let i = 0; i<s.length; i++){
    s = s.slice(1) + s[0];

    if(s === goal) return true;
  }

  return false;
}


// Better Approach

// If goal is a rotation of s, then:

// goal must be substring of (s + s)

// Time Complexity: O(n)
// Space Complexity: O(n)
function rotateString(s, goal){
  if(s.length !== goal.length) return false;

  let doubled = s + s;

  return doubled.includes(goal);
}
