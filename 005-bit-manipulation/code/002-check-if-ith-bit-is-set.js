// Naive Solution
// Time Complexity: O(log2n)

checkKthBit(n, k) {
        // code here
    let str = "";
    let temp = n
    if(str.length === 1){
        str += n
    }
    while(temp > 0){
       str += temp%2;
       temp = Math.floor(temp/2);
    }
        
    return str.charAt(k) === '1'
}

// Optimal Solution
// Time Complexity: O(1)

checkKthBit(n, k){
  return n & (1 << k);
}
