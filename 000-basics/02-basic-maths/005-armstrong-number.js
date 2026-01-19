// Armstrong Number: An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.


let n = 153;

function armstrongNumber(n) {
    let numberOfDigits = countNumberOfDigits(n);
    let copyNumber = n;
    let result = 0;
    while (copyNumber > 0) {
        let number = copyNumber % 10;
        result += Math.pow(number, numberOfDigits);
        copyNumber = Math.floor(copyNumber / 10);
    }

    return result;
}

function countNumberOfDigits(n) {
    let result = 0;
    while (n > 0) {
        result += 1;
        n = Math.floor(n / 10);
    }
    return result;
}



console.log(armstrongNumber(n));

// Time Complexity: O(logN)
// Space Complexity: O(1);

// To find the length we could also do something like this:

// const length = n.toString().length;
