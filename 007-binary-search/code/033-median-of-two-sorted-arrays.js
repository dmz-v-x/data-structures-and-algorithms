// You are given two sorted arrays.

// You need to find the median of the combined array

// Example:
// nums1 = [1, 3]
// nums2 = [2]

// Combined:

// [1, 2, 3]
// Median = 2

// Key Observations:

// Total length = n + m
// If odd → middle element
// If even → average of two middle elements

// Brute Force (Merge + Sort)

// Intuition

// "Why not just combine both arrays and find median normally?"

// Simple thinking:

// Merge both arrays
// Sort them
// Pick median

// Visualization

// nums1 = [1, 3]
// nums2 = [2]

// Merged → [1, 3, 2]
// Sorted → [1, 2, 3]

// Dry Run
// arr = [1,2,3]
// n = 3

// median = arr[3//2] = arr[1] = 2

// Complexity
// Time: O((n+m) log(n+m))
// Space: O(n+m)

function findMedianSortedArrays(nums1, nums2){
  let arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);

  let n = arr.length;

  if(n % 2 === 1){
    return arr[Math.floor(n/2)];
  }else{
    return (arr[n/2 - 1] + arr[n/2]) / 2;
  }
}



// Better Approach: Merge without sorting

// Intuition

// Arrays are already sorted

// So instead of sorting again:

// Use merge logic of merge sort

// Visualization
// nums1 = [1, 3]
// nums2 = [2]

// Merge step:

// 1 < 2 → [1]
// 2 < 3 → [1,2]
// 3       → [1,2,3]

// Complexity
// Time: O(n + m)
// Space: O(n + m)

function findMedianSortedArrays(nums1, nums2){
  let i = 0;
  let j = 0;
  let merged = [];

  while(i < nums1.length && j < nums2.length){
    if(nums[i] < nums2[j]){
      merged.push(nums1[i]);
      i++
    }else{
      merged.push(nums2[j]);
      j++;
    }
  }

  while(i < nums1.length) merged.push(nums1[i++]);
  while(j < nums2.length) merged.push(nums2[j++]);

  if(n % 2 === 1){
    return merged[Math.floor(n / 2)];
  }else{
    return (merged[n/2 - 1] + merged[n/2]) / 2;
  }
  
}


// Optimal Approach: Binary Search on Partition

// CORE IDEA
// We DON'T need full merged array
// We just need correct partition

// Split both arrays such that:

// Left side → smaller half
// Right side → larger half

// AND:

// max(left) <= min(right)

// Visualization

// Let:

// nums1 = [1, 3]
// nums2 = [2]

// We try partitions:

// nums1: [1 | 3]
// nums2: [ | 2]

// Left side: [1]
// Right side: [2,3]

// Key Variables

// We define:

// cut1 = partition in nums1
// cut2 = partition in nums2

// And:

// cut2 = (n1 + n2 + 1)/2 - cut1

// Why?

// Because left half must contain:

// (total elements + 1) / 2

// Conditions

// We check:

// l1 <= r2 AND l2 <= r1

// Where:

// l1 = nums1[cut1-1]
// r1 = nums1[cut1]

// l2 = nums2[cut2-1]
// r2 = nums2[cut2]

// Complexity
// Time: O(log(min(n, m)))
// Space: O(1)

function findMedianSortedArrays(nums1, nums2){
  if(nums1.length > nums2.length){ // Always apply binary search on the smaller array
    return findMedianSortedArrays(nums2, nums1);
  }

  let n1 = nums1.length;
  let n2 = nums2.length;

  let low = 0; 
  let high = n1;

  while(low <= high){
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;

    let l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    let r1 = cut1 === n1 ? Infinity : nums1[cut1];

    let l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    let r2 = cut2 === n2 ? Infinity : nums2[cut2];

    if (l1 <= r2 && l2 <= r1) {
      if ((n1 + n2) % 2 === 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      }
    } else if (l1 > r2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
    
  }
}













