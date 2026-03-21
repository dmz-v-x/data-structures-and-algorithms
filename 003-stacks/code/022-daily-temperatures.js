// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// temps = [73,74,75,71,69,72,76,73]

// Output: [1,1,4,2,1,1,0,0]

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function dailyTemperature(temps){
  let n = temps.length;
  let res = new Array(n).fill(0);

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      if(temp[j] > temp[i]){
        result[i] = j - i;
        break;
      }
    }
  }
  return res;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function dailyTemperature(temps){
  let n = temps.length;
  let res = new Array(n).fill(0);
  let stack = [];

  for(let i = n-1; i>=0; i--){
    while(stack.length && temps[stack[stack.length - 1]] <= temps[i]){
      stack.pop();
    }
    if(stack.length){
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
}


