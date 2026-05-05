class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.tail.next = this.head;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.next = this.head;
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

    while (index < position - 1 && current.next !== this.head) {
      current = current.next;
      index++;
    }

    const newNode = new Node(data);

    newNode.next = current.next;
    current.next = newNode;

    if (current === this.tail) {
      this.tail = newNode;
    }
  }

  deleteFromBeginning() {
    if (this.head === null) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
    this.tail.next = this.head;
  }

  deleteFromEnd() {
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

    current.next = this.head;
    this.tail = current;
  }

  deleteFromPosition(position) {
    if (position < 0 || this.head === null) return;

    if (position === 0) {
      this.deleteFromBeginning();
      return;
    }

    let current = this.head;
    let index = 0;

    while (index < position - 1 && current.next !== this.head) {
      current = current.next;
      index++;
    }

    if (current.next === this.tail) {
      this.tail = current;
    }

    current.next = current.next.next;
  }

  traverse() {
    if (this.head === null) return;

    let current = this.head;
    let result = [];

    do {
      result.push(current.data);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  search(target) {
    if (this.head === null) return false;

    let current = this.head;

    do {
      if (current.data === target) return true;
      current = current.next;
    } while (current !== this.head);

    return false;
  }
}
