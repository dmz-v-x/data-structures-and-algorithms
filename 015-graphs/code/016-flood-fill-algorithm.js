// Input:

// image = [
//   [1,1,1],
//   [1,1,0],
//   [1,0,1]
// ]

// sr = 1, sc = 1   // starting cell
// newColor = 2

// Goal

// Change the color of:

// Starting cell (sr, sc)
// AND all connected cells with SAME original color

// Output
// [
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
// ]

// Ask:

// “Am I spreading to neighbors?”

// YES

// “Only if same color?”

// YES

// This is:

// Graph traversal on grid (DFS or BFS)

// 1. What does “connected” mean?

// Only 4 directions:

// [
//   [1,0],   // down
//   [-1,0],  // up
//   [0,1],   // right
//   [0,-1]   // left
// ]

// 2. Important edge case

// Before doing anything:

// if (image[sr][sc] === newColor) return image;

// Otherwise → infinite loop risk

// 3. Identify original color
// let original = image[sr][sc];

// We only change cells with this color

// 4. Dry Run

// Initial:

// Start = (1,1)
// Original color = 1

// Step-by-step fill
// Visit (1,1)
// Change to 2

// Go to neighbors:
// (0,1) → 1 → fill
// (2,1) → 0 
// (1,0) → 1 → fill
// (1,2) → 0 
// Continue spreading

// Eventually:

// All connected 1's → become 2


function floodFill(image, sr, sc, newColor){
  let rows = image.length;
  let cols = image[0].length;

  let original = image[sr][sc];

  // Edge Case
  if(original === newColor) return image;

  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function dfs(r, c){
    if(
      r < 0 || r >= row ||
      c < 0 || c >= cols ||
      image[r][c] !== original
    ) return;

    // Fill
    image[r][c] = newColor;

    // Explore Neighbors
    for(let [dr, dc] of dirs){
      dfs(r + dr, c + dc);
    }
  }

  dfs(sr, sc);

  return image;
}




function floodFill(image, sr, sc, newColor) {
  let rows = image.length;
  let cols = image[0].length;

  let original = image[sr][sc];
  if (original === newColor) return image;

  let queue = [[sr, sc]];
  let dirs = [[1,0], [-1,0], [0,1], [0,-1]];

  while (queue.length > 0) {
    let [r, c] = queue.shift();

    if (image[r][c] === original) {
      image[r][c] = newColor;

      for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;

        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          image[nr][nc] === original
        ) {
          queue.push([nr, nc]);
        }
      }
    }
  }

  return image;
}


// Complexity:

// Time
// O(rows × cols)

// In worst case, visit every cell

// Space
// DFS → recursion stack
// BFS → queue
// O(rows × cols)












