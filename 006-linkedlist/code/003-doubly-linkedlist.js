class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  insertAtPosition(data, position) {
    if (position < 0) return;

    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }

    let current = this.head;
    let index = 0;

    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current === null) return;

    if (current.next === null) {
      this.insertAtEnd(data);
      return;
    }

    const newNode = new Node(data);

    newNode.next = current.next;
    newNode.prev = current;

    current.next.prev = newNode;
    current.next = newNode;
  }

  deleteFromBeginning() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.head.prev = null;
  }

  deleteFromEnd() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  deleteFromPosition(position) {
    if (position < 0 || this.head === null) return;

    if (position === 0) {
      this.deleteFromBeginning();
      return;
    }

    let current = this.head;
    let index = 0;

    while (current !== null && index < position) {
      current = current.next;
      index++;
    }

    if (current === null) return;

    if (current === this.tail) {
      this.deleteFromEnd();
      return;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  traverseForward() {
    let current = this.head;
    let res = [];

    while (current !== null) {
      res.push(current.data);
      current = current.next;
    }

    console.log(res.join(" <-> "));
  }

  traverseBackward() {
    let current = this.tail;
    let res = [];

    while (current !== null) {
      res.push(current.data);
      current = current.prev;
    }

    console.log(res.join(" <-> "));
  }

  search(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data === target) return true;
      current = current.next;
    }

    return false;
  }
}
