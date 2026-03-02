// Example:

// Input:

//     [1,3,4,2,2]

// Output:

//     2

// Using Hashing

function findDuplicateInRange(arr){
  const seen = new Set();
  for(let i = 0; i<arr.length; i++){
    if(seen.has(arr[i])){
      return arr[i];
    }else{
      seen.add(arr[i]);
    }
  }
  return -1;
}

// Floyd's Cycle Detection
