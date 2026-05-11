// Problem:

// For every subarray:

// find the minimum element.

// Return:

// sum of all subarray minimums

// Example:

// nums = [3,1,2,4]

// Subarrays:

// [3]       -> 3
// [3,1]     -> 1
// [3,1,2]   -> 1
// [3,1,2,4] -> 1
// [1]       -> 1
// [1,2]     -> 1
// [1,2,4]   -> 1
// [2]       -> 2
// [2,4]     -> 2
// [4]       -> 4

// Total:

// 3+1+1+1+1+1+1+2+2+4 = 17

// Brute Force

// IMPORTANT Observation

// Suppose:

// nums = [3,1,2]

// Start from index 0.

// First subarray:

// [3]

// Minimum:

// 3

// Now extend subarray:

// [3,1]

// Do we need to scan entire subarray again?

// NO.

// We already know:

// previous minimum = 3

// We are only adding ONE new element:

// 1

// So new minimum:

// min(3,1) = 1

// Again extend:

// [3,1,2]

// Previous minimum:

// 1

// New element:

// 2

// Update:

// min(1,2) = 1

// Still 1.

// HUGE IDEA

// Instead of recomputing minimum:

// carry minimum forward

// while expanding subarray.

// This removes third loop.

// Time Complexity: O(n^2)
// Space Complexity: O(n)

function sumSubarrayMin(nums){
  let n = nums.length;
  let total = 0;
  for(let start = 0; start < n; start++){
    let min = Infinity;
    for(let end = start; end < n; end++){
      min = Math.min(min, nums[end]);
      total += min;
    }
  }
  return total;
}

// Optimal Approach

Optimal thinking is DIFFERENT

We do NOT iterate over subarrays.

Instead:

Iterate over elements

and ask:

How many subarrays use this element as minimum?

This is the ENTIRE trick.

Understand Contribution Technique

Suppose:

nums = [3,1,2,4]

Focus ONLY on:

1

(index 1)

Question:

In how many subarrays is 1 the minimum?

List subarrays containing 1:

[1]
[3,1]
[1,2]
[1,2,4]
[3,1,2]
[3,1,2,4]

In ALL of them:

1 is minimum

Count:

6 subarrays

So contribution of 1:

1 * 6 = 6

Now focus on:

2

Subarrays containing 2:

[2]
[1,2]
[2,4]
[1,2,4]
[3,1,2]
[3,1,2,4]

Where is 2 minimum?

[2]
[2,4]

Only 2 subarrays.

Contribution:

2 * 2 = 4

HUGE Formula

For every element:

contribution =
element * numberOfSubarrays

where element acts as minimum.

Real Problem

Now the WHOLE problem becomes:

How to count:
in how many subarrays
nums[i] is minimum?

This is the REAL question.

VERY IMPORTANT Observation

Suppose:

nums = [3,1,2,4]

Focus on:

2

(index 2)

Question:

How far can 2 expand
while still remaining minimum?

Look LEFT:

3 1

Can we cross 1?

NO.

Because then:

1 becomes minimum

So LEFT expansion stops at nearest smaller element.

Look RIGHT:

4

Can include 4?

YES.

Because:

2 is still smaller

CRITICAL Insight

To know where an element remains minimum:

we only care about:

Previous Smaller Element
Next Smaller Element

Define Boundaries

For every index:

we find:

previous smaller
next smaller

These create boundaries.

Element can expand ONLY inside these boundaries.

We have:

nums = [3,1,2,4]

Focus on:

2 at index 2

Previous smaller:

1 at index 1

Next smaller:

none

Now your confusion is:

"If previous smaller is 1,
then why are we saying 2 can exist between boundaries?
If we include 1,
then 1 becomes minimum."

YES.

Correct.

That is EXACTLY why:

we DO NOT include the previous smaller itself

VERY IMPORTANT.

Boundaries are NOT included

When we say:

left boundary = previous smaller

we mean:

expansion STOPS there

NOT:

include that element
Visualize Properly

Array:

Index:  0 1 2 3
Value: [3,1,2,4]

Focus on:

2 at index 2

Previous smaller:

1 at index 1

That means:

you cannot cross index 1

because:

1 would become minimum
So where can subarray START?

It can start from:

index 2 only

NOT index 1.

Why formula gives:
left = i - prevSmaller

Here:

2 - 1 = 1

Meaning:

only 1 valid starting position

which is:

index 2
Another Example

Suppose:

nums = [5,4,3]

Focus on:

4 at index 1

Previous smaller:

none

So:

prevSmaller = -1

Now:

left = 1 - (-1) = 2

Meaning valid starts:

index 0
index 1

Subarrays:

[4]
[5,4]

In BOTH:

4 is minimum

Correct.

MOST IMPORTANT Interpretation

Previous smaller does NOT mean:

you can include it

It means:

this is the wall where expansion stops

Think of it like:

a blocking wall

You can expand UNTIL the wall.

Not THROUGH the wall.

SUPER IMPORTANT Mental Model

For an element to remain minimum:

all included elements
must be GREATER than or equal to it

The moment you include:

a smaller element

it loses minimum status.

That is why:

previous smaller
and next smaller
act as stopping boundaries

NOT included boundaries.

How many subarrays?

MOST IMPORTANT PART.

Left choices

Starting index can be:

2

ONLY.

Why not 1?

Because index 1 has smaller element:

1

which destroys minimum status.

So:

leftChoices = 1

Formula:

i - prevSmaller

Here:

2 - 1 = 1
Right choices

Ending index can be:

2
3

So:

rightChoices = 2

Formula:

nextSmaller - i

Here:

4 - 2 = 2
Total subarrays

Every left choice can combine with every right choice.

So:

left * right

Here:

1 * 2 = 2

Subarrays:

[2]
[2,4]

Correct.

General Formula

For every element:

count =
(i - prevSmaller)
*
(nextSmaller - i)

Contribution:

nums[i] * count

Why Monotonic Stack?

We need:

Previous Smaller
Next Smaller

efficiently.

Brute force searching each side:

O(n²)

Monotonic stack gives:

O(n)


Understanding Pop Moment

This is the HARDEST part.

Suppose:

nums = [3,1,2,4]
i = 0

Stack:

[0]

(values: [3])

i = 1

Current:

1

Now:

3 >= 1

So pop 3.

WHY?

Because:

we found next smaller for 3

which is:

1

at index 1.

At pop moment:

we know BOTH:

previous smaller
next smaller

That is why contribution is calculated DURING POP.

VERY IMPORTANT Pop Meaning

When an element gets popped:

its valid minimum range is complete

Now we can calculate:

how many subarrays use it as minimum


var sumSubarrayMins = function(nums) {

    let n = nums.length;
    let stack = [];
    let sum = 0;

    for(let i = 0; i <= n; i++) {

        while(
            stack.length &&
            (i === n || nums[stack[stack.length - 1]] >= nums[i])
        ) {

            let mid = stack.pop();

            let prevSmaller =
                stack.length === 0 ? -1 : stack[stack.length - 1];

            let nextSmaller = i;

            let left = mid - prevSmaller;
            let right = nextSmaller - mid;

            sum += nums[mid] * left * right;
        }

        stack.push(i);
    }

    return sum;
};
