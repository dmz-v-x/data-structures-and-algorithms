// Count Subarrays with given XOR

// You are given:

// An array arr
// A number k

// You need:

// Count how many subarrays have XOR = k

// Brute Force: Generate all subarrays and check xor

function counSubarrays(arr, k){
  let n = arr.length;
  let count = 0;

  for(let i = 0; i<n; i++){
    let xor = 0;
    for(let j = i; j<n; j++){
      xor ^= arr[j];
      if(xor === k){
        count++;
      }
    }
  }
  return count;
}


// Optimal Approach: Prefix XOR and HashMap
// Time Complexity: O(n)
// Space Complexity: O(n)
function countSubarrays(arr, k){
  let map = new Map();
  let xor = 0;
  let count = 0;

  map.set(0, 1)
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];

    let needed = xor ^ k;

    if (map.has(needed)) {
      count += map.get(needed);
    }

    map.set(xor, (map.get(xor) || 0) + 1);
  }

  return count;
}
