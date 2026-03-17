// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]


// Naive Approach
// Time Complexity: O(n^2)
function findErrorNums(nums){
  let duplicate = -1
  let missing = -1;

  let n = nums.length;
  for(let i = 0; i<n; i++){
    let count = 0;

    for(let j = 0; j<n; j++){
      if(nums[j] === i){
        count++;
      }
    }

    if(count === 2) duplicate = i;
    if(count === 0) duplicate = i;
  }
  return [duplicate, missing];
}


// Better Approach: 
// Time complexity: O(n)
// Space Complexity: O(n)
function findErrorNums(nums){
  let n = nums.length;
  let freq = new Array(n+1).fill(0);

  for(let num of nums){
    freq[num]++;
  }

  let duplicate = -1;
  let missing = -1;

  for(let i = 0; i<=n; i++){
    if(freq[i] === 2) duplicate = i;
    if(freq[i] === 0) missing = i;
  }
  return [duplicate, missing];
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function findErrors(nums){
  let n = nums.length;
  let xor = 0;

  for(let num of nums){
    xor ^= num;
  }

  for(let i = 1; i<=n; i++){
    xor ^= i;
  }

  let diffBit = xor ^ -xor
  let a = 0;
  let b = 0;

  for(let num of nums){
    if(num & diffBit){
      a ^= num;
    }else{
      b ^= num;
    }
  }

  for(let i = 1; i<=n; i++){
    if(i & diffbit){
      a ^= i;
    }else {
      b ^= i;
    }
  }

  for(let num of nums){
    if(num === a) return [a, b];
  }

  return [b, a];

  
}
