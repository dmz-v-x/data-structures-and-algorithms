// Time Complexity: O(N)
// Space Used: O(N)
// Extra Space Used: O(1)

function leftRotateArray(arr){
  let temp = arr[0];
  for(let i = 1; i<arr.length; i++){
    arr[i-1] = arr[i];
  }
  arr[arr.length -1] = temp;
}
