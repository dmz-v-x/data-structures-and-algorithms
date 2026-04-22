var flatten = function(root) {
  let curr = root;

  while (curr) {

    if (curr.left) {
      // Step 1: find predecessor
      let pred = curr.left;

      while (pred.right) {
        pred = pred.right;
      }

      // Step 2: connect right subtree
      pred.right = curr.right;

      // Step 3: move left subtree to right
      curr.right = curr.left;
      curr.left = null;
    }

    // Step 4: move forward
    curr = curr.right;
  }
};
