// Given a BST and a target k:

// Find if there exist TWO nodes whose sum = k

// KEY OBSERVATION
// BST inorder traversal = sorted array

// So problem becomes:

// Two sum in sorted array

// Brute Force
// Idea
// Get inorder array
// Use two pointers

// O(N) extra space

function findTarget(root, k){
  let arr = [];

  function inorder(node){
    if(!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }

  let i = 0;
  let j = arr.length - 1;

  while(i < j){
    let sum = arr[i] + arr[j];

    if(sum === k) return true;
    if(sum < k) i++;
    else j--;
  }

  return false;
}


// Optimal Approach: Two Iterators

// Use two BST iterators:

// | Iterator       | Traversal                       |
// | -------------- | ------------------------------- |
// | Left iterator  | Inorder (small → large)         |
// | Right iterator | Reverse inorder (large → small) |

// Exactly like:

// Two pointers in sorted array

class BSTIterator{
  constructor(root, reverse){
    this.stack = [];
    this.reverse = reverse;
    this.pushAll(root);
  }

  pushAll(node){
    while(node){
      this.stack.push(node);
      node = this.reverse ? node.right : node.left;
    }
  }

  next(){
    let node = this.stack.pop();

    if(this.reverse){
      this.pushAll(node.left);
    }else{
      this.pushAll(node.right);
    }

    return node.val;
  }
}

function findTarget(root, k){
  let left = new BSTIterator(root, false); // smallest
  let right = new BSTIterator(root, true); // largest

  let i = left.next();
  let j = right.next();

  while(i < j){
    let sum = i + j;

    if(sum === k) return true;

    if(sum < k){
      i = left.next();
    }else{
      j = right.next();
    }
  }
  return false;
}


// COMPLEXITY

// | Approach | Time | Space |
// | -------- | ---- | ----- |
// | Brute    | O(N) | O(N)  |
// | Iterator | O(N) | O(H)  |












