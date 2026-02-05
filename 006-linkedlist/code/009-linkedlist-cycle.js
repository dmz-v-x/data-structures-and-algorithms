// Naive Approach
// Complexity: Time -> O(N) Space -> O(N)

var hasCycle = function(head){
  let seen = new Set();
  let current = head
  while(current){
    if(seen.has(current)){
      return true;
    }
    seen.add(current)
    current = current.next;
  }
  return false;
}

// Optimal Appraoch
// Complexity: Time -> O(N) Space -> O(1)

var hasCycle = function(head){
  let slow = head;
  let fast = head;
  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast){
      return true;
    }
  }
  return false;
}
