// Given:

// Array nums

// Goal:

// Find maximum value of:

// (nums[i] - 1) * (nums[j] - 1)

// where i ≠ j

// Example:
// nums = [3, 4, 5, 2]

// Pick 5 and 4:
// (5 - 1) * (4 - 1) = 4 * 3 = 12

// Try all pairs

// Steps:
// For every i
// For every j ≠ i
// Compute product
// Track max

// Time Complexity:
// O(n²)

function maxProduct(nums){
  let max = -Infinity

  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      let product = (nums[i] - 1) * (nums[j] - 1);
      max = Math.max(max, product);
    }
  }
  return max;
}

// Better Approach: Find Max elements using sroting take last two elements

// Time Complexity: O(n log n)

function maxProduct(nums){
  nums.sort((a, b) => a - b);

  let n = nums.length;

  return(nums[n-1] - 1) * (nums[n - 2] - 1);
}


// Optimal Approaches

// Time Complexity: O(n)

function maxProduct(nums){
  let max1 = -Infinity
  let max2 = -Infinity

  for(let num of nums){
    if(num > max1){
      max2 = max1;
      max1 = num
    }else if(num > max2){
      max2 = num;
    }
  }
  return (max2 - 1) * (max1 - 1);
}
