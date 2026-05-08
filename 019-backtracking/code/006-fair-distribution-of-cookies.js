// Fair Distribution of Cookies

// Given:
// cookies[] → array of cookie bags
// k → number of children
// Goal:

// Distribute cookies such that:

// Each bag goes to exactly one child
// Minimize unfairness

// What is unfairness?

// It is the maximum cookies any one child gets

// Example:

// cookies = [8, 15, 10]
// k = 2

// Distribution:
// Child1 → [8,10] = 18
// Child2 → [15] = 15

// Unfairness = max(18, 15) = 18

// We want:
// minimum possible unfairness

// Burte Force: Try all possibilities
// Total Possibilities: K^n

// THIS IS THE REAL PATTERN

// At every step:

// Try ALL possible assignments

// WHAT DOES THIS SOUND LIKE?
// Backtracking

// Because:

// Choose child
// Explore
// Undo
// Try another child


// VISUALIZATION

// Take:

// cookies = [8,15]
// k = 2

// Children initially:

// [0,0]

// Meaning:

// child0 = 0 cookies
// child1 = 0 cookies


// FIRST COOKIE = 8

// Two choices:

// Choice 1

// Give to child0:

// [8,0]
// Choice 2

// Give to child1:

// [0,8]

// NOW SECOND COOKIE = 15

// From [8,0]:

// Two choices:

// [23,0]
// [8,15]

// From [0,8]:

// Two choices:

// [15,8]
// [0,23]

// // Complete Tree

//                 [0,0]
//                /     \
//            [8,0]    [0,8]
//             /  \      /  \
//       [23,0] [8,15] [15,8] [0,23]

// FINAL STEP

// At leaf nodes:

// We calculate:

// max(child distributions)

// Examples:

// [23,0]  → max = 23
// [8,15]  → max = 15
// [15,8]  → max = 15
// [0,23]  → max = 23

// BEST ANSWER
// 15

// MOST IMPORTANT INSIGHT

// This problem is:

// Generate ALL distributions
// and choose minimum unfairness

// WHAT STATE DO WE NEED?

// At any moment we need:

// 1. Which cookie are we distributing?
// 2. Current cookies each child has

// THIS WILL BECOME
// backtrack(index, children)

// Meaning:

// I am distributing cookie[index]
// Current child loads = children[]

// Lock these understandings first:

// 1. Every cookie has k choices
// 2. We try all distributions
// 3. At leaf node we compute max()
// 4. We want minimum among all max values

// ----------

WHAT CHANGES DURING RECURSION?

At every recursive step:

We distribute ONE cookie bag

So we need:

1. Which cookie are we currently distributing?

Example:

index = 0 → cookie 8
index = 1 → cookie 15
2. Current distribution among children

Example:

children = [8,15]

Meaning:

child0 has 8
child1 has 15

SO OUR FUNCTION BECOMES
backtrack(index, children)

Meaning:

"I am currently distributing cookie[index]
Current loads are in children[]"

WHAT IS THE BASE CASE?

When do we stop recursion?

When all cookies are distributed.

So:

if(index === cookies.length)

Meaning:

All bags assigned

THEN WHAT?

At this point:

We calculate unfairness

Which is:

Math.max(...children)

VERY IMPORTANT

Example:

children = [8,15]

Then:

Math.max(...children) = 15

This distribution’s unfairness = 15

GLOBAL ANSWER

We want:

minimum unfairness among all distributions

So we keep:

result = Math.min(result, unfairness)

WHAT ARE THE CHOICES?

Suppose:

cookies[index] = 15

and:

k = 2

Then choices are:

Give 15 to child0
Give 15 to child1


THIS BECOMES A LOOP
for(let i = 0; i < k; i++)

Meaning:

Try giving current cookie to every child

WHAT HAPPENS INSIDE LOOP?

Suppose:

children = [8,0]
current cookie = 15
Give to child0
children[0] += 15

Now:

[23,0]

Then recurse.

After recursion?

We must UNDO.

children[0] -= 15

Back to:

[8,0]

COMPLETE MENTAL MODEL

At every step:

Current cookie:
Try giving it to each child one by one
Explore future
Undo assignment
Try next child


// Time Complexity: O(k^n)
// Space Complexity: O(k)

function distributeCookies(cookies, k){
  let n = cookies.length;
  let children = new Array(k).fill(0);
  let result = Infinity;

  function backtrack(index){
    // Base Case
    if(index === n){
      let unfairness = Math.max(...children);
      result = Math.min(result, unfairness);
      return;
    }

    // Try all Children
    for(let i = 0; i<k; i++){
      children[i] += cookies[index];
      backtrack(index + 1);
      children[i] -= cookies[index];
    }

    
  }

  backtrack(0);
  return result;
}


// Optimize The solution

// Right now your solution tries:

// Every cookie → every child

// So recursion tree becomes HUGE.

// CURRENT TIME COMPLEXITY

// If:

// n = number of cookies
// k = number of children

// Then:

// Each cookie has k choices

// So:

// Time = O(k^n)

// Very expensive.

// WHERE ARE WE WASTING TIME?

// Suppose:

// children = [0,0]
// cookie = 8
// Branch 1

// Give to child0:

// [8,0]
// Branch 2

// Give to child1:

// [0,8]

// IMPORTANT INSIGHT

// These are ACTUALLY SAME STATES.

// Why?

// Because:

// Children are indistinguishable

// Meaning:

// [8,0] and [0,8]

// represent identical fairness situations.

// THIS IS CALLED SYMMETRY

// We are exploring:

// duplicate states in different order

// OPTIMIZATION #1 (VERY IMPORTANT)

// If a child has:

// 0 cookies

// and we already tried giving current cookie to another empty child,

// then trying another empty child is redundant.

// EXAMPLE

// Suppose:

// children = [0,0,0]
// cookie = 8

// Without optimization:

// [8,0,0]
// [0,8,0]
// [0,0,8]

// All same logically.

// SO WE ONLY TRY FIRST EMPTY CHILD

// This pruning is:

// if(children[i] === 0) break;

// AFTER backtracking undo.

// WHY AFTER UNDO?

// Because:

// We finished exploring one empty child

// Now trying another empty child gives same state.

// So stop loop.

// OPTIMIZATION #2 (POWERFUL)

// Suppose:

// Current maximum already worse than answer

// Example:

// Current children = [40,5]
// Best answer found = 31

// Even before finishing recursion:

// max(children) = 40 > 31

// This branch can NEVER improve answer.

// SO WE PRUNE
// if(children[i] >= result) continue;

// or more commonly:

// if(Math.max(...children) >= result) return;


function distributeCookies(nums){
  let result = Infinity;
  let children = new Array(k).fill(0);
  let n = nums.length;

  function backtrack(index){
    if(Math.max(...children) >= result) return;

    if(index === n){
      result = Math.min(result, Math.max(...children));
      return;
    }

    for(let i = 0; i<k; i++){
      children[i] += nums[index];
      backtrack(index + 1);
      children[i] -= nums[index];
      if(children[i] === 0) break;
    }
  }

  backtrack(0);
}





















