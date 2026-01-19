// Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// Brute Force Approach

let n = 10;

function primeNumber(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    }
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}

console.log(primeNumber(n));

Time complexity: O(N)
Space Complexity: O(1)


// Optimal Solution:


let n = 12;

function primeNumber(n) {
    if (n < 2) {
        return false;
    }

    if (n === 2) {
        return true;
    }

    for (let i = 2; i * i <= n; i++){
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(n));

// Time Complexity: O(sqrt(n))
// Space Complexity: O(1)
