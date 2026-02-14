function printNTimes(n){
  if(n === 0) return;
  printNTimes(n-1);
  console.log("Ashish")
}

printNTimes(3);

// Time Complexity: O(n)
// Space Complexity: Max stack depth: n + 1 -> Ignoring Constants: O(n)
