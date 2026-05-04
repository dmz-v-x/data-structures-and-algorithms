// What is given?
  
// A grid of size n x n

// A list of rectangles:
// rectangles[i] = [x1, y1, x2, y2]

// Each rectangle occupies a region in the grid

// What do we need?

// Check if we can make 2 cuts (either vertical OR horizontal) such that:

// Grid is divided into 3 sections
// Each section has at least one rectangle
// No rectangle is split

// SIMPLIFY THE PROBLEM

// Forget grid for a moment.

// Each rectangle occupies a range:

// Horizontal cut → care about y-axis
// Vertical cut → care about x-axis

// KEY REDUCTION

// We convert rectangles into 1D intervals

// Case 1: Vertical cuts

// Take:

// [x1, x2]

// (ignore y completely)

// Case 2: Horizontal cuts

// Take:

// [y1, y2]

// (ignore x completely)

// Now problem becomes:

// Can we split intervals into 3 non-overlapping groups?




// Approach:

// Step 1: Convert to intervals

// For vertical:

// intervals = rectangles.map(r => [r[0], r[2]])

// Step 2: Sort intervals
// intervals.sort((a, b) => a[0] - b[0]);

// Step 3: Merge intervals

// We merge overlapping intervals to form blocks

// Visualization
// Intervals:
// [1,3], [2,4], [6,8], [9,10]

// After merging:
// [1,4], [6,8], [9,10]

// We got 3 groups

// Step 4: Count groups

// If:

// groups >= 3 → possible

// Time Complexity: O(n logn)

function canCut(rectangles){

  function countGroups(intervals){
    let groups = 0;
    let prevEnd = -1;

    for(let [start, end] of intervals){
      if(start >= prevEnd){
        groups++;
        preEnd = end;
      }else{
        prevEnd = Math.max(prevEnd, end);
      }
    }
    return groups;
  }


  // For vertical cuts
  let xIntervals = rectangles.map(x => [x[0], x[2]]);
  if(countGroups(xIntervlas) >= 3) return true;

  // For Horizontal cuts
  let yIntervals = rectangles.map(x => [x[1], x[3]]);
  if(countGroups(yIntervals) >= 3) return true;

  
}










