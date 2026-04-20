// Problem:

// You are given:

// nums1 (sorted), nums2 (sorted), and k

// Find the k-th smallest element in the combined sorted array

// Example:
// nums1 = [1,3,5]
// nums2 = [2,4,6]
// k = 4

// Combined:

// [1,2,3,4,5,6]

// 4th element = 4

// IMPORTANT CONNECTION

// Median problem = special case of k-th element

// k = (n1 + n2 + 1)/2

// So we’ll reuse the same partition idea

// Brute Force: (Merge + Sort)

// Intuition: Just combine both arrays and pick k-th element

// Visualization
// nums1 = [1,3,5]
// nums2 = [2,4,6]

// Merged → [1,3,5,2,4,6]
// Sorted → [1,2,3,4,5,6]

// k = 4 → arr[3] = 4

// Dry Run
// arr = [1,2,3,4,5,6]
// k = 4

// index = k-1 = 3
// answer = arr[3] = 4

// Complexity
// Time: O((n+m) log(n+m))
// Space: O(n+m)

function kthElement(nums1, nums2, k){
  let arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  return arr[k  - 1];
}

// Better Approach (Merge Until K)

// Intuition

// We don’t need full merge
// Just go till k elements

// Visualization
// nums1 = [1,3,5]
// nums2 = [2,4,6]
// k = 4

// Steps:
// 1 → 1
// 2 → 2
// 3 → 3
// 4 → 4  stop here

// Dry Run
// i=0, j=0, count=0

// 1 < 2 → take 1 (count=1)
// 3 > 2 → take 2 (count=2)
// 3 < 4 → take 3 (count=3)
// 5 > 4 → take 4 (count=4) → STOP

// Complexity
// Time: O(k) (worst O(n+m))
// Space: O(1)

function kthElement(nums1, nums2, k){
  let i = 0;
  let j = 0;
  let count = 0;

  while(i < nums1.length && j < nums2.length){
    let val;
    if(nums1[i] < nums2[j]){
      val = nums1[i++];
    }else{
      val = nums2[j++];
    }

    count++;
    if(count === k) return val;
  }

  while(i < nums1.length){
    count++;
    if(count === k) return nums[i];
    i++;
  }

  while(j < nums2.length){
    count++;
    if(count === k) return nums2[j];
    j++;
  }
}



// Optimal Approach:

function kthElement(nums1, nums2, k) {
  if (nums1.length > nums2.length) {
    return kthElement(nums2, nums1, k);
  }

  let n1 = nums1.length;
  let n2 = nums2.length;

  let low = Math.max(0, k - n2);
  let high = Math.min(k, n1);

  while (low <= high) {
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = k - cut1;

    let l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    let r1 = cut1 === n1 ? Infinity : nums1[cut1];

    let l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
    let r2 = cut2 === n2 ? Infinity : nums2[cut2];

    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }
}








