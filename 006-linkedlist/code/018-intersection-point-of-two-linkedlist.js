// You are given two linked lists:

// List A: 1 → 2 → 3 → 4 → 5
// List B:       9 → 4 → 5

// They intersect at node with value 4

// Important:

// Intersection means same node in memory
// NOT same value


// VERY IMPORTANT CONCEPT
// A: 1 → 2 → 3 → 4 → 5
//                    ↑
// B:       9 --------|

// After intersection, both lists share SAME nodes

// COMMON MISUNDERSTANDING

// value same ≠ intersection
// reference same = intersection


// Brute Force

// Time Complexity: O(N * M)
// Space Complexity: O(1)
function getIntersectionNode(headA, headB){
  let a = headA;

  while(a !== null){
    let b = headB
    while(b !== null){
      if(a === b) return a;
      b = b.next;
    }

    a = a.next;
  }
  return null;
}



// Better Approach: Using Hashing

function getIntersectionNode(headA, headB){
  let set = new Set();

  let temp = headA;
  while(temp !== null){
    set.add(temp);
    temp = temp.next;
  }

  temp = headB;
  while(temp !== null){
    if(set.has(temp)) return temp;
    temp = temp.next;
  }

  return null;
}


// Optimal Approach: Both pointer will traverse equla distance

// Time Complexity: O(N + M)
// Space Complexity: O(1)

function getIntersectionNode(headA, headB){
  let a = headA;
  let b = headB;

  while(a !== b){
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
}






