// Fair Distribution of Cookies

// Given:
// cookies[] → array of cookie bags
// k → number of children
// Goal:

// Distribute cookies such that:

// Each bag goes to exactly one child
// Minimize unfairness

// What is unfairness?

// It is the maximum cookies any one child gets

// Example:

// cookies = [8, 15, 10]
// k = 2

// Distribution:
// Child1 → [8,10] = 18
// Child2 → [15] = 15

// Unfairness = max(18, 15) = 18

// We want:
// minimum possible unfairness

// Burte Force: Try all possibilities
// Total Possibilities: K^n


// Time Complexity: O(k^n)
// Space Complexity: O(k)

function distributeCookies(cookies, k){
  let n = cookies.length;
  let children = new Array(k).fill(0);
  let result = Infinity;

  function backtrack(index){
    // Base Case
    if(index === n){
      let unfairness = Math.max(...children);
      result = Math.min(result, unfairness);
      return;
    }

    // Try all Children
    for(let i = 0; i<k; i++){
      children[i] += cookies[index];
      backtrack(index + 1);
      children[i] -= cookies[index];
    }

    
  }

  backtrack(0);
  return result;
}

