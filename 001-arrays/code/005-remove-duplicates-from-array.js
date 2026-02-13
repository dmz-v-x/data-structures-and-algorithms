// Naive Approach

// Time Complexity: O(n + sizeofset)
// Space Complexity: O(size of set)

function removeDuplicates(arr){
  let set = new Set();
  let index = 0;
  for(let i = 0; i<arr.length; i++){
    set.add(arr[i]);
  }

  for(const key of set){
    arr[index] = key;
    index++;
  }

  return index;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

function removeDuplicates(arr){
  let index = 1;
  for(let i = 1; i<arr.length; i++){
    if(arr[i] !== arr[i-1]){
      arr[index] = arr[i];
      index++;
    }
  }
  return index;
    
}




