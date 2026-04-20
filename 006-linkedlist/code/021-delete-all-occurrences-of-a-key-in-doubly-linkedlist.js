// You are given a Doubly Linked List (DLL):

// 1 ⇄ 2 ⇄ 3 ⇄ 2 ⇄ 4 ⇄ 2

// And a key = 2

// You must delete ALL nodes whose value = 2

// Expected Output
// 1 ⇄ 3 ⇄ 4

// Step 0: What is Special About DLL?

// Each node has:

// prev ← [node] → next

// So while deleting, we must handle:

// TWO POINTERS:
// prev
// next

function deleteAllOccurrences(head, key){
  let curr = head;

  while(curr){
    let nextNode = curr.next;

    if(curr.val === key){
      // if it is head
      if(curr.prev === null){
        head = curr.next;
        if(head) head.prev = null;
      }else {
        curr.prev.next = curr.next;

        if(curr.next) {
          curr.next.prev = curr.prev;
        }
      }
    }
    curr = nextNode;
  }
  return head;
}

// Complexity

// | Metric | Value |
// | ------ | ----- |
// | Time   | O(n)  |
// | Space  | O(1)  |
