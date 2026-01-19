let number = 4554;

function checkPalindrome(number) {
    let copyNumber = number;
    let result = 0;
    while (copyNumber !== 0) {
        let remainder = copyNumber % 10;
        result = (result * 10) + remainder;
        copyNumber = Math.floor(copyNumber / 10);
    }


    if (result === number) {
        console.log("Palindrome Number");
    } else {
        console.log("Not Palindrome");
    }
}

checkPalindrome(number);

// Time Complexity: O(d) -> d is the number of digits in the number
// Space Complexity: O(1)
