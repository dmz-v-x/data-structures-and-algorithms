// Maximum Number of achievable transfer request

// You are given:

// n buildings
// requests[i] = [from, to]

// Each request = transfer 1 employee from building from → to

// Pick maximum number of requests such that:

// After all selected transfers,
// each building has net 0 change

// What does “net 0 change” mean?

// For every building:

// incoming employees == outgoing employees

// n = 3
// requests = [[0,1], [1,2], [2,0]]

// Cycle:

// 0 → 1 → 2 → 0

// All balanced → valid
// Answer = 3


// Brute Force: Try all subset of requests.
// Step 1: Apply Transfer
// Step 2: Check if balanced
// Step 3: Track maximum size

// Time Complexity: O(2^n)

function maximumRequests(n, requests){
  let maxCount = 0;

  function backtrack(index, count, net){
    if(index === requests.length){
      for(let i = 0; i<n; i++){
        if(net[i] !== 0) return;
      }
      maxCount = Math.max(count, maxCount);
      return;
    }

    // Option 1: Take
    let [from, to] = requests[index];
    net[from]--;
    net[to]++;

    backtrack(index+1, count+1, net);

    // undo
    net[from]++;
    net[to]--;

    // Option 2: Skip
    backtrack(index+1, count, net);
  }  
  
  backtrack(0, 0, new Array(n).fill(0));
  return maxCount;
}


// Better Approach: Same approach but with pruning
// Time Complexity: O(2^n)
function maximumRequests(n, requests){
  let maxCount = 0;

  function backtrack(index, count, net){
    if(count + (requests.length - index) <= maxCount) return;

    if(index === requests.length){
      for(let i = 0; i<n; i++){
        if(net[i] !== 0){
          return;
        }
        maxCount = Math.max(count, maxCount);
        return;
      }
    }

    // Option 1: Take
    let [from, to] = requests[index];
    net[from]--;
    net[to]++;
    backtrack(index+1, count+1, net);

    // undo
    net[from]++;
    net[to]--

    // Option 2: Skip
    backtrack(index+1, count, net);
  }

  backtrack(0, 0, new Array(n).fill(0));
  return maxCount;
}
















