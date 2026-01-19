// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

// Brute Force Approach

// Input: N = 36
// Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]  

let number = 36;

function printAllDivisor(number) {
    let arr = [];
    for (let i = 1; i <= number; i++){
        if (number % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(printAllDivisor(number));

// Time complexity: O(N)
// Space Complexity: O(sqrt(N))

// Optimal Approach

let number = 36;

function printAllDivisor(number) {
    let arr = [];
    for (let i = 1; i * i <= number; i++){
        if (number % i === 0) {
            arr.push(i);
        

            if ((number / i !== i)) {
                arr.push((number / i));
            }
        }    
    }
    return arr;
}

console.log(printAllDivisor(number));

// Time Complexity: O(sqrt(N))
// Space Complexity: O(sqrt(N))
