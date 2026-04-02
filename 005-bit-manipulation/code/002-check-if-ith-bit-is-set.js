// Naive Solution
// Time Complexity: O(log2n)

checkKthBit(n, k) {
  let temp = n;
  let str = "";
  while(temp > 0){
    str += temp % 2;
    temp = temp / 2;
  }
  str.split('').reverse().join();
  return str.charAt(i) === '1';
}

// Optimal Solution
// Time Complexity: O(1)

checkKthBit(n, k){
  return n & (1 << k);
}
