// Brute Force

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function singleNumber(arr){
  for(let i = 0; i<arr.length; i++){
    let count = 0;

    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }

    if(count === 1){
      return arr[i];
    }
  }
}

// Better Approach

function singleNumber(arr){
  let map = new Map();
  for(let i = 0; i<arr.length; i++){
    if(map.has(arr[i])){
      map.set(arr[i], map.get(arr[i])+1)
    }else{
      map.set(arr[i], 1);
    }
  }

  for(const [key, value] of map){
    if(value === 1){
      return key;
    }
  }
}

// Optimal Approach

function singleNumber(arr){
  let xor = 0;
  for(let i = 0; i<arr.length; i++){
    xor ^= arr[i];
  }

  return xor;
}

