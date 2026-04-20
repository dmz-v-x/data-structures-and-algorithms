// We are given:

// A number n → length of string
// We need to count how many good digit strings exist

// What is a “Good Number”?

// A number is good if:

// Even index (0-based):
// digits allowed: 0, 2, 4, 6, 8 → 5 choices

// Odd index:
// digits allowed: 2, 3, 5, 7 → 4 choices

// Example

// For n = 3

// Indexes:

// Index:   0   1   2
// Type:   even odd even

// Choices:

// Index 0 → 5 choices
// Index 1 → 4 choices
// Index 2 → 5 choices

// Total:

// 5 × 4 × 5 = 100
