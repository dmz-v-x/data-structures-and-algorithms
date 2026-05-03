// Example:
// nums = [-1, 2, 1, -4]

// target = 1

// Output:
// 2

// Why?

// Possible triplets:

// (-1, 2, 1) = 2 ← closest to 1
// (-1, 1, -4) = -4
// (2, 1, -4) = -1

// Closest sum = 2


// Brute Force: Try all triplets and track the closest sum

// Time Complexity: O(n^3)

function threeSumClosest(nums, target){
  let n = nums.length;
  let closestSum = Infinity

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let sum = nums[i] + nums[j] + nums[k];

        if(Math.abs(target - sum) < Math.abs(target - closestSum)){
          closestSum = sum;
        }
      }
    }
  }
  return closestSum;
}



// Optimal Approach

// Time Complexity: O(n^2)
// Space Complexity: O(1) excluding output

function threeSumClosest(nums, target){
  nums.sort((a, b) => a - b);
  let n = nums.length;

  let closest = nums[0] + nums[1] + nums[2];

  for(let i = 0; i<n-2; i++){
    let left = i + 1;
    let right = n - 1;

    while(left < right){
      let currentSum = nums[i] + nums[left] + nums[right];

      // update closest
      if(Math.abs(target - currentSum) < Math.abs(target - closestSum)){
        closestSum = currentSum;
      }

      if(currentSum < target){
        left++;
      }else if(currentSum > target){
        right--;
      }else{
        return currentSum;
      }
    }
  }
  return closestSum;
}






