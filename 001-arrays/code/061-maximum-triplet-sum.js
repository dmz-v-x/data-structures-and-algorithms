// Example:
// nums = [1, 2, 3, 4, 5]

// Output:
// 12   // (3 + 4 + 5)


// Brute Force: Try all triplets

// Time Complexity: O(n^3)

function maxTripletsSum(nums){
  let n = nums.length;
  let maxSum = -Infinity;

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let sum = nums[i] + nums[j] + nums[k];
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
  return maxSum;
}

// Better Approach: Sort and find top 3 largest numbers

// Time Complexity: O(n log n);

function maxTripletsSum(nums){
  nums.sort((a, b) => b - a);
  return nums[0] + nums[1] + nums[2];
}


// Optimal Approach: find top 3 element in one pass

// Time Complexity: O(n)
// Space Complexity: O(1)

function maxTriplets(nums){
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for(let num of nums){
    if(num > first){
      third = second;
      second = first;
      first = num;
    }else if(num > second){
      third = second;
      second = num;
    }else if(num > third){
      third = num;
    }
  }

  return first + second + third;
}







