// Naive Solution

function powerOfTwo(i) {
    let result = 1;
    for (let j = 0; j < i; j++) {
        result = result * 2;
    }
    return result;
}

function clearIthBit(n, i) {
    let pow = powerOfTwo(i);

    // Check if i-th bit is set
    if (Math.floor(n / pow) % 2 === 0) {
        return n;  // already 0
    } else {
        return n - pow;  // clear the bit
    }
}


// Optimal Solution

clearIthBit(n, i){
  return n & (~( 1 << i ))
}
