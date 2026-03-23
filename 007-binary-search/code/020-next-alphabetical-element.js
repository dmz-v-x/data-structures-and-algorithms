// Smallest letter greater than target

// Given a sorted array of characters:

// Find the smallest character strictly greater than target

// Example
// letters = ['c','f','j']

// target = 'a' Answer = 'c'
// target = 'c' Answer = 'f'
// target = 'j' Answer = 'c' (wrap around)


// Brute Force
// Time Complexity: O(n)
function nextLetter(letters, target){
  for(let ch of letters){
    if(ch > target) return ch;
  }
  return letters[0];
}

// Optimal Solution
// Time Complexity: O(log n)
function nextLetter(letters, target){
  let left = 0;
  let right = letters.length - 1;
  let ans = letters[0];

  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(letters[mid] > target){
      right = mid - 1;
      ans = letters[mid];
    }else{
      left = mid + 1;
    }
  }
  return ans;
}

// Optimal Solution Slight Variation
// Time Complexity: O(log n)
function nextGreatestLetter(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return letters[left % letters.length];
}
