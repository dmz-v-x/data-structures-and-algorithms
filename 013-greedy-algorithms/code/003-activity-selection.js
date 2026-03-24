// You are given:

// start = [1, 3, 0, 5, 8, 5]
// end   = [2, 4, 6, 7, 9, 9]

// Each activity:

// (start[i], end[i])

// Goal:

// Select maximum number of activities
// Such that no activities overlap

// Intuition

// What does “non-overlapping” mean?

// If we pick activity A and B:

// A.end <= B.start

// We want maximum number of activities

// Question:

// Which activity should you pick first?

// Options:

// Earliest start?
// Shortest duration?
// Earliest end?

// If you pick an activity that ends EARLY:

// You get more time for future activities

// Conclusion

// Always pick the activity that finishes earliest

// Brute Force

// -> Generate all subsets of activities
// -> check which ones are valid
// -> take maximum size

// activity selection:
// start = [1, 3, 0]
// finish = [2, 4, 6]

// activities: [(1, 2), (3, 4), (0, 6)]
// Goal: maximum non overlapping activities

// Step 1: For each actitivity we have two options: take it, skip it
// Total subsets: 2^n

// Step 2: If we take an activity it must not overlap with previously taken activity
// current.start >= lastSelected.end

// Step 3: Combine array
// activities = [[1, 2], [3, 4], [0, 6]];
// currently we have:
// start = [1, 3, 0]
// end = [2, 4, 6]

// we have start[i] and end[i] both belong to same activity, but currently they are separate os if we keep them separate it is hard to sort, compare and process.
// If you sort start, finish breaks
// If you sort finish, start breaks

// So we combine them

// let activities = []
// for(let i = 0; i<start.length; i++){
//   activities.push([start[i], end[i]]);
// }

// Output: 

// activities = [
//   [1,2],
//   [3,4],
//   [0,6]
// ]

// Step 4: Now we sort the activities by end time: This we do only in optimal approach in brute force we check every subset so no sorting needed only needed in greedy approach.

// activities.sort((a, b) => a[1] - b[1])

// Note: if we want to sort by start time that is by a we do
//   activities.sort((a, b) => a[0] - b[0]);

// Step 5: Now for comparing activities start and end 

// for(let i = 0; i<activities.length; i++){
//   let activity = activities[i];
// }

// then:

// let start = activity[0] // 1
// let end = activity[1] // 2

// And then we compare if(start >= lastEnd)
// Example:
// lastEnd = 2
// activity = [3, 4]

// start = 3

// Step 5: Recursion Thinking

// solve(index, lastEnd)
// Meaning:

// We are at activity index
// Last selected activity ended at lastEnd

// Step 6: Choices at Each Step

// At each index:

// Choice 1: SKIP
// solve(index + 1, lastEnd)

// Choice 2: TAKE (only if valid)
// if start >= lastEnd:
//     1 + solve(index + 1, currentEnd)

// Step 7: function solve(index, lastEnd)

// ->> This function means:

// “From this index onwards, what is the maximum number of activities I can pick,
// given that the last activity ended at lastEnd?”

// index → where we are in the array
// lastEnd → when previous activity ended

// ->> Why solve(0, -Infinity)?
// ### 1. Why index = 0?

// 👉 Because we want to start from:

// first activity
// ### 2. Why lastEnd = -Infinity?

// 👉 Think:

// At the beginning:

// 👉 Have we selected any activity?

// ❌ NO

// So what should be the last end time?

// 👉 Something that allows ANY activity to be picked

// Condition to pick:
// if (s >= lastEnd)

// lastEnd means:

// “The end time of the last activity we selected”

// At the beginning:

// We have NOT selected any activity
// So lastEnd should allow any activity to be chosen

// We pick an activity only if:

// if (start >= lastEnd)

// So for the first activity, we want:

// start >= lastEnd → ALWAYS TRUE

// Can we use lastEnd = -1?
// Case 1: If all start times ≥ 0

// Example:

// start = [1, 3, 0]

// Check:

// 1 >= -1 → true  
// 3 >= -1 → true  
// 0 >= -1 → true  

// 👉 Works fine ✅

// But what if negative times exist?

// Example:

// start = [-5, -2, 1]
// finish = [-3, 0, 2]

// If:

// lastEnd = -1

// Check:

// -5 >= -1 → FALSE ❌  
// -2 >= -1 → FALSE ❌  

// 👉 These activities get wrongly rejected


// -->  — Why -Infinity fixes this

// If:

// lastEnd = -Infinity

// Check:

// -5 >= -Infinity → TRUE  
// -2 >= -Infinity → TRUE  
// 1 >= -Infinity → TRUE  

// 👉 Now EVERYTHING works correctly

// -->  — Core Reason
// -1 is a specific value
// Assumes something about input
// Not universally safe
// -Infinity is a guarantee
// Works for ALL inputs
// No assumptions

// Brute Force

// Time Complexity: O(2^n)
// Space Complexity: O(n)

function activitySelection(start, finish) {
  let activities = []

  for (let i = 0; i < start.length; i++) {
    activities.push([start[i], finish[i]])
  }

  activities.sort((a, b) => a[1] - b[1])

  function solve(index, lastEnd) {
    if (index === activities.length) return 0

    let [s, e] = activities[index]

    // skip
    let skip = solve(index + 1, lastEnd)

    // take
    let take = 0
    if (s > lastEnd) {
      take = 1 + solve(index + 1, e)
    }

    return Math.max(take, skip)
  }

  return solve(0, -Infinity)
}

// Optimal Solution
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function activitySelection(start, finish){
  let activities = [];

  for(let i = 0; i<start.length; i++){
    activities.push([start[i], finish[i]]);
  }

  activities.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let lastIndex = activities[0][1];

  for(let i = 1; i<activities.length; i++){
    if(activities[i][0] > lastIndex){
      count++;
      lastIndex = activities[i][1];
    } 
  }
  return count;
}


