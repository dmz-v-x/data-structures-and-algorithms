// You are given:

// n = numbers from 1 to n  
// k = size of each combination

// Return all possible combinations of size k

// Example:
// n = 4, k = 2

// Output:
// [
//   [1,2],
//   [1,3],
//   [1,4],
//   [2,3],
//   [2,4],
//   [3,4]
// ]

// What is a "Combination"?

// Order does NOT matter

// [1,2] == [2,1] (we count only once)

// Important difference

// | Type         | Order matters? |
// | ------------ | -------------- |
// | Permutations | YES            |
// | Combinations | NO             |

// Core Idea:

// We want:

// Pick k numbers from [1...n]

// At each number:

// Either take it
// Or skip it

function combine(n, k){
  let result = [];

  function backtrack(start, path){
    // Base Case
    if(path.length === k){
      result.push([...path])
      return;
    }

    // Choices
    for(let i = start; i<=n; i++){
      path.push(i);
      backtrack(i+1, path);
      path.pop();
    }
  }

  backtrack(1, []);
}


// Better Approach: Pruning

function combine(n, k) {
  let result = [];

  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  backtrack(1, []);
  return result;
}



















