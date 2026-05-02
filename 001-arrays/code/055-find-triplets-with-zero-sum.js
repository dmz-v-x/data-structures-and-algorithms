// Input:
// nums = [-1, 0, 1, 2, -1, -4]

// Output:
// [[-1, -1, 2], [-1, 0, 1]]

// Key requirements:
// Find triplets (i, j, k) such that:

// nums[i] + nums[j] + nums[k] = 0
// No duplicate triplets

// Brute Force Intuition
// Try all possible triplets
// Check if sum == 0
// Avoid duplicates

// Time Complexity: O(n^3)

function findTriplets(nums){
  let n = nums.length;
  let set = new Set(); // to avoid duplicates
  let result = [];

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        if(nums[i] + nums[j] + nums[k] === 0){
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);

          let key = temp.join(',');

          if(!set.has(key)){
            set.add(key);
            result.push(temp);
          }
        }
      }
    }
  }
  return result;
}

// Better Approach: Reduce Problem to 2 Sum

// Time complexity: O(n^2)

function findTriplet(nums){
  let n = nums.length;
  let result = [];
  let usedTriplets = new Set(); // to avoid duplicates

  for(let i = 0; i<n; i++){
    let seen = new Set();

    for(let j = i+1; j<n; j++){
      let third = -(nums[i] + nums[j]);

      if(seen.has(third)){
        let triplet = [nums[i], nums[j], third];

        triplet.sort((a, b) => a - b);

        let key = triplet.join(',');

        if(!usedTriplets.has(key)){
          usedTriplets.add(key);
          result.push(triplet);
        }
      }
      seen.add(nums[j]);
    }
  }
  return result;
}

// Optimal: Sorting + Two Pointers

