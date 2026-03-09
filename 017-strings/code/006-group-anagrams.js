// Given an array of strings, group the strings that are anagrams of each other.

// Two strings are anagrams if they contain the same characters with the same frequencies, just in a different order.

// Example:

// Input: ["eat","tea","tan","ate","nat","bat"]

// Output:
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

// Naive Approach: Checking every string with every other string in array
// Time Complexity: O(n^2 * k log k) 


function groupAnagram(array){
  let result = [];
  let isVisited = new Array(array.length).fill(false);

  for(let i = 0; i<array.length; i++){
    if(isVisited[i]) continue;
    let group = [array[i]];
    isVisited[i] = true;

    for(let j = i+1; j<array.length; j++){
      if(isVisited[j]) continue;
      if(isAnagram(array[i], array[j])){
        group.push(array[j]);
        isVisited[j] = true;
      }
    }

    result.push(group);
  }
}

function isAnagram(str1, str2){
  let sortedStr1 = str1.split('').sort().join();
  let sortedStr2 = str2.split('').sort().join();

  return sortedStr1 === sortedStr2;
}

// Better Approach: (Sorting + Hash Map)
// Time Complexity: Sorting: k log k + n time iteration => O(n * k log k)
// Space Complexity: O(nk)

function groupAnagrams(strs){
  const map = {};

  for(let word of strs){
    let sorted = word.split('').sort().join('');
    if(!map[sorted]){
      map[sorted] = [];
    }
    map[sorted].push(word);
  }
  return Object.values(map);
}

// Optimal Approach: Character Frequency
// Time Complexity: O(n * k)
// Space Complexity: O(nk)
function groupAnagrams(strs){
  const map = {};
  for(let word of strs){
    const count = new Array(26).fill(0);

    for(let char of word){
      const index = char.charCodeAt(0) - 97;
      count[index]++;
    }
    const key = count.join('#');
    if(!map[key]){
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
}
