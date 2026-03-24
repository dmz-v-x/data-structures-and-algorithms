// You are given:

// Coins: [1, 2, 5, 10]
// Target amount: 27

// Goal:

// Use minimum number of coins to make the amount

// 27 = 10 + 10 + 5 + 2
// Answer = 4 coins

// “How can I reach 27 using fewer coins?”

// Options:

// Use small coins → many coins ❌
// Use large coins → fewer coins ✅

// “To minimize number of coins, use the largest possible coin first”

function minCoins(coins, amount){
  if(amount === 0) return 0
  if(amount < 0) return Infinity

  let min = Infinity
  for(let coin of coins){
    let res = minCoins(coins, amount - coin)
    if(res !== Infinity){
      min = Math.min(min, res + 1);
    }
  }
  return min;
}


// Optimal Approach

function minCoins(coins, amount){
  coins.sort((a, b) => b - a);
  let count = 0;

  for(let coin of coins){
    if(amount >= coin){
      let num = Math.floor(amount / coin);
      count += num;
      amount -= num * coin;
    }
  }
  return amount === 0 ? count : -1;
}
