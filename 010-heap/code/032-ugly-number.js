// Ugly Number problem
// A number is ugly if its prime factors are only 2, 3, 5

// A number is ugly if:

// It can be written as: 2^a * 3^b * 5^c
// (where a, b, c ≥ 0)

// There are 2 common variants:

// Check if a number is ugly
// Find nth ugly number

// Brute force
// Time Complexity: O(n)
function isUgly(n){
  if(n <= 0) return false;

  for(let i = 2; i<= n; i++){
    while(n % i === 0){
      if(i !== 2 && i !== 3 && i !== 5) {
        return false;
      }
      n = n / i;
    }
  }
  return true;
}

// Better Approach: Keep on dividing by 2, 3, 5 and if we get one ugly number;
// Time Complexity: O(log n);
function isUgly(n){
  if (n <= 0) return false;

  let factors = [2, 3, 5];
  for(let factor of factors){
    while(n % factor === 0){
      n / factor;
    }
  }
  return n === 1;
}
