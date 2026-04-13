// You are given an integer n.

// Generate the nth term of the Count and Say sequence.

// Sequence
// n = 1 → "1"
// n = 2 → "11"       (one 1)
// n = 3 → "21"       (two 1s)
// n = 4 → "1211"     (one 2, one 1)
// n = 5 → "111221"   (one 1, one 2, two 1s)

// Core Idea

// Each term is built by:

// "Reading" the previous term

// "1211"

// → one 1 → "11"
// → one 2 → "12"
// → two 1s → "21"

// Result = "111221"
