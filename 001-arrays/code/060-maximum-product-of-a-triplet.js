// Example 1:
// nums = [1, 2, 3, 4]

// Output:

// 24

// Example 2 
// nums = [-10, -10, 5, 2]

// Output:

// 500   // (-10 * -10 * 5)

// Notice:

// Two negatives → positive
// This changes everything


// Brute Force: Try all triplets

function maxProduct(nums){
  let n = nums.length;
  let maxProd = -Infinity

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){

        let product = nums[i] * nums[j] * nums[k];
        maxProd = Math.max(maxProd, product);
      }
    }
  }
  return maxProd;
}


// Better Approach (Sorting)

// Time Complexity: O(n log n)

function maxProduct(nums){
  nums.sort((a, b) => a - b);

  let n = nums.length;

  let option1 = nums[n-1] * nums[n-2] * nums[n-3];
  let option2 = nums[0] * nums[1] * nums[n-1];

  return Math.max(option1, option2);
}


// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(1)

function maxProduct(nums){
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for(let num of nums){
    // update max values

    if(num > max1){
      max3 = max2;
      max2 = max1;
      max1 = num;
    }else if(num > max2){
      max3 = max2;
      max2 = num
    }else if(num > max3){
      max3 = num;
    }

    // update min values
    if(num < min1){
      min2 = min1;
      min1 = num;
    }else if(num < min2){
      min2 = num;
    }
  }

  return Math.max(
    max1 * max2 * max3, 
    min1 * min2 * max1
  )
}







