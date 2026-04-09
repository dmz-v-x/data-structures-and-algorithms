// You are given:

// nums1 → size = m + n
// first m elements = valid sorted data
// last n elements = 0 (just placeholders)
// nums2 → size = n

// Goal: merge nums2 into nums1 in sorted order (in-place)


// Brute Force: Copy elements from n2 to n1 then sort
// Time Complexity: O((m + n) log (m+n))
// Space Complexity: O(1)
function merge(nums1, m, nums2, n){
  // Step 1: copy nums2 to nums1
  for(let i = 0; i<n; i++){
    nums1[i + m] = nums2[i];
  }

  // Step 2: sort nums1
  nums1.sort((a, b) => a - b);
}

// Better Approach: Using two pointers and extra array
// Time Complexity: O(m + n)
// Space Complexity: O(m + n)
function merge(nums1, m, nums2, n){
  let i = 0;
  let j = 0;
  let temp = [];

  while(i < m && j < n){
    if(nums1[i] <= nums2[j]){
      temp.push(nums1[i++]);
    }else {
      temp.push(nums2[j++]);
    }
  }

  while(i < m) temp.push(nums1[i++]);
  while(j < n) temp.push(nums2[j++]);

  for(let k = 0; k<m+n; k++){
    nums1[k] = temp[k];
  }
}

// Optimal Appraoch: Fill from backside
// Time Complexity: O(m + n)
// Space Complexity: O(1)
function merge(nums1, m, nums2, n){
  let i = m - 1;
  let j = n - 1;
  let = m + n - 1;

  while(i >= 0 && j >= 0){
      if(nums1[i] > nums2[j]){
        nums1[k] = nums1[i];
        i--
      }else{
        nums1[k] = nums2[j];
        j--
      }
      k--;
    }

    while(j >= 0){
      nums1[k] = nums2[j]
      j--;
      k--;
    }
}
