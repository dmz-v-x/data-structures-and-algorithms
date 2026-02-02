class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

// Insert at the beginning
// Complexity: Time -> O(1) Space -> O(1)

  insertAtBeginning(data){
    const newNode = new LinkedList(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  
// Insert at the end without tail pointer
// Complexity: Time -> O(n) Space -> O(1)
  
  insertAtEndWithoutTail(data){
    const newNode = new LinkedList(data);
    
    if(this.head === null){
      this.head = newNode;
      return;
    }

    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }

    current.next = newNode;
      
  }

// Insert at the end with tail
// Complexity: Time -> O(1) Space -> O(1)

  insertAtEndWithTail(data){
    const newNode = new Node(data);

    // empty list
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

// Insert at position
// Complexity: 

  insertAtPosition(data, position){
    if(positon < 0){
      return;
    }

    if(position === 0){
      this.insertAtBeginning(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let index = 0;

    while(current !== null && index < position - 1){
      current = current.next;
      index++;
    }

    if(current === null){
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }


// Delete from beginning
// Complexity: Time -> O(1) Space -> O(1)

  deleteFromBeginning(){
    if(this.head === null){
      return;
    }
    this.head = this.head.next;
  }

// Delete from end without tail
// Complexity: Time -> O(n) Space -> O(1)

  deleteFromEndWithoutTail(){
    if(this.head === null){
      return;
    }

    if(this.head.next === null){
      this.head = null;
      return;
    }

    let current = this.head
    while(current.next.next !== null){
      current = current.next;
    }

    current.next = null;
  }

// Delete from end with tail pointer
// Complexity: Time -> O(1) Space -> O(1)

  deleteFromEndWithTail(){
    
  }

// Delete from position
// Complexity: Time ->   Space -> 

  deleteFromPosition(){}


// Traversing a linkedlist
// Complexity: Time -> O(n) Space -> O(1)

  traverse(){
    let current = this.head;
    while(current !== null){
      console.log(current.data);
      current = current.next;
    }
  }

// Searching an element
// Complexity: Time -> O(n) Space -> O(1)
  
  search(target){
    let current = this.head;
    while(current !== null){
      if(current.data === target){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
