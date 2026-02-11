// Naive Solution

// Time Complexity: O(log n)
// Space Complexity: O(1)

function isPowerOf2Naive(n) {
    if (n <= 0) return false;
    while (n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
}


// Optimal Solution

// Time Complexity: O(1)
// Space Complexity: O(1)

function isPowerOf2Optimal(n) {
    return n > 0 && (n & (n - 1)) === 0;
}


