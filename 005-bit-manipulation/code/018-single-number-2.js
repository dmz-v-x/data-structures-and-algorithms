// Naive Approach

// Time Complexity: O(N + N/3+1)
// Space Complexity: O(N/3 + 1)

var singleNumber = function(nums){
  let map = new Map();
  for(let i = 0; i<nums.length; i++){
    if(map.has(nums[i])){
      map.set(nums[i], nums.get(i) + 1);
    }else {
      map.set(nums[i], 0);
    }
  }

  for(const [key, value] of map){
    if(value === 1){
      return key;
    }
  }
}


// Better Approach

// Time Complexity: O(nlogn + N/3)

var singleNumber = function(nums){
  nums.sort((a,b) => a - b);
  for(let i = 0; i<nums.length; i=i+3){
    if(nums[i] !== nums[i+1]){
      return nums[i];
    }
  }
}

// Better Approach

// Time Complexity: O(32n) -> O(n)
// Space Complexity: O(1)

var singleNumber = function(nums){
  let result = 0;
  for(let i = 0; i<32; i++){
    let sum = 0;
    for (let j = 0; j<nums.length; j++){
      if((nums[j] >> i) & 1){
        sum++;
      }
    }
    if(sum % 3 !== 0){
      result |= (1 << i);
    }
  }

  return result;
    
}

// Optimal Approach

var singleNumber = function(nums){
  let ones = 0;
  let twos = 0;

  for(let i = 0; i<nums.length; i++){
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }

  return ones;
  
}






