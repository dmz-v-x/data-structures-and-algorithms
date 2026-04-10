// Given:

// piles[] → bananas in each pile
// h → total hours

// Koko can choose a speed k (bananas/hour)

// Every hour:

// She picks ONE pile and eats k bananas

// If pile has less than k, she eats all and stops for that hour.

// Find minimum k such that she can finish all bananas within h hours

// piles = [3, 6, 7, 11], h = 8

// Try k = 4:

// 3 → 1 hour
// 6 → 2 hours
// 7 → 2 hours
// 11 → 3 hours
// Total = 8

// Brute Force

// Try all possible speeds:

// k = 1 → max(piles)

// For each k, calculate time required


// Optimal Solution:

// Search Space
// low = 1
// high = max(piles)

// Steps
// Pick mid = k
// Compute total hours needed
// If hours ≤ h → valid → try smaller k
// Else → increase k


// Optimal Approach: O(n * log(max(pile)))
function minEatingSpeed(piles, h){
  let low = 1;
  let high = Math.max(...piles);

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    let totalHours = 0;

    for(let pile of piles){
      totalHours += Math.ceil(pile/mid);
    }

    if(totalHours <= h){
      high = mid - 1;
    }else {
      low = mid + 1;
    }
  }
  return low;
}
