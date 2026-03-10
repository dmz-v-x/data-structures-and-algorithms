// Container With Most Water
// Problem

// You are given an array height.

// Each element represents the height of a vertical line drawn on the x-axis.

// Your task:

// Choose two lines that together with the x-axis form a container that can hold the maximum water.

// Return the maximum water area.

// Example
// height = [1,8,6,2,5,4,8,3,7]

// Maximum water = 49

// Naive Approach: Check every possible pair
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function maxArea(height){
  let maxArea = 0;
  for(let i = 0; i<height.length; i++){
    for(let j = i+1; j<height.length; j++){
      let width = j - i;
      let h = Math.min(height[i], height[j]);
      let area = width * h;

      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}
