// Given n, create an n × n matrix filled with numbers from:

// 1 → n²

// in spiral order

// Example
// Input: n = 3

// Output:

// 1 2 3
// 8 9 4
// 7 6 5

// Same Idea as before

// Maintain boundaries: top, bottom, left, right
// Fill numbers from 1 to n^2

// Steps:

// Initialize:

// let num = 1;

// 1. Fill top row → left → right

// → top++

// 2. Fill right column → top → bottom

// → right--

// 3. Fill bottom row → right → left

// → bottom--

// 4. Fill left column → bottom → top

// → left++

// Repeat until filled

// Optimal Solution
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

function generateMatrix(n){
  let matrix = Array.from({length: n}, () => Array(n).fill(0));

  let top = 0;
  let right = n - 1;
  let left = 0;
  let bottom = n - 1;

  let num = 1;

  while(left <= right && top <= bottom){
    // 1. top row

    for(let i = left; i<=right; i++){
      matrix[top][i] = num++;
    }
    top++;

    // 2. right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // 3. bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // 4. left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix;
}








