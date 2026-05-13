Compare Version Numbers

Problem usually looks like this:

Given two version strings:

version1 = "1.2"
version2 = "1.10"

compare them.

Return:

1 → if version1 > version2
-1 → if version1 < version2
0 → if equal

A version is divided by dots (.)

Example:

"1.2.10"

means:

[1, 2, 10]

Each part is called a revision number.

VERY IMPORTANT UNDERSTANDING

We compare version numbers part by part.

Example:

1.2.10
1.3.1

Compare:

Part	Version1	Version2
1	1	1
2	2	3

At second part:

2 < 3

So:

version1 < version2

We STOP immediately.


Another Example
1.10
1.2

Many beginners think:

"10" < "2"

because string comparison compares character-by-character.

BUT THIS IS WRONG.

We compare numerically:

10 > 2

So:

1.10 > 1.2

Important Edge Case

Trailing zeros do not matter.

Example:

1.0
1

These are equal.

Because:

[1,0]
[1]

Missing parts are treated as 0.

So actually:

[1,0]
[1,0]

Equal.

Core Idea

We need to:

Split by .
Compare each number
If one version is shorter:
treat missing values as 0

Visual Dry Run

Example:

version1 = "1.0.1"
version2 = "1"

After split:

v1 = [1,0,1]
v2 = [1]

Now compare.

Iteration 1

Compare:

1 vs 1

Equal.

Move ahead.

Iteration 2

Compare:

0 vs missing

Missing means:

0

So:

0 vs 0

Equal.

Iteration 3

Compare:

1 vs missing

means:

1 vs 0

Now:

1 > 0

Return:

1

Meaning:

version1 > version2

Most Important Observation

At every index:

num1 = existing value OR 0
num2 = existing value OR 0

Then compare.

That is the ENTIRE problem.

// Brute Force

function compare(version1, version2){
  let v1 = version1.split(".");
  let v2 = version2.split(".");

  let n = Math.max(v1, v2);

  for(let i = 0; i<n; i++){
    let num1 = i < v1.length ? Number(v1[i]) : 0;
    let num2 = i < v2.length ? Number(v2[i]) : 0;

    if(num1 > num2){
      return 1;
    }

    if(nums1 < num2){
      return -1;
    }
  }
  return 0;
}

// Dry Run of Code

// Input:

// version1 = "1.01"
// version2 = "1.001"

// Split:

// v1 = ["1", "01"]
// v2 = ["1", "001"]

// Loop starts.

// i = 0
// num1 = 1
// num2 = 1

// Equal.

// i = 1
// Number("01") = 1
// Number("001") = 1

// Equal.

// Loop ends.

// Return:

// 0

// Correct.

// STEP 11 — Why Leading Zeros Automatically Work

// Example:

// "001"

// When converted:

// Number("001")

// becomes:

// 1

// So no special handling needed.


// Optimized Version (Using Two Pointers)

function compareVersion(version1, version2){
  let i = 0;
  let j = 0;

  while(i < version1.length || j < version2.length){
    let num1 = 0;
    while(i < version1.length && version1[i] !== "."){
      num1 = num1 * 10 + (version1[i] - '0');
      i++;
    }

    let num2 = 0;
    while(j < version2.length && version2[j] !== 0){
      nums2 = num2 * 10 + (version2[i] - '0');
      j++;
    }

    if(num1 > num2){
      return 1;
    }

    if(num1 < num2){
      return -1;
    }

    i++;
    j++;
  }
  return 0;
}





// Time Complexity
// Split Approach
// Time: O(n + m)
// Space: O(n + m)

// because arrays are created.

// Two Pointer Approach
// Time: O(n + m)
// Space: O(1)

// Better space complexity.




