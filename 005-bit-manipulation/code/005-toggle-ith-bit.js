// Naive Solution

function powerOfTwo(i) {
    let result = 1;
    for (let j = 0; j < i; j++) {
        result = result * 2;
    }
    return result;
}

function toggleIthBit(n, i) {
    let pow = powerOfTwo(i);
    let bit = Math.floor(n / pow) % 2;

    if (bit === 1) {
        return n - pow;  // turn OFF
    } else {
        return n + pow;  // turn ON
    }
}

// Optimal Solution

toggleIthBit(n, i){
  return n ^ (1 << i);
}
