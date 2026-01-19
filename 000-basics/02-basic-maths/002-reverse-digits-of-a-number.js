let number = 12345

function reverseDigits(number) {
    let result = 0;
    while (number != 0) {
        let remainder = number % 10;
        number = Math.floor(number / 10);
        result = (result * 10) + remainder;
    }
    console.log(result);
}

reverseDigits(number);

// Time Complexity: O(d) -> d is number of digits in number
// Space Complexity: O(1)
