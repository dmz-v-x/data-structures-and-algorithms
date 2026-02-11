// Naive Appraoch

countSetBits(n){
  let count = 0;
  while (n > 0){
    if((n & 1) > 0){
      count++;
    }
    n = n >> 1;
  }
  return count;
}

// Optimal Appraoch

countSetBits(n){
  let count = 0;
  while(n > 0){
    n = n & (n - 1)
    count++;
  }
  return count;
}
