// Find if there exists a Pythagorean triplet in an array
// i.e., find a, b, c such that:

// a^2+b^2=c^2

// Example:
// nums = [3, 1, 4, 6, 5]

// Explanation:
// 3² + 4² = 9 + 16 = 25 = 5²

// → Triplet exists

// Brute Force: Check all combinations

// a² + b² = c²
// a² + c² = b²
// b² + c² = a²

// Time Complexity: O(n^3)

function pythagoreanTriplet(nums){
  let n = nums.length;

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let a = nums[i];
        let b = nums[j];
        let c = nums[k];

        if(a*a + b*b === c*c ||
           a*a + c*c === b*b ||
           b*b + c*c === a*a){
            return true;
           }
      }
    }
  }
  return false;
}


// Better Approach

// Instead of checking all 3 permutations, we:

// Square all numbers
// Fix c²
// Check if two numbers sum to it

// Time Compleity: O(n^2)

function pythagoreanTriplet(nums){
  let n = nums.length;

  let squares = nums.map(x => x*x);

  for(let i = 0; i<n; i++){
    let seen = new Set();

    for(let j = 0; j<n; j++){
      if(i === j) continue;

      let needed = squares[i] - squares[j]

      if(seen.has(needed)){
        return true;
      }

      seen.add(squares[j]);
    }
  }
  return false;
}


// Optimal Approach

// Time Complexit: O(n^2)
// Space Complexity: O(1)

function pythagorenTriplet(nums){
  let n = nums.length;

  // Step 1: squares all numbers
  let squares = nums.map(x => x*x);

  // Step 2: sort
  squares.sort((a, b) => a - b);

  // Step 3: Fix c^2 from end
  for(let i = n - 1; i>=2; i--){
    let left = 0;
    let right = i - 1;

    while(left < right){
      let sum = sqaures[left] + squares[right];

      if(sum === squares[i]){
        return true;
      }else if(sum < squares[i]){
        left++;
      }else{
        right--;
      }
    }
  }
  return false;
}












