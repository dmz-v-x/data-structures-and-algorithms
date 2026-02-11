function removeLeftmostSetBit(n) {
    if (n === 0) return 0;
    
    let msb = 1;
    while (msb <= n) {
        msb *= 2;
    }
    msb /= 2; // now msb is the highest power of 2 <= n
    
    return n - msb;
}

// Examples
console.log(removeLeftmostSetBit(10)); // 2 → 1010 → remove leftmost 1 → 0010
console.log(removeLeftmostSetBit(12)); // 4 → 1100 → remove leftmost 1 → 0100
