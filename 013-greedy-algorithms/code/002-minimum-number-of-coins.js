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





// Here Greedy works but this might not be always possible

// Greedy means:

// “Always pick the largest possible coin first.”

// Example:

// Coins = [1, 2, 5]
// Amount = 11

// Greedy does:

// Take 5
// Remaining = 6
// Take 5
// Remaining = 1
// Take 1
// Remaining = 0

// Answer = 3

// Correct answer.

// So here Greedy works.



// Why Greedy Feels Correct

// Because our brain thinks:

// “Bigger coins reduce the amount faster.”

// And many real-life currency systems are designed so this works.

// Example:
// Indian rupees:
// 1, 2, 5, 10, 20, 50, 100...

// US currency:
// 1, 5, 10, 25

// These are specially designed.

// But NOT ALL coin systems behave nicely.


// The MOST IMPORTANT THING
// Greedy works only for SOME coin systems

// There is NO universal rule that greedy always works.

// This is the core understanding.

// Example Where Greedy FAILS

// Coins:
// [1, 3, 4]

// Target:
// 6

// Greedy Approach

// Largest coin ≤ 6 is 4

// Take 4

// Remaining = 2

// Largest coin ≤ 2 is 1

// Take 1

// Remaining = 1

// Take another 1

// Total coins = 3

// Solution:
// 4 + 1 + 1

// But Optimal Answer Is

// 3 + 3 = 2 coins

// So Greedy FAILED.

// IMPORTANT LESSON

// Greedy made a locally best choice:

// “Take the biggest coin.”

// But that local choice blocked the globally optimal answer.

// This is the central greedy failure concept.

// So How Do We Identify?

// This is the real topic.

// We identify using:

// Structure of coin system
// Counterexamples
// Mathematical properties
// Whether local optimum guarantees global optimum

// The Golden Greedy Question

// Whenever you see a greedy solution, ask:

// “Can taking the biggest coin now ever hurt future choices?”

// If YES →
// Greedy is dangerous.

// If NO →
// Greedy may work.

// Coin System 1

// Coins:
// [1, 2, 4, 8, 16]

// Target:
// 23

// Greedy:

// 16
// 4
// 2
// 1

// Total = 4 coins

// Can there ever be a better solution?

// No.

// Why?

// Because each bigger coin is extremely powerful.

// Smaller coins cannot combine efficiently enough to beat it.

// This system behaves like binary.

// Greedy is safe.

// Coin System 2

// Coins:
// [1, 3, 4]

// Target = 6

// Greedy:

// 4
// 1
// 1

// But:

// 3
// 3

// Why did greedy fail?

// Because:

// Two medium coins beat one large coin.

// This is the danger pattern.

// HUGE GREEDY FAILURE SIGNAL

// If:

// multiple smaller coins can outperform a larger coin

// then greedy may fail.

// Coin Systems Where Greedy Usually Works

// These are often called:

// Canonical Coin Systems

// Examples:

// [1, 2, 5, 10, 20, 50]
// [1, 5, 10, 25]

// These systems are designed so:

// Larger coins are always truly better.



// When DP Is Needed

// DP is needed when:

// We cannot trust local decisions
// Future consequences matter
// Different combinations must be explored

// Coin change minimum coins is fundamentally:

// “Try all possibilities and take minimum”

// That is classic DP thinking.

// Core DP Idea

// For amount A:

// Try every coin:

// dp[A] =
// 1 + min(
//     dp[A - coin1],
//     dp[A - coin2],
//     ...
// )

// DP explores ALL valid possibilities.

// Greedy explores only ONE path.

// This is the core difference.

// Visual Difference
// Greedy

// Single path:

// 11
// ↓ take 5
// 6
// ↓ take 5
// 1
// ↓ take 1
// 0

// Only one route explored.

// DP

// Explores all routes:

// 11
// ├── use 1
// ├── use 2
// └── use 5

// Then recursively explores all future possibilities.

// DP guarantees optimal answer.

// The Practical Interview Rule

// In interviews:

// If the problem says:

// “minimum number of coins”

// NEVER assume greedy works.

// Default thinking should be:

// “This is probably DP.”

// Unless:

// They explicitly mention canonical currency
// Or constraints/pattern strongly indicate greedy
