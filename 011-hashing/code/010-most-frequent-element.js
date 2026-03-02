// Example input:

// [1,2,2,3,3,3,4]

// Output:

// 3

// Naive Approach: O(n^2)
function frequentElement(arr){
    let number = null;
    let max = 0;
  for(let i = 0; i<arr.length; i++){
    let count = 0;
    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    if(count > max){
      max = count;
      number = arr[i];
    }
  }
  return number;
}

// Optimal Approach

// Time Complexity: O(n)
// Space Complexity: O(n)

function frequentElement(arr){
  let freq = {};
  let max = 0;
  let number = null;
  for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;

    if(freq[num] > max){
      max = freq[num];
      number = num;
    }
  }
  return number;
  
}





