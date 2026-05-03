// Find triplets such that sum of two equals the third

// such that:

// a + b = c

// Example:
// nums = [1, 2, 3, 4, 5]

// Valid triplets:
// [1,2,3]   → 1 + 2 = 3
// [1,3,4]   → 1 + 3 = 4
// [2,3,5]   → 2 + 3 = 5


// Brute Force: Try all triplets

// Time Complexity: O(n^3)

function tripletSum(nums){
  let n = nums.length;
  let result = [];
  let seen = new Set();

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let a = nums[i];
        let b = nums[j];
        let c = nums[k];

        if(a + b === c || a + c === b || b + c === a){
          let triplet = [a, b, c].sort((x, y) => x - y);
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


// Better Appraoch: Making it 2Sum

// Time Complexity: O(n^2)

function tripletSum(nums){
  let n = nums.length;
  let result = [];
  let seenTriplet = new Set();

  for(let i = 0; i<n; i++){
    let seen = new Set();

    for(let j = 0; j<n; j++){
      if(i === j) continue;

      let needed = nums[i] - nums[j];

      if(seen.has(needed)){
        let triplet = [needed, nums[j], nums[i]].sort((a, b) => a - b);
        let key = triplet.join(',');

        if(!seenTriplet.has(key)){
          seenTriplet.add(key);
          result.push(triplet);
        }
      }
      seen.add(nums[j]);
    }
  }
  return result;
}


// Optimal Approach: Sorting & Two Pointers

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function tripletSum(nums) {
    let n = nums.length;
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = n - 1; i >= 2; i--) {

        // skip duplicate c
        if (i < n - 1 && nums[i] === nums[i + 1]) continue;

        let left = 0;
        let right = i - 1;

        while (left < right) {

            let sum = nums[left] + nums[right];

            if (sum === nums[i]) {

                result.push([nums[left], nums[right], nums[i]]);

                // skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            }
            else if (sum < nums[i]) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
};

