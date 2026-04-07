// You are given an array fruits[]

// Each number = type of fruit
// You have 2 baskets
// Each basket can hold only 1 type of fruit
// You must pick fruits continuously (subarray)

// Return maximum number of fruits you can pick

// Input: [1,2,1]
// Output: 3

// Input: [1,2,3,2,2]
// Output: 4   → [2,3,2,2]

// Brute Force:

function totalFruit(fruits) {
  let n = fruits.length;
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let set = new Set();

    for (let j = i; j < n; j++) {
      set.add(fruits[j]);

      if (set.size > 2) break;

      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
}

// Better Approach

function totalFruits(fruits){
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let map = new Map();

  while(right < fruits.length){
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    while(map.size > 2){
      map.set(fruits[left], map.get(fruits[left]) - 1);

      if(map.get(fruits[left]) === 0){
        map.delete(fruits[left]);
      }

      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
}







