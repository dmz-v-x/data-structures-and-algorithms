// Example:

// arr = [1, 5, 7, -1, 5]
// k = 6

// Valid pairs:

// (1,5)
// (7,-1)
// (1,5)

// If indices matter:

// (0,1)
// (0,4)
// (2,3)

// Naive Solution: Using Two Nested Loops

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function findPairs(arr, k){
  const result = [];
  for(let i = 0; i<arr.length; i++){
    for(let j = i + 1; j<arr.length; j++){
      if(arr[i] + arr[j] === k){
        result.push[arr[i], arr[j]];
      }
    }
  }
  return result;
}

// Better Approach: Using Hashing

// Time Complexity: O(n)
// Space Complexity: O(n)

function findPairs(arr, k){
  const seen = new Set();
  const result = [];

  for(let num of arr){
    const needed = k - num

    if(seen.has(needed)){
      result.push[num, needed];
    }
    seen.add(num);
  }
  return result;
}

// Two Pointer (Optimal when sorted)

function findPairs(arr, k){
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  const result = [];
  while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === k){
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }else if(sum < k){
      left++;
    }else {
      right--;
    }
  }
  return result;
}
