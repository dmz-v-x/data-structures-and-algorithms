// Naive solution

let a = 5;
let b = 6;

let temp = a;
a = b;
b = temp;

// Optimal Solution

let a = 5;
let b = 6;

a = a ^ b;
b = a ^ b;
a = a ^ b;
