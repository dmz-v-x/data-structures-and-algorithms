// Given a matrix, return elements in spiral order

// Example:

// 1  2  3
// 4  5  6
// 7  8  9

// Output:

// [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Idea:
// Maintain 4 boundaries
// top
// bottom
// left 
// right

// 1. Traverse top row → (left → right)

// → then top++

// 2. Traverse right column → (top → bottom)

// → then right--

// 3. Traverse bottom row → (right → left)

// → then bottom--

// 4. Traverse left column → (bottom → top)

// → then left++

// Before step 3 & 4:

// Check boundaries still valid

// if (top <= bottom)
// if (left <= right)

// Optimal Solution
// Time Complexity: O(m * n)
// Space Complexity: O(1)

function spiralOrder(matrix){
  let result = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix.length - 1;

  while(top <= bottom && left <= right){
    // 1. top row
    for(let i = left; i<=right; i++){
      result.push(matrix[top][i]);
    }
    top++;

    // 2. right column
    for(let i = top; i<= bottom; i++){
      result.push(matrix[i][right]);
    }
    right--;

    // 3. bottom row
    if(top <= bottom){
      for(let i = right; i>=left; i--){
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 4. left column
    if(left <= right){
      for(let i = bottom; i>=top; i--){
        result.push(matrix[i][left]);
      }
      left++;
    }
      
  }
  return result;
}
