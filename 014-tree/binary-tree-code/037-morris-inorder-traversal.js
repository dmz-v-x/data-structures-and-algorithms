function morrisInorder(root) {
  let curr = root;
  let result = [];

  while (curr) {

    // Case 1: no left child
    if (!curr.left) {
      result.push(curr.val);   // visit
      curr = curr.right;
    } 
    else {
      // find predecessor
      let pred = curr.left;

      while (pred.right && pred.right !== curr) {
        pred = pred.right;
      }

      // thread not created
      if (!pred.right) {
        pred.right = curr;     // create thread
        curr = curr.left;
      } 
      else {
        // thread exists
        pred.right = null;     // remove thread
        result.push(curr.val); // visit (IMPORTANT)
        curr = curr.right;
      }
    }
  }

  return result;
}
