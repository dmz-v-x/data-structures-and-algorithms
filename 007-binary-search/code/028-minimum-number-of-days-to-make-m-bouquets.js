// You are given:

// bloomDay[] → day each flower blooms
// m → number of bouquets needed
// k → flowers per bouquet

// You can only use adjacent flowers
// A flower can be used once only 

// Goal:
// Find minimum number of days needed to make m bouquets

// bloomDay = [1,10,3,10,2]
// m = 3
// k = 1
// Each bouquet needs 1 flower
// Need 3 bouquets

// On day 1 → flowers bloomed: [1] → 1 bouquet 
// On day 2 → [1,2] → 2 bouquets 
// On day 3 → [1,3,2] → 3 bouquets 

// Answer = 3

// If we fix a day D, we can check:

// "Can we make m bouquets using flowers bloomed by day D?"

// This is a YES / NO question

// If we can make bouquets on day D
// Then we can also make them on any day after D

// This means:

// NO NO NO NO YES YES YES YES

// This pattern = Binary Search on Answer

// Define search space

// Minimum day:

// low = min(bloomDay)

// Maximum day:

// high = max(bloomDay)

// Feasibility function (CORE LOGIC)

// We need a function:

// canMake(day)

// Logic:

// Traverse array
// Count consecutive bloomed flowers
// When count == k → bouquet formed

// Before everything:

// if (m * k > n)
//     return -1;

// Not enough flowers

function minDays(bloomDay, m, k){
  let n = bloomDay.length;

  // Edge Case
  if(m * k > n) return -1;

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  function canMake(day){
    let bouquets = 0;
    let count = 0;

    for(let i = 0; i < n; i++){
      if(bloomDay[i] <= day){
        count++;
        if(count === k){
          bouquets++;
          count = 0; // reset after forming bouquets
        }
      }else{
        count = 0;
      }
    }

    return bouquets >= m;
  }

  let ans = -1;

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    if(canMake(mid)){
      and = mid;
      high = mid - 1;
    }else{
      low = mid + 1;
    }
  }

  return ans;
}


// Complexity
// Binary search: O(log(maxDay))
// Each check: O(n)

// Total:

// O(n * log(maxDay))




























