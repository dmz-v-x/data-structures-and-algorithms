// Given:
// nums = [1,1,1,2,2,3]
// k = 2
// Goal:

// Return k most frequent elements

// Output = [1, 2]


// Brute Force: 

// Count frequency
// Compare every pair of elements
// Pick top k manually

// Steps:
// Build frequency map
// Convert to array
// Repeatedly find max freq (k times)

// Time Complexity: O(n^2)

function topKFrequent(nums, k){
  let freq = {};

  for(let num of nums){
    freq[num] = (freq[num] || 0) + 1;
  }

  let result = [];

  for(let i = 0; i<k; i++){
    let maxKey = null;
    for(let key of freq){
      if(maxKey === null || freq[key] > freq[maxKey]){
        maxKey = key;
      }
    }
    result.push(Number(maxKey));
    delete(freq[maxKey]);
  }

  return result;
}

// Better Approach

// Count frequency
// Sort by frequency

// Steps:
// Build frequency map
// Convert to array [num, freq]
// Sort descending
// Take first k

function topKFrequent(nums, k){
  let freq = {};

  for(let num of nums){
    freq[num] = (freq[num || 0]) + 1;
  }

  let arr = Object.entries(freq);

  arr.sort((a, b) => b[1] - a[1]);

  return arr.slice(0, k).map(x => Number(x[0]));
}













