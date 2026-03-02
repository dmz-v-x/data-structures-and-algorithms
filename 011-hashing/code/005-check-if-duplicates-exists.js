// Input:

//     [1,2,3,1]

// Output:

//     true

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
