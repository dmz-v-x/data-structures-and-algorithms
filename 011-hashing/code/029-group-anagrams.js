// Two strings are anagrams if they contain the same characters with the same frequency, but possibly in different order.

// Example:

// Input:
// ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//  ["eat","tea","ate"],
//  ["tan","nat"],
//  ["bat"]
// ]

// Brute Force
// Time Complexity: n^2 for comparison k logk for sorting string: O(n^2 k log k)
// k = average string length
function groupAnagrams(strs){
  let visited = new Array(stts.length).fill(false);
  let result = [];
  for(let i = 0; i<strs.length; i++){
    if(visited[i]) continue;

    let group = [strs[i]];
    visited[i] = true;

    for(let j = i+1; j<strs.length; j++){
      let a = strs[i].split('').sort().join('');
      let b = strs[j].split('').sort().join('');

      if(a === b){
        group.push(strs[j]);
        visited[j] = true;
      }
    }
    result.push(group);
  }
  return result;
}

// Better Approach: Using Sorted keys and HashMap
// Time Complexity: O(n * k log k)
// Space Complexity: O(n)
function groupAnagrams(strs){
  let map = new Map();

  for(let word of strs){
    let key = word.split('').sort().join('');

    if(!map.has(key)){
      map.set(key, []);
    }

    map.get(key).push(word);
    
  }
  return [...map.values()];
}
