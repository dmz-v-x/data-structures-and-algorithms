// Naive Solution: 

// Time Complexity: O(n^2)
// Space Complexity: O(1);
function majorityElement(arr){
  for(let i = 0; i<arr.length; i++){
    let count = 0;
    for(let j = 0; j<arr.length; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
    if(count > (arr.length/2)){
      return arr[i];
    }
      
  }
}

// Better Approach:

// Time Complexity: O(n)
// Space Complexity: O(n)

function majorityElement(arr){
  let map = new Map();
  for(let i = 0; i<arr.length; i++){
    if(map.has(arr[i])){
      map.set(arr[i], map.get(arr[i]) + 1);
    }else {
      map.set(arr[i], 1);
    }
  }

  for(const [key, value] of map){
    if(value > (arr.length/2)){
      return key;
    }   
  }
}

// Optimal Approach: Moore's Voting Algorithm


function majorityElement(arr){
  let count = 0;
  let element = 0;
  for(let i = 0; i<arr.length; i++){
    if(count === 0){
     element = arr[i]; 
     count++;
    }else if(element === arr[i]){
      count++;
    }else {
      count--;
    }    
  }

  let count1 = 0;
  for(let i = 0; i<arr.length; i++){
    if(element === arr[i]){
      count1++;
    }
  }

  if(count1 > (arr.length / 2)){
    return element;
  }
}





