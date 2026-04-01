// Largest Rectangle in Histogram

// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// heights = [2,1,5,6,2,3]

// Output:

// 10

// Brute Force:

// Expand left while height >= current index
// Expand right while height >= current index
// compute area

// Time Complexity: O(n^2)

function largestRectangle(height){
  let n = height.length;
  let maxArea = 0;

  for(let i = 0; i<n; i++){
    let left = i;
    let right = i;

    while(left >= 0 && height[left] >= height[i]){
      left--;
    }

    while(right < n && height[right] >= height[i]){
      right++;
    }

    let width = right - left - 1;
    let area = height[i] * width;

    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}


// Better Approach: (Pre Compute Boundaries)

// Precompute:
// Next Smaller to Left (NSL)
// Next Smaller to Right (NSR)

// Time Complexity: O(n)
// Space Complexity: O(n)

function largestRectangle(heights){
  let n = heights.length;
  let nsl = new Array(n);
  let nsr = new Array(n);

  let stack = [];

  // NSL
  for(let i = 0; i<n; i++){
    while(stack.length && heights[stack[stack.length - 1]] >= heights[i]){
      stack.pop();
    }
    nsl[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }

  stack = [];

  // NSR
  for(let i = n - 1; i>=0; i--){
    while(stack.length && height[stack[stack.length - 1]] >= height[i]){
      stack.pop();
    }
    nsr[i] = stack.length ? stack[stack.length - 1] : n;
    stack.push(i);
  }

  let maxArea = 0;
  for(let i = 0; i<n; i++){
    let width = nsr[i] - nsl[i] - 1;
    maxArea = Math.max(maxArea, heights[i] * width);
  }
}


// Optimal Solution: Single Stack

function largestRectangleArea(heights) {
  let stack = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {

    let currHeight = (i === heights.length) ? 0 : heights[i];

    while (
      stack.length &&
      currHeight < heights[stack[stack.length - 1]]
    ) {
      let top = stack.pop();

      let height = heights[top];

      let right = i;
      let left = stack.length ? stack[stack.length - 1] : -1;

      let width = right - left - 1;

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}



















