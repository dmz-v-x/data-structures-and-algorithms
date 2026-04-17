// You are given two events (intervals):

// event1 = [s1, e1]
// event2 = [s2, e2]

// You need to check:

// Do they overlap (conflict)?

// Intuition

// Case 1: Conflict
// [1------5]
//      [3------7]

// There exists time (3,4,5) where both are active → conflict

// Case 2: No Conflict
// [1------2]    [3------5]

// No common time → no conflict
