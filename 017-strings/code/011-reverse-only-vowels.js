// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"
// Time Complexity: O(n)
// Space Complexity:O(n)
function reverseVowels(str){
  let arr = str.split('');
  let vowels = "aAeEiIoOuU";
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    if(!vowels.includes(arr[left])){
      left++;
    }else if(!vowels.includes(arr[right])){
      right--;
    }else{
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    
  }
  return arr.join('');
}
