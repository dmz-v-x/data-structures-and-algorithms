class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // ==============================
  // INSERT OPERATIONS
  // ==============================

  // Insert at beginning → O(1)
  insertAtBeginning(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    // if list was empty
    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  // Insert at end WITHOUT tail → O(n)
  insertAtEndWithoutTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Insert at end WITH tail → O(1)
  insertAtEndWithTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Alias for convenience
  append(data) {
    this.insertAtEndWithTail(data);
  }

  // Insert at position → O(n)
  insertAtPosition(data, position) {
    if (position < 0) return;

    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    let index = 0;

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    // position out of bounds
    if (current === null) return;

    newNode.next = current.next;
    current.next = newNode;

    // if inserted at end → update tail
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  // ==============================
  // DELETE OPERATIONS
  // ==============================

  // Delete from beginning → O(1)
  deleteFromBeginning() {
    if (this.head === null) return;

    this.head = this.head.next;

    // if list becomes empty
    if (this.head === null) {
      this.tail = null;
    }
  }

  // Delete from end WITHOUT tail → O(n)
  deleteFromEndWithoutTail() {
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  // Delete from end WITH tail → still O(n)
  deleteFromEndWithTail() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;
  }

  // Delete from position → O(n)
  deleteFromPosition(position) {
    if (position < 0 || this.head === null) return;

    if (position === 0) {
      this.deleteFromBeginning();
      return;
    }

    let current = this.head;
    let index = 0;

    while (current.next !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current.next === null) return;

    // if deleting tail
    if (current.next === this.tail) {
      this.tail = current;
    }

    current.next = current.next.next;
  }

  // ==============================
  // UTILITY FUNCTIONS
  // ==============================

  // Traverse → O(n)
  traverse() {
    let current = this.head;
    let result = [];

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result.join(" -> "));
  }

  // Search → O(n)
  search(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data === target) return true;
      current = current.next;
    }

    return false;
  }

  // Length → O(n)
  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Check empty → O(1)
  isEmpty() {
    return this.head === null;
  }
}




const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.traverse(); // 10 -> 20 -> 30

list.insertAtBeginning(5);
list.traverse(); // 5 -> 10 -> 20 -> 30

list.insertAtPosition(15, 2);
list.traverse(); // 5 -> 10 -> 15 -> 20 -> 30

list.deleteFromEndWithTail();
list.traverse(); // 5 -> 10 -> 15 -> 20

console.log(list.search(15)); // true
console.log(list.size());     // 4
