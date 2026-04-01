// Rotate array by k places


// Example
// nums = [1,2,3,4,5,6,7], k = 3

// Output:
// [5,6,7,1,2,3,4]

// Means: last k elements move to the front

// Brute Force

// Rotate array k times, each time:

// remove last element
// insert at front

// Time Complexity: O(n * k)
// Space Complexity: O(1)

function rotate(nums, k){
  let n = nums.length;
  for(let i = 0; i<k; i++){
    let last = nums[n - 1];
    for(let j = n-1; j>0; j--){
      nums[j] = nums[j - 1];
    }
    nums[0] = last;
  }
  return nums;
}

// Better Approach
// new index = (i + k) % n

// Time Complexity: O(n)
// Space Complexity: O(n)
function rotate(nums, k){
  let n = nums.length;
  let result = new Array(n);

  for(let i = 0; i<n; i++){
    let index = (i + k) % n;
    result[index] = nums[i];
  }
  return result;
}

// Optimal Approach: Using Reversal Technique
// Time Complexity: O(n);
// Space Complexity: O(1)
function rotate(nums, k){
  let n = nums.length;
  k = k % n;

  function reverse(start, end){
    while(start < end){
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, k - 1);
  reverse(k, n - 1);
  reverse(0, n - 1);
}










