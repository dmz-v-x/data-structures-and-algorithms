// Brute Force Approach

let n1 = 20;
let n2 = 15;

function gcd(n1, n2) {
    
let gcd = 1;
    for (let i = 1; i <= Math.min(n1, n2); i++){
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}

console.log(gcd(n1, n2));

// Space Complexity: O(1)
// Time Complexity: O(min(n1, n2))

// Better Approach

let n1 = 20;
let n2 = 15;

function gcd(n1, n2) {
    
let gcd = 1;
    for (let i = Math.min(n1, n2); i > 0; i--){
        if (n1 % i == 0 && n2 % i == 0) {
            gcd = i;
            break
        }
    }
    return gcd;
}

console.log(gcd(n1, n2));

// Space Complexity: O(1)
// Time Complexity: O(min(n1, n2))

// Optimal Approach

// The Euclidean Algorithm is a method for finding the greatest common divisor (GCD) of two numbers. It operates on the principle that the GCD of two numbers remains the same even if the smaller number is subtracted from the larger number.

// To find the GCD of n1 and n2 where n1 > n2:
// 1. Repeatedly subtract the smaller number from the larger number  until one of them becomes 0.
// 2. Once one becomes 0, the other is the GCD of the original numbers.

// Modulo = many subtractions done at once

// If a were much larger:

// 100 % 15 = 10


// That’s the same as:

// 100 - 15 - 15 - 15 - 15 - 15 - 15 = 10

let n1 = 3;
let n2 = 9;

function gcd(n1, n2) {

    while (n1 != 0 && n2 != 0) {
        if (n1 > n2) {
            n1 = n1 % n2
        } else if(n2 > n1){
            n2 = n2 % n1
        } else {
            return n1;
        }
    }

    if (n1 === 0) {
        return n2;
    } else {
        return n1;
    }
}

console.log(gcd(n1, n2));

// Space Complexity: O(1)
// Time Complexity: O(log(min(n1, n2)))
