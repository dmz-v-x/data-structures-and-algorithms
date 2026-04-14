// You are given a string with:

// '('
// ')'
// '*'

// '*' can act as:

// '('
// ')'
// '' 

// Return true if the string can be valid. Means it has equal number of opening and closing parenthesis and in order.

// Brute Force: For every * try all 3 possibilities

// replace with '('
// replace with ')'
// replace with ''

// Then check if resulting string is valid.

function isValid(str) {
  let count = 0;

  for (let ch of str) {
    if (ch === '(') count++;
    else count--;

    if (count < 0) return false;
  }

  return count === 0;
}

function checkValidString(s){

  function backtrack(i, current){
    if(i === s.length){
      return isValid(current);
    }

    if(s[i] === "*"){
      return(
        backtrack(i+1, current + '(') ||
        backtrack(i+1, current + ')') ||
        backtrack(i+1, current)
      )
    }

    return backtrack(i+1, current + s[i]);
    
  }

  return backtrack(0, "");
}


// Better Approach (Using two stacks)
// Time Complexity: O(n)
// Space Complexity: O(n)
function checkValidString(s){
  let openStack = [];
  let startStack = [];

  for(let i = 0; i<s.length; i++){
    let ch = s[i];

    if(ch === '('){
      openStack.push(i);
    }else if(ch === '*'){
      startStack.push(i);
    }else{
      if(openStack.length > 0){
        openStack.pop();
      }else if(starStack.length > 0){
        starStack.pop();
      }else{
        return false;
      }
    }
  }

  while(openStack.length > 0 && startStack.length > 0){
    if(openStack.pop() > starStack.pop()){
      return false;
    }
  }

  return openStack.length === 0;
}


// Optimal Approach


// Instead of exact count, we track a range:

// low → minimum open brackets possible
// high → maximum open brackets possible

// Why range?

// Because '*' is flexible:

// it can increase OR decrease count OR do nothing

// Rules

// For each char:

// If '('
// low++
// high++
// If ')'
// low--
// high--
// If '*'
// low--   // treat as ')'
// high++  // treat as '('

// Important Fix

// low should NEVER go below 0

// low = Math.max(low, 0)
// If high < 0

// Too many ) → invalid

// Final condition
// low === 0

// Time Complexity: O(n)
// Space Complexity: O(1)
function checkValidString(s){
  let low = 0;
  let high = 0;

  for(let ch of s){
    if(ch === '('){
      low++;
      high++;
    }else if(ch === ')'){
      low--;
      high--;
    }else{
      low--;
      high++;
    }

    if(high < 0) return false;

    low = Math.max(low, 0);
  }
  return low === 0;
}




