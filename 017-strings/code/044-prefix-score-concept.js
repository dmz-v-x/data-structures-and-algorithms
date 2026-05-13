// What is a Prefix?

// A prefix means:

// Starting part of something.

// Example:

// word = "apple"

// Prefixes are:

// "a"
// "ap"
// "app"
// "appl"
// "apple"

// Notice:

// Prefix ALWAYS starts from index 0
// It keeps growing toward the right

// Prefix in Arrays

// Suppose:

// arr = [2, 5, 1, 4]

// Prefixes are:

// [2]
// [2,5]
// [2,5,1]
// [2,5,1,4]

What is Prefix Score?

A prefix score usually means:

Some value calculated for every prefix.

The score can be:

sum
maximum
frequency
count
custom formula

depending on the problem.

Most Common Meaning — Running Prefix Sum

Example:

arr = [2,5,1,4]

Prefix scores:

index 0:
2
score = 2

index 1:
2 + 5
score = 7

index 2:
2 + 5 + 1
score = 8

index 3:
2 + 5 + 1 + 4
score = 12

Final prefix score array:

[2,7,8,12]

Why Prefix Score is Powerful

Without prefix sums:

To calculate sum till index i

you repeatedly add again and again.

That becomes expensive.

Prefix scores store answers beforehand.

So later:

sum from l to r

can be found quickly.

Visual Understanding

Array:

[2,5,1,4]

Build running total:

2
2+5 = 7
7+1 = 8
8+4 = 12

So:

prefix[i]
=
sum from 0 to i
Step 6 — Formula
prefix[0] = arr[0]

prefix[i] = prefix[i-1] + arr[i]
Step 7 — Dry Run Step by Step
arr = [3,1,6,2]
Start

Create:

prefix = []
i = 0
prefix[0] = arr[0]
          = 3

prefix:

[3]
i = 1
prefix[1] = prefix[0] + arr[1]
          = 3 + 1
          = 4

prefix:

[3,4]
i = 2
prefix[2] = prefix[1] + arr[2]
          = 4 + 6
          = 10

prefix:

[3,4,10]
i = 3
prefix[3] = prefix[2] + arr[3]
          = 10 + 2
          = 12

Final:

[3,4,10,12]


Code

function prefixScore(arr){
  let prefix = new Array(arr.length);

  prefix[0] = arr[0];

  for(let i = 1; i < arr.length; i++){
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

// Range Sum Trick (MOST IMPORTANT)

// This is why prefix scores are famous.

// Suppose:

// arr = [2,5,1,4,3]

// Prefix:

// [2,7,8,12,15]

// Now find:

// sum from index 1 to 3

// Meaning:

// 5 + 1 + 4

// Answer:

// 10

// Using prefix:

// prefix[3] - prefix[0]
// =
// 12 - 2
// =
// 10


// General Formula

// To find:

// sum from l to r

// Use:

// prefix[r] - prefix[l-1]








  


