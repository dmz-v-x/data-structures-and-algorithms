Given a sorted infinite binary array:

0 0 0 0 0 1 1 1 1 1 ...

Find index of first 1

// Brute Force

function firstOneInfinite(arr){
  let i = 0;
  while(true){
    if(arr[i] === 1) return i;
    i++;
  }
}


// Optimal Approach

function firstOneInfinite(arr){
  let low = 0;
  let high = 1;

  // Step 1: Expand range
  while(arr[high] === 0){
    low = high;
    high = high * 2;
  }

  // Step 2: Binary Search for first 1

  let ans = -1;

  while(low <= high){
    let mid = Math.floor((low + high)/2);

    if(arr[mid] === 1){
      ans = mid;
      high = mid - 1; // search earlier occurrences
    }else {
      low = mid + 1;
    }
  }
  return ans;
}
