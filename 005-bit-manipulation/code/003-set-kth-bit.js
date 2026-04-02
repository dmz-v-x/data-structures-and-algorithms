// Naive Solution

// Input: n = 10, k = 2
// Output: 14
// Explanation: Binary representation of the given number 10 is: 1 0 1 0, number of bits in the binary reprsentation is 4. Thus 2nd bit from right is 0. The number after changing this bit to 1 is: 14(1 1 1 0).

// Step 1: Goal: Set the k-th bit

// How to target the k-th bit

// Think in powers of two:

// 0-th bit → 2⁰ = 1
// 1-st bit → 2¹ = 2
// 2-nd bit → 2² = 4
// etc.

// So the k-th bit corresponds to 2^k.

// Step 2: How to check if the k-th bit is set

// A clever trick:

// Math.floor(n / pow) % 2 === 1
// n / pow → shifts the number k bits to the right
// % 2 → gives the last bit (LSB) of this shifted number
// If it equals 1 → k-th bit is already set

// Step 3: How to set the bit

// If the bit is not set, add pow to n:

// return n + pow;

// Why does this work?

// pow = 2^k
// If k-th bit is 0, adding 2^k flips it to 1
// Adding 2^k doesn’t affect other bits, because 2^k is the only power of two that has a 1 in that bit position and 0 elsewhere.

setKthBit(n, k) {
        // code here
    let pow = powerOfTwo(k);

    // Check if k-th bit is already set
    if (Math.floor(n / pow) % 2 === 1) {
        return n;  // already set
    } else {
        return n + pow;  // set the bit
    }
    
    function powerOfTwo(k) {
      let result = 1;
      for (let i = 0; i < k; i++) {
        result = result * 2;
      }
      return result;

    }  
}

// Optimal Approach

setKthBit(n, k){
  return n | (1 << k);
}
