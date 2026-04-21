// You are given a stack, and you must:

// Sort it so that smallest element is on TOP

// Initial stack (top → bottom):

// 3
// 1
// 4
// 2

// Sorted stack:

// 1
// 2
// 3
// 4



// Brute Force

// Important Constraint

// Stack supports only:

// push()
// pop()
// top()

// No random access like arrays

// APPROACH 1 — BRUTE FORCE (Use Array)

// Idea
// Pop all elements into array
// Sort array
// Push back into stack

// Dry Run

// Stack:

// 3,1,4,2

// Step 1: Move to array
// arr = [3,1,4,2]

// Step 2: Sort
// arr = [1,2,3,4]

// Step 3: Push back
// stack = [1,2,3,4]

// Complexity
// Time: O(n log n)
// Space: O(n)

function sortStack(stack){
  let arr = [];

  while(stack.length > 0){
    arr.push(stack.pop());
  }

  arr.sort((a, b) => a - b);

  for(let num of arr){
    stack.push(num);
  }

  return stack;
}

// Using Recursion:

// COMPLEXITY
// Time: O(n^2)
// Space: O(n) (recursion stack)

function sortStack(stack){

  function insertedSorted(stack, element){
    if(stack.length === 0 || stack[stack.length - 1] <= element){
      stack.push(element);
      return;
    }  

    let temp = stack.pop();
    insertedSorted(stack, element);
    stack.push(temp);
  }
  
  if(stack.length === 0) return;

  let top = stack.pop();

  sortStack(stack);

  insertSorted(stack, top);
}


