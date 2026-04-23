// Input

// mat = [
//   [0,0,0],
//   [0,1,0],
//   [1,1,1]
// ]

// Goal

// For every cell, find:

// Distance to nearest cell having 0

// Output
// [
//   [0,0,0],
//   [0,1,0],
//   [1,2,1]
// ]

// First intuition
// Do I need shortest distance? → YES
// Multiple starting points? → YES (all 0’s)

// That means:

// MULTI-SOURCE BFS
