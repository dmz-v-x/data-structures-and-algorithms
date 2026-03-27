// Iterative approach

function sumOfNumber(n){
  let sum = 0;
  for(let i = 1; i<= n; i++){
    sum += i;
  }
  return sum;
}

// Recursive approach

// paramertised way

function sumOfNumber(i, sum){
  if(i < 1){
    print(sum)
    return
  }
  sumOfNumber(i-1, sum+i);
}

sumOfNumber(10, 0);

// functional way

function sumOfNumber(i){
  if(i === 1) return 1;
  return i + sumOfNumber(i-1);
}

sumOfNumber(10);







