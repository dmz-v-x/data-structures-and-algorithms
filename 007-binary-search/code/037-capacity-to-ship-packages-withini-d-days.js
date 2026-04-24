// You are given:

// weights[] → weight of packages (in order)
// days → number of days allowed

// You must choose a ship capacity

// Rules:

// Packages must be shipped in order (no rearranging)
// Each day you load packages until capacity is full

// Goal:
// Find minimum capacity to ship all packages within days

// Example
// weights = [1,2,3,4,5,6,7,8,9,10]
// days = 5

// Try capacity = 15:

// Day 1: 1+2+3+4+5 = 15
// Day 2: 6+7 = 13
// Day 3: 8
// Day 4: 9
// Day 5: 10

// Works in 5 days

// Key observation

// If capacity is small → more days needed 
// If capacity is large → fewer days needed 

// So:

// capacity ↑  → days ↓

// Pattern

// We want:

// minimum capacity such that days ≤ given days

// Pattern:

// ❌ ❌ ❌ ❌ ✅ ✅ ✅

// Binary Search applies

// Search space

// Minimum capacity:

// low = max(weights)

// Why?
// Because one package must fit

// Maximum capacity:

// high = sum(weights)

// Worst case: ship all in one day



// Feasibility Function

// canShip(capacity)

// Simulate loading:

// Keep adding weights
// If exceeds capacity → new day

// Dry run idea

// capacity = 10

// Day 1: 1+2+3+4 = 10
// Day 2: 5
// Day 3: 6
// Day 4: 7
// Day 5: 8
// Day 6: 9
// Day 7: 10

// 7 days (too many)

function shipWithinDays(weights, days){
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);

  function canShip(capacity){
    let daysUsed = 1;
    letCurrentLoad = 0;

    for(let w of weights){
      if(currentLoad + w <= capacity){
        currentLoad += w;
      }else{
        daysused++;
        currentLoad = w;
      }
    }
    return daysUsed <= days;
  }

  let ans = high;
  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    if(canShip(mid)){
      ans = mid;
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }
  return ans;
}



// Complexity
// Binary search → O(log(sum))
// Each check → O(n)

// Total:

// O(n * log(sum))












