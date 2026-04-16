// Sort a singly linked list

// Example
// Input: 4 → 2 → 1 → 3
// Output: 1 → 2 → 3 → 4

// Brute Force

// Idea
// Convert linked list → array
// Sort array
// Rebuild linked list

// Time Complexity: O(n log n)
// Space Complexity: O(n)

function sortList(head){
  let arr = [];
  let temp = head;

  // Step 1: Put Values in array

  while(temp !== null){
    arr.push(temp.val);
    temp = temp.next;
  }

  // Step 2: Sort array

  arr.sort((a, b) => a - b);

  // Step 3: rebuild list

  let temp2 = head;
  while(temp2 !== null){
    temp2.val = arr[i++];
    temp2 = temp2.next;
  }

  return head;
}


// Optimal Approach: Using Merge Sort

function sortList(head){
  if(!head || !head.next) return head;

  // Step 1: Find Middle
  let mid = getMiddle(head);
  let right = mid.next;
  mid.next = null;

  // Step 2: sort halves
  let left = sortList(head);
  right = sortList(right);

  // Step 3: merge
  return merge(left, right);
}

function getMiddle(head){
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(l1, l2) {
  let dummy = new ListNode(0);
  let temp = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  temp.next = l1 || l2;

  return dummy.next;
}







