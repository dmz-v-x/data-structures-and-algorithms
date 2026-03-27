// Given an integer numRows, return the first numRows of Pascal's triangle.

// Row 0:          1
// Row 1:        1   1
// Row 2:      1   2   1
// Row 3:    1   3   3   1
// Row 4:  1   4   6   4   1

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// 3 variations can be asked to us

// 1. Given row and column tell me the element at that place
// 2. Print any nth row of the pascal triangle
// 3. Given N print the entire triangle

// Variation 1: Given row and column tell me the element at that place

// Brute Force

// Intuition
// Each element = sum of above two

// So:

// Build triangle till row r
// Return triangle[r][c]

// Time Complexity: 
// r = row number, we are building triangle from 0 to r
// total rows = r + 1 
// outer loop = r + 1 -> O(r)
// inner loop = depends on i
// | i | inner loop runs |
// | - | --------------- |
// | 0 | 0               |
// | 1 | 0               |
// | 2 | 1               |
// | 3 | 2               |
// | 4 | 3               |
// | … | …               |
// | r | r-1             |

// Total operations =

// 0 + 0 + 1 + 2 + 3 + ... + (r-1)

// 👉 This is a known sum:

// = r(r - 1) / 2

// 👉 Which simplifies to:

// O(r²)

// Therefore time complexity: O(r^2)
// Space Complexity: O(r^2)


function getElement(r, c){
  let triangle = [];
  for(let i = 0; i<=r; i++){
    let row = new Array(i+1).fill(1);
    for(let j = 1; j < i; j++){
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(row);
  }
  return triangle[r][c];
}

// Better Approach

// Question: How do we even THINK of nCr here?

// Look at Pascal Triangle:

// Row 0:        1
// Row 1:      1   1
// Row 2:    1   2   1
// Row 3:  1   3   3   1
// Row 4:1   4   6   4   1

// Try to see pattern manually

// Let’s track how values grow:

// First element:
// Always = 1
// Second element:
// Row 4 → 4

// Looks like:

// = 4
// Third element:
// Row 4 → 6

// Hmm… not obvious yet

// What could generate numbers like 4, 6, etc

// What if each value means:

// “How many ways to choose something?”

// Imagine:

// You have 4 items

// Example:

// [A, B, C, D]
// How many ways to:
// Choose 0 items:
// = 1 way
// Choose 1 item:
// A, B, C, D → 4 ways
// Choose 2 items:
// AB, AC, AD, BC, BD, CD → 6 ways
// Choose 3 items:
// ABC, ABD, ACD, BCD → 4 ways
// Choose 4 items:
// = 1 way

// 1   4   6   4   1

// EXACT MATCH

// Pascal Triangle = Combination values

// So:

// Element at (r, c) = number of ways to choose c items from r items

// That is:

// rCc

// Time Complexity: O(r!) factorial
// Space Complexity: O(1)
// Problem: Factorial grows VERY FAST → overflow, Repeated computation, not optimal

function factorial(n){
  let res = 1;
  for(let i = 2; i<=n; i++){
    res *= i;
  }
  return res;
}

function getElement(r, c){
  return factorial(r)/(factorial(c) * factorial(r - c));
}


// Optimal Solution
// Time Complexity: O(c)
// Space Complexity: O(1)
function getElement(r, c){
  let res = 1;
  for(let i = 0; i<c; i++){
    res = res * (r - i);
    res = res / (i + 1)
  }
  return res;
}


// ################################################################################################

// Variation 2: Print any nth row of the pascal triangle

// n = 4

// output: [1, 4, 6, 4, 1]

// Building the complete pascal triangle and then returning the nth row

// Brute Force

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)

function nthRow(n){
  let triangle - [];
  for(let i = 0; i<=n; i++){
    let row = new Array(i+1).fill(0);
    for(let j = 1; j<i; j++){
      row[j] = triangle[i-1][j-1] + triangle[i-1][j];
    }
    triangle.push(row);
  }
  return triangle[n];
}

// Better Appraoch
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function factorial(n){
  let res = 1;
  for(let i = 2; i<=n; i++){
    res *= i;
  }
  return res;
}

function nthRow(n){
  let row = [];
  for(let c = 0; c<=n; c++){
    let val = factorial(n) / (factorial(n-c) * factorial(c));
    row.push(val);
  }
  retrun row;
}

// Optimal Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function nthRow(n){
  let row = [];
  let res = 1;

  row.push(res);

  for(let c = 1; c<=n; c++){
    res = res * (n - c + 1) / c;
    row.push(res);
  }
  return row;
}


// ################################################################################################

// Variation 3: Given N print the entire triangle

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
function pascal(n){
  let triangle = [];
  for(let i = 0; i<n; i++){
    let row = new Array(i+1).fill(1);
    for(let j = 1; j<i; i++){
      row[j] = triangle[i-1][j-1] + triangle[i-1][j];
    }
    triangle.push(row);
  }
  return triangle;
}
