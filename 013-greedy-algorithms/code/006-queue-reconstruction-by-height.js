// Queue Reconstruction by height

// What is the problem actually saying?

// You are given people like this:

// [height, k]

// Example:

// [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]

// Meaning of [h, k]

// h = height
// k = number of people in front who have height ≥ h

// Example:
// [7,0]

// Means:

// Height = 7
// 0 people in front taller or equal
// [5,2]

// Means:

// Height = 5
// Exactly 2 people in front with height ≥ 5

// Goal: Arrange people in a queue such that every person’s condition is satisfied

// Let’s think differently:

// Who is hardest to place?

// Short people → affected by many people
// Tall people → almost unaffected
// Key insight:

// Tall people don’t care about shorter people

// Because condition is:

// height ≥ h

// Sort by:

// Height DESC
// k ASC

// Why?
// Taller first → unaffected by shorter
// Smaller k first → needs fewer people ahead

// After Sorting we get: [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]

// Core Idea

// Insert each person at index = k

// Why does this work?

// Because:

// When inserting taller people first,
// The queue already contains only taller people

// So:

// insert at index k = exactly k taller people in front

// Dry Run

// Sorted:

// [[7,0],[7,1],[6,1],[5,0],[5,2],[4,4]]
// Step 1:

// Insert [7,0]

// [ [7,0] ]
// Step 2:

// Insert [7,1] at index 1

// [ [7,0], [7,1] ]
// Step 3:

// Insert [6,1] at index 1

// [ [7,0], [6,1], [7,1] ]
// Step 4:

// Insert [5,0] at index 0

// [ [5,0], [7,0], [6,1], [7,1] ]
// Step 5:

// Insert [5,2] at index 2

// [ [5,0], [7,0], [5,2], [6,1], [7,1] ]
// Step 6:

// Insert [4,4] at index 4

// [ [5,0], [7,0], [5,2], [6,1], [4,4], [7,1] ]


// Optimal Approach
// Time Complexity: O(n^2)
function reconstructQueue(people){
  // 1. Sort
  people.sort((a, b) =>{
      if(b[0] !== a[0]) return b[0] - a[0];
      return a[1] - b[1];
  });

  let result = [];

  // 2. insert at index k
  for(let person of people){
    result.splice(person[1], 0, person);
  }
  return result;
}
