// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

function reverseVowels(str){
  let arr = str.split('');
  let vowels = "aAeEiIoOuU";
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    if(!vowels.include(arr[i])){
      i++;
    }else if(!vowels.include(arr[j])){
      j--;
    }else{
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    
  }
  return arr.join('');
}
