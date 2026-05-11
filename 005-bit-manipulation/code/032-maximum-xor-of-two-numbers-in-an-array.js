// Maximum XOR of Two Numbers in an Array

// Given an array:

// nums

// Need to find:

// maximum value of nums[i] ^ nums[j]

// where:

// i != j

// Important:

// XOR becomes large when bits are different

// Example
// nums = [3,10,5,25,2,8]

// Try:

// 5 ^ 25

// Binary:

// 5  = 00101
// 25 = 11001
// -------------
//      11100

// Result:

// 28

// This is maximum answer.

  

// Brute Force: Check Every Pair

// Time Complexity: O(n^2)

function findMaximumXOR(nums){
  let maxXOR = 0;
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      maxXOR = Math.max(nums[i] ^ nums[j], maxXOR);
    }
  }
  return maxXOR:
}
