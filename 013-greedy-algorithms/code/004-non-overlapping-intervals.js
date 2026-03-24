// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// Brute Force
// Time Complexity: O(n log n + 2^n) = O(2^n)
// Space Complexity: O(n)
function eraseOverlapIntervals(intervals) {
  // sort by start (or end, either works for brute force)
  intervals.sort((a, b) => a[0] - b[0])

  function solve(index, lastEnd) {
    if (index === intervals.length) return 0

    let [s, e] = intervals[index]

    // option 1: skip
    let skip = solve(index + 1, lastEnd)

    // option 2: take (only if no overlap)
    let take = 0
    if (s >= lastEnd) {
      take = 1 + solve(index + 1, e)
    }

    return Math.max(take, skip)
  }

  let maxNonOverlap = solve(0, -Infinity)
  return intervals.length - maxNonOverlap
}


// Optimal Approach
// Time Complexity: O(n log n)
// Space Complexity: O(log n) due to recursion in timsort / quicksort (in js .sort())
function eraseOverlapIntervals(intervals){
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let count = 1;
    let lastEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEnd) {
            count++;
            lastEnd = intervals[i][1];
        }
    }

    return intervals.length - count;
}
