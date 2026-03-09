// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Note: The characters in the array beyond the returned length do not matter and should be ignored.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: 6
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: 1
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: 4
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

// Naive Solution: 
// Time Complexity: O(n)
// Space Complexity: O(n)

function compress(chars){
  let result = "";
  let i = 0;
  
  while(i < chars.length){
    let char = chars[i];
    let count = 0;

    while(i < chars.length && char[i] === char){
      i++;
      count++;
    }

    result += char;

    if(count > 1){
      result += count;
    }
  }

  for(let i = 0; i<result.length; i++){
    chars[i] = result[i];
  }
  reutn result.length;
}

// Optimal Appraoch
// Time Complexity: O(n)
// Space Complexity: O(1)
function compress(chars){
  let read = 0;
  let write = 0;

  while(read < chars.length){
    let count = 0;
    let char = chars[read];
    

    while(read < chars.length && char === chars[read]){
      read++;
      count++;
    }

    chars[write] = char;
    write++;

    if(count > 1){
      let digitCount = count.toString();
      for(let digit of digitCount){
        chars[write] = digit;
        write++;
      }
      
    }
  }
  return write;
}
