// You are given:

// arrival[] → arrival times of trains
// departure[] → departure times of trains

// You need to find:
// Minimum number of platforms required to accomodate all train.

// Core Idea:

// At any time:

// Platforms needed = number of trains present at the station simultaneously

// So the problem becomes:
// Find maximum overlap of intervals

// For every train:

// Count how many trains overlap with it

// arr[] = [900, 940, 950, 1100, 1500, 1800] 
// dep[] = [910, 1200, 1120, 1130, 1900, 2000]
// Output: 3

// Brute Force: Count how many trains overlap with every train
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function findPlatforms(arr, dep){
  let n = arr.length;
  let maxPlatforms = 0;

  for(let i = 0; i<n; i++){
    let platforms = 1;
    for(let j = 0; j<n; j++){
      if(i !== j){
        if(arr[i] >= arr[j] && arr[i] <= dep[j]){
          platforms++;
        }
      }
    }

    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  return maxPlatforms;
}



// Optimal Approach
// Time Complexity: O(n logn)
// Space Complexity: O(1)
function findPlatforms(arr, dep){
  let n = arr.length;

  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let platforms = 0;
  let maxPlatforms = 0;

  while(i < n && j < n){
    if(arr[i] <= dep[j]){
      platforms++;
      i++;
    }else{
      platforms--;
      j++;
    }

    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  return maxPlatforms;
}
