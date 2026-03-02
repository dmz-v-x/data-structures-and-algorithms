// Example input:

//     [1, 2, 3, 2, 4, 5, 1]

// Expected output:

//     [1, 2]

// Explanation:

// - `1` appears twice  
// - `2` appears twice  

// Naive Approach

// Time Complexity: O(n^2)
// Space Complexity: O(n); 

function findDuplicates(arr){
  let outArr = [];
  for(let i = 0; i<arr.length; i++){
    let count = 0;
    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    if(count > 1 && !outArr.includes(arr[i])){
      outArr.push(arr[i]);
    }
  }
  return outArr;
}

// Using Map

function findDuplicates(arr){
  const map = new Map();
  let outArr = [];
  for(let i = 0; i<arr.length; i++){
    if(map.has(arr[i])){
      map.set(arr[i], map.get(arr[i]) + 1);
    }else {
      map.set(arr[i], 1);
    }
  }
  for(const [key, value] of map){
    if(value > 1){
      outArr.push(key);
    }
  }
  return outArr;
}

// Using Set

function findDuplicates(arr){
  const seen = new Set();
  const duplicates 
  for(let num of arr){
    if(seen.has(num)){
      duplicates.add(num);
    }else{
      see.add(num);
    }
  }
  return [...duplicates];
}









