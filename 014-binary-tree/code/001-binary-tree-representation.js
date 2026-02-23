// 1. A tree node class

class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 2. Creating Nodes

const nodeA = new TreeNode(10); // nodeA → { value: 10, left: null, right: null }
const nodeB = new TreeNode(20); // nodeB → { value: 20, left: null, right: null }
const nodeC = new TreeNode(30); // nodeC → { value: 30, left: null, right: null }

// 3. Connecting Nodes -> Manual Tree Construction

const root = new TreeNode(10);
const leftChild = new TreeNode(20);
const rightChild = new TreeNode(30);

root.left = leftChild;
root.right = rightChild;

// Visual structure:

//         10
//        /  \
//       5   15

// 4. Larger Example

const root = new TreeNode(10);

root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);


// Visual:

//      10
//     /  \
//    5   15
//   / \
//  3   7
