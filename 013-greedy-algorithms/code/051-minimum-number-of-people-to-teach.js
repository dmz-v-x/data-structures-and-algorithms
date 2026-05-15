// Understand The Story Properly

// We have:

// n languages
// each user knows some languages
// some friendships exist

// A friendship:

// [a,b]

// means:

// person a and person b want to communicate

// Communication Rule

// Two people can communicate if:

// they share AT LEAST ONE common language

// Goal

// We are allowed to teach ONE language to some people.

// We want:

// minimum number of people to teach

// so that ALL friendships can communicate.


// Example

// Suppose:

// languages = [
//   [1],      // person 1
//   [2],      // person 2
//   [1,2]     // person 3
// ]

// Friendships:

// [1,2]
// [1,3]

// Can Person 1 and 2 Communicate?
// person1
// {1}
// person2
// {2}

// Common language?

// NO.

// Problem exists.

// Can Person 1 and 3 Communicate?
// person1
// {1}
// person3
// {1,2}

// Common?

// YES.

// No issue.

// So Only Problematic Friendship
// [1,2]


// What Are We Actually Choosing?

// We are choosing:

// ONE language to teach

// Example:

// Teach language 1.

// Then:

// person2 learns 1

// Now:

// person1 -> {1}
// person2 -> {1,2}

// Communication works.

// People taught = 1

// Could We Teach Language 2?

// Yes.

// Teach person1 language 2.

// Again only 1 person taught.

// Answer = 1


// MOST IMPORTANT INSIGHT

// We DO NOT care about friendships already communicating.

// We ONLY care about:

// problematic friendships

// Meaning:

// friend pairs with NO common language


// Core Strategy

// For every language:

// try making that language universal

// Meaning:

// whoever needs this language but doesn't know it,
// we teach them.

// Then compute:

// how many people need teaching

// Take minimum.



// Why Brute Force Over Languages Works

// Constraints are small enough.

// Suppose:

// n = total languages

// Try:

// language 1
// language 2
// language 3
// ...

// For each:

// calculate people needing teaching

// Take minimum.



// Identify Bad Friendships

// This is the FIRST important step.

// Suppose:

// friendship = [u,v]

// We check:

// do u and v share language?
// Example
// u = {1,3}
// v = {2,3}

// Common:

// 3

// So they can communicate.

// Ignore.

// Another:

// u = {1}
// v = {2}

// No common.

// This friendship is BAD.





// How To Check Common Language Efficiently

// Convert every person's languages into a Set.

// Example:

// new Set([1,3,5])

// Then:

// For every language of person u:

// Check if v has it.

// Build Bad Users Set

// Very important optimization.

// Suppose friendship:

// [u,v]

// cannot communicate.

// Then BOTH people become candidates for teaching.

// Add both to set.

// Example:

// badUsers = {1,2,5,7}

// Only these users matter.

// Others already communicate fine.

// Main Greedy Observation

// Suppose we decide:

// “teach language X”

// Then:

// Every bad user who DOES NOT know X
// must be taught.

// Example

// Bad users:

// {1,2,5}

// Suppose:

// user1
// {1}
// user2
// {2}
// user5
// {1,2}
// Try Language 1

// Who lacks language 1?

// user1

// has it

// user2

// does NOT have it

// teach.

// user5

// has it

// Total teaching:

// 1
// Try Language 2

// Need teach only user1.

// Again answer = 1.



// Why This Works

// Because once ALL problematic users know one common language:

// every bad friendship becomes fixable

// Suppose bad friendship:

// [u,v]

// If both now know language X:

// then communication works.





// Full Example Dry Run
// Input
// n = 3

// languages = [
//   [2],      // person1
//   [1,3],    // person2
//   [1,2],    // person3
//   [3]       // person4
// ]

// Friendships:

// [1,4]
// [1,2]
// [3,4]
// [2,3]


// Find Bad Friendships
// Friendship [1,4]
// person1
// {2}
// person4
// {3}

// No common.

// BAD.

// Add:

// 1,4



// Friendship [1,2]
// person1
// {2}
// person2
// {1,3}

// No common.

// BAD.

// Add:

// 1,2


// Friendship [3,4]
// person3
// {1,2}
// person4
// {3}

// No common.

// BAD.

// Add:

// 3,4


// Friendship [2,3]
// person2
// {1,3}
// person3
// {1,2}

// Common:

// 1

// GOOD.

// Ignore.


// FINAL badUsers
// {1,2,3,4}


// Try Every Language
// Try Language 1

// Who lacks language1?

// user1
// {2}

// Needs teaching.

// user2

// has 1

// user3

// has 1

// user4
// {3}

// Needs teaching.

// Total:

// 2
// Try Language 2
// user1

// has 2

// user2

// missing 2

// teach.

// user3

// has 2

// user4

// missing 2

// teach.

// Total:

// 2
// Try Language 3
// user1

// missing 3

// teach.

// user2

// has 3

// user3

// missing 3

// teach.

// user4

// has 3

// Total:

// 2
// Final Answer
// 2


Code:

function minimumTeachings(n, languages, friendships){

  // Step 1: Convert each person's language into a set 

  const langSets = [];

  
}






















