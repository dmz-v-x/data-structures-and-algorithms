// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Brute Force

// Time Complexity: O(n * m)
// Space Complexity: O(1) // excluding output

function nextGreaterElement(nums1, nums2){
  let result = [];
  for(let i = 0; i<nums1.length; i++){
    let encounter = false;
    let greater = -1;
    for(let j = 0; j<nums2.length; j++){
      if(nums1[i] === nums2[j]){
        encounter = true;
      }else if(encounter && nums2[j] > nums1[i]){
        greater = nums2[j];
        break;
      }
    }
    result.push(greater);
  }
  return result;
}

// Optimal Approach: Monotonic Stack + Map
// Time Complexity: O(m + n)
// Space Complexity: O(n) 
function nextGreaterElement(nums1, nums2){
  let result = new Array(nums1.length).fill(-1);
  let stack = [];
  let map = new Map();

  for(let i = nums2.length - 1; i>=0; i--){
    while(stack.length && nums2[i] >= stack[stack.length - 1]){
      stack.pop();
    }
    let nge = stack.length ? stack[stack.length - 1] : -1;
    map.set(nums2[i], nge);
    stack.push(nums2[i]);
  }

  for(let i = 0; i<nums1.length; i++){
    if(map.has(nums1[i])){
      result[i] = map.get(nums1[i]);
    }
  }

  return result;
}

// Optimal Approach

function nextGreaterElement(nums1, nums2){
  const map = {};
  const stack = [];
  for(let i = nums2.length - 1; i>= 0; i--){
    while(stack.length && nums2[i] >= stack[stack.length - 1]){
      stack.pop();
    }

    if(stack.length === 0){
      map[nums[i]] = -1;
    }else{
      map[nums[i]] = stack[stack.length - 1];
    }

    stack.push(nums2[i]);
  }

  const result = [];
  for(let num of nums1){
    res.push(map[num]);
  }
  return result;
}
