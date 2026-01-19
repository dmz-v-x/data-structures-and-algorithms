let number = 5;

function countDigits(number) {
    let count = 0;
    while (number > 0) {
        
        number = Math.floor(number / 10);
        count++;
    } 
    console.log(count);
}

countDigits(number);

// Time Complexity: O(log10N)
// Space Complexity: O(1)

// ---------------------------------

// Optimized Solution

let number = 0;

function countDigits(number) {
    if (number == 0) {
        return 1;
    }
    return Math.floor(Math.log10(number) + 1);
}

console.log(countDigits(number));

// Time Complexity: O(1)
// Space Complexity: O(1)
