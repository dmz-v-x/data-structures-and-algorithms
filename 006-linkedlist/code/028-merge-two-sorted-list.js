// You’re given two sorted linked lists:

// List1: 1 → 3 → 5
// List2: 2 → 4 → 6

// Output:
// 1 → 2 → 3 → 4 → 5 → 6



// Brute Force:

// Idea
// Convert linked lists → arrays
// Merge + sort
// Convert back → linked list

// Time Complexity: O((n+m) log(n+m))
// Space Complexity: O(n+m)

function mergeList(l1, l2){
  let arr = [];

  // convert l1
  while(l1){
    arr.push(l1.val)
    l1 = l1.next;
  }

  // convert l2
  while(l2){
    arr.push(l2.val);
    l2 = l2.next;
  }

  // sort
  arr.sort((a, b) => a - b);

  // build linked list
  let dummy = new ListNode(-1);
  let curr = dummy;

  for(let num of arr){
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}



// Better Approach: Using Two Pointers

// Complexity
// Time: O(n + m)
// Space: O(n + m)

function mergeList(l1, l2){
  let dummy = new ListNode(-1);
  let tail = dummy;

  while(l1 && l2){
    if(l1.val <= l2.val){
      tail.next = new ListNode(l1.val);
      l1 = l1.next;
    }else{
      tail.next = new ListNode(l2.val);
      l2 = l2.next;
    }

    tail = tail.next;
  }

  while(l1){
    tail.next = new ListNode(l1.val);
    l1 = l1.next;
    tail = tail.next;
  }

  while(l2){
    tail.next = new ListNode(l2.val);
    l2 = l2.next;
    tail = tail.next;
  }

  return dummy.next;
  
}


// Optimal Approaches

// You already have nodes
// Just attach smaller node to result
// Move pointers

// Complexity
// Time: O(n + m)
// Space: O(1)

function mergeList(l1, l2){
  let dummy = new ListNode(-1);
  let tail = dummy;

  while(l1 && l2){
    if(l1.val <= l2.val){
      tail.next = l1;
      l1 = l1.next;
    }else{
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }

  tail.next = l1 ? l1 : l2;

  return dummy.next;
}




