// Merge Two sorted arrays into one sorted result

// There are 3 important version

// Return a new array
// In-place with extra buffer 
// In-place without extra space 

// Brute Force: Return New Array
// Time Complexity: O(n+m log(n+m))
// Space Complexity: O(n+m)
function merge(a, b){
  let result = [...a, ...b];
  result.sort((a, b) => a - b);
  return result;
}

// Better Approach: Two Pointers Merge

// Use two pointers i for a, j for b always pick smaller elements
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
function merge(a, b){
  let i = 0; 
  let j = 0;
  let result = [];

  while(i < a.length && j < b.length){
    if(a[i] <= b[j]){
      result.push(a[i]);
      i++;
    }else{
      result.push(b[j]);
      j++;
    }
  }

  while(i < a.length){
    result.push(a[i]);
    i++;
  }

  while(j < b.length){
    result.push(b[j]);
    j++;
  }

  return result;
}

// Optimal (In place with buffer means sorting a and b in correct order without any extra array)
// Filling from backside (nums1 can fit nums2)

// Time Complexity: O(n+m)
// Space Complexity: O(1)
function merge(nums1, m, nums2, n){
  let i = m-1;
  let j = n-1;
  let k = m+n-1;

  while(i >= 0 && j>=0){
    if(nums1[i] > nums2[j]){
      nums1[k] = nums1[i];
      k--;
      i--;
    }else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  while(j >= 0){
    nums1[k] = nums2[j]
    k--;
    j--;
  }

  
}














