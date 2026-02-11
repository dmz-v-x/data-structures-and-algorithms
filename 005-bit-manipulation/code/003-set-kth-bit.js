// Naive Solution

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
