// Problem

// You are given a multilevel linked list:

// Each node has:

// next → normal pointer
// child → another linked list

// Visualization

// 1 → 2 → 3 → 4
//         |
//         7 → 8 → 9
//             |
//             10 → 11

// Flatten it into a single-level list:

// 1 → 2 → 3 → 7 → 8 → 10 → 11 → 9 → 4

// Order = DFS (depth-first traversal)

// Core Idea
// Whenever you see a child:
// → go DOWN first
// → then come back to next


// Brute Force: 

// Intuition
// Traverse using DFS
// Store nodes in array
// Rebuild list

// Complexity
// Time: O(n)
// Space: O(n)

function flatten(head){
  if(!head) return null;

  let arr = [];

  function dfs(node){
    while(node){
      arr.push(node);

      if(node.child){
        dfs(node.child);
      }

      node = node.next;
    }
  }
  dfs(head);

  // Rebuild
  for(let i = 0; i<arr.length; i++){
    arr[i].next = arr[i+1];
    arr[i].child = null;
  }

  return head;
}

// Better Approach: Stack based DFS

function flatten(head) {
  if (!head) return null;

  let stack = [head];
  let dummy = new Node(0);
  let prev = dummy;

  while (stack.length > 0) {
    let curr = stack.pop();

    prev.next = curr;
    curr.prev = prev;

    if (curr.next) stack.push(curr.next);
    if (curr.child) stack.push(curr.child);

    curr.child = null;
    prev = curr;
  }

  dummy.next.prev = null;
  return dummy.next;
}


// Optimal Approach: 

// Whenever you see a child:
// 1. Find tail of child list
// 2. Attach original next to that tail
// 3. Move child into next

// Step 1: Find child tail
// childTail = last node of child list

// Step 2: Connect tail to next
// childTail.next = curr.next

// Step 3: Move child to next
// curr.next = curr.child
// curr.child = null

// Visualization

// Before:

// 3 → 4
// |
// 7 → 8 → 9

// After:

// 3 → 7 → 8 → 9 → 4


function flatten(head){
  let curr = head;

  while(curr){
    if(curr.child){
      // Step 1: find child tail

      let childTail = curr.child;
      while(childTail.next){
        childTail = childTail.next;
      }

      // Step 2: connect tail with next

      childTail.next = curr.next;

      if(curr.next){
        curr.next.prev = childTail;
      }

      // Step 3: move child to next

      curr.next = curr.child;
      curr.child.prev = curr;
      curr.child = null;
    }
    curr = curr.next;
  }
  return head;
}





