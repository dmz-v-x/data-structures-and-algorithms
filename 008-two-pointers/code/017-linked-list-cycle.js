// Given a linked list:

// Determine if there is a cycle (loop)

// Example
// 1 → 2 → 3 → 4
//          ↑   ↓
//          ← ←


// Brute Force: Using Visited Array
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function hasCycle(head){
  let visited = [];
  let current = head;

  while(current !== null){
    if(visited.includes(current)){
      return true;
    }

    visited.push(current);
    current = current.next;
  }
  return false;
}

// Better Approach: Using HashSet
// Time Complexity: O(n)
// Time Complexity: O(n)
function hasCycle(head){
  let visited = new Set();
  let current = head;

  while(current !== null){
    if(visited.has(current)){
      return true;
    }

    visited.add(current);
    current = current.next;
  }
  return false;
}

// Optimal Approach: Tortoise Hare(slow & fast pointers)
// slow = moves 1 step
// fast = moves 2 step

// Time Complexity: O(n)
// Space Complexity: O(1)
function hasCycle(head){
  let slow = head;
  let fast = head;

  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast){
      return true
    }
  }
  return false;
}
