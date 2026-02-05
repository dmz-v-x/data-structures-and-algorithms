// Naive Appraoch
// Complexity: Time -> O(N) Space -> O(N)
var detectCycle = function (head){
  let current = head;
  let seen = new Set();
  while(current){
    if(seen.has(current)){
      return current;
    }

    seen.add(current);
    current = current.next;
      
  }
  return null;
}

// Optimal Appraoch
// Complexity: Time -> O(N) Space -> O(1)

var detectCycle = function (head){
  let slow = head;
  let fast = head;
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
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









// Optimal Approach

