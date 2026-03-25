// Problem

// height = [0,1,0,2,1,0,1,3,2,1,2,1]

// Output: 6

// Core Intuition: min(max height on left, max height on right) - height[i]

// water[i] = min(leftMax - rightMax) - height[i]

// Naive Approach -> Find max on left, find max on right, apply formula
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function trapWater(height){
  let n = height.length;
  let water = 0;

  for(let i = 0; i<n; i++){
    let leftMax = 0;
    let rightMax = 0;
    for(let j = 0; j<= i; j++){
      leftMax = Math.max(leftMax, height[j]);
    }
    for(let j = i; j<n; j++){
      rightMax = Math.max(rightMax, height[j]);
    }
    water += Math.min(leftMax, rightMax) - height[i];
  }
  return water;
}

// Better Approach: Prefix + Suffix Array
// Time Complexity: O(n)
// Space Complexity: O(n)
function trapWater(height){
  let n = height.length;
  let leftMax = new Array(n);
  let rightMax = new Array(n);

  leftMax[0] = height[0];
  for(let i = 1; i<n; i++){
    leftMax[i] = Math.max(leftMax[i-1], height[i]);
  }

  rightMax[n-1] = height[n-1];
  for(let i = n-1; i>=0; i--){
    rightMax = Math.max(rightMax[i+1], height[i]);
  }

  let water = 0;
  for(let i = 0; i<n; i++){
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return water;
}

// Optimal Approach: Using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function trapWater(height){
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while(left <= right){
    if(height[left] <= height[right]){
      if(heigth[left] > leftMax){
        leftMax = height[left]
      }else{
        water += leftMax - height[i];
      }

      left++;
    } else {
    if(height[right] >= rightMax){
      rightMax = height[right]
    }else{
      water += rightMax - height[right];
    }
     right--;
  }
  
}
  return water;
}
