// CORE IDEA

// Inorder (LEFT → ROOT → RIGHT) = sorted (ascending)

// So:

// Reverse inorder (RIGHT → ROOT → LEFT) = descending

// KEY INSIGHT
// kth largest = kth node in reverse inorder traversal

// VISUALIZATION

// Tree:

//         5
//        / \
//       3   7
//      / \   \
//     2   4   8

// Reverse inorder:
// [8, 7, 5, 4, 3, 2]

// k = 2 → answer = 7

// Brute Force Approach: Takes Extra Space

// BRUTE
// Idea

// Do inorder
// Reverse array
// return k-1 index

// // Better Approach: Reverse Inorder

// IDEA

// Traverse:

// RIGHT → ROOT → LEFT

// Count nodes
// Stop at k


function kthLargest(node, k){
  let count = 0;
  let ans = null;

  function reverseInorder(node){
    if(!node || ans !== null) return;

    reverseInorder(node.right);

    count++;

    if(count === k){
      ans = node.val;
      return;
    }

    reverseInorder(node.left);
  }

  reverseInorder(root);
  return ans;
}

// Dry Run

// Traversal:

// 8 → 7 → 5 → 4 → 3 → 2

// Count:
// count=1 → 8  
// count=2 → 7 → STOP


// Optimal Approach: Morris Traversal in Reverse Direction


function kthLargest(root, k) {
  let curr = root;
  let count = 0;

  while (curr) {

    if (!curr.right) {
      count++;
      if (count === k) return curr.val;

      curr = curr.left;
    } 
    else {
      let pred = curr.right;

      while (pred.left && pred.left !== curr) {
        pred = pred.left;
      }

      if (!pred.left) {
        pred.left = curr;
        curr = curr.right;
      } 
      else {
        pred.left = null;

        count++;
        if (count === k) return curr.val;

        curr = curr.left;
      }
    }
  }
}


// | Approach        | Time     | Space |
// | --------------- | -------- | ----- |
// | Reverse inorder | O(H + k) | O(H)  |
// | Morris          | O(N)     | O(1)  |








