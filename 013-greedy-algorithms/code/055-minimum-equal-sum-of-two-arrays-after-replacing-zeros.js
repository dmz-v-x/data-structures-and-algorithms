// You are given two arrays:

// nums1, nums2

// Some elements are 0

// You can replace each 0 with any positive integer (≥ 1)

// Goal:

// Make sum(nums1) == sum(nums2) with minimum possible sum



// Observation 1: What does 0 mean?

// A zero is like:

// "flexible slot"

// You can replace it with:

// 1, 2, 3, ... anything ≥ 1

// Observation 2: Minimum value of zero

// Best (to keep sum small):

// Replace every 0 → 1


// Compute Base Values

// Let:

// sum1 = sum(nums1 ignoring zeros)
// sum2 = sum(nums2 ignoring zeros)

// zero1 = number of zeros in nums1
// zero2 = number of zeros in nums2

// Minimum possible sums:
// minSum1 = sum1 + zero1
// minSum2 = sum2 + zero2

// Because each zero → at least 1

// Goal Restated

// We want:

// Case 1

// finalSum1 == finalSum2

// And both ≥ their minimum sums

// Case 2:
// minSum1 < minSum2

// We need to increase nums1

// Case 3:
// minSum2 < minSum1

// We need to increase nums2

// When is it IMPOSSIBLE?
  
// Case:
// minSum1 < minSum2 AND zero1 == 0

// nums1 has no zeros → cannot increase 

// Similarly:

// minSum2 < minSum1 AND zero2 == 0

// Example 1:

// Input: nums1 = [3,2,0,1,0], nums2 = [6,5,0]
// Output: 12
// Explanation: We can replace 0's in the following way:
// - Replace the two 0's in nums1 with the values 2 and 4. The resulting array is nums1 = [3,2,2,1,4].
// - Replace the 0 in nums2 with the value 1. The resulting array is nums2 = [6,5,1].
// Both arrays have an equal sum of 12. It can be shown that it is the minimum sum we can obtain.
  
// Example 2:

// Input: nums1 = [2,0,2,0], nums2 = [1,4]
// Output: -1
// Explanation: It is impossible to make the sum of both arrays equal.




// Time Complexity: O(n)
// Space Complexity: O(1)
function minEqualSum(nums1, nums2){
  let sum1 = 0;
  let sum2 = 0;

  let zero1 = 0;
  let zero2 = 0;

  for(let num of nums1){
    if(num === 0) zero1++;
    else sum1 += num;
  }

  for(let num of nums2){
    if(num === 0) zero2++;
    else sum2 += num;
  }

  let minSum1 = sum1 + zero1;
  let minSum2 = sum2 + zero2;

  if(minSum1 < minSum2 && zero1 === 0) return -1;
  if(minSum2 < minSum1 && zero2 === 0) return -1;

  return Math.max(minSum1, minSum2);
}
