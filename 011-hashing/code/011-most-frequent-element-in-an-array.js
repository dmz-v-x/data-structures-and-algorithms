// Input : arr[] = [1, 3, 2, 1, 4, 1]
// Output : 1
// Explanation: 1 appears three times in array which is maximum frequency.

// Input : arr[] = [10, 20, 10, 20, 30, 20, 20]
// Output : 20 appears four times in array which is maximum frequency

// Input: arr[] = [1, 2, 2, 4, 1]
// Output: 2
// Explanation: 1 and 2 both appear two times, so return 2 as it's value is bigger.

// Naive Approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)

function mostFrequentElement(arr){
  let maxCount = 0;
  let number = 0;
  for(let i = 0; i<arr.length; i++){
    let count = 0;
    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    if((count > maxCount) || (count === maxCount && arr[i] > number)){
      number = arr[i];
      maxCount = count;
    }
  }
  return number;
}


// Better Approach

// Time Complexity: O(nlogn)
// Space Complexity: O(1);

function mostFrequentElement(arr){
  let maxCount = 0;
  let number = 0;
  arr.sort((a, b) => a - b);
  for(let i = 1; i<arr.length; i++){
    let count = 0;
    if(arr[i] === arr[i - 1]){
      count++;
    }

    if((count > maxCount) || (count === maxCount && arr[i] > number)){
      maxCount = count;
      number = arr[i];
    }
  }
  return number;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(k) k is number of unique elements in array

function mostFrequentElement(arr){
  let maxCount = 0;
  let number = 0
  let map = new Map();
  for(let i = 0; i<arr.length; i++){
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for(const [val, cnt] of map){
    if((maxCount < cnt) || (cnt === maxCount && val > number)){
      number = val;
      maxCount = cnt;
    }
  }
  return number;
}
