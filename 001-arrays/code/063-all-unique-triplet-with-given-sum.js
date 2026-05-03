// Example:
// nums = [1, 1, 2, 2, 3]
// target = 6

// Output:
// [[1,2,3]]

// Brute Force:

function threeSum(nums, target){
  let n = nums.length;
  let result = [];
  let seen = new Set();

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        if(nums[i] + nums[j] + nums[k] === target){
          let triplet = [nums[i], nums[j], nums[j]].sort((a, b) => a - b);
          let key = triplet.join(',');

          if(!seen.has(key)){
            seen.add(key);
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
}


// Optimal Approach

function threeSum(nums, target){
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let result = [];

  for(let i = 0; i<n; i++){
    // skip duplicate i

    if(i > 0 && nums[i] === nums[i-1]) continue;

    let left = i+1;
    let right = n-1;

    while(left < right){
      let sum = nums[i] + nums[left] + nums[right];

      if(sum === target){
        result.push(nums[i], nums[left], nums[right]);

        // skip duplicates
        while(left < right && nums[left] === nums[left + 1]) left++;

        while(left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }else if(sum < target) left++;
      else right--;
    }
  }
  return result;
}







