// You have 2 baskets of fruits.

// Each fruit has a cost/value.

// You can swap fruits between baskets.

// Goal:

// Make both baskets identical using minimum total cost.


// Understand The Meaning Of “Identical”

// Suppose:

// basket1 = [1,2,2]
// basket2 = [2,1,2]

// Both baskets already contain:

// 1 -> 1 time
// 2 -> 2 times

// So they are identical.

// Answer = 0.


// Example Where Swaps Are Needed
// basket1 = [1,2,3]
// basket2 = [2,1,4]

// Counts:

// basket1
// 1 -> 1
// 2 -> 1
// 3 -> 1
// basket2
// 1 -> 1
// 2 -> 1
// 4 -> 1

// Difference:

// 3 extra in basket1
// 4 extra in basket2

// So we must swap:

// 3 ↔ 4

// Very Important Observation

// A swap changes TWO baskets simultaneously.

// If basket1 has extra x,
// then basket2 must also be missing x.

// Similarly:

// If basket2 has extra y,
// then basket1 must be missing y.

// So extras always pair up.

// Impossible Case

// Suppose:

// basket1 = [1,1,1]
// basket2 = [1,2,2]

// Total counts:

// 1 -> 4
// 2 -> 2

// Actually possible.

// Each basket should finally contain:

// 1 -> 2
// 2 -> 1

// But consider:

// basket1 = [1,1]
// basket2 = [2,3]

// Total counts:

// 1 -> 2
// 2 -> 1
// 3 -> 1

// Now:

// 2 appears odd times
// 3 appears odd times

// Impossible.

// Why?

// Because final identical baskets need EVEN total frequency.

// Since total gets split equally between two baskets.

// HUGE RULE

// If ANY fruit has odd total frequency:

// answer = -1

// Main Core Idea

// We care only about:

// which fruits are EXTRA

// Example:

// basket1 = [1,1,2,3]
// basket2 = [1,2,2,4]

// Combined frequencies:

// 1 -> 2
// 2 -> 2
// 3 -> 1
// 4 -> 1

// Oops impossible.

// Odd counts.

// Take another valid example:

// basket1 = [1,1,2,2]
// basket2 = [1,2,3,3]

// Combined:

// 1 -> 3
// 2 -> 3
// 3 -> 2

// Still impossible.

// Valid example:

// basket1 = [1,1,2,2]
// basket2 = [1,1,3,3]

// Combined:

// 1 -> 4
// 2 -> 2
// 3 -> 2

// Possible.

// Final target per basket:

// 1 -> 2
// 2 -> 1
// 3 -> 1

// Find Extras
// basket1
// 1 -> already correct
// 2 -> extra 1

// So basket1 has extra:

// [2]
// basket2
// 3 -> extra 1

// So basket2 has extra:

// [3]

// We swap:

// 2 ↔ 3

// Done.

// Cost Of Swap

// This is the tricky part.

// Cost of swapping:

// min(a,b)

// If swapping fruit a and b.

// Example:

// Swap:

// 2 ↔ 10

// Cost = 2.

// SUPER IMPORTANT OPTIMIZATION

// Sometimes direct swap is expensive.

// We can do cheaper INDIRECT swaps using smallest fruit globally.

// This is the genius observation.

// Suppose:

// Swap:

// 100 ↔ 200

// Direct cost:

// 100

// But suppose smallest fruit in all baskets is:

// 1

// Then we can do:

// 100 ↔ 1
// 1 ↔ 200

// Total cost:

// 1 + 1 = 2

// MUCH cheaper.

// CORE FORMULA

// For every swap:

// cost = min(
//     directSwapCost,
//     indirectSwapCost
// )

// Which becomes:

// min(
//     min(a,b),
//     2 * globalMinimum
// )

// Why 2 * globalMinimum?

// Because indirect route uses smallest element twice.



// Let's understand it deeply:

// This is given to us:

// swap a ↔ b
// cost = min(a,b)

// Sometimes doing TWO swaps is cheaper than ONE swap.

// First Understand Direct Swap Cost

// Suppose:

// swap 2 ↔ 10

// Problem says:

// cost = min(2,10)

// So:

// cost = 2

// Why min(a,b)?

// Because smaller fruit determines swap cost.

// More Examples
// Example 1
// 5 ↔ 9

// Cost:

// min(5,9)=5
// Example 2
// 7 ↔ 20

// Cost:

// 7
// Example 3
// 100 ↔ 200

// Cost:

// 100

// VERY expensive.

// The Genius Observation

// Suppose globally smallest fruit is:

// 1

// Instead of directly swapping:

// 100 ↔ 200

// we can use 1 as a helper.

// STEP 3 — Visualize The Baskets

// Suppose:

// basket1
// [100]
// basket2
// [200]

// And somewhere globally we also have fruit:

// 1
// Direct Swap
// 100 ↔ 200

// Cost:

// 100
// Indirect Swap Route

// We do TWO swaps.

// Swap 1
// 100 ↔ 1

// Cost:

// 1

// Now baskets become:

// basket1
// [1]
// basket2
// [200]

// And the 100 moved elsewhere.

// Swap 2

// Now:

// 1 ↔ 200

// Cost:

// 1

// Total cost:

// 1 + 1 = 2
// HUGE COMPARISON

// Direct:

// 100

// Indirect:

// 2

// Massive improvement.

// Why Exactly 2 * globalMinimum?

// Because indirect route always does:

// TWO swaps

// using the smallest element.

// Suppose smallest element:

// g

// Then:

// First swap
// a ↔ g

// Cost:

// g
// Second swap
// g ↔ b

// Cost:

// g

// Total:

// g + g = 2g

// Thus:

// 2 * globalMinimum

// Example:

// Problem Setup

// Suppose:

// basket1 = [1,1,100,100]
// basket2 = [1,1,200,200]

// Goal:

// Make both baskets identical with minimum cost.

// Count Frequencies
// basket1
// 1 -> 2
// 100 -> 2

// basket2
// 1 -> 2
// 200 -> 2

// Combined Frequencies
// 1 -> 4
// 100 -> 2
// 200 -> 2

// All are even.

// So solution is possible.

// What Should Final Distribution Be?

// Each basket should finally contain HALF of total counts.

// Total
// 1 -> 4 total
// 100 -> 2 total
// 200 -> 2 total

// So each basket must contain:

// 1 -> 2
// 100 -> 1
// 200 -> 1

// Find Extras
// basket1 currently
// 1 -> 2 (correct)
// 100 -> 2 (one extra)
// 200 -> 0 (missing one)

// So basket1 has EXTRA:

// [100]
// basket2 currently
// 1 -> 2 (correct)
// 200 -> 2 (one extra)
// 100 -> 0 (missing one)

// So basket2 has EXTRA:

// [200]
// STEP 5 — Required Swap

// We need:

// 100 ↔ 200
// STEP 6 — Direct Swap Cost

// Rule:

// swap cost = min(a,b)

// So:

// min(100,200)=100

// Direct swap cost:

// 100

// Very expensive.

// Now The Genius Optimization

// Globally smallest fruit is:

// 1

// Instead of directly swapping:

// 100 ↔ 200

// we use 1 as helper.

// Visualize Initial State
// basket1
// [1,1,100,100]
// basket2
// [1,1,200,200]


// First Indirect Swap

// Swap:

// 100 ↔ 1

// Cost:

// 1

// Suppose:

// 100 from basket1
// 1 from basket2

// are swapped.

// New State
// basket1
// [1,1,1,100]
// basket2
// [1,100,200,200]

// Second Indirect Swap

// Now swap:

// 1 ↔ 200

// Cost:

// 1

// Take:

// 1 from basket1
// 200 from basket2
// Final State
// basket1
// [1,1,100,200]
// basket2
// [1,1,100,200]

// Now both baskets identical.

// TOTAL COST

// First swap:

// 1

// Second swap:

// 1

// Total:

// 2
// HUGE COMPARISON
// Direct Route
// 100 ↔ 200

// Cost:

// 100
// Indirect Route
// 100 ↔ 1
// 1 ↔ 200

// Cost:

// 2
// THIS Is The Entire Greedy Insight

// Instead of expensive direct exchange:

// big ↔ big

// we do:

// big ↔ tiny
// tiny ↔ big

// Because every swap involving tiny fruit is cheap.

// Why Formula Becomes 2 * globalMin

// Global minimum:

// 1

// Indirect route always needs TWO swaps:

// Swap 1
// 100 ↔ 1

// Cost = 1

// Swap 2
// 1 ↔ 200

// Cost = 1

// Total:

// 1 + 1 = 2

// which is:

// 2 * globalMinimum

// Important Point: Global minimum fruit means:

// The smallest fruit value present ANYWHERE across both baskets combined.

// It does NOT need to be present in both baskets.



