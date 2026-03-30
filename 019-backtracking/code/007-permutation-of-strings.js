// Generate all permutations of a string

// Let’s take a simple string:

// "abc"

// Permutations = all possible arrangements of characters

// So output:

// abc
// acb
// bac
// bca
// cab
// cba

// Total = n! (for n characters)
// For 3 → 3! = 6

// Brute Force: Pick characters one by one 

function permutations(s){
  let res = [];

  function solve(remaining, path){
    // base case
    if(remaining.length === 0){
      res.push(path);
      return;
    }

    for(let i = 0; i<remaining.length; i++){
      let ch = remaining[i];

      // Create new remaining string
      let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);

      solve(newRemaining, path+ch);
      
    }
      
  }
  
  solve(s, "");
}
