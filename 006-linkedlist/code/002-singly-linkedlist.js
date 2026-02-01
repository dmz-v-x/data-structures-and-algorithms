class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

// Insert at the beginning
// Complexity: Time -> O(1) Space -> O(1)

  insertAtBeginning(data){
    const newNode = new LinkedList(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  
// Insert at the end
// Complexity: Time -> O(n) Space -> O(1)
  
  insertAtEnd(data){
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
