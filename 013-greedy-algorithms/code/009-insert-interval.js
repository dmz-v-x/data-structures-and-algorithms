// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// What is the problem saying?

// You are given:

// intervals = [[start, end], ...]  // already sorted & non-overlapping
// newInterval = [s, e]

// Goal:

// Insert newInterval into the list
// Merge if needed
// Return final intervals

// Example:

// intervals = [[1,3],[6,9]]
// newInterval = [2,5]

// Output:
// [[1,5],[6,9]]

// Intervals are already sorted

// For every interval

// 1. Completely BEFORE new interval

// interval.end < new.start

// No overlap → keep as it is

// 2. OVERLAPPING

// interval.start <= new.end

// Merge with new interval

// 3. Completely AFTER

// interval.start > new.end

// 👉 No overlap → just add

// Optimal Approach

// Step 1: Add all BEFORE intervals
// Step 2: Merge overlapping ones

// Update:

// new.start = min(new.start, interval.start)
// new.end   = max(new.end, interval.end)

// Step 3: Add merged interval
// Step 4: Add remaining AFTER intervals

// Time Complexity: O(n)
// Space Complexity: O(n)

function insert(intervals, newInterval) {
  let result = [];
  let i = 0;
  let n = intervals.length;

  // Step 1: BEFORE
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Step 2: OVERLAP
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Step 3: push merged interval
  result.push(newInterval);

  // Step 4: AFTER
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}



