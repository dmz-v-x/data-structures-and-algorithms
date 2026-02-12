// Naive Approach:

// Time Complexity: O(length of array + length of map);
// Space Complexity: O(length of map);

function singleNumber(nums){
  let map = new Map();
  for(let i = 0; i<nums.length; i++){
    if(map.has(nums[i])){
      map.set(nums[i], map.get(nums[i]) + 1);
    }else {
      map.set(nums[i], 1);
    }
  }
  for (const [key, value] of map){
    if(value === 1){
      return key;
    }
  }
}


// Optimal Approach

// Time Complexity: O(N)
// Space Complexity: O(1)

function singleNumber(nums){
  let result = 0;
  for(let i = 0; i<nums.length; i++){
    result ^= nums[i];
  }
  return result;
}
