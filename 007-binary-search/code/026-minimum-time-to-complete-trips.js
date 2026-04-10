// You are given an array time[]

// time[i] = time taken by ith bus to complete 1 trip
// All buses run in parallel

// You need to find:

// Minimum time required to complete totalTrips

// time = [1, 2, 3]
// totalTrips = 5

// At time = 3:

// Bus 1 → 3 trips
// Bus 2 → 1 trip
// Bus 3 → 1 trip
// Total = 5

// Answer = 3


// Brute Force

function minimumTime(time, totalTrips){
  let totalTime = 0;
    let timeTaken = 1;
    
    while(true){
      let trips = 0;
      for(let i = 0; i<time.length; i++){
        trips += Math.floor(timeTaken/time[i]);
      }
      if(trips >= totalTrips) break;
      timeTaken++;
    }
    return timeTaken;
}


// Optimal Approach: Using Binary Search
// Time Complexity: O(n log(maxTime)), n = number of buses, log range = binary search
function minimumTime(time, totalTrips){
  let low = 1;
  let high = Math.min(...time) * totalTrips;

  while(low <= high){
    let mid = Math.floor((low + high) / 2);

    let trips = 0;
    for(let t of time){
      trips += Math.floor(mid/t);
    }

    if(trips >= totalTrips){
      high = mid - 1;
    }else {
      low = mid + 1;
    }
  }
  return low;
}


