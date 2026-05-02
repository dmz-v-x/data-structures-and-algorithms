// Given:
// A number (as string) → "129814999"
// A number k → max swaps allowed

// Goal:

// Make the largest possible number using at most k swaps


// Brute Force:

// Core idea (brute force)

// At every step:

// Try all possible swaps
// Reduce k
// Recursively solve
// Track maximum

// Example
// num = "123"
// k = 1

// All swaps:

// swap(0,1) → "213"
// swap(0,2) → "321"
// swap(1,2) → "132"

// Maximum = "321"

// Time Complexity: O((n^2)*k)
// Because:

// Each level → n² swaps
// Depth → k

function findMaximumNumber(str, k){
  let maxStr = str;

  function solve(curr, k){
    if(curr > maxStr){
      maxStr = curr;
    }

    // base case 

    if(k === 0) return;

    let n = curr.length;
    for(let i = 0; i<n; i++){
      for(let j = i+1; j<n; j++){

        // swap i and j
        let arr = curr.split('');
        [arr[i], arr[j]] = [arr[j], arr[i]];
        let newStr = arr.join('');

        // recurse
        solve(newStr, k-1);
      }
    }
  }

  solve(str, k);
  return maxStr;
  
}


// Better Approach: (Greedy + Backtracking)

// Observation: We want the maximum possible digit at position i

// Example:
// "129814999"

// At index 0:

// digits ahead → 2,9,8,1,4,9,9,9
// max = 9

// So swap 1 with last 9

// Instead of trying ALL swaps:

// Only swap with maximum digit in remaining string

// Algorithm

// At index i:

// Find max digit from i → n
// If max != current:
// swap with all positions where max exists
// recurse
// Else:
// move to next index

// Time Complexity: O(n^k)


function findMaximumNum(str, k){
  let maxStr = str;

  function solve(arr, k, index){
    // base case
    if(k === 0 || index === arr.length) return;

    // find max digit from index to end
    let maxDigit = arr[index];
    for(let i = index + 1; i<arr.length; i++){
      if(arr[i] > maxDigit){
        maxDigit = arr[i];
      }
    }

    // if we found a better digit, we will swap
    if(maxDigit !== arr[index]){
      k--;
    }

    for(let i = arr.length - 1; i>=index; i--){
      if(arr[i] === maxDigit){

        // swap
        [arr[index], arr[i]] = [arr[i], arr[index]];

        let currStr = arr.join('');
        if(currStr > maxStr){
          maxStr = currStr;
        }

        // recurse
        solve(arr, k, index+1);

        // backtrack

        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
    }
  }

  solve(str.split(''), k, 0);
  return maxStr;
}


























