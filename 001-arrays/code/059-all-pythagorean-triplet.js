// Find all Pythagorean Triplet

// Example:
// nums = [3, 1, 4, 6, 5]

// Output:
// [[3, 4, 5]]



function allPythagoreanTriplet(nums){
  let n = nums.length;
  let result = [];
  let seen = new Set(); // avoid duplicates

  for(let i = 0; i<n; i++){
    for(let j = i+1; j<n; j++){
      for(let k = j+1; k<n; k++){
        let a = nums[i];
        let b = nums[j];
        let c = nums[k];

        if(a*a + b*b === c*c ||
           a*a + c*c === b*b ||
           b*b + c**c === a*a){
            let triplet = [a, b, c].sort((x, y) => x - y);
            let key = triplet.join(',');

            if(!seen.has(key)){
              seen.add(key);
              result.push(triplet);
            }
           }
      }
    }
  }
  return result;
}


// Better Approach: Square numbers and reduce it to 2 Sum

// Time Complexity: O(n^2)

function allPythagoreanTriplet(nums){
  let n = nums.length;
  let result = [];
  let seenTriplets = new Set();

  let squares = nums.map(x => x * x);

  for(let i = 0; i<n; i++){
    let seen = new Set();

    for(let j = 0; j<n; j++){
      if(i === j) continue;

      let needed = squares[i] - squares[j];

      if(seen.has(needed)){
        let a = Math.sqrt(needed);
        let b = nums[j];
        let c = nums[i];

        let triplet = [a, b, c].sort((x, y) => x - y);
        let key = triplet.join(',');

        if(!seenTriplets.has(triplet)){
          seenTriplets.add(key);
          result.push(triplet);
        }
      }

      seen.add(squares[j]);
    }
  }
  return result;
}


// Optimal Approach

// Time Complexity: O(n^2)
// Space Complexity: O(n)

function allPythagoreanTriplet(nums) {
    let n = nums.length;
    let result = [];

    // pair: [square, original]
    let arr = nums.map(x => [x * x, x]);

    // sort by square
    arr.sort((a, b) => a[0] - b[0]);

    for (let i = n - 1; i >= 2; i--) {

        let left = 0;
        let right = i - 1;

        while (left < right) {

            let sum = arr[left][0] + arr[right][0];

            if (sum === arr[i][0]) {

                let triplet = [
                    arr[left][1],
                    arr[right][1],
                    arr[i][1]
                ].sort((a, b) => a - b);

                result.push(triplet);

                left++;
                right--;
            }
            else if (sum < arr[i][0]) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
};



// Optimal Appraoch with duplicate safe

function allPythagoreanTriplet(nums){
    let n = nums.length;
    let result = [];

    let arr = nums.map(x => [x * x, x]);

    arr.sort((a, b) => a[0] - b[0]);

    for (let i = n - 1; i >= 2; i--) {

        // skip duplicate c
        if (i < n - 1 && arr[i][0] === arr[i + 1][0]) continue;

        let left = 0;
        let right = i - 1;

        while (left < right) {

            let sum = arr[left][0] + arr[right][0];

            if (sum === arr[i][0]) {

                result.push([
                    arr[left][1],
                    arr[right][1],
                    arr[i][1]
                ].sort((a, b) => a - b));

                // skip duplicates (left)
                while (left < right && arr[left][0] === arr[left + 1][0]) left++;

                // skip duplicates (right)
                while (left < right && arr[right][0] === arr[right - 1][0]) right--;

                left++;
                right--;
            }
            else if (sum < arr[i][0]) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
};
