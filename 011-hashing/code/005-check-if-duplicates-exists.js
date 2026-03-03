// Input:

//     [1,2,3,1]

// Output:

//     true 

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function checkDuplicatesExists(arr){
  for(let i = 0; i<arr.length; i++){
    for(let j = i + 1; j<arr.length; j++){
      if(arr[i] === arr[j]){
        return true;
      }
    }
  }
  return false;
}

function checkDuplicatesExists(arr){
  const seen = new Set();

  for(let i = 0; i<arr.length; i++){
    if(seen.has(arr[i])){
      return true;
    }else{
      set.add(arr[i]);
    }
  }
  return false;
}
