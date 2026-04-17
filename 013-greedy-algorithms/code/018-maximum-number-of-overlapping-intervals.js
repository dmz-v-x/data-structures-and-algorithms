// You are given intervals like:

// [1,3], [2,4], [5,6]

// Each interval = start → end

// Goal:

// Find maximum number of intervals overlapping at the same time

// Intuition: 

// Think of a timeline:

// Time →
// 1    2    3    4    5    6

// [1--------3]
//      [2--------4]
//                    [5----6]

// At time = 2 or 3:

// Two intervals overlap → answer = 2

// Time Complexity: O(N * range)
// Space Complexity: O(1)

function maxOverlapBrute(intervals){
  let min = Infinity;
  let max = -Infinity;

  for(let [s, e] of intervals){
    min = Math.min(min, s);
    max = Math.min(min, e);
  }

  let result = 0;

  for(let t = min; t<=max; t++){
    let count = 0;
    for(let [s, e] of intervals){
      if(s <= t && t <= e){
        count++;
      }
    }

    result = Math.max(result, count);
  }
  return result;
}



// Better Approach: Sorting and Sweep Line

// Key Observation

// Instead of checking all time points:

// Only care about events:

// +1 → interval starts
// -1 → interval ends

// Convert intervals into events

// Example:

// [1,3] → (1, +1), (3, -1)
// [2,4] → (2, +1), (4, -1)

// Sort events
// (1, +1)
// (2, +1)
// (3, -1)
// (4, -1)

// Traverse and track overlap
// current = 0

// (1, +1) → 1
// (2, +1) → 2  ← max
// (3, -1) → 1
// (4, -1) → 0

function maxOverlapBetter(intervals){
  let events = [];

  for(let [start, end] of intervals){
    events.push([start, 1]);
    events.push([end, -1]);
  }

  // sort by time, if tie -> end first

  events.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  })

  let current = 0;
  let maxOverlap = 0;

  for(let [time, type] of events){
    current += type
    maxOverlap = Math.max(maxOverlap, current);
  }

  return maxOverlap;
}





















