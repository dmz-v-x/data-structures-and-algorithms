// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Naive Approach
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
function build(str){
  let result = [];

  for(let char of str){
    if(char !== "#"){
      result.push(char)
    }else{
      result.pop();
    }
  }

  return result.join("");
}

function backspaceCompare(s, t){
  return build(s) === build(t);
}

// Optimal Approach
// Time Complexity: O(m + n)
// Space Complexity: O(1)
function backspaceCompare(s, t){
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;

  while(i >= 0 || j >= 0){
    while(i >= 0){
      if(s[i] === "#"){
        skipS++;
        i--;
      }else if(skipS > 0){
        skipS--;
        i--;
      }else {
        break;
      }
    }

    while(j >= 0){
      if(t[j] === "#"){
        skipT++;
        j--;
      }else if(skipT > 0){
        skipT--;
        j--;
      }else {
        break;
      }
    }

    if(s[i] !== t[j]) return false;
    i--
    j--;
  }
  return true;
}





