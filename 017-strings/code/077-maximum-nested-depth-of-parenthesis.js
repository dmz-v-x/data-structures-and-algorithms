// You are given a string:

// "(1+(2*3)+((8)/4))+1"

// You need to find:

// Maximum nesting depth of parentheses

// Depth = how many parentheses are open at the same time.


// Brute Force Approach: Using Stack
// Time Complexity: O(N)
// Space Complexity: O(N)
function maxDepth(s){
  let stack = [];
  let maxDepth = 0;

  for(let char of s){
    if(char === '('){
      stack.push(char);
      maxDepth = Math.max(maxDepth, stack.length);
    }else if(char === ')'){
      stack.pop();
    }
  }
  return maxDepth;
}


// Optimal Appraoch: No Stack if ( increase depth if ) decrease depth
// Time Complexity: O(N)
// Space Complexity: O(1)
function maxDepth(s){
  let depth = 0;
  let maxDepth = 0;

  for(let char of s){
    if(char === '('){
      depth++;
      maxDepth = Math.max(depth, maxDepth);
    }else if(char === ')'){
      depth--;
    }
  }
  return maxDepth;
}
