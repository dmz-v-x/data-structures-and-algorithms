// You are selling lemonade for ₹5 per cup.

// Customers come one by one and pay using:

// ₹5
// ₹10
// ₹20

// You must give correct change immediately.

// Initially, you have no money.

// Return true if you can give correct change to every customer.
// Otherwise, return false.

// You don’t want to just give change —
// you want to give change in a smart way so you don’t run out later.

// Greedy Thinking:

// We track:

// count of ₹5 bills → five
// count of ₹10 bills → ten

// Case 1: Customer pays ₹5
// No change needed
// Just collect it
// five++

// Case 2: Customer pays ₹10
// Need to give ₹5 as change
// if (five > 0) {
//   five--
//   ten++
// } else {
//   return false
// }

// Case 3: Customer pays ₹20
// Need to give ₹15 as change
// Prefer this:

// Give ₹10 + ₹5 (best choice)

// if (ten > 0 && five > 0) {
//   ten--
//   five--
// }

// Otherwise:

// Give three ₹5 bills

// else if (five >= 3) {
//   five -= 3
// }
// else {
//   return false
// }
// Why Prefer ₹10 + ₹5?

// Because:

// ₹5 bills are more flexible
// You’ll need them for future ₹10 customers

// This is the greedy strategy


function lemonadeChange(bills){
  let five = 0;
  let ten = 10;

  for(let bill of bills){
    if(bill === 5) {
      five++;
    }else if(bill === 10){
      if(five > 0){
        five--;
        ten++
      }else{
        return false;
      }
    }else{
      if(ten > 10 && five > 0){
        ten--;
        five--;
      }else if(five >= 3){
        five -= 3;
      }else{
        return false;
      }
    }
  }
  return true;
}



















