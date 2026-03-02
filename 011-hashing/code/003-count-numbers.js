// Example input:

//     [1, 2, 2, 3, 3, 3, 4]

// Expected output:

//     {
//         1: 1,
//         2: 2,
//         3: 3,
//         4: 1
//     }

// Meaning:

// - number **1** appears once  
// - number **2** appears twice  
// - number **3** appears three times  
// - number **4** appears once  


// Naive Approach

// Time Complexity: O(n^2)
// Space Complexity: O(k) k unique elements in the array

function countNumbers(arr){
  let freq = {};
  for(let i = 0; i<arr.length; i++){
    let count = 0; 
    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    freq[arr[i]] = count;
  }
  return freq;
}


// Using Objects

// Time Complexity: O(n)
// Space Complexity: O(k) k unique numbers in array

function countNumbers(arr){
  let freq = {};
  for(let i = 0; i<arr.length; i++){
    if(freq[arr[i]]){
      freq[arr[i]]++;
    }else{
      freq[arr[i]] = 1;
    }
  }
  return freq;
}

// Using Map

// Time Complexity: O(n)
// Space Complexity: O(k) k unique numbers in array

function countNumbers(arr){
  const map = new Map();
  for(let i = 0; i<arr.length; i++){
    if(map.has(arr[i])){
      map.set(arr[i], map.get(arr[i]) + 1);
    }else {
      map.set(arr[i], 1);
    }
  }
  return map;
}



