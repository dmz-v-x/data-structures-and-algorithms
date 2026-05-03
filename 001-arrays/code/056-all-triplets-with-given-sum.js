// Example:
// nums = [1, 2, -2, 0, -1, 1]

// target = 0

// Expected output:
// [[-2, 1, 1], [-1, 0, 1]]

// Key requirements:
// Triplets (i, j, k), all indices different

// Sum = target
// No duplicates


// Brute Force: Using 3 nested loops

// Time Complexity: O(n^3)

function tripletWithGivenSum(nums, target){
  let n = nums.length;
  let result = [];
  let seen = new Set(); // to avoid duplicates

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let sum = nums[i] + nums[j] + nums[k];

        if(sum === target){
          let triplet = [nums[i], nums[j], nums[k]];
          triplet.sort((a, b) => a - b);

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


// Better Approach: Reducing this problem to 2 Sum

// Time Complexity: O(n^2)

function tripletWithGivenSum(nums, target){
  let n = nums.length;
  let result = [];
  let usedTriplet = new Set();

  for(let i = 0; i<n; i++){
    let seen = new Set();

    for(let j = i+1; j<n; j++){
      let needed = -(num[i] + nums[j]);

      if(seen.has(needed)){
        let triplet = [nums[i], nums[j], needed];
        triplet.sort((a, b) => a - b);

        let key = triplet.join(',');

        if(!usedTriplet.has(key))){
          usedTriplet.add(key);
          result.push(triplet);
        }
      }

      seen.add(nums[j]);
    }
  }
  return result;
}

// Optimal Approach: Using Sorting and Two Pointers

// Time Complexity: O(n^2)
// Space Complexity: O(1) excluding output

function tripletWithGivenSum(nums, target){
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let result = [];

  for(let i = 0; i<n; i++){
    // skip duplicates

    if(i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i+1;
    let right = n - 1;

    while(left < right){
      let sum = nums[i] + nums[left] + nums[right];

      if(sum === target){
        result.push([nums[i], nums[left], nums[right]]);

        // skip duplicates

        while(left < right && nums[left] === nums[left+1]) left++;

        while(left < right && nums[right] === nums[right-1]) right--;

        left++;
        right--;
      }else if(sum < target){
        left++;
      }else{
        right--;
      }
    }
  }
  return result;
}
