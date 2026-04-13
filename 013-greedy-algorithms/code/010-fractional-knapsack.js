// What is Fractional Knapsack?

// You are given:

// items → each item has:
// value
// weight
// capacity → max weight you can carry
// Rule:

// You CAN take fractions of items (not just whole items)

// items = [
//   { value: 60, weight: 10 },
//   { value: 100, weight: 20 },
//   { value: 120, weight: 30 }
// ]

// capacity = 50

// Core Intuition

// We want to maximize value.

// So question:
// Which item should we pick first?

// Wrong Thinking:

// Pick highest value item

// Correct Thinking:

// Pick item with maximum value per weight

// value / weight

// Let’s calculate:

// | Item | Value | Weight | Value/Weight |
// | ---- | ----- | ------ | ------------ |
// | A    | 60    | 10     | 6            |
// | B    | 100   | 20     | 5            |
// | C    | 120   | 30     | 4            |

// So order becomes:
// A → B → C


// Greedy Strategy

// We will:

// Sort items by value/weight DESC
// Start picking items:
// If full item fits → take it
// Else → take fraction


function fractionalKnapscak(items, capacity){
  
}








