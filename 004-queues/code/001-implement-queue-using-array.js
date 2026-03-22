// Implement Queue Using Array

// Queue follows FIFO (First In First Out)

// We need to implement
// enqueue(x)
// dequeue()
// peek()
// isEmpty()

// We will use JavaScript array:
// Add -> push()
// Remove -> shift()

class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to rear
  enqueue(value){
    this.items.push(value);
  }

  // remove element from front
  dequeue(){
    if(this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Get front element
  peek(){
    if(this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check if empty
  isEmpty(){
    return this.items.length === 0;
  }

  // Size of queue
  size(){
    return this.items.length;
  }
}


const q = new Queue();

q.enqueue(10); // [10]
q.enqueue(20); // [10, 20]
q.enqueue(30); // [10, 20, 30]

q.dequeue();   // removes 10 → [20, 30]

q.peek();      // 20
