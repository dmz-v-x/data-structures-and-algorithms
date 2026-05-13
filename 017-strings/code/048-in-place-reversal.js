// In Place Revesal Concept

// What Does “In-Place” Mean?

// “In-place” means:

// modify the original data structure directly

// WITHOUT creating another array/string.

// Example

// Suppose:

// arr = [1,2,3,4,5]

// After reversal:

// [5,4,3,2,1]

// Wrong Beginner Approach

// Many beginners do:

// let newArr = [];

// and create another array.

// That is NOT in-place.

// Because extra memory is used.

// Real In-Place Idea

// We swap elements from both ends.

// Visual Understanding

// Initial:

// [1,2,3,4,5]
//  L       R

// Swap:

// 1 <-> 5

// Now:

// [5,2,3,4,1]
//    L   R

// Swap:

// 2 <-> 4

// Now:

// [5,4,3,2,1]

// Done.

// MOST IMPORTANT OBSERVATION

// After swapping:

// left pointer moves forward
// right pointer moves backward

// Because outer positions are already fixed.

// Two Pointer Pattern

// This is classic:

// | Pointer | Movement |
// | ------- | -------- |
// | left    | left++   |
// | right   | right--  |

// until:

// left >= right

Code: Basic In-Place Reversal Code

function reverse(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){

    // swap

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}



// String Reverse Code

// String Reversal

// Important point:

// Strings in JavaScript are immutable.

// Cannot directly swap characters.

// So we convert to array.


function reverseString(s){
  let arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join("");
}























