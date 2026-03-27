// Print name n times using recursion

// Time Complexity: O(n)
// Space Complexity: O(n)

function printNames(n, name){
  if(n === 0) return;
  console.log(name);
  printNames(n - 1, name);
}

printNames(3, "Himanshu");
