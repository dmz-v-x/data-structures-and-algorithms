// Input:

//     [2,1,3,5,3,2]

// Output:

//     3

function returnFirstDuplicates(arr){
  const seen = new Set();
  for(let i = 0; i<arr.length; i++){
    if(seen.has(arr[i])){
      return arr[i];
    }else{
      set.add(arr[i]);
    }
  }
  return -1;
}
