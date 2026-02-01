class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

node1.next = node2;
node2.next = node3;

let head = node1;
