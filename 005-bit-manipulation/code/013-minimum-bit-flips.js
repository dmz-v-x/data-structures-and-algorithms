// Approach 1:

minimumBitFlips(n1, n2){
  let flips = 0;
  let ans = n1 ^ n2;
  while(ans > 0){
    ans = ans & (ans - 1);
    flips++;
  }
  return flips;
}

// Approach 2:

minimumBitFlips(n1, n2){
  let flips = 0;
  while(n1 > 0 || n2 > 0){
    if((n1 & 1) !== (n2 & 1)){
      flips++;
    }
    n1 = n1 >> 1;
    n2 = n2 >> 1;
  }
  return flips;
}



