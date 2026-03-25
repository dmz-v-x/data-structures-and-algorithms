// What is the problem saying?

// You are given pairs:

// [a, b]

// Meaning:

// Start = a
// End = b

// Rule to form a chain:

// You can connect two pairs if:

// previous_end < next_start

// Goal: Find maximum length of chain

// Example:
// pairs = [[1,2], [2,3], [3,4]]
// Possible chains:
// [1,2] → [3,4] → length = 2
// [2,3] → [3,4] (3 < 3 is false)

// Answer = 2

// Sort pairs by end
// Pick first pair
// For next pair:
// If start > last_end → pick it

// Time complexity: O(n log n)

function findLongestChain(pairs){
  // 1. sort by end

  pairs.sort((a, b) => a[1], b[1]);

  let count = 1;
  let lastEnd = pairs[0][1];

  for(let i = 1; i<pairs.length; i++){
    if(pair[i][0] > lastEnd){
      count++;
      lastEnd = pairs[i][1];
    }
  }
  return count;
}
