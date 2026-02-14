// Brute Force

// Time Complexity: O(n)
// Space Complexity: O(n)

function isPalindrome(s){
  let cleaned = "";
  for(let char of s){
    if(/[a-z0-9]/i.test(char)){
      cleaned += char.toLowerCase();
    }
  }
  let reversed = "";
  for(let i = cleaned.length-1; i>=0; i--){
    reversed += cleaned[i];
  }

  return cleaned === revered;
}

// Better Approach

// Time complexity: O(n)
// Space Complexity: O(n)

function isPalindrome(s){
  const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

// Optimal Appraoch:

// Time Complexity: O(N)
// Space Complexity: O(1)

function isPalindrome(s){
  let start = 0;
  let end = s.length-1;

  while(start < end){
    while(start < end && !isAlphanumeric(s[start])){
      start++;
    }
    while(start < end && !isAlphanumeric(s[end])){
      end--;
    }
    if(s[start].toLowerCase() !== s[end].toLowerCase()){
      return false;
    }
    start++;
    end--;
  }

  return true;

}
function isAlphanumeric(char){
  return ( (char >= 'a' && char <= 'z') ||
           (char >= 'A' && char <= 'Z') ||
           (char >= '0' && char <= '9')
          );
}







