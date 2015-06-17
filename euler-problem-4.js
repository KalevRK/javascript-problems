// Project Euler - Problem 4
// Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// function to find largest palindrome product
function findLargestPalindromeProduct() {
 
  // store value of largest palindrome found so far
  var largestPalindrome = 1;

  // for each value of term1 go through all of the values of term2 less than or equal to term1 in descending order until a palindrome product is found
  for (var i = 999; i > 1; i--) {
    for (var j = i; j > 1; j-- ) {
      // check whether product is a palindrome
      if (isPalindrome(i * j)) {
        // if so then check if it is larger than the largest palindrome product found so far
        if ((i * j) > largestPalindrome) {
          // if so then update the largest palindrome produce found so far
          largestPalindrome = i * j;
          // break out of inner for loop
          break;
        }
      }
    }
  }

  return largestPalindrome;
}

// function to test whether the given value is a palindrome or not
function isPalindrome(value) {
  // convert number to string and split into array of characters
  var digits = value.toString().split('');

  // working outside-in check that the pair of digits equidistant from the middle digit of the number are equal
  for (var i = 0; i <= digits.length/2; i++) {
    // if the pair of digits are not equal then the number is not a palindrome
    if (digits[i] !== digits[digits.length-1-i]) {
      return false;
    }
  }

  // if all pairs of digits are equal then the number is a palindrome
  return true;
}

// test
console.log(isPalindrome(12345));
console.log(isPalindrome(1001));
console.log(isPalindrome(91519));

console.log(findLargestPalindromeProduct());
