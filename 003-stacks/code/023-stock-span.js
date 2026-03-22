// The stock span problem is a financial problem where we have a series of daily price quotes for a stock and we need to calculate the span of stock price for all days.
// You are given an array arr[] representing daily stock prices, the stock span for the i-th day is the number of consecutive days up to day i (including day i itself) for which the price of the stock is less than or equal to the price on day i. Return the span of stock prices for each day in the given sequence.

// Examples:

// Input: arr[] = [100, 80, 90, 120]
// Output: [1, 1, 2, 4]
// Explanation: Traversing the given input span 100 is greater than equal to 100 and there are no more days behind it so the span is 1, 80 is greater than equal to 80 and smaller than 100 so the span is 1, 90 is greater than equal to 90 and 80 so the span is 2, 120 is greater than 90, 80 and 100 so the span is 4. So the output will be [1, 1, 2, 4].
  
// Input: arr[] = [10, 4, 5, 90, 120, 80]
// Output: [1, 1, 2, 4, 5, 1]
// Explanation: Traversing the given input span 10 is greater than equal to 10 and there are no more days behind it so the span is 1, 4 is greater than equal to 4 and smaller than 10 so the span is 1, 5 is greater than equal to 4 and 5 and smaller than 10 so the span is 2, and so on. Hence the output will be [1, 1, 2, 4, 5, 1].

// Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function stockSpan(prices){
  let n = prices.length;
  let res = new Array(n).fill(1);

  for(let i = 0; i<n; i++){
    let count = 1;
    for(let j = i - 1; j>=0; j--){
      if(prices[j] <= prices[i]){
        count++;
      }else{
        break;
      }
    }
    res[i] = count;
  }
  return res;
}


// Optimal Approaches
// Time Complexity: O(n)
// Space Complexity: O(n)
function stockSpan(prices){
  let n = prices.length;
  let res = new Array(n).fill(0);
  let stack = [];

  for(let i = 0; i<n; i++){
    while(stack.length && prices[stack[stack.length - 1]] <= prices[i]){
      pop();
    }
    if(stack.length === 0){
      res[i] = i+1;
    }else{
      res[i] = i - stack[stack.length - 1];
    }
    stack.push(i);
  }
  return res;
}




