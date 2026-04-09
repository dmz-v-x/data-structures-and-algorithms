// You are given a linked list.

// There may or may not be a cycle
// If cycle exists → return the node where cycle starts
// If no cycle → return null

// Input:
// 1 → 2 → 3 → 4 → 5
//           ↑     ↓
//           ← ← ← ←

// Cycle starts at node 3

// Brute Force: Using Set
// Time Complexity: O(n)
// Space Complexity: O(n)
function detectCycle(head){
  count visited = new Set();
  let current = head;

  while(current !== null){
    if(visited.has(current)){
      return current;
    }

    visited.add(current);
    current = current.next;
  }
  return null;
}

// Optimal Approach using Floyd Algorithm (slow and fast pointer)
// Time Complexity: O(N)
// Space Complexity: O(1)
function detectCycle(head){
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast){
      slow = head;

      while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }
  return null;
}

// SUPER IMPORTANT JS DETAIL

// This is critical:

// visited.has(node)

// JS compares object reference, NOT value.

// So even if:

// node1.val === node2.val

// They are NOT equal unless:

// node1 === node2

// This is exactly what we want 
