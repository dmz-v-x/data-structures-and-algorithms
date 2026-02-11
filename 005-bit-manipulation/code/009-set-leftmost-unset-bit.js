function setLeftmostUnsetBit(n) {
    if (n === 0) return 1; // edge case
    
    let numBits = Math.floor(Math.log2(n)) + 1;
    return n + Math.pow(2, numBits);
}

// Examples
console.log(setLeftmostUnsetBit(10)); // 10 → 1010 → set leftmost 0 → 1110 → 14
console.log(setLeftmostUnsetBit(12)); // 12 → 1100 → set leftmost 0 → 11100 → 28
