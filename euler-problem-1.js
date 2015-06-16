// Project Euler - Problem 1
// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// create function to be able to handle finding sum up to any upper limit, not just 1000
function sumMultiples3and5(limit) {
  // variable to track sum
  var sum = 0;

  // brute force method:
  // iterate through all numbers starting from 3 up to the supplied limit and if it's a multiple of 3 or 5 then add it to the sum

  // better method:
  // iterate through 3 and all multiples of 3 up to the supplied limit and add them to the sum
  // iterate through 5 and all multiples of 5 up to the supplied limit, and add them to the sum as long as they are not a multiple of 3

  // iterate through 3 and all multiples of 3 up to the supplied limit
  for (var i = 3; i < limit; i = i + 3) {
    // add each value of i to sum
    sum += i;
  }

  // iterate through 5 and all multiples of 5 up to the supplied limit
  for (var i = 5; i < limit; i = i + 5) {
    // check that multiple of 5 is not also a multiple of 3
    if (i % 3 !== 0) {
      sum += i;
    }
  }

  // return the sum of the multiples up to the limit
  return sum;
}

console.log(sumMultiples3and5(10));

console.log(sumMultiples3and5(1000));


