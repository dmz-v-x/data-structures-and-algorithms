// Time Complexity: O(n/2) -> O(n)
// Space Complexity: O(1)

function isMaxHeap(n, arr){
  for(let i = Math.floor((n/2)-1)); i>=0; i--){
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;

    if(arr[i] < arr[leftChild] || arr[i] < arr[rightChild]){
      return false;
    }

    return true;
  }
}
