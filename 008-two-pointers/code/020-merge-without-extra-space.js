// We have:

// a[] size = n
// b[] size = m

// Both sorted.

// After merge:

// a[] → first n smallest elements
// b[] → last m largest elements

// Brute Force: Combine both arrays, sort, split back
// Time Complexity: O((m+n) log(n+m))
// Space Complexity: O(n + m)
function merge(a, b, n, m){
  let temp = [];

  for(let i = 0; i<n; i++) temp.push(a[i]);
  for(let i = 0; i<m; i++) temp.push(b[i]);

  temp.sort((x, y) => x - y);

  for(let i = 0; i<n; i++) a[i] = temp[i];
  for(let i = 0; i<m; i++) b[i] = temp[n+ i];
}


// Better Approach: Swap and Sort
// compare largest in a with smallest in b if order wrong swap
// Time Complexity: O(nlogn + mlogn)
// Space Complexity: O(1)

function merge(a, b, n, m){
  let i = n-1;
  let j = 0;
  while(i >= 0 && j < m && a[i] > b[j]){
    [a[i], b[j]] = [b[j], a[i]];
    i--;
    j++;
  }

  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
}
