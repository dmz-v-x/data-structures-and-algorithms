// Naive Approach
// Time Complexity: O(n) -> n is number of bits 32 bit integer 

var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        count += n & 1;   // check last bit
        n = n >>> 1;      // unsigned right shift
    }

    return count;
};


// Optimal Approach
// Time Complexity: O(k) -> k is number of 1 bits in the integer

var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
};
