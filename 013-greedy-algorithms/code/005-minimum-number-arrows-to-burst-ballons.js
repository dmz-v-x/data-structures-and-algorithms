// Minimum Number of Arrows to Burst Ballons

// You are given balloons like this:

// [ [start1, end1], [start2, end2], ... ]

// Each balloon is a horizontal interval on a number line.

// Example:

// [1,6], [2,8], [7,12]

// Means:

// Balloon 1 spans from 1 → 6
// Balloon 2 spans from 2 → 8
// Balloon 3 spans from 7 → 12

// What does an arrow do?

// You shoot an arrow at some point x.

// That arrow will burst ALL balloons where:

// start <= x <= end
// Goal:

// Minimum number of arrows needed to burst all balloons.

// Build intuition

// Let’s take:

// [1,6], [2,8], [7,12]

// Visualize:

// 1------6
//   2--------8
//         7--------12
// Key observation:
// First two balloons overlap → can be burst with 1 arrow
// Third one does NOT overlap with them → needs another arrow

// Answer = 2

// CORE IDEA:

// If balloons overlap → 1 arrow can handle them
// If they don’t → need a new arrow

// Greedy Idea: Always shoot arrow at the end of the ballon

// Why end?

// Because:

// End is the most restrictive point
// If you shoot at end → it maximizes overlap coverage

// Steps:
// Sort balloons by end
// Shoot first arrow at end of first balloon
// For next balloon:
// If it starts AFTER current arrow → need new arrow
// Else → already covered

// Optimal Solution

function findMinArrowShots(points){
  if(points.length === 0){
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);

  let arrow = 1;
  let arrowPos = points[0][1];

  for(let i = 1; i<points.length; i++){
    if(points[i][0] > arrowPos){
      arrow++;
      arrowPos = points[i][1];
    }
  }
  return arrow;
}
