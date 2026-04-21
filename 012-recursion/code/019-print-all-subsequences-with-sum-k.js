// Given:

// arr = [1, 2, 1]
// k = 2

// We need to:

// Print all subsequences whose SUM = k

// Output
// [1,1]
// [2]

// Same as subsequences:

// At each index:
// → Take element
// → Not take element

// BUT now we also track:

// current SUM

// Complexity
// Time: O(n * 2^n)

function subsequences(arr, k){
  let result = [];

  function helper(index, path){
    if(index === arr.length){
      let sum = path.reduce((a, b) => a + b, 0);

      if(sum === k){
        result.push([...path]);
      }
      return;
    }

    // take
    path.push(arr[index]);
    helper(index + 1, path);
    path.pop();

    // not take
    helper(index + 1, path);
  }

  helper(0, []);
  return result;
}


// Better Approach

// Instead of recomputing:

// Maintain running sum

// Complexity
// Time: O(2^n)

function subsequences(arr, k){
  let result = [];

  function helper(index, path, sum){
    if(index === arr.length){
      if(sum === k){
        result.push([...path]);
      }
      return;
    }

    // take
    path.push(arr[index]);
    helper(index + 1, path, sum + arr[index]);
    path.pop();


    // not take
    helper(index+1, path, sum);
  }

  helper(0, [], 0);
  return result;
}



// Optimal Appraoch: Backtracking

// If sum already exceeds k → STOP exploring
// All numbers are positive


function subsequences(arr, k){
  let result = [];
  let path = [];

  function backtrack(index, sum){
    if(sum > k) return;

    if(index === arr.length){
      if(sum === k){
        result.push([...path]);
      }
      return;
    }

    // take
    path.push(arr[index]);
    backtrack(index + 1, sum + arr[index]);
    path.pop();

    // not take
    backtrack(index + 1, sum);
  }

  backtrack(0, 0);
  return result;
}























