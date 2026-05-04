// Intersection of Two Arrays


// What is given?

// Two arrays:

// nums1 = [1,2,2,1]
// nums2 = [2,2]

// What do we need?

// Return unique common elements

// Output = [2]

// VERY IMPORTANT CONSTRAINT
// Output must contain unique values only
// Order does not matter

// What does “intersection” mean?

// Elements that exist in both arrays

// Example:

// nums1 = [1,2,3]
// nums2 = [2,3,4]

// Common → [2,3]

// Brute Force: Comparing every number with each other using set 

// Time Complexity: O(n * m)

function intersection(nums1, nums2){
  let result = new Set();
  for(let i = 0; i<nums1.length; i++){
    for(let j = 0; j<nums2.length; j++){
      result.add(nums1[i]);
    }
  }
  return Array.from(result);
}



// Better Approach:
// Store elements of one array in Set
// Check elements of second array in O(1)

// Time Complexity: O(n + m)

function intersection(nums1, nums2){
  let set1 = new Set(nums1);
  let result = new Set();

  for(let num of nums2){
    if(set1.has(num)){
      result.add(num);
    }
  }
  return Array.from(result);
}
