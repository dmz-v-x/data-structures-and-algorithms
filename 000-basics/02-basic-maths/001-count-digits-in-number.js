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
