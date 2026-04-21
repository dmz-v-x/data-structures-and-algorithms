// We need to:

// Generate all binary strings of length n
// such that NO two consecutive 1's exist

// Example

// For:

// n = 3

// Valid strings:

// 000
// 001
// 010
// 100
// 101

// Invalid:

// 011
// 110
// 111 

// Brute Force

// Idea
// Generate ALL binary strings
// Filter valid ones

// Total strings
// Total = 2^n

// Example (n=3):

// 000,001,010,011,100,101,110,111

// Filter condition

// Check:

// No "11" substring

// Complexity
// Time: O(2^n * n)

function generate(n){
  let result = [];

  function helper(str){
    if(str.length === n){
      if(!str.includes("11")){
        result.push(str);
      }
      return;
    }
    helper(str + "0");
    helper(str + "1");
  }

  helper("");
  return result;
}

// Better Approach: Prune Invalid Early
// Don't Generate invalid strings at all

// Time Complexity: O(valid strings)

function generate(n){
  let result = [];

  function helper(str, prev){
    if(str.length === n){
      result.push(str);
      return;
    }

    // always allowed
    helper(str + "0", "0");

    // allowed only if prev != '1'
    if(prev !== "1"){
      helper(str + "1", "1");
    }
  }

  helper("", "");
  return result;
}

// Optimal Appraoch: Using Backtracking + In place

// Avoid string creation → use array (more efficient)

// str + "0" → creates new string every time ❌

// Instead:

// Use array → push/pop

// This is a decision tree

// At each index:

// Can I place 0? → YES always
// Can I place 1? → only if previous ≠ 1

// Tree Visualization (n=3)
//            ""
//          /    \
//        "0"    "1"
//       /   \      \
//    "00"  "01"    "10"
//    / \     |      / \
// "000""001""010""100""101"


// Time Complexity: O(valid strings * n)
// Space Complexity: O(n) stack depth

function generate(n){
  let result = [];
  let path = [];

  function helper(index){
    if(index === n){
      result.push(path.join(""));
      return;
    }

    // place 0
    path.push("0");
    helper(index + 1);
    path.pop();

    // place 1 (check previous)
    if(path.length === 0 || path[path.length - 1] !== "1"){
      path.push("1");
      helper(index + 1);
      path.pop();
    }
  }

  helper(0);
  return result;
}


















