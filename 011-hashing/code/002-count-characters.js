// Example input:

//     "banana"

// Expected output:

//     {
//         b: 1,
//         a: 3,
//         n: 2
//     }

// This means:

// - character **b** appears once  
// - character **a** appears three times  
// - character **n** appears twice  

// Naive Appraoch
// Time Complexity: O(n^2)
// Space Complexity: O(k) k = number of unique characters

function countCharacter(str){
  const obj = {};
  for(let i = 0; i<str.length; i++){
    let count = 0;
    for(let j = 0; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
      }
    }
    obj[str[i]] = count;
  }
  reutn obj;
}

// Using Object

// Time Complexity: O(n)
// Space Complexity: O(k) k unique characters

function countCharacters(str){
  const freq = {};
  for(let char of str){
    if(freq[char]){
      freq[char]++;
    }else {
      freq[char] = 1;
    }
  }
  return freq;
}

// Using Map

// Time Complexity: O(n)
// Space Complexity: O(k) k unique characters

function countCharacters(str){
  const map = new Map();
  for(let char of str){
    if(map.has(char)){
      map.set(char, map.get(char) + 1);
    }else{
      map.set(char, 1;)
    }
  }

  return map;
}

