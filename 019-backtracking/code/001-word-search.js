// Word Search

// You are given:

// 2D grid of characters (board)
// A word

// You need to check:
// Can we form this word by moving in the grid?

// Rules:

// Move only: up, down, left, right
// Cannot reuse the same cell

// You are standing on a cell
// You want to match the word letter by letter

// Example:

// Board:
// A B C E
// S F C S
// A D E E

// Word: "ABCCED"

// We try:

// Start from every cell
// If it matches first letter → explore neighbors

// This is:

// Backtracking

// Because:

// Try a path
// If it fails → go back (undo)

// Decision Tree:

// Can I match current character?
//     YES → explore 4 directions
//     NO  → stop

// SUCCESS CASE
// if index === word.length → return true



function exists(board, word){
  let rows = board.length;
  let cols = board[0].length;

  find(board, i, j, idx, word){
    if(idx === word.length) return true;

    if(i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] == "#") return false;

    if(board[i][j] !== word[idx]) return false;

    let temp = board[i][j];
    board[i][j] = "#";

    let found = find(board, i+1, j, idx+1, word) || // down
                find(board, i-1, j, idx+1, word) || // up
                find(board, i, j+1, idx+1, word) || // right
                find(board, i, j-1, idx+1, word);   // left

    board[i][j] = temp;
    return found;
    
  }

  for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
      if(board[i][j] === word[0] && find(board, i, j, 0, word)) return true;
    }
  }
  return false;
}
