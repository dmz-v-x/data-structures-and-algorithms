// Input:

//     [4,3,2,7,8,2,3,1]

// Output:

//     [2,3]

// Using Hasing

function findAllDuplicates(arr){
  const seen = new Set();
  const duplicates = new Set();

  for(const num of arr){
    if(seen.has(num)){
      duplicates.add(num);
    }else {
      seen.add(num);
    }
  }
  return [...duplicates];
}

// Sign Marking Trick
