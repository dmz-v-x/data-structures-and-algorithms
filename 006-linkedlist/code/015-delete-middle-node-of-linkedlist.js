// Delete the middle node of a singly linked list

// Example
// Input: 1 → 2 → 3 → 4 → 5
// Output: 1 → 2 → 4 → 5

// Middle = 3 (removed)

// What is “middle”?
// If odd length → exact middle
// If even length → usually take second middle

// Example:

// 1 → 2 → 3 → 4
// Middle = 3 (index 3)


// Brute Force: Using Array

// Store all nodes in array
// Find middle index
// Reconnect links

// Time Complexity: O(n)
// Space Complexity: O(n)
function deleteMiddle(head){
  if(!head || !head.next) return null;

  let arr = [];
  let temp = head;

  while(temp !== null){
    arr.push(temp);
    temp = temp.next;
  }

  let mid = Math.floor(arr.length / 2);

  // remove middle
  arr[mid - 1].next = arr[mid].next;

  return head;
}



// Better (Two Pass - Length Based)
// Time Complexity: O(n) + O(n) = O(2n) = O(n)
// Space Complexity: O(1)
function deleteMiddle(head){
  if(!head || !head.next) return null;

  let length = 0;
  let temp = head;

  while(temp !== null){
    length++;
    temp = temp.next;    
  }

  let mid = Math.floor(length / 2);

  let current = head;

  for(let i = 0; i < mid - 1; i++){
    current = current.next;
  }

  current.next = current.next.next;

  return head;
}


// Optimal Approach: Usinf slow and fast pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function deleteMiddle(head){
  if(!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let prev = null;

  while(fast !== null && fast.next !== null){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow = middle node
  prev.next = slow.next;

  return head;
}


