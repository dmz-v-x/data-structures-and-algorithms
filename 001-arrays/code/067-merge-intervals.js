// Merge Intervals

// What is given?

// Array of intervals:

// intervals = [[1,3],[2,6],[8,10],[15,18]]

// What do we need?

// Merge overlapping intervals

// Output = [[1,6],[8,10],[15,18]]


// Idea: 

// Two intervals overlap if:

// next.start <= current.end

// Example:

// [1,3] and [2,6]

// 2 <= 3 → overlap


// Brute Force

// Idea
// Sort intervals
// For each interval, compare with all next intervals
// Merge as long as overlap continues

// Time Complexity: O(n log n)

function merge(intervals){
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for(let i = 0; i<intervals.length; i++){
    let current = intervals[i];

    let j = i+1;
    while(j < intervals.length && current[1] >= intervals[j][0]){
      current[1] = Math.max(current[1], intervals[j][1]);
      j++;
    }
    result.push(current);
  }
  i = j - 1;
}

// Optimal Approach

// Time Complexity: O(n log n)

function merge(intervals){
  intervals.sort((a, b) => a - b);

  let result = [];

  for(let interval of intervals){
    if(result.length === 0 ||
      result[result.length - 1][1] < interval[0]
      ){
        result.push(interval);
      }else{
        result[result.length - 1][1] = Math.max(
          result[result.length-1][1], interval[1];
        );
    }
  }
  return result;
}



