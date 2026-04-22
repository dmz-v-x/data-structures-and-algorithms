// WHAT IS A COMPLETE BINARY TREE?

// Definition:

// All levels are completely filled
// EXCEPT possibly the last

// AND

// Last level is filled from LEFT to RIGHT
// (no gaps)

// Valid
//         1
//        / \
//       2   3
//      / \  /
//     4  5 6

// Invalid
//         1
//        / \
//       2   3
//      /     \
//     4       6   

// Think:

// Level order traversal (BFS)

// KEY IDEA 
// Once we see a NULL,
// we should NOT see any more NON-NULL nodes

// WHY?

// Because:

// Null means "gap started"

// After that:

// All nodes must be null

// VISUAL UNDERSTANDING
// Valid
// [1, 2, 3, 4, 5, 6, null, null...]

// Invalid
// [1, 2, 3, null, 5...] 

// non-null after null


// Complexity
// Time: O(N)
// Space: O(N)

function isComplete(root){
  let queue = [root];
  let seenNull = false;

  while(queue.length){
    let node = queue.shift();

    if(node === null){
      seenNull = true;
    }else {
      if(seenNull) return false;

      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
}







