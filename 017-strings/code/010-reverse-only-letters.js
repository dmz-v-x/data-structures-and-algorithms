// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

function reverseOnlyLetters(s){
    let arr = s.split('');
    let i = 0;
    let j = s.length - 1;
    while(i < j){
      while(i < j && !/[a-z]/i.test(arr[i])){
        i++;
      }
      while(i < j && !/[a-z]/i.test(arr[j])){
        j--
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    let result = '';
    for(let i = 0; i<arr.length; i++){
      result += arr[i];
    }
    return result;
}
