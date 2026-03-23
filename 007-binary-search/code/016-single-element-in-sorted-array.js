// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Example
// arr = [1,1,2,3,3,4,4,8,8]

// Output:

// 2

// Brute Force: Using HashMap
// Time Complexity: O(n)
// Space Complexity: O(n)
function singleNonDuplicate(arr){
  let map = new Map();

  for(let num of arr){
    map.set(num, (map.get(num || 0) + 1));
  }

  for(let [key, value] of map){
    if(val === 1) return key;
  }
}

// Better Brute
// Time complexity: O(n)
// Space Complexity: O(1)
function singleNonDuplicate(arr){
  for(let i = 0; i<arr.length; i += 2){
    if(i === arr.length - 1 || arr[i] !=== arr[i+1]){
      return arr[i];
    }
  }
}


// Optimal Solution
// Time complexity: O(log n)
// Space Complexity: O(1)
function singleNonDuplicate(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    let mid = Math.floor((left + right) / 2);

    // Make mid even
    if(mid % 2 === 1) mid --;

    if(arr[mid] === arr[mid + 1]){
      left = mid + 2;
    }else{
      right = mid;
    }
  }
  return arr[left];
}
