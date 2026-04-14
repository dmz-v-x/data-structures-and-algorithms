// Pattern: Whenever we see: maximum number of non-overlapping intervals: sort by end time



// You are given:

// start[] → start times of meetings
// end[] → end times of meetings

// Only one meeting can happen at a time
// You must maximize the number of meetings

// Core Idea: Always pick the meeting that ends earliest

// Because:

// It leaves maximum room for future meetings


// Steps:

// Step 1: Combine start & end
  
// [
//   {start: 1, end: 2},
//   {start: 3, end: 4},
//   ...
// ]

// Step 2: Sort by end time

// meetings.sort((a, b) => a.end - b.end);

// Step 3: Select meetings

// Pick first meeting

// Then pick next meeting where:

// start > lastEnd

// Time Complexity: O(n logn)
// Space Complexity: O(n)

function maxMeetings(start, end, n){
  let meetings = [];

  for(let i = 0; i<n; i++){
    meetings.push({
      start: start[i],
      end: end[i],
      pos: i+1
    });
  }

  meetings.sort((a, b) => b.end - a.end);

  let result = [];
  let lastEnd = -1;

  for(let meet of meetings){
    if(meet.start > lastEnd){
      result.push(meet.pos);
      lastEnd = meet.end;
    }
  }
  return result;
}


