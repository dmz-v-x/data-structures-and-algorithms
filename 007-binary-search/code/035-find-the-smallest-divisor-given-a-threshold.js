// You are given:

// nums[] → array of numbers
// threshold → limit

// You must choose a divisor d

// Then compute:

// sum = ceil(nums[0]/d) + ceil(nums[1]/d) + ... + ceil(nums[n]/d)

// Find the smallest divisor d such that:

// sum ≤ threshold

// Example
// nums = [1,2,5,9]
// threshold = 6

// Try different divisors:

// d = 1 → sum = 1+2+5+9 = 17
// d = 2 → sum = 1+1+3+5 = 10
// d = 3 → sum = 1+1+2+3 = 7 
// d = 4 → sum = 1+1+2+3 = 7 
// d = 5 → sum = 1+1+1+2 = 5 

// Answer = 5

// Observation:

// As divisor increases:

// d ↑  →  sum ↓

// Bigger divisor → smaller values after division

// Pattern recognition

// We are looking for:

// smallest d such that sum ≤ threshold

// Check pattern:

// ❌ ❌ ❌ ❌ ✅ ✅ ✅

// This is Binary Search on Answer

// Search space

// Minimum divisor:

// low = 1

// Maximum divisor:

// high = max(nums)

// Feasibility function

// We create:

// canWork(d)

// For each number:

// ceil(num / d)

// Add all → check:

// sum ≤ threshold ?

// Important trick (NO Math.ceil)

// Instead of:

// Math.ceil(num / d)

// Use:

// Math.floor((num + d - 1) / d)

// This avoids floating point and is faster


function smallestDivisor(nums, threshold){
  let low = 1;
  let high = Math.max(...nums);

  function canWork(d){
    let sum = 0;
    for(let num of nums){
      sum += Math.floor((num + d - 1) / d);
    }

    return sum <= threshold;
  }

  let and = high;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    if(canWork(mid)){
      ans = mid;
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }

  return ans;
}


















