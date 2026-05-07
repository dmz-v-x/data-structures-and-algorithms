// Problem:

// Given an array, find the element having the minimum frequency.

// Example 1
// nums = [1,1,2,2,2,3]

// Frequency:

// 1 -> 2
// 2 -> 3
// 3 -> 1

// Least frequent element:

// 3

// Example 2
// nums = [4,4,5,5,6,7,7]

// Frequency:

// 4 -> 2
// 5 -> 2
// 6 -> 1
// 7 -> 2

// Answer:

// 6

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function leastFrequency(nums){
  let minFreq = Infinity;
  let answer = null;

  for(let i = 0; i<nums.length; i++){
    let count = 0;
    for(let j = 0; j<nums.length; j++){
      if(nums[i] === nums[j]){
        count++;
      }
    }
    if(minFreq > count){
      minFreq = count;
      answer = nums[i];
    }
  }
  return answer;
}


// Better Approach: Sorting

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function leastFrequency(nums){
  nums.sort((a, b) => a - b);

  let minFreq = Infinity;
  let answer = nums[0];

  let count = 1;
  for(let i = 1; i<nums.length; i++){
    if(nums[i] === nums[i-1]){
      count++;
    }else{
      // Previous number frequency finished
      if(count < minFreq){
        minFreq = count;
        answer = nums[i];
      }
      count = 1;
    }
  }

  if(count < minFreq){
    answer = nums[nums.length - 1];
  }

  return answer;
}

// Optimal Approach: HashMap

// Time Complexity: O(n)
// Space Complexity: O(n)

function leastFrequent(nums){
  let map = new Map();

  for(let num of nums){
    map.set(num, (map.get(num) || 0) + 1);
  }

  let minFreq = Infinity;
  let answer = null;

  for(let [num, freq] of map){
    if(freq < minFreq){
      minFreq = freq;
      answer = num;
    }
  }

  return answer;
}










