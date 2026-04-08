// Merge two sorted arrays such that:

// Result is sorted
// Result has no duplicates

// Brute force

// Time Complexity: O((n+m) log (n+m))
// Space Complexity: O(n+m)

function merge(a, b){
  let combined = [...a, ...b];

  // remove duplicates
  let unique = [... new Set(combined)];

  unique.sort((a, b) => a - b);

  return unique;
}

// Better: Using two pointers avoid duplicates
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
function merge(a, b){
  let i = 0, j = 0;
  let set = new Set();

  while(i < a.length && j < b.length){
    if(a[i] <= b[j]){
      set.add(a[i]);
      i++;
    }else{
      set.add(b[j]);
      j++;
    }
  }

  while(i < a.length){
    set.add(a[i]);
    i++;
  }

  while(j < b.length){
    set.add(b[j]);
    j++;
  }

  return [...set];
}


// Optimal Approach: Two Pointers without set
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
function merge(a, b){
  let i = 0;
  let j = 0;
  let result = [];

  while(i < a.length && j < b.length){
    let val;

    if(a[i] < b[j]){
      val = a[i];
      i++;
    }else if(a[i] > b[j]){
      val = b[j];
      j++;
    }else {
      val = a[i];
      i++;
      j++;
    }

    if(result.length === 0 || result[result.length - 1] !== val){
      result.push(val);
    }
  }

    while(i < a.length){
      let val = a[i];
      i++;
      if(result.length === 0 || result[result.length - 1] !== val){
        result.push(val);
      }
    }

    while(j < b.length){
      let val = b[j];
      j++;
      if(result === 0 || result[result.length - 1] !== val){
        result.push(val);
      }
    }

  return result;
    
}





