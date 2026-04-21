// Given a string:

// s = "abc"

// We need to generate:

// All subsequences (not necessarily contiguous)

// ""
// "a"
// "b"
// "c"
// "ab"
// "ac"
// "bc"
// "abc"

// Brute Force: Using Bitmask

function subsequences(s) {
  let n = s.length;
  let result = [];

  for (let i = 0; i < (1 << n); i++) {
    let sub = "";

    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sub += s[j];
      }
    }

    result.push(sub);
  }

  return result;
}

// Approach 2: Using Recursion: Take or Not Take

// Recursion Tree
//            ""
//         /      \
//       "a"      ""
//      /   \    /   \
//   "ab"  "a" "b"   ""
//    ...

// Complexity
// Time: O(n * 2^n)
// Space: O(n)

function subsequences(s) {
  let result = [];

  function helper(index, path) {
    if (index === s.length) {
      result.push(path);
      return;
    }

    // take
    helper(index + 1, path + s[index]);

    // not take
    helper(index + 1, path);
  }

  helper(0, "");
  return result;
}



// Using Backtracking

function subsequences(s) {
  let result = [];
  let path = [];

  function backtrack(index) {
    if (index === s.length) {
      result.push(path.join(""));
      return;
    }

    // take
    path.push(s[index]);
    backtrack(index + 1);
    path.pop();

    // not take
    backtrack(index + 1);
  }

  backtrack(0);
  return result;
}
