// Problem: Maximum Swap
// Given:

// A non-negative integer (e.g. 2736)

// Goal:

// Make the largest possible number by doing at most ONE swap


var maximumSwap = function(num) {

    
    let temp = num.toString().split('');
    let n = temp.length;

    let arr = new Array(n).fill(-1);

    arr[n - 1] = n - 1;

    for(let i = n-2; i>= 0; i--){
      let rightMaxIdx = arr[i+1];
      let rightMaxElement = temp[rightMaxIdx];

      arr[i] = (temp[i] > rightMaxElement) ? i : rightMaxIdx;
    }

    for(let i = 0; i<n; i++){
      let maxRightIdx = arr[i];
      let maxRightElement = temp[maxRightIdx];

      if(temp[i] < maxRightElement){
        [temp[i], temp[maxRightIdx]] = [temp[maxRightIdx], temp[i]];
        return Number(temp.join(''));
      }
      
    }

    return num;
};



// Optimal: Greedy Approach

function maximumSwap(num) {
    let arr = num.toString().split('');

    // store last occurrence of each digit
    let last = new Array(10).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        last[arr[i]] = i;
    }

    // try to improve each position
    for (let i = 0; i < arr.length; i++) {

        // check digits bigger than current
        for (let d = 9; d > arr[i]; d--) {
            if (last[d] > i) {

                // swap
                [arr[i], arr[last[d]]] = [arr[last[d]], arr[i]];

                return Number(arr.join(''));
            }
        }
    }

    return num;
}
