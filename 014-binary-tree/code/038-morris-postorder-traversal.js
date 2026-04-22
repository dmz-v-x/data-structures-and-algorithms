function morrisPostorder(root) {
  let curr = root;
  let result = [];

  while (curr) {

    // Case 1: no right child
    if (!curr.right) {
      result.push(curr.val);
      curr = curr.left;
    } 
    else {
      // find predecessor (leftmost of right subtree)
      let pred = curr.right;

      while (pred.left && pred.left !== curr) {
        pred = pred.left;
      }

      // thread not created
      if (!pred.left) {
        result.push(curr.val);   // visit
        pred.left = curr;        // create thread
        curr = curr.right;
      } 
      else {
        // thread exists
        pred.left = null;        // remove thread
        curr = curr.left;
      }
    }
  }

  // reverse to get postorder
  return result.reverse();
}
