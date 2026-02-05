// Naive Solution
// Complexity: Time -> O(N) Space -> O(N)

var lengthOfLinkedList = function (head){
  let seen = new Set();
  let current = head;
  let pointer;
  while(current){
    if(seen.has(current)){
      pointer = current;
      break;
    }
    seen.add(current);
    current = current.next;
  }

  if(current === null) return 0;

  let length = 1;
  pointer = pointer.next;
  while(current !== pointer){
    length++;
    pointer = pointer.next;
  }
  return length;
}

// Optimal Solution
// Complexity: Time -> O(N) Space -> O(1)

var lengthOfLinkedList = function (head){
  let slow = head;
  let fast = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      slow = head;
      while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
      }
      break;
    }
  }
  while(!fast && !fast.next){
    return 0;
  }
  let length = 1;
  let fast = fast.next;

  while(slow !== fast){
    length++;
    fast = fast.next;
  }
  return length;
}
