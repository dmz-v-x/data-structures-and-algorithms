// Naive Approach: Rotate one by one

// Time Complexity: O(n * k)
// Space Complexity: O(1)

function rightRotate(arr, k){
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    let last = nums[nums.length - 1]

    for (let j = nums.length - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }

    nums[0] = last;
  }
}

// Better Approach: Using Extra Space
// Time Complexity: O(n)
// Space Complexity: O(k)

function rightRotate(arr, k){
  k = k % arr.length;
  let temp = arr.slice(0, n-k);
  for (let i = 0; i<k; i++){
    arr[i] = arr[n-k+i]
  }

  for(let i = 0; i<n-k; i++){
    arr[k+i] = temp[i];
  }  
}

// Optimal Appraoch

function rightRotate(arr, k){
  k = k % arr.length;
  reverse(arr, 0, n-k-1);
  reverse(arr, n-k, n-1);
  reverse(arr, 0, n-1);
}

function reverse(arr, start, end){
  while(start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
