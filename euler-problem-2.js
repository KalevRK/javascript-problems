// Project Euler - Problem 2
// Even Fibonacci

// Starting with the first two terms of the Fibonacci sequence being 1 and 2, find the sum of the even-valued terms for the terms in the Fibonacci sequence whose values do not exceed four million.

// create a function that will find the sum of the even-valued terms for the terms in the Fibonacci sequence whose values do not exceed a passed in upper limit
function evenValuedFibonacciSum(limit) {
  
  var sum = 0;
  var term1 = 1;
  var term2 = 2;
  var temp;

  // nested recursive helper function
  function sumNextTerms() {

    // check if both terms exceed the limit, if so then return
    if (term2 > limit) {
      return;
    } else {
 
      // check that term2 does not exceed limit
      if (term2 <= limit) {
        // check if term2 is even
        if (term2 % 2 === 0) {
          // add to sum
          sum += term2;
        }
      }

      // update the Fibonacci terms
      temp = term2;
      term2 = term1 + term2;
      term1 = temp;

      // make recursive function call
      sumNextTerms();

    }
  }

  // start recursive calls
  sumNextTerms();

  return sum;
}

// test
console.log(evenValuedFibonacciSum(10));
console.log(evenValuedFibonacciSum(100));
console.log(evenValuedFibonacciSum(4000000));


