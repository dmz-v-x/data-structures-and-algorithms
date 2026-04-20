// You are given a sorted doubly linked list:

// 1 ⇄ 2 ⇄ 2 ⇄ 3 ⇄ 3 ⇄ 4

// Remove duplicates

// Output
// 1 ⇄ 2 ⇄ 3 ⇄ 4

// Core Idea

// We always:

// Keep first occurrence
// Delete next duplicates

function removeDuplicates(head){
  let curr = head;

  while(curr && curr.next){
    if(curr.val === curr.next.val){
      let duplicate = curr.next;

      curr.next = duplicate.next;

      if(duplicate.next){
        duplicate.next.prev = curr;
      }
    }else{
      curr = curr.next;
    }
  }
  return head;
}

// Complexity

// | Metric | Value |
// | ------ | ----- |
// | Time   | O(n)  |
// | Space  | O(1)  |
